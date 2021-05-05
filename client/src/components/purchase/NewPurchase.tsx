import React, { useEffect, useState} from 'react';
import axios from 'axios'

const NewPurchase = ({today, inventoryInfo}: any) => {

// This is totally a new purchase, just like 'addBrew.tsx'

// const {purchase_date, purchase_description, purchase_amount, expiration_date, vendor} = req.body

// const {item_name, item_type, item_amount, expiration_date, item_description} = req.body

const [newPurchase, setNewPurchase] = useState({
    purchase_date: today,
    purchase_description: '',
    purchase_amount: 0,
    expiration_date: today,
    vendor: '',
    item_name: '',
    item_type: '',
    item_description:''
});

const addNewPurchase = async (e: any) => {
    e.preventDefault();
    const postNewPurhcase = await axios.post('/purchase/add_new', newPurchase);
    console.log(postNewPurhcase)
};

const handleChange = (e: any) => {
    e.preventDefault();
    console.log(e.target.value)
    setNewPurchase({...newPurchase, 
    [e.target.name]: e.target.value })
};

    return (
        <div>
            <h1>Add a new purchase</h1>
            <form onSubmit={addNewPurchase}>
                <label>이름:
                    <input name="item_name" value={newPurchase.item_name} type="text" onChange={handleChange}></input>
                </label>
                <label>타입:
                    <select name="item_type" value={newPurchase.item_type} onChange={handleChange}>
                        <option>please choose an option</option>
                        <option>hop</option>
                        <option>malt</option>
                        <option>yeast</option>
                        <option>others</option>
                    </select>
                </label>
                <label  >재료설명:
                    <input name="item_description" value={newPurchase.item_description} type="text" onChange={handleChange}></input>
                </label>
                <label>구매요약:
                    <input name="purchase_description" value={newPurchase.purchase_description} type="text" onChange={handleChange}></input>
                </label>
                <label>양:
                    <input name="purchase_amount" value={newPurchase.purchase_amount} type="number" onChange={handleChange}></input>
                </label>
                <label>구매처:
                    <input name="vendor" value={newPurchase.vendor} type="text" onChange={handleChange}></input>
                </label>
                <label>구매일시:
                    <input name="purchase_date" value={newPurchase.purchase_date} type="date" onChange={handleChange}></input>
                </label>
                <label>유통기한:
                    <input name="expiration_date" value={newPurchase.expiration_date} type="date" onChange={handleChange}></input>
                </label>
                <button>Add New Purchase</button>
            </form>
        </div>
    )
}

export default NewPurchase
