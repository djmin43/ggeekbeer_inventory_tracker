import React, { useState, useContext } from 'react'
import { InventoryContext, GetInventoryContext } from '../../contextAPI/DataContext'
import InventoryEvents from './InventoryEvents'
import InventorySelected from './InventorySelected'
import InventoryEdit from './InventoryEdit'
import '../../styling/Form.css'

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

interface Event {
    id: number;
    event_type: string;
    event_amount: number;
    event_date: string;
    event_desc: string;
    inventory_id: any;
    user_id: any;
    inventory: {};
    user: {}
}

const InventoryDetail = () => {
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)

    const [selectIndex, setSelectIndex] = useState<number>(0)
    const [editing, setEditing] = useState<boolean>(false)

    const handleChange = (e: any) => {
        e.preventDefault()
        setSelectIndex(e.target.value)
    }

    
    getInventoryInfo()

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
                <button onClick={() => setEditing(!editing)}>재료정보 변경 창 열기</button>
                <InventoryEvents selectIndex={selectIndex} /> </> :
                <>
                <InventoryEdit />
                <InventoryEvents selectIndex={selectIndex} />
                <button onClick={() => setEditing(!editing)}>재료정보 변경 창 열기</button>
                </>
                }
            </div>
        </div>
    )
}

export default InventoryDetail
