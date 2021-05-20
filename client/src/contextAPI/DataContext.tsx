import React, {  useState, useCallback } from 'react'
import moment from 'moment'
import axios from 'axios'

// TYPES
interface Inventory {
    id: number;
    inventory_name: string;
    inventory_type: string;
    inventory_amount: number;
    expiration_date: string;
    import_date: string;
    inventory_desc: string;
    events: any[]
}

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

// Create Context
export const TodayContext = React.createContext<string>('')
export const InventoryContext = React.createContext<any>('')
export const GetInventoryContext = React.createContext<any>('')
export const EventContext = React.createContext<any>('')
export const GetEventContext = React.createContext<any>('')


export const DataProvider = ({children}:any) => {

    const today: string = moment().format('YYYY-MM-DD');

    // Initial State
    const [inventoryInfo, setInventoryInfo] = useState<Inventory[]>([{
        id: 0,
        inventory_name: '',
        inventory_type: '',
        inventory_amount: 0,
        expiration_date: today,
        import_date: today,
        inventory_desc: '',
        events: [{
            event_type: '',
            event_desc: '',
            event_date: ''
        }]
    }])

    const [eventInfo, setEventInfo] = useState<Event[]>([{
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

    // Get Requests

    const getInventoryInfo = useCallback (async () => {
        try {
            const res = await axios.get('/inventory/')
            const inventoryInfo = await res.data
            await inventoryInfo.forEach((item:Inventory) => {
                item.expiration_date = formatDate(item.expiration_date)
                item.import_date = formatDate(item.import_date)
                item.events.forEach((item:any) => {
                    item.event_date = formatDate(item.event_date)
                })
                }
            )
            await setInventoryInfo(inventoryInfo)
        } catch(error) {
            console.log(error)
        }
    }, [])

    const getEventInfo = useCallback (async () => {
        try {
            const res = await axios.get('/event/')
            const eventInfo = await res.data
            await eventInfo.forEach((item: Event) => {
                item.event_date = formatDate(item.event_date)
            })
            await setEventInfo(eventInfo)
        } catch(error) {
            console.log(error)
        }
    }, [])


    return (
        <TodayContext.Provider value={today}>
            <InventoryContext.Provider value={inventoryInfo}>
            <GetInventoryContext.Provider value={getInventoryInfo}>
                        <EventContext.Provider value={eventInfo}>
                        <GetEventContext.Provider value={getEventInfo}>
                                    {children}
                        </GetEventContext.Provider>
                        </EventContext.Provider>
            </GetInventoryContext.Provider>
            </InventoryContext.Provider>
        </TodayContext.Provider>

    )
}


// EVENT DATE FORMAT FUNCTION
function formatDate(date: string) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}