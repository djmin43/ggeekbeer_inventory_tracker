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
                <label>
                    <input name="inventory_amount" type="number" value={editInventory.inventory_amount} onChange={handleChange}></input>
                </label>
            </form>
        </div>
    )
}

export default InventoryEdit
