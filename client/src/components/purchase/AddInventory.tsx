import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddInventory = ({today, inventoryInfo}: any) => {

// This is not a new purchase. This happens when the purchase is repeated. User chooses the existing purchase order, then create a patch request.

const [newPurchase, setNewPurchase] = useState({
    purchase_date: today,
    purchase_description: '',
    purchase_amount: 0,
    expiration_date: today,
    vendor: ''
});

const [updatedInventory, setUpdatedInventory] = useState(0)

const [selectedInventory, setSelectedInventory] = useState({id: 0, item_amount: 0})

const handleChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value)
    setNewPurchase({...newPurchase, 
    [e.target.name]: e.target.value })
};

const calculateInventory = () => {
    const calculation = +newPurchase.purchase_amount + +selectedInventory.item_amount
    setUpdatedInventory(calculation)
};

useEffect(()=> {
    calculateInventory()
}, [newPurchase.purchase_amount, selectedInventory])

    return (
        <div>
            <h1>추가구매</h1>
            <form>

                재료추가:
                <select onChange={(e: any) => setSelectedInventory(inventoryInfo[e.target.value])}>
                    <option>Choose an option</option>
                    {inventoryInfo.map((item: any, index: number) => <option key={item.id} value={index}> {item.item_name} {item.item_amount} {item.expiration_date}</option>)}
                </select>
                <label>구매요약:
                    <input name="purchase_description" value={newPurchase.purchase_description} type="text" onChange={handleChange}></input>
                </label>
                <label>양:
                    <input name="purchase_amount" value={newPurchase.purchase_amount} type="number" onChange={handleChange}></input>
                </label>
                <span>추가 후 재고양: {updatedInventory}</span>
                <label>구매처:
                    <input name="vendor" value={newPurchase.vendor} type="text" onChange={handleChange}></input>
                </label>
                <label>구매일시:
                    <input name="purchase_date" value={newPurchase.purchase_date} type="date" onChange={handleChange}></input>
                </label>
                <label>유통기한:
                    <input name="expiration_date" value={newPurchase.expiration_date} type="date" onChange={handleChange}></input>
                </label>

            </form>
        </div>
    )
}

export default AddInventory
