import React, { useContext } from 'react'
import { InventoryContext } from '../../contextAPI/DataContext'


const InventoryTable = () => {

    const inventoryInfo = useContext(InventoryContext)

    return (
        <div>
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
    )
}

export default InventoryTable
