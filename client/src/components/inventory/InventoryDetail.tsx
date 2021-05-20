import React, { useState, useContext, useEffect } from 'react'
import { InventoryContext, GetInventoryContext, TodayContext } from '../../contextAPI/DataContext'
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

// interface Event {
//     id: number;
//     event_type: string;
//     event_amount: number;
//     event_date: string;
//     event_desc: string;
//     inventory_id: any;
//     user_id: any;
//     inventory: {};
//     user: {}
// }

const InventoryDetail = () => {
    const inventoryInfo = useContext(InventoryContext)
    const getInventory = useContext(GetInventoryContext)
    const today = useContext(TodayContext)

    const [editing, setEditing] = useState<boolean>(false)

    const [inventorySelected, setInventorySelected] = useState<Inventory>({
        id: 0,
        inventory_name: '',
        inventory_type: '',
        inventory_amount: 0,
        expiration_date: today,
        import_date: today,
        inventory_desc: '',
        events: [{
            event_type: '',
            event_desc: '',
            event_date: ''
        }]})


    const handleChange = (e: any) => {
        e.preventDefault()
        setInventorySelected(inventoryInfo[e.target.value])
    }

    useEffect(() => {
        getInventory()
        console.log('getinventory')
    }, [getInventory])

    return (
        <div>
            <div className="selectInventory">
                <h2>재료정보</h2>
                재료선택:
                <select onChange={handleChange}>
                    <option value="none">원하시는 재고를 고르세요.</option>
                    {inventoryInfo.map((item:any, index: number) => 
                        <option key={index} value={index}>{item.inventory_name}</option>
                    )}
                </select>

            </div>
            {/* TABLES for Selected Inventory */}
            <div className="selectedTables">
                {editing === false ? <>
                <InventorySelected inventorySelected={inventorySelected}/>
                <button onClick={() => setEditing(!editing)}>재료정보 변경 창 열기</button>
                <InventoryEvents inventorySelected={inventorySelected}/> </> :
                <>
                <InventoryEdit />
                <InventoryEvents inventorySelected={inventorySelected}/>
                <button onClick={() => setEditing(!editing)}>재료정보 변경 창 열기</button>
                </>
                }
            </div>
        </div>
    )
}

export default InventoryDetail
