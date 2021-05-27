import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import '../../styling/InventoryEdit.css'
import { useHistory } from 'react-router-dom'
import { TodayContext } from '../../contextAPI/DataContext'


interface Inventory {
    id: number;
    inventory_name: string;
    inventory_type: string;
    inventory_amount: number;
    expiration_date: string;
    import_date: string;
    inventory_desc: string;
    events: any[]
}

const InventoryEdit = ({inventorySelect}: any) => {

    let history = useHistory()
    const today = useContext(TodayContext)

    const [newEditInventory, setNewEditInventory] = useState<Inventory>(inventorySelect)
    const [eventDesc, setEventDesc] = useState<string>('')
    
    const editInventory = (e: any) => {
        e.preventDefault()
        setNewEditInventory({...newEditInventory,
            [e.target.name]: e.target.value})
    }

    // API Call
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
        await axios.patch('backend/inventory/edit', newEditInventory)
        await axios.post('backend/event/edit', {
            event: {event_desc: eventDesc, today: today}, 
            prev: inventorySelect, 
            new: newEditInventory
        })
        await history.push('/')
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setNewEditInventory(inventorySelect)
        console.log(inventorySelect)
    }, [inventorySelect])

    return (
        <div>
            <div className="editContainer">
                <div className="table">
                <div className="descHeader header">
                    <div className="headerCell">
                        <h4>재고내용변경</h4>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>재고이름:
                        <input name="inventory_name" type="text" onChange={editInventory} value={newEditInventory.inventory_name}></input>
                    </label>
                    <label>재고타입:
                        <input name="inventory_type" type="text" onChange={editInventory} value={newEditInventory.inventory_type}></input>
                    </label>
                    <label>재고양
                        <input name="inventory_amount" type="number" onChange={editInventory} value={newEditInventory.inventory_amount}></input>
                    </label>
                    <label>유통기한
                        <input name="expiration_date" type="date" onChange={editInventory} value={newEditInventory.expiration_date}></input>
                    </label>
                    <label>입고날짜
                        <input name="import_date" type="date" onChange={editInventory} value={newEditInventory.import_date}></input>
                    </label>
                    <label>재고설명
                        <input name="inventory_desc" type="text" onChange={editInventory} value={newEditInventory.inventory_desc}></input>
                    </label>
                    <label>내용변경이유
                        <input name="event_desc" type="text" onChange={(e) => setEventDesc(e.target.value)} value={eventDesc}></input>
                    </label>
                    <button>내용변경확정</button>
                </form>
            </div>
        </div>


        </div>
    )
}

export default InventoryEdit
