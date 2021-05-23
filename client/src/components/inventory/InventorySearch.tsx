import React, { useState, useContext } from 'react'
import moment from 'moment'
import { InventoryContext } from '../../contextAPI/DataContext';

const InventorySearch = ({setInventory}:any) => {

    const inventoryInfo = useContext(InventoryContext)

    const month: string = moment().format('YYYY-MM');
    const [targetMonth, setTargetMonth] = useState<string>(month)

    // Change handlers
    const handleMonth = (e:any) => {
        e.preventDefault()
        setTargetMonth(e.target.value)
        console.log(targetMonth)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        const targetInventory = inventoryInfo.filter((item:any) => item.expiration_date.includes(targetMonth))
        setInventory(targetInventory)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>expiration date by month
                    <input type="month" value={targetMonth} onChange={handleMonth}></input>
                </label>

                <button>Search</button>
            </form>
        </div>
    )
}

export default InventorySearch
