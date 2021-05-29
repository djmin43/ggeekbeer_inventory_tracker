import React, {useState} from 'react'
import axios from 'axios'
import '../../styling/Form.css'

interface LoginUser {
    userId: string;
    password: string;
}

const Login = () => {

    const [login, setLogin] = useState<LoginUser>({userId: '', password: ''})
    const [message, setMessage] = useState<string>('')
    
    const handleChange = (e: any) => {
        e.preventDefault()
        setLogin({...login, 
        [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        try {
            const logInPost = await axios.post('/auth/log-in', login)
            window.location.reload();
        } catch(error) {
            setMessage(error.response.data.msg)
        }
    }
    return (
        <div>
            <div >
                <h2>로그인</h2>
                <form onSubmit={handleSubmit}>
                    <label>User Name:
                        <input type="text" name="userId" onChange={handleChange}></input>
                    </label>
                    <label>Password:
                        <input type="password" name="password" onChange={handleChange}></input>
                    </label>
                    <button>LOG IN</button>
                    <h4 className="message">{message}</h4>
                </form>
            </div>

            
        </div>
    )
}

export default Login
