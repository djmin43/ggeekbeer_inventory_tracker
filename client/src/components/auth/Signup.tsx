import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import '../../styling/Form.css'


interface UserSignup {
    userId: string;
    password: string;
    password2: string;
    userName: string;
    code: string;
}

interface Validator {
    message: string;
    validation: boolean;
}

const Signup = () => {
    let history = useHistory()

    const [signUp, setSignup] = useState<UserSignup>({
        userId: '',
        password: '',
        password2: '',
        userName: '',
        code: ''
    })

    const [validation, setValidation] = useState<Validator>({
        message: '',
        validation: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSignup({
            ...signUp,
            [e.target.name]: e.target.value
        })
        validator()
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (validation.validation) {
            await axios.post('/auth/sign_up', signUp)
            await history.push('/')
            await window.location.reload()
        } else {
            setValidation({...validation, 
            validation: false})
        }
    }


    const validator = () => {
    const {userId, password, password2, userName, code} = signUp
        if (userId === '' || password === '' || password2 === '' || userName === '' || code === '') {
            setValidation({message: 'your field is empty', validation: false})}
        else if (password !== password2) {
            setValidation({message: 'your passwords are not matching', validation: false})
        } else {
            setValidation({message: '', validation: true})
        }
    }

    return (
        <div>
            <div className="signup">
                <h2>회원가입</h2>
                <form onSubmit={handleSubmit}>
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
                <p className="message">{validation.message}</p>
            </div>
        </div>
    )
}

export default Signup
