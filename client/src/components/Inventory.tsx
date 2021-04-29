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

const Inventory = () => {

    const [tableData, setTableData] = useState <Inventory[]>([]);
    const [inventoryData, setInventoryData] = useState<Inventory[]>([]);

    const getInventoryData = async () => {
        try {
            const inventoryAll = await axios.get('/info/inventory');
            await setInventoryData(inventoryAll.data);
            await setTableData(inventoryData)
            console.log(inventoryAll)
        } catch(error) {
            console.log(error)
        }
    };

    const getInventoryAll = () => {
        // I know it looks redundant, but I am sure this will make the code much more readable for the cost of more lines of code and function.
        setTableData(inventoryData);
    };  

    const getInventoryAvailable = () => {
            const inventoryAvail = tableData.filter((item:Inventory) => item.item_amount > 0)
            setTableData(inventoryAvail);
    };

    useEffect(() => {
        getInventoryData();
    }, [])

    return (
        <div>

            <h1>Inventory Table</h1>
            <ControlInventory inventory={inventoryData} />
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

