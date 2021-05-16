import React, { useState, useContext } from 'react'
import { TodayContext } from '../../DataContext'

const InventoryDetail = ({inventoryInfo}: any) => {

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
                {/* TABLE #1 - Selected Inventory */}
                <table>
                    <thead>
                        <tr>
                            <th>재료이름: </th>
                            <th>재료양: </th>
                            <th>유통기한: </th>
                            <th>재료설명: </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{inventory.inventory_name}</td>
                            <td>{inventory.inventory_amount}</td>
                            <td>{inventory.expiration_date}</td>
                            <td>{inventory.inventory_desc}</td>
                        </tr>
                    </tbody>
                </table>
                
                {/* TABLE#2 - events */}
                <table>
                    <thead>
                        <tr>
                            <th>이벤트타입</th>
                            <th>양</th>
                            <th>날짜</th>
                            <th>비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.events.map((item:any, index:number) => 
                        <tr key={index}>
                            <td>{item.event_type}</td>
                            <td>{item.event_amount}</td>
                            <td>{item.event_date}</td>
                            <td>{item.event_desc}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
    
            </div>
        </div>
    )
}

export default InventoryDetail
