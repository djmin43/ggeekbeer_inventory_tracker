import '../../styling/Table.css'
import React, { useContext, useEffect, useState } from 'react'
import { EventContext, GetEventContext, TodayContext } from '../../contextAPI/DataContext'
import EventDesc from './EventDesc'


const Event = () => {
    const eventInfo = useContext(EventContext)
    const getEventInfo = useContext(GetEventContext)
    const today = useContext(TodayContext)

    const [eventSelect, getEventSelect] = useState<any>([{
        id: 0,
        event_type: '',
        event_amount: 0,
        event_date: today,
        event_desc: '',
        inventory_id: '',
        user_id: '',
        inventory: {
            inventory_name: '',
            inventory_type: ''
        },
        user: {
            user_name: ''
        }}])

    useEffect(() => {
        getEventInfo()
    }, [getEventInfo])

    // Filter out the selected item.
    const handleClick = (e: any) => {
        const event = e.target.getAttribute('data-value')
        const select = eventInfo.filter((item:any )=> item.id === +event)
        getEventSelect(select)
    }
    // This is where I need join table for the event.
    return (
        <div>

            <div className="tableContainer">
                {/* Render only if item is selected */}
                {eventSelect[0].id === 0 ? '' : <EventDesc eventSelect={eventSelect} getEventSelect={getEventSelect}/>}
                <h1>이벤트 로그</h1>
                <div className="table">
                    <div className="eventHeader">
                        <div className="headerCell">
                            <p>날짜</p>
                        </div>
                        <div className="headerCell">
                            <p>이벤트타입</p>
                        </div>
                        <div className="headerCell">
                            <p>변경양</p>
                        </div>
                        <div className="headerCell">
                            <p>재고이름</p>
                        </div>
                        <div className="headerCell">
                            <p>재고타입</p>
                        </div>
                        <div className="headerCell">
                            <p>사용자</p>
                        </div>
                    </div>
                    {eventInfo.map((item: any) => 
                    <div key={item.id} className="eventRow row">
                            <div className="cell date">
                                <p>{item.event_date}</p>
                            </div>
                            <div className="cell">
                                <p>{item.event_type}</p>
                            </div>
                            <div className="cell">
                                <p>{item.event_amount}</p>
                            </div>
                            <div className="cell" >
                                <p data-value={item.id} onClick={handleClick}>{item.inventory.inventory_name}</p>
                            </div>
                            <div className="cell">
                                <p>{item.inventory.inventory_type}</p>
                            </div>
                            <div className="cell">
                                <p>{item.user.user_name}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    </div>
    )
}

export default Event
