import React, { useState, useContext } from 'react'
import moment from 'moment'
import { InventoryContext, EventContext } from '../../contextAPI/DataContext';


interface Event {
    id: number;
    event_type: string;
    event_amount: number;
    event_date: string;
    event_desc: string;
    inventory_id: any;
    user_id: any;
    inventory: {};
    user: {};
}

const EventSearch = ({setEvents} : any) => {

    const month: string = moment().format('YYYY-MM');

    const inventoryInfo = useContext(InventoryContext)
    const eventInfo = useContext(EventContext)

    const [searchType, setSearchType] = useState<string>('default')
    
    const [targetMonth, setTargetMonth] = useState<string>(month)
    const [targetEventType, setTargetEventType] = useState<string>('')
    const [targetUserName, setTargetUserName] = useState<string>('')
    const [targetInventoryType, setTargetInventoryType] = useState<string>('default')


    // Change handlers
    const handleSearch = (e:any) => {
        e.preventDefault()
        setSearchType(e.target.value)
    }
    const handleMonth = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTargetMonth(e.target.value)
    }
    const handleEventType = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTargetEventType(e.target.value)
    }
    const handleUserName = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTargetUserName(e.target.value)
    }
    const handleInventoryType = (e:any) => {
        e.preventDefault()
        setTargetInventoryType(e.target.value)
    }


    // Search handler. If 'default(none)' is selected, return all.
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        if (searchType === "default") {
            setEvents(eventInfo)
        }
        if (searchType === "eventDate") {
            const targetEvents = eventInfo.filter((item:Event) => item.event_date.includes(targetMonth))
            setEvents(targetEvents)
        }
        if (searchType === "eventType") {
            if (targetEventType === "default") {
                setEvents(eventInfo)
            } else {
                const targetEvents = eventInfo.filter((item:Event) => item.event_type.includes(targetEventType))
                setEvents(targetEvents)
            }
        } 
        if (searchType === "inventoryType") {
            const targetEvents = eventInfo.filter((item:any) => item.inventory.inventory_type.includes(targetInventoryType))
            setEvents(targetEvents)
        } 
        if (searchType === "userName") {
            const targetEvents = eventInfo.filter((item:any) => item.user.user_name.includes(targetUserName))
            setEvents(targetEvents)
        } 

    }
    return (
        <div className="search">
        <form onSubmit={handleSubmit} >
            <select onChange={handleSearch}>
                <option value="default">??????????????? ???????????????</option>
                <option value="eventDate">??????</option>
                <option value="eventType">???????????????</option>
                <option value="inventoryType">????????????</option>
                <option value="userName">????????????</option>
            </select>

            {searchType === 'default' ? '' 
            : searchType === 'eventDate' ? 
                <label>??????
                    <input type="month" value={targetMonth} onChange={handleMonth}></input>
                </label>
            : searchType === 'eventType' ? 
                <label>???????????????
                    <input type="text" value={targetEventType} onChange={handleEventType}></input>
                </label>
            : searchType === 'inventoryType' ? 
            <label>????????????
                        <select onChange={handleInventoryType}>
                            <option value="default">????????? ??????????????????</option>
                            <option value="???">???</option>
                            <option value="??????">??????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                        </select>            </label>    
            : searchType === 'userName' ? 
            <label>???????????????
                <input type="text" value={targetUserName} onChange={handleUserName}></input>
            </label>
            : ''}
            <button>Search</button>
        </form>
    </div>
    )
}

export default EventSearch
