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

    const handleSubmit = (e:any) => {
        e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name:
                    <input type="text" name="userId"></input>
                </label>
                <label>Password:
                    <input type="password" name="password"></input>
                </label>
                <button>LOG IN</button>
            </form>
            
        </div>
    )
}

export default Login
