import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { GetBrewContext, GetInventoryContext, InventoryContext, TodayContext, BrewContext } from '../../DataContext';

const UseInventory = () => {
    
    // Use Context
    const today = useContext(TodayContext)
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)
    const brewInfo = useContext(BrewContext)
    const getBrewInfo = useContext(GetBrewContext)

    // UseState
    const [brewId, setBrewId] = useState<string | number>(0);
    const [inventorySelected, setInventorySelected] = useState({id: 0, item_amount: 0});
    const [useAmount, setUseAmount] = useState(0);
    const [calculatedAmount, setCalculatedAmount] = useState(0);

    // *Two api calls in one function: update inventory and event log.
    const updateInventory = async (e: any) => {
        e.preventDefault()
        try {
            // Post New Event
            const newUseInventory = {
                event_type: 'brew',
                event_date: today,
                change_amount: useAmount,
                inventory_id: inventorySelected.id,
                brew_id: brewId
            }
            const postUseInvEvent = await axios.post('/event/brew_event', newUseInventory);
            // Patch Inventory
            const updatedInventory = await {
                id: inventorySelected.id,
                item_amount: calculatedAmount
            }
            const patchInventory = await axios.patch('/inventory/update', updatedInventory);
            console.log(patchInventory)
        } catch(error) {
            console.log(error)
        }
    };  

    const calculateAmount = () => {
        const calculation = +inventorySelected.item_amount - +useAmount
        setCalculatedAmount(calculation)
    };

    const getInventorySelect: any = (e: any) => {
        e.preventDefault();
        const index: number = e.target.value
        const value = inventoryInfo[index]
        setInventorySelected(value)
    };

    useEffect(() =>{
        calculateAmount()
    }
    , [inventorySelected, useAmount]);

    useEffect(() => {
        getInventoryInfo()
        getBrewInfo()
    }, [])

    return (
        <div>
            <form onSubmit={updateInventory}>
            <label>양조선택:</label>
            <select onChange={(e) => setBrewId(e.target.value)}>
                <option>Choose an option</option>
                {brewInfo.map((item:any) => <option key={item.id} value={item.id}>{item.brew_type} {item.brew_date} {item.brew_name}</option>)}
            </select>
            <label>재고선택:</label>
            <select onChange={getInventorySelect}>
                <option>Choose an option</option>
                {inventoryInfo.map((item:any, index: any) => <option key={item.id} value={index}>{item.item_name} {item.item_amount} {item.expiration_date}</option>)}
            </select>
            <label>사용량:
                <input onChange={(e:any) => setUseAmount(e.target.value)} value={useAmount} type="number"></input>
            </label>
            <h3>사용후 재고: {calculatedAmount}</h3>
            <button>재료사용등록</button>
            </form>
        </div>
    )
}

export default UseInventory
