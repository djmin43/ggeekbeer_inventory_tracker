import React, { useState, useEffect, useContext } from 'react';
import { InventoryContext, GetInventoryContext, TodayContext, } from '../DataContext';



// {inventoryInfo, getInventoryInfo,
const Inventory = () => {
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)
    const today = useContext(TodayContext)

    const [tableData, setTableData] = useState <any[]>([]);

    useEffect( () => {
        getInventoryInfo()
        setTableData(inventoryInfo)
        console.log(inventoryInfo)
    }, [])

    return (
        <div>
            <h1>Inventory Table</h1>

            <table>
                {/* Table Header */}
                <thead>
                <tr>
                    <th>이름</th>
                    <th>재고</th>
                    <th>타입</th>
                    <th>유통기한</th>
                    <th>비고</th>
                </tr>
                </thead>

                {/* Table Information */}
                <tbody>
                {tableData.map((item:any, index: number) => 
                <tr key={index} >
                    <td >{item.inventory_name}</td>
                    <td >{item.inventory_amount}</td>
                    <td >{item.inventory_type}</td>
                    <td >{item.expiration_date}</td>
                    <td >{item.inventory_desc}</td>

                </tr>
                )}
                </tbody>

            </table>
        </div>
    )
}

export default Inventory

