import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'


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

const ControlInventory = ({inventoryInfo, brewInfo, purchaseInfo}: any) => {

    const today: string = moment().format('YYYY-MM-DD');

    const [usage, setUsage] = useState<string>('');
    const [usageId, setUsageId] = useState<string | number>(0);
    const [calculated, setCalculated] = useState<number>(0);
    const [useAmount, setUseAmount] = useState<any>(0);
    const [brewSelected, setBrewSelected] = useState(0)
    const [itemSelected, setItemSelected] = useState<Inventory>({
        id: 0,
        item_name: '',
        item_type: '',
        item_amount: 0,
        expiration_date: '',
        item_description: '',
        created_at: '',
        updated_at: ''
    });

    // 이벤트랑 인벤토리 api call
    // 사용, 새로구매, 추가
    // rows: id, event_type, event_date, change_amount, inventory_id, user_id, brew_id

    const updateInvBrew = async (e: any) => {
        e.preventDefault();
        try {
            const brewEvent = {
                event_type: usage,
                event_date: today,
                change_amount: useAmount,
                inventory_id: itemSelected.id,
                user_id: 3,
                brew_id: usageId
            }
            console.log(brewEvent)
            await axios.post('/brew/event', brewEvent).then().catch((error) => console.log(error))
        } catch(error) {
            console.log(error)
        }
    }

    const handleSelect = (e: any) => {
        const index:number = e.target.value;
        const selected = inventoryInfo[index]
        setItemSelected(selected)
    };

    const calculate = () => {
        if(usage === 'brew') {
            const newBrew = +itemSelected.item_amount - +useAmount
            setCalculated(newBrew)
        } else if (usage === 'add'){
            const newPurchase = +useAmount + +itemSelected.item_amount
            setCalculated(newPurchase)}
    };

    useEffect(() => {
        calculate()
    }, [usage, useAmount, itemSelected])

    return (
        <div>
            <form onSubmit={(updateInvBrew)}>

                Usage:
                <select onChange={(e) => setUsage(e.target.value)}>    
                    <option>Choose an option</option>
                    <option>brew</option>
                    <option>purchase</option>
                    <option>add</option>
                </select>

                Choose the brew/new purchase/add purchase:
                <select onChange={(e) => setUsageId(e.target.value)}>
                    <option>Choose an option</option>
                    {usage === 'brew' ? brewInfo.map((item: any) => <option value={item.id}>{item.brew_name} {item.brew_date}</option>) 
                    : usage === 'add' ? purchaseInfo.map((item: any) => <option value={item.id}>{item.vendor} {item.purchase_description}{item.purchase_date} </option>)
                    : usage === 'purchase' ? <option>new purchase</option> : ''}
                </select>

                Choose the inventory:
                <select onChange={handleSelect}>
                    <option>Choose an option</option>
                    {inventoryInfo.map((item: Inventory, index: number) => <option value={index}>{item.item_name} 재고: {item.item_amount}kg 유통기한: {item.expiration_date}</option>)}
                </select>

                <label>사용량:
                    <input onChange={(e) => setUseAmount(e.target.value)} type="number" />
                </label>

                <span>
                    변경 후 재고: {calculated}kg
                </span>
                <button>yellow</button>
            </form>
        </div>
    )
}

export default ControlInventory
