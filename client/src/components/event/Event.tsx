import React, { useEffect, useContext } from 'react'
import { EventContext, GetEventContext } from '../../DataContext'

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
                <th>재고이름</th>
                <th>재고타입</th>
                <th>사용자</th>

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
                <td >{item.inventory.inventory_name}</td>
                <td >{item.inventory.inventory_type}</td>
                <td >{item.user.user_name}</td>

            </tr>
            )}
            </tbody>


        </table>
    </div>
    )
}

export default Event
