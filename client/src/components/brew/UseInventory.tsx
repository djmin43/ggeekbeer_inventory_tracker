import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseInventory = ({inventoryInfo, brewInfo}: any) => {

    const [brewId, setBrewId] = useState<string | number>(0);
    const [inventorySelected, setInventorySelected] = useState({item_amount: 0});
    const [useAmount, setUseAmount] = useState(0);
    const [calculatedAmount, setCalculatedAmount] = useState(0);

    const calculateAmount = () => {
        const calculation = +inventorySelected.item_amount - +useAmount
        setCalculatedAmount(calculation)
    }

    const getInventorySelect: any = (e: any) => {
        e.preventDefault();
        const index: number = e.target.value
        const value = inventoryInfo[index]
        setInventorySelected(value)
    };

    useEffect(() =>{
        calculateAmount()
    }
    , [inventorySelected, useAmount])

    return (
        <div>
            <form>

            
            <label>양조선택:</label>
            <select onChange={(e) => setBrewId(e.target.value)}>
                <option>Choose an option</option>
                {brewInfo.map((item:any) => <option value={item.id}>{item.brew_type} {item.brew_date} {item.brew_name}</option>)}
            </select>
            <label>재고선택:</label>
            <select onChange={getInventorySelect}>
                <option>Choose an option</option>
                {inventoryInfo.map((item:any, index: any) => <option value={index}>{item.item_name} {item.item_amount} {item.expiration_date}</option>)}
            </select>

            <label>사용량:
                <input onChange={(e:any) => setUseAmount(e.target.value) } value={useAmount} type="number"></input>
            </label>

            <h3>사용후 재고: {calculatedAmount}</h3>
            </form>
        </div>
    )
}

export default UseInventory
