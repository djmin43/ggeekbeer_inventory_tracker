import React, { useState, useContext } from 'react'
import { TodayContext, InventoryContext } from '../../DataContext'
import InventorySelcted from './InventorySelected'
import InventoryEvents from './InventoryEvents'
import InventorySelected from './InventorySelected'

const InventoryDetail = () => {
    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)

    const [selectIndex, setSelectIndex] = useState<number>(0)

    const handleChange = (e: any) => {
        e.preventDefault()
        setSelectIndex(e.target.value)
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
                <InventorySelected selectIndex={selectIndex}/>
                <InventoryEvents selectIndex={selectIndex} />
            </div>
        </div>
    )
}

export default InventoryDetail
