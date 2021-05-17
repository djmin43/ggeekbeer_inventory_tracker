import React, {useState} from 'react'
import axios from 'axios'

interface Login {
    userId: string;
    password: string;
}

const Login = () => {
    const [login, setLogin] = useState<Login>({userId: '', password: ''})

    const handleChange = (e: any) => {
        e.preventDefault()
        setLogin({...login, 
        [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const authLogin = await axios.post('/auth/log_in', login)
            console.log(authLogin)
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
