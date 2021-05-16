import React, {useState, useContext} from 'react'
import { InventoryContext } from '../../DataContext'

const InventorySelected = ({selectIndex}:any) => {

    const inventoryInfo = useContext(InventoryContext)

    return (
        <div>
 
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
                        <td>{inventoryInfo[selectIndex].inventory_name}</td>
                        <td>{inventoryInfo[selectIndex].inventory_amount}</td>
                        <td>{inventoryInfo[selectIndex].expiration_date}</td>
                        <td>{inventoryInfo[selectIndex].inventory_desc}</td>
                    </tr>
                </tbody>
            </table> 
        
        </div>
    )
}

export default InventorySelected
