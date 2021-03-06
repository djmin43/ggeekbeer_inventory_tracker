import React, {useState, useContext } from 'react'
import axios from 'axios'
import { TodayContext } from '../contextAPI/DataContext'
import '../styling/Form.css';

interface FormProps {
    setMessage: (message: string) => void;
    setValidation: (validation: boolean) => void;
}

interface MessageProps {
    message: string;
}

const AddInventory = () => {

    const [message, setMessage] = useState<string>('')
    const [validation, setValidation] = useState<boolean>(false)

    return (
        <div>
            <div className="formContainer">
                <h2>재고추가</h2>
                    {validation === false ? 
                        <>
                            <Form setMessage={setMessage} setValidation={setValidation}/>
                            <Message message={message}/>
                        </> 
                    : 
                        <Message message={message}/>
                    }

            </div>
        </div>
    )
}


const Form = ({setMessage, setValidation}: FormProps) => {

    const today = useContext(TodayContext)
    const [newInventory, setNewInventory] = useState({
        inventory_name: '',
        inventory_type: 'none',
        inventory_amount: 0,
        expiration_date: today,
        import_date: today,
        inventory_desc: '',
        event_desc: '',
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
    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            if (newInventory.inventory_name === '' || newInventory.inventory_type === 'none' || newInventory.inventory_desc === '' || newInventory.event_desc === '')  {
                setMessage('이름 / 타입 / 재료설명 / 비고 를 모두 적어주세요!')
            } else if (newInventory.expiration_date == newInventory.import_date) {
                setMessage('입고날짜와 유통기한이 같습니다. 확인해주세요')
            } 
                else {
                await axios.post('/inventory/', newInventory)
                setMessage(`${newInventory.inventory_name}을 등록하였습니다.`)
                setValidation(true)

            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>이름:
                <input type="text" name="inventory_name" value={newInventory.inventory_name} onChange={handleChange}></input>
            </label>
            타입:
            <select name="inventory_type" onChange={handleChange}>타입:
                <option value="none">재료타입을 선택해주세요</option>
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
            <label>비고:
                <input type="text" name="event_desc" value={newInventory.event_desc} onChange={handleChange}></input>
            </label>
            <button>재료추가</button>
        </form>
    )
}

const Message = ({message}: MessageProps) => {
    return (
        <div className="message">
            {message}
        </div>
    )
}



export default AddInventory
