import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

interface Login {
    userId: string;
    password: string;
}

// TEST ID:
// smimm // 0000

const Login = () => {

    let history = useHistory()
    const [login, setLogin] = useState<Login>({userId: '', password: ''})
    
    const handleChange = (e: any) => {
        e.preventDefault()
        setLogin({...login, 
        [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e:any) => {
        try {
            const authLogin = await axios.post('/auth/log_in', login)
            await history.push('/')
            await window.location.reload()
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name:
                    <input type="text" name="userId" onChange={handleChange}></input>
                </label>
                <label>Password:
                    <input type="password" name="password" onChange={handleChange}></input>
                </label>
                <button>LOG IN</button>
            </form>
            
        </div>
    )
}

export default Login
