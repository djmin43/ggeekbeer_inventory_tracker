import React, {useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GetInventoryContext, InventoryContext, TodayContext } from '../contextAPI/DataContext'
import '../styling/Form.css';


const UseInventory = () => {

    const getInventory = useContext(GetInventoryContext)

    const [message, setMessage] = useState<string>('')
    const [validation, setValidation] = useState<boolean>(false)

    useEffect(() => {
        getInventory()
    }, [getInventory])

    return (
        <div >
                <div className="formContainer">
                    <h2>재고사용</h2>
                    {validation === false ? 
                    <>
                        <Form setMessage={setMessage} setValidation={setValidation} />
                        <Message message={message}/>
                    </> 
                    : <Message message={message}/>
                    } 
                </div>
        </div>
    )
}

const Message = ({message}: MessageProps) => {
    return (
        <div className="message">
            {message}
        </div>
    )
}

const Form = ({setMessage, setValidation}: FormProps) => {

    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)


    const [useInventory, setUseInventory] = useState<UseInventory>({
        inventory_id: 0,
        inventory_amount: 0,
        event_amount: 0,
        event_desc: '',
        event_type: '재고사용',
        event_date: today,
        today: today
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            if (useInventory.inventory_id === 0 || useInventory.event_desc === '') {
                setMessage('재고선택이 되어있지 않거나 "비고"가 비어있습니다.')
            } else {
                setMessage(`${useInventory.inventory_amount}만큼 사용되었습니다.`)
                await axios.patch('/inventory/use', useInventory)
                setValidation(true)
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        사용재고 선택:
        <select name="inventory_id" onChange={handleSelect}>
            <option>재고 선택해주세요.</option>
            {inventoryInfo.map((item: Inventory, index: number) => 
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
    )
}

// Types
interface UseInventory {
    inventory_id: number;
    inventory_amount: number;
    event_amount: number;
    event_desc: string;
    event_type: string;
    event_date: string;
    today: string | Date;
}

interface Inventory {
    id: number;
    inventory_name: string;
    inventory_type: string;
    inventory_amount: number;
    expiration_date: string;
    import_date: string;
    inventory_desc: string;
    events: any[]
}

interface FormProps {
    setMessage: (message: string) => void;
    setValidation: (validation: boolean) => void;
}

interface MessageProps {
    message: string;
}

export default UseInventory
