import React, { useState } from 'react'
import axios from 'axios'
import '../../styling/Form.css'


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

    const [validation, setValidation] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setSignup({
            ...signUp,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        validator()
    }

    const validator = () => {
    const {userId, password, password2, userName, code} = signUp
        if (userId === '' || password === '' || password2 === '' || userName === '' || code === '') {
            setValidation(false)
            setMessage('공란입니다.')
           }
        else if (password !== password2) {
            setValidation(false)
            setMessage('비밀번호2개가 다릅니다.')
        } else {
            setValidation(true)
            signUpNew()
        }
    }

    const signUpNew = async() => {
        try {
            const signUpPost = await axios.post('/auth/sign-up', signUp)
            await setMessage(signUpPost.data.msg)
        } catch(error) {
            setMessage(error.response.data.msg)
        }
    }

    return (
        <div>
            <div className="signup">
                <h2>회원가입</h2>
                {validation === true ? <Message message={message}/> : 
                <form onSubmit={handleSubmit}>
                    <label>아이디:
                        <input name="userId" type="text" onChange={handleChange}></input>
                    </label>
                    <label>이름:
                        <input name="userName" type="text" onChange={handleChange}></input>
                    </label>
                    <label>비밀번호:
                        <input name="password" type="password" onChange={handleChange}></input>
                    </label>
                    <label>비밀번호확인:
                        <input name="password2" type="password" onChange={handleChange}></input>
                    </label>
                    <label>가입코드:
                        <input name="code" type="password" onChange={handleChange}></input>
                    </label>
                    <button>회원가입</button>
                    <Message message={message}/>
                </form>
                
                    }
     
            </div>
        </div>
    )
}


const Message = ({message}:any) => {
return (
    <div>
        <h4 className="message">{message}</h4>
    </div>
)
}

export default Signup
