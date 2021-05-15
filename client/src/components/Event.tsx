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
                <th>용도</th>
                <th>양</th>
                <th>내용</th>
                <th>날짜</th>
                <th>inventory_id(재고이름으로 바꿀것)</th>
                <th>user_id(사용자이름으로 바꿀것)</th>

            </tr>
            </thead>
 
            {/* Table Information */}
            <tbody>
            {eventInfo.map((item:any, index: number) => 
            <tr key={index} >
                <td >{item.event_type}</td>
                <td >{item.event_amount}</td>
                <td >{item.event_desc}</td>
                <td >{item.event_date}</td>
                <td >{item.inventory_id}</td>
                <td >{item.user_id}</td>

            </tr>
            )}
            </tbody>


        </table>
    </div>
    )
}

export default Event
