import React, { useContext, useEffect } from 'react'
import { GetInventoryContext, InventoryContext } from '../../contextAPI/DataContext'
import '../../styling/Table.css'

const InventoryTable = () => {

    const getInventory = useContext(GetInventoryContext)
    const inventoryInfo = useContext(InventoryContext)

    useEffect(() => {
        getInventory()
        console.log('getinventory')
    }, [getInventory])

    return (
        <div>
            <div className="tableContainer">
            <h1>재료테이블</h1>
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
                {inventoryInfo.map((item:any, index: number) => 
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
        </div>
    )
}

export default InventoryTable
