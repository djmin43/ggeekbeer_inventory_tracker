import React, { useState } from 'react'
import axios from 'axios'

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
            const newSignup = await axios.post('/auth/sign_up', signUp)
            console.log(newSignup)
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
                {validation.message}
            </form>
        </div>
    )
}

export default Signup
