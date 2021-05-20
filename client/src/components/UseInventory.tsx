import React, {useState, useContext } from 'react'
import axios from 'axios'
import { GetInventoryContext, InventoryContext, TodayContext } from '../contextAPI/DataContext'
import '../styling/Form.css';
import { useHistory } from 'react-router-dom'

const UseInventory = () => {

    let history = useHistory()

    const today = useContext(TodayContext)
    const inventoryInfo = useContext(InventoryContext)
    const getInventory = useContext(GetInventoryContext)

    const [message, setMessage] = useState<string>('')
    const [useInventory, setUseInventory] = useState<any>({
        inventory_id: '',
        inventory_amount: 0,
        event_amount: 0,
        event_desc: '',
        event_type: '재고사용',
        event_date: today,
        today
    })

    const handleChange = (e: any) => {
        e.preventDefault()
        setUseInventory({
            ...useInventory,
            [e.target.name]: e.target.value
        })
    }

    // 선택한 인벤토리를 useInventory에 넣습니다. 
    const handleSelect = (e: any) => {
        e.preventDefault()
        setUseInventory({
            ...useInventory,
            inventory_id: inventoryInfo[e.target.value].id,
            inventory_amount: inventoryInfo[e.target.value].inventory_amount
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            if (useInventory.inventory_id === '') {
                setMessage('재고선택을 해주세요')
            } else {
                setMessage('')
                await axios.patch('/inventory/use', useInventory)
                await history.push('/')
            }
        } catch(error) {
            console.log(error)
        }
    }

    getInventory()

    return (
        <div >
                <div className="formContainer">
                <h2>재고사용</h2>
                    <form onSubmit={handleSubmit}>
                        사용재고 선택:
                        <select name="inventory_id" onChange={handleSelect}>
                            <option>재고 선택해주세요.</option>
                            {inventoryInfo.map((item: any, index: number) => 
                                <option key={index} value={index}>{item.inventory_name} {item.inventory_amount}</option>
                            )}
                        </select>
                        <label>사용양(kg or packet):
                            <input type="number" name="event_amount" value={useInventory.event_amount} onChange={handleChange}></input>
                        </label>
                        <label>비고:
                            <input type="text" name="event_desc" value={useInventory.event_desc} onChange={handleChange}></input>
                        </label>
                        <label>사용날짜:
                            <input type="date" name="event_date" value={useInventory.event_date} onChange={handleChange}></input>
                        </label>
                        <button>재고사용</button>
                    </form>
                    <p className="message">{message}</p>
                </div>
        </div>
    )
}

export default UseInventory
