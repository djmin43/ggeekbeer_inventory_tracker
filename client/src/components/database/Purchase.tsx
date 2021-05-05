import React, { useEffect } from 'react';
import NewPurchase from '../purchase/NewPurchase'

const Purchase = ({purchaseInfo, getPurchaseInfo, today, inventoryInfo}:any) => {
       
    useEffect(()=> {
        getPurchaseInfo()
    }, [])

    return (
        <div>

            <NewPurchase inventoryInfo={inventoryInfo} today={today}/>
            <h1>Purchase History</h1>
        <table>
            {/* Table Header */}
            <thead>
            <tr>
                <th>id</th>
                <th>purchase date</th>
                <th>purchase description</th>
                <th>purchase amount</th>
                <th>vendor</th>
                <th>expiration date</th>
            </tr>
            </thead>

            {/* Table Information */}
            <tbody>
            {purchaseInfo.map((item:any) => 
            <tr key={item.id}>
                <td >{item.id}</td>
                <td>{item.purchase_date}</td>
                <td>{item.purchase_description}</td>
                <td>{item.purchase_amount}</td>
                <td>{item.vendor}</td>
                <td>{item.expiration_date}</td>
            </tr>
            )}
            </tbody>

        </table>
    </div>
    )
}

export default Purchase
