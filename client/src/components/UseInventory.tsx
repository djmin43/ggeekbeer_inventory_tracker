import React, {useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { GetInventoryContext, InventoryContext, TodayContext } from '../DataContext'
import '../App.css';

const UseInventory = () => {

    const today = useContext(TodayContext)
    
    const inventoryInfo = useContext(InventoryContext)
    const getInventory = useContext(GetInventoryContext)
    

    const [useInventory, setUseInventory] = useState<any>({
        event_amount: 0,
        event_desc: '',
        event_type: '재고사용',
        event_date: today,
    })


    const handleChange = (e: any) => {
        e.preventDefault()
        setUseInventory({
            ...useInventory,
            [e.target.name]: e.target.value
        })
    }

    
    useEffect(() => {
        getInventory()
        console.log(inventoryInfo)
    }, [])


    return (
        <div >
                <div className="container">
                <h2>재고사용</h2>
                    <form>
                        <select name="inventory_id" onChange={handleChange}>사용재고 선택:
                            <option>재고 선택해주세요.</option>
                            {inventoryInfo.map((item: any, index: number) => 
                                <option key={index} value={item.id}>{item.inventory_name}</option>
                            )}
                        </select>
                        <label>사용양(kg):
                            <input type="number" name={useInventory.event_amount} onChange={handleChange}></input>
                        </label>
                        <label>재고사용 요약:
                            <input type="text" name={useInventory.event_desc} onChange={handleChange}></input>
                        </label>
                        <label>사용날짜:
                            <input type="date" name={useInventory.event_date} onChange={handleChange}></input>
                        </label>
                    </form>
                </div>
        </div>
    )
}

export default UseInventory
