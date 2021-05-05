import React, { useEffect } from 'react';

const Purchase = ({purchaseInfo, getPurchaseInfo}:any) => {
       
    useEffect(()=> {
        getPurchaseInfo()
    }, [])

    return (
        <div>
            Purchase History
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
