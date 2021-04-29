import React, { useEffect, useState } from 'react'
import axios from 'axios'

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

const ControlInventory = ({inventory}: any) => {


    const [usage, setUsage] = useState<string>('');
    const [calculated, setCalculated] = useState<number>(0);
    const [itemSelected, setItemSelected] = useState<Inventory>({
        id: 0,
        item_name: '',
        item_type: '',
        item_amount: 0,
        expiration_date: '',
        item_description: '',
        created_at: '',
        updated_at: ''
    })
    const [useAmount, setUseAmount] = useState<any>(0)

    const handleSelect = (e: any) => {
        const index:number = e.target.value;
        const selected = inventory[index]
        setItemSelected(selected)

    }

    const calculate = () => {
        if(usage === 'brew') {
            const newBrew = +itemSelected.item_amount - +useAmount
            setCalculated(newBrew)
        } else if (usage === 'purchase'){
            const newPurchase = +useAmount + +itemSelected.item_amount
            setCalculated(newPurchase)}
    }

    useEffect(() => {
        calculate()
    }, [usage, useAmount, itemSelected])

    return (
        <div>
            <form>
                <select onChange={(e) => {setUsage(e.target.value)}}>
                    <option>Choose an option</option>
                    <option>brew</option>
                    <option>purchase</option>
                </select>
                <select onChange={handleSelect}>
                    <option>Choose an option</option>
                    {inventory.map((item: Inventory, index: number) => <option value={index}>{item.item_name} 재고: {item.item_amount}kg 유통기한: {item.expiration_date}</option>)}
                </select>
                <label>사용량:
                    <input onChange={(e) => setUseAmount(e.target.value)} type="number" />
                </label>
                <span>
                    변경 후 재고: {calculated}kg
                </span>


            </form>
        </div>
    )
}

export default ControlInventory
