import React, { useState, useContext } from 'react'
import { TodayContext, InventoryContext } from '../../DataContext'
import InventorySelcted from './InventorySelected'
import InventoryEvents from './InventoryEvents'
import InventorySelected from './InventorySelected'
import InventoryEdit from './InventoryEdit'


const InventoryDetail = () => {
    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)

    const [selectIndex, setSelectIndex] = useState<number>(0)
    const [editing, setEditing] = useState<boolean>(false)

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
                {editing === false ? <>
                <InventorySelected selectIndex={selectIndex}/>
                <InventoryEvents selectIndex={selectIndex} /> </> :
                <InventoryEdit selectIndex={selectIndex} setEditing={setEditing}/>

                }

                <button onClick={() => setEditing(!editing)}>Edit</button>

            </div>
        </div>
    )
}

export default InventoryDetail
