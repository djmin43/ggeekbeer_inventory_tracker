
const EventDesc = ({eventSelect, setEventSelect} : any) => {

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setEventSelect({...eventSelect, id: 0})
    }

    return (
        <div >
            <h2>이벤트 개별정보</h2>
            <div className="table">
                <div className="descHeader header">
                    <div className="headerCell">
                        <h4>{eventSelect.inventory.inventory_name}</h4>
                    </div>
                </div>
                <div className="descRow">
                    <div className="descCell">
                        <p><b>재고이름:</b> {eventSelect.inventory.inventory_name}</p>
                        <p><b>이벤트날짜:</b> {eventSelect.event_date}</p>
                        <p><b>변경양:</b> {eventSelect.event_amount}</p>
                        <h3>이벤트설명</h3>
                        <span>{eventSelect.event_desc}</span>
                    </div>
                    <button className="closeButton" onClick={handleClick}>닫기</button>
                </div>
            </div>
        </div>
    )
}

export default EventDesc
