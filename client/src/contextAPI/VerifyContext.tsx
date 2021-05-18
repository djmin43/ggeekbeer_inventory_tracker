import React, { useState } from 'react'

interface VerifyContext {
    setVerifyContext: void
}

export const VerifyContext = React.createContext<any>(false)
export const SetVerifyContext = React.createContext<any>(null)

export const VerifyProvider = ({children}: any) => {
   
   const [verify, setVerify] = useState<boolean>(false) 
   
    return (
        <VerifyContext.Provider value={[verify, setVerify]}>
            {/* <SetVerifyContext.Provider value={setVerify}> */}
                {children}
            {/* </SetVerifyContext.Provider> */}
        </VerifyContext.Provider>
    )
}

