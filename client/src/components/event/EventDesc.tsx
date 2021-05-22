
const EventDesc = ({eventSelect, getEventSelect} : any) => {

    const handleClick = (e: any) => {
        e.preventDefault()
        getEventSelect([{...eventSelect, id: 0}])
    }

    return (
        <div >
            <div className="table">
                <div className="descHeader">
                    <div className="headerCell">
                        <h4>{eventSelect[0].inventory.inventory_name}</h4>
                    </div>
                </div>
                <div className="descRow">
                    <div className="descCell">
                        <p><b>재고이름:</b> {eventSelect[0].inventory.inventory_name}</p>
                        {/* <p><b>재고타입:</b> {eventSelect[0].inventory.inventory_type}</p> */}
                        {/* <p><b>사용자명:</b> {eventSelect[0].user.user_name}</p> */}
                        <p><b>이벤트날짜:</b> {eventSelect[0].event_date}</p>
                        <p><b>변경양:</b> {eventSelect[0].event_amount}</p>
                        <span>{eventSelect[0].event_desc}</span>
                    </div>
                    <button onClick={handleClick}>닫기</button>
                </div>
            </div>
        </div>
    )
}

export default EventDesc
