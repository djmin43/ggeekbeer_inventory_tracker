import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

interface UserProps {
    userName: {userName: string}
}

const User = ({userName}: UserProps) => {

    let history = useHistory()

    const logOut = async () => {
        try {
            await axios.get('/auth/log_out')
            await history.push('/')
            await window.location.reload()
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h4>안녕하세요 {userName}님!</h4>
            <button onClick={() => logOut()}>LOG OUT</button>
        </div>
    )
}

export default User
