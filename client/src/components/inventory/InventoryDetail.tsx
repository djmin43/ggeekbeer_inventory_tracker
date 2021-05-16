import React, { useState, useContext } from 'react'
import { TodayContext, InventoryContext } from '../../DataContext'
import InventorySelcted from './InventorySelected'
import InventoryEvents from './InventoryEvents'
import InventorySelected from './InventorySelected'

const InventoryDetail = () => {
    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)

    const defaultInventory: any = {
        inventory_name: '',
        inventory_type: '',
        inventory_amount: '',
        expiration_date: today,
        inventory_desc: '',
        events:[]
    }

    const [inventory, setInventory] = useState<any>(defaultInventory)

    const handleChange = async (e: any) => {
        e.preventDefault()
        await setInventory(inventoryInfo[e.target.value])
    }

    return (
        <div>
            <h1>재료정보</h1>
            <select onChange={handleChange}>
                <option value="0">원하시는 재고를 고르세요.</option>
                {inventoryInfo.map((item:any, index: number) => 
                    <option key={index} value={index}>{item.inventory_name}</option>
                )}
            </select>


            {/* TABLES for Selected Inventory */}
            <div>
                <InventorySelected inventory={inventory} />
                <InventoryEvents inventory={inventory} />
            </div>
        </div>
    )
}

export default InventoryDetail
