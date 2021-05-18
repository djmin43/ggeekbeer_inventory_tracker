import React, { useEffect, useContext } from 'react'
import Login from './Login'
import Signup from './Signup'
import axios from 'axios'
import { VerifyContext } from '../../contextAPI/VerifyContext'

const Auth = () => {

    const [verify, setVerify] = useContext(VerifyContext)

    return (
        <div>
            {verify ?             
            <button onClick={() => setVerify(!verify)}>LOG OUT</button>
             : 
             <>
                <Login />
                <Signup />
            </>
            }


        </div>
    )
}

export default Auth
