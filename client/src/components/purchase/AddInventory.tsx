import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { GetInventoryContext, InventoryContext, TodayContext } from '../../DataContext';

const AddInventory = () => {

    // UseContext
    const today = useContext(TodayContext)
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)

    // UseState
    const [updatedInventory, setUpdatedInventory] = useState(0);
    const [selectedInventory, setSelectedInventory] = useState({id: 0, item_amount: 0});
    const [newPurchase, setNewPurchase] = useState({
        purchase_date: today,
        purchase_description: '',
        purchase_amount: 0,
        expiration_date: today,
        vendor: ''
    });

    // Post request for new purchase + purchase event + inventory change
    const addPurchase = async (e: any) => {
        e.preventDefault();
        try{
            const updatedInventoryInfo = {
                id: selectedInventory.id,
                item_amount: updatedInventory
            }
            const postPurchase = await axios.post('/purchase/add_new', newPurchase)
            const patchInventory = await axios.patch('/inventory/update', updatedInventoryInfo)
            const eventInfo = await {
                event_type: 'purchase',
                event_date: newPurchase.purchase_date,
                change_amount: newPurchase.purchase_amount,
                inventory_id: selectedInventory.id,
                purchase_id: postPurchase.data.id
            }
            const postAddInvEvent = await axios.post('/event/purchase_event', eventInfo)
        } catch(error) {
            console.log(error)
        }
    }


const handleNewPurchase = (e: any) => {
    e.preventDefault();
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

useEffect(() => {
    getInventoryInfo()
}, [])

    return (
        <div>
            <h1>추가구매</h1>
            <form onSubmit={addPurchase}>

                재료추가:
                <select onChange={(e: any) => setSelectedInventory(inventoryInfo[e.target.value])}>
                    <option>Choose an option</option>
                    {inventoryInfo.map((item: any, index: number) => <option key={item.id} value={index}> {item.item_name} {item.item_amount} {item.expiration_date}</option>)}
                </select>

                <label>구매요약:
                    <input name="purchase_description" value={newPurchase.purchase_description} type="text" onChange={handleNewPurchase}></input>
                </label>
                <label>양:
                    <input name="purchase_amount" value={newPurchase.purchase_amount} type="number" onChange={handleNewPurchase}></input>
                </label>
                <span>추가 후 재고양: {updatedInventory}</span>
                <label>구매처:
                    <input name="vendor" value={newPurchase.vendor} type="text" onChange={handleNewPurchase}></input>
                </label>
                <label>구매일시:
                    <input name="purchase_date" value={newPurchase.purchase_date} type="date" onChange={handleNewPurchase}></input>
                </label>
                <label>유통기한:
                    <input name="expiration_date" value={newPurchase.expiration_date} type="date" onChange={handleNewPurchase}></input>
                </label>
                <button>재료추가</button>
            </form>
        </div>
    )
}

export default AddInventory
