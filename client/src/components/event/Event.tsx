import '../../styling/Table.css'
import React, { useContext, useEffect, useState } from 'react'
import { EventContext, GetEventContext, TodayContext } from '../../contextAPI/DataContext'
import EventDesc from './EventDesc'
import EventTable from './EventTable'
import EventSearch from './EventSearch'

interface Event {
    id: number;
    event_type: string;
    event_amount: number;
    event_date: string;
    event_desc: string;
    inventory_id: any;
    user_id: any;
    inventory: {};
    user: {}
}

const Event = () => {
    const eventInfo = useContext(EventContext)
    const getEventInfo = useContext(GetEventContext)
    const today = useContext(TodayContext)

    const [events, setEvents] = useState<Event[]>([{
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
        }
    }])

    const [eventSelect, setEventSelect] = useState<Event>({
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
        }})

    useEffect(() => {
        getEventInfo()
    }, [getEventInfo])

    useEffect(() => {
        setEvents(eventInfo)
    }, [eventInfo])


    // This is where I need join table for the event.
    return (
        <div>
            <div className="tableContainer">
                {/* Render only if item is selected */}
                {eventSelect.id === 0 ? '' : <EventDesc eventSelect={eventSelect} setEventSelect={setEventSelect}/>}
                <EventTable events={events} setEventSelect={setEventSelect} setEvents={setEvents}/>
                <EventSearch setEvents={setEvents} />
            </div>
    </div>
    )
}

export default Event
