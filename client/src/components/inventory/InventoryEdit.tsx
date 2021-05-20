import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { GetInventoryContext, InventoryContext, TodayContext } from '../../contextAPI/DataContext'
import '../../styling/InventoryEdit.css'
import { useHistory } from 'react-router-dom'


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

const InventoryEdit = ({inventorySelected}: any) => {

    const [newEditInventory, setNewEditInventory] = useState<Inventory>(inventorySelected)

    const editInventory = (e: any) => {
        e.preventDefault()
        // setNewEditInventory({...newEditInventory,
        //     [e.target.name]: e.target.value})
    }

    console.log(inventorySelected)
    return (
        <div>
            <h1>내용변경!</h1>
            <div className="editContainer">
                <form>
                    <label>
                        <input name="inventory_name"onChange={editInventory}></input>
                    </label>
                    <button>내용변경확인</button>
                </form>
            </div>

        </div>
    )
}

export default InventoryEdit
