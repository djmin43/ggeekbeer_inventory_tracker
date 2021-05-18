import React, {useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { TodayContext } from '../contextAPI/DataContext'
import '../App.css';

const AddInventory = () => {

    const today = useContext(TodayContext)

    const [newInventory, setNewInventory] = useState({
        inventory_name: '',
        inventory_type: '',
        inventory_amount: 0,
        expiration_date: today,
        import_date: today,
        inventory_desc: '',
        event_desc: '',
        user_id: 1,
        event_type: '재료추가',
        today
    })

    // Submit Control
    const handleChange = (e: any) => {
        e.preventDefault()
        setNewInventory({...newInventory, 
        [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async () => {
        try {
            const postInventory = await axios.post('/inventory/new', newInventory)
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container">
            <h2>재고추가</h2>
            <form onSubmit={handleSubmit}>
                <label>이름:
                    <input type="text" name="inventory_name" value={newInventory.inventory_name} onChange={handleChange}></input>
                </label>
                <select name="inventory_type" onChange={handleChange}>타입:
                    <option>재료타입을 선택해주세요</option>
                    <option>홉</option>
                    <option>몰트</option>
                    <option>이스트</option>
                    <option>부재료</option>
                </select>
                <label>양:
                    <input type="number" name="inventory_amount" value={newInventory.inventory_amount} onChange={handleChange}></input>
                </label>
                <label>유통기한:
                    <input type="date" name="expiration_date" value={newInventory.expiration_date} onChange={handleChange}></input>
                </label>
                <label>입고날짜:
                    <input type="date" name="import_date" value={newInventory.import_date} onChange={handleChange}></input>
                </label>
                <label>재료설명:
                    <input type="text" name="inventory_desc" value={newInventory.inventory_desc} onChange={handleChange}></input>
                </label>
                <label>추가 특이사항:
                    <input type="text" name="event_desc" value={newInventory.event_desc} onChange={handleChange}></input>
                </label>
                <button>재료추가</button>
            </form>
            </div>
        </div>
    )
}

export default AddInventory
