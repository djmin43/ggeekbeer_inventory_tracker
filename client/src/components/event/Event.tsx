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
        const select = eventInfo.filter((item:any )=> item.id == event)
        getEventSelect(select)
    }
    // This is where I need join table for the event.
    return (
        <div>

            <div className="tableContainer">
                {/* Render only if item is selected */}
                {eventSelect[0].id == 0 ? '' : <EventDesc eventSelect={eventSelect} getEventSelect={getEventSelect}/>}
                <h1>이벤트 로그</h1>
                <div className="table">
                    <div className="header">
                        <div className="headerCell">
                            <p>event date</p>
                        </div>
                        <div className="headerCell">
                            <p>event type</p>
                        </div>
                        <div className="headerCell">
                            <p>event amount</p>
                        </div>
                        <div className="headerCell">
                            <p>inventory name</p>
                        </div>
                        <div className="headerCell">
                            <p>inventory type</p>
                        </div>
                        <div className="headerCell">
                            <p>user name</p>
                        </div>
                    </div>
                    {eventInfo.map((item: any) => 
                    <div key={item.id} className="row">
                            <div className="cell date">
                                {item.event_date}
                            </div>
                            <div className="cell">
                                {item.event_type}
                            </div>
                            <div className="cell">
                                {item.event_amount}
                            </div>
                            <div className="cell" data-value={item.id} onClick={handleClick}>
                                {item.inventory.inventory_name}
                            </div>
                            <div className="cell">
                                {item.inventory.inventory_type}
                            </div>
                            <div className="cell">
                                {item.user.user_name}
                            </div>
                        </div>
                    )}

                    {/* Table Header */}
 

                  

                    
                </div>
            </div>
    </div>
    )
}

export default Event
