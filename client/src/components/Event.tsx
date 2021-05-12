import React, { useEffect, useContext } from 'react'
import { EventContext, GetEventContext } from '../DataContext'

const Event = () => {
    const eventInfo = useContext(EventContext)
    const getEventInfo = useContext(GetEventContext)

    useEffect(() => {
        getEventInfo()
        console.log(eventInfo)
    }, [])

    // This is where I need join table for the event.
    return (
        <div>
            <h1>이벤트로그</h1>
        <table>
            {/* Table Header */}
            <thead>
            <tr>
                <th>id</th>

            </tr>
            </thead>

            {/* Table Information */}
            <tbody>
            {eventInfo.map((item:any) => 
            <tr key={item.id} >
                <td >{item.id}</td>

            </tr>
            )}
            </tbody>


        </table>
    </div>
    )
}

export default Event
