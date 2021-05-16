import React from 'react'

const InventorySelected = ({inventory}: any) => {
    return (
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
        </div>
    )
}

export default InventorySelected
