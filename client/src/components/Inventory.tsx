import React, { useState, useEffect, useContext } from 'react';
import { InventoryContext, GetInventoryContext, TodayContext, } from '../DataContext';



// {inventoryInfo, getInventoryInfo,
const Inventory = () => {
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)
    const today = useContext(TodayContext)

    const [tableData, setTableData] = useState <any[]>([]);
    const getInventoryAll = () => {
        setTableData(inventoryInfo);
    };  

    const getInventoryAvailable = () => {
            const inventoryAvail = tableData.filter((item:any) => item.item_amount > 0)
            setTableData(inventoryAvail);
    };

    useEffect( () => {
        setTableData(inventoryInfo)
        getInventoryInfo()
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

                </tr>
                </thead>


                {/* Table Information */}
                <tbody>
                {tableData.map((item:any) => 
                <tr key={item.id} >
                    <td >{item.id}</td>

                </tr>
                )}
                </tbody>

            </table>
        </div>
    )
}

export default Inventory

