import '../../styling/Table.css'

const InventoryEvents = ({inventorySelected}:any) => {

    return (
        <div>
            <div className="tableContainer">
            {/* TABLE#2 - events */}
            <table>
                <thead>
                    <tr>
                        <th>이벤트타입</th>
                        <th>양</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {inventorySelected.events.map((item:any, index:number) => 
                    <tr key={index}>
                        <td>{item.event_type}</td>
                        <td>{item.event_amount}</td>
                        <td>{item.event_date}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default InventoryEvents
