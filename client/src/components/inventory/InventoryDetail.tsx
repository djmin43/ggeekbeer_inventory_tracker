import React, { useState, useContext } from 'react'
import { TodayContext, InventoryContext } from '../../contextAPI/DataContext'
import InventoryEvents from './InventoryEvents'
import InventorySelected from './InventorySelected'
import InventoryEdit from './InventoryEdit'
import '../../styling/InventoryForm.css'

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
            <div className="selectInventory">
                <h2>재료정보</h2>
                재료선택:
                <select onChange={handleChange}>
                    <option value="0">원하시는 재고를 고르세요.</option>
                    {inventoryInfo.map((item:any, index: number) => 
                        <option key={index} value={index}>{item.inventory_name}</option>
                    )}
                </select>

            </div>



            {/* TABLES for Selected Inventory */}
            <div className="selectedTables">
                {editing === false ? <>
                <InventorySelected selectIndex={selectIndex}/>
                <button onClick={() => setEditing(!editing)}>재료정보 수정하기</button>
                <InventoryEvents selectIndex={selectIndex} /> </> :
                <>
                <InventoryEdit selectIndex={selectIndex} setEditing={setEditing}/>
                <InventoryEvents selectIndex={selectIndex} />
                <button onClick={() => setEditing(!editing)}>재료정보 수정하기</button>
                </>
                }
            </div>
        </div>
    )
}

export default InventoryDetail
