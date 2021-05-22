import '../../styling/Table.css'

const InventoryEvents = ({inventorySelected}:any) => {

    return (
            <div className="tableContainer">
                <div className="table">
                    <div className="inventoryEventsHeader header">
                        <div className="headerCell">
                            <p>이벤트타입</p>
                        </div>
                        <div className="headerCell">
                            <p>재고양</p>
                        </div>
                        <div className="headerCell">
                            <p>날짜</p>
                        </div>
                    </div>
                {inventorySelected['0'].events.map((item:any, index:number) => 
                    <div className="inventoryEventsRow row" key={index}>
                        <div className="cell">
                            <p>{item.event_type}</p>
                        </div>
                        <div className="cell">
                            <p>{item.event_amount}</p>
                        </div>
                        <div className="cell">
                            <p>{item.event_date}</p>
                        </div>
                    </div>
                    )}
                </div>
                

            </div>
    )
}

export default InventoryEvents
