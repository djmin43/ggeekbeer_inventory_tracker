import React, { useEffect } from 'react'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'

const Auth = () => {

    const verify =  async () => {
        const verify = await axios.get('/auth/')
        await console.log(verify)
    }

    useEffect(() => {
    verify()
    }, [])
    
    return (
        <div>
            <Login />
            <Signup />
        </div>
    )
}

export default Auth
