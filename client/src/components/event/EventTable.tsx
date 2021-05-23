import React from 'react'

const EventTable = ({events, setEventSelect} : any) => {

    // Filter out the selected item.
    const handleClick = (e: any) => {
        const event = e.target.getAttribute('data-value')
        const select = events.filter((item:any )=> item.id === +event)
        setEventSelect(select['0'])
    }

    return (
        <div className="table">
            <div className="eventHeader header">
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
            {events.map((item: any) => 
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
    )
}

export default EventTable
