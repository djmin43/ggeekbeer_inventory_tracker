import React, { useState, useEffect, useContext } from 'react';
import { InventoryContext, GetInventoryContext, BrewContext, TodayContext, GetBrewContext } from '../DataContext';


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

// {inventoryInfo, getInventoryInfo,
const Inventory = () => {
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)
    const brewInfo = useContext(BrewContext)
    const getBrewInfo = useContext(GetBrewContext)
    const today = useContext(TodayContext)

    const [tableData, setTableData] = useState <Inventory[]>([]);
    const getInventoryAll = () => {
        setTableData(inventoryInfo);
    };  

    const getInventoryAvailable = () => {
            const inventoryAvail = tableData.filter((item:Inventory) => item.item_amount > 0)
            setTableData(inventoryAvail);
    };

    useEffect( () => {
        setTableData(inventoryInfo)
        getInventoryInfo()
        getBrewInfo()
        console.log(brewInfo)
    }, [])

    return (
        <div>
            <h1>Inventory Table</h1>
            <button onClick={getInventoryAll}>
                All Inventory
            </button>
            <button onClick={getInventoryAvailable}>
                Available Inventory
            </button>
            <table>
                {/* Table Header */}
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>type</th>
                    <th>amount</th>
                    <th>expiration date</th>
                    <th>desription</th>
                </tr>
                </thead>


                {/* Table Information */}
                <tbody>
                {tableData.map((item:Inventory) => 
                <tr key={item.id} >
                    <td >{item.id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.item_type}</td>
                    <td>{item.item_amount}</td>
                    <td>{item.expiration_date}</td>
                    <td>{item.item_description}</td>
                </tr>
                )}
                </tbody>

            </table>
        </div>
    )
}

export default Inventory

