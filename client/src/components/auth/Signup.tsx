import React, { useState } from 'react'
import axios from 'axios'

interface UserSignup {
    userId: string;
    password: string;
    password2: string;
    userName: string;
    code: string;
}

const Signup = () => {

    const [signUp, setSignup] = useState<UserSignup>({
        userId: '',
        password: '',
        password2: '',
        userName: '',
        code: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSignup({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <form>
                <label>user id:
                    <input name="userId" onChange={handleChange}></input>
                </label>
                <label>이름:
                    <input name="userName" onChange={handleChange}></input>
                </label>
                <label>비밀번호:
                    <input name="password" onChange={handleChange}></input>
                </label>
                <label>비밀번호확인:
                    <input name="password2" onChange={handleChange}></input>
                </label>
                <label>가입코드:
                    <input name="code" onChange={handleChange}></input>
                </label>
                <button>회원가입</button>
            </form>
        </div>
    )
}

export default Signup
