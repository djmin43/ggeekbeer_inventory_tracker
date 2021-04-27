import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {

    const [inventoryInfo, setInventoryInfo] = useState([])

    const getInventoryInfo = async () => {
        const inventoryInfo = await axios.get('info/inventory');
        await setInventoryInfo(inventoryInfo.data)
        console.log(inventoryInfo)
    };
    useEffect(() =>
    {
        getInventoryInfo()
    }, []);

    return (
        <div>
            Inventory Table
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
                {inventoryInfo.map((item:any) => 
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

