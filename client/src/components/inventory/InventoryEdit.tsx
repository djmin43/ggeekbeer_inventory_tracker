import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { InventoryContext } from '../../DataContext'

const InventoryEdit = ({selectIndex, setEditing}: any) => {

    const inventoryInfo = useContext(InventoryContext)

    const [editInventory, setEditInventory] = useState<any>({})


    const handleChange = (e:any) => {
        e.preventDefault()
        setEditInventory({...editInventory, 
        [e.target.name]: e.target.value})
    }

    useEffect(() => {
        setEditInventory(inventoryInfo[selectIndex])
    }, [selectIndex])

    return (
        <div>
            <form>
                <label>재고이름:
                    <input name="inventory_name" type="text" value={editInventory.inventory_name} onChange={handleChange}></input>
                </label>
                <label>양:
                    <input name="inventory_amount" type="number" value={editInventory.inventory_amount} onChange={handleChange}></input>
                </label>
                <label>타입:
                    <input name="inventory_type" type="text" value={editInventory.inventory_type} onChange={handleChange}></input>
                </label>
                <label>유통기한
                    <input name="expiration_date" type="date" value={editInventory.expiration_date} onChange={handleChange}></input>
                </label>
                <label>설명
                    <input name="inventory_desc" type="text" value={editInventory.inventory_desc} onChange={handleChange}></input>
                </label>
                <label>입고날짜
                    <input name="import_date" type="date" value={editInventory.import_date} onChange={handleChange}></input>
                </label>
            </form>
        </div>
    )
}

export default InventoryEdit
