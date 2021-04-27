import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PurchaseHistory = () => {
   
    const [purchaseInfo, setPurchaseInfo] = useState([])

    const getPurchaseInfo = async () => {
        const purchaseInfo = await axios.get('info/purchase');
        await setPurchaseInfo(purchaseInfo.data)
        console.log(purchaseInfo)
    };

    useEffect(() =>
    {
        getPurchaseInfo()
    }, []);
    
    return (
        <div>
            Purchase History
        <table>
            {/* Table Header */}
            <tr>
                <th>id</th>
                <th>purchase date</th>
                <th>purchase description</th>
                <th>purchase amount</th>
                <th>vendor</th>
                <th>expiration date</th>
            </tr>

            {/* Table Information */}
            {purchaseInfo.map((item:any) => 
            <tr >
                <td >{item.id}</td>
                <td>{item.purchase_date}</td>
                <td>{item.purchase_description}</td>
                <td>{item.purchase_amount}</td>
                <td>{item.vendor}</td>
                <td>{item.expiration_date}</td>
            </tr>
            )}

        </table>
    </div>
    )
}

export default PurchaseHistory
