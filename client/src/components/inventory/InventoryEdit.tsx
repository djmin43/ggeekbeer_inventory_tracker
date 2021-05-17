import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { InventoryContext, TodayContext } from '../../DataContext'

const InventoryEdit = ({selectIndex}: any) => {

    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)
    const [editInventory, setEditInventory] = useState<any>({})

    const handleChange = (e:any) => {
        e.preventDefault()
        setEditInventory({...editInventory, 
        [e.target.name]: e.target.value})
    }

    // API CALL
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const postEvent = await axios.post('/event/edit', {prev: inventoryInfo[selectIndex], edit: editInventory})
            const patchInventory = await axios.patch('/inventory/edit', editInventory)
            console.log(patchInventory)
            console.log(postEvent)
        } catch(error) {
            console.log(error)
        }
    }

    // Event Amount Calculation
    const calEventAmount = () => {
        const eventAmount =  +editInventory.inventory_amount - +inventoryInfo[selectIndex].inventory_amount
        setEditInventory({...editInventory, event_amount: +eventAmount})
    }

    // Setting up state data for editing.
    useEffect(() => {
        const {id, inventory_name, inventory_type, inventory_amount, expiration_date, import_date, inventory_desc} = inventoryInfo[selectIndex]
        setEditInventory({...editInventory,
            inventory_id: id,
            inventory_name: inventory_name,
            inventory_type: inventory_type,
            inventory_amount: inventory_amount,
            expiration_date: expiration_date,
            import_date: import_date,
            inventory_desc: inventory_desc,
            event_type: '내용수정',
            event_date: today,
            user_id: 1,
            })
    }, [selectIndex])

    useEffect(() => {
        calEventAmount()
    }, [editInventory.inventory_amount])

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>수정이유:
                    <input name="event_desc" type="textarea" value={editInventory.event_desc} onChange={handleChange}></input>
                </label>
                <label>재고이름:
                    <input name="inventory_name" type="text" value={editInventory.inventory_name} onChange={handleChange}></input>
                </label>
                <label>양:
                    <input name="inventory_amount" type="number" value={editInventory.inventory_amount} onChange={handleChange}></input>
                </label>
                <label>타입:
                    <input name="inventory_type" type="text" value={editInventory.inventory_type} onChange={handleChange}></input>
                </label>
                <label>유통기한:
                    <input name="expiration_date" type="date" value={editInventory.expiration_date} onChange={handleChange}></input>
                </label>
                <label>설명:
                    <input name="inventory_desc" type="textarea" value={editInventory.inventory_desc} onChange={handleChange}></input>
                </label>
                <label>입고날짜:
                    <input name="import_date" type="date" value={editInventory.import_date} onChange={handleChange}></input>
                </label>
                <button>확인</button>
            </form>
        </div>
    )
}

export default InventoryEdit
