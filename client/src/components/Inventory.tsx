import React, { useState, useEffect } from 'react';
import ControlInventory from './ControlInventory';
import axios from 'axios';

interface Inventory {
    id: number;
    item_name: string;
    item_type: string;
    item_amount: number;
    expiration_date: string;
    item_description: string;
    created_at: string;
    updated_at: string;
}

const Inventory = ({inventoryInfo, brewInfo, purchaseInfo}: any) => {

    const [tableData, setTableData] = useState <Inventory[]>([]);


    const getInventoryAll = () => {
        console.log('ahhh')
        setTableData(inventoryInfo);
    };  

    const getInventoryAvailable = () => {
            const inventoryAvail = tableData.filter((item:Inventory) => item.item_amount > 0)
            setTableData(inventoryAvail);
    };

    useEffect( () => {
        setTableData(inventoryInfo)
    }, [])

    return (
        <div>

            <h1>Inventory Table</h1>
            <ControlInventory inventoryInfo={inventoryInfo} brewInfo={brewInfo} purchaseInfo={purchaseInfo} />
            <button onClick={getInventoryAll}>
                All Inventory
            </button>
            <button onClick={getInventoryAvailable}>
                Available Inventory
            </button>
            <table>
                {/* Table Header */}
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>amount</th>
                    <th>expiration date</th>
                    <th>desription</th>
                </tr>

                {/* Table Information */}
                {tableData.map((item:Inventory) => 
                <tr >
                    <td >{item.id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.item_type}</td>
                    <td>{item.item_amount}</td>
                    <td>{item.expiration_date}</td>
                    <td>{item.item_description}</td>
                </tr>
                )}

            </table>
        </div>
    )
}

export default Inventory

