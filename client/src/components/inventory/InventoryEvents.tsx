import React, {useContext} from 'react'
import { InventoryContext } from '../../contextAPI/DataContext'
import '../../styling/Table.css'

const InventoryEvents = ({selectIndex}:any) => {
    const inventoryInfo = useContext(InventoryContext)

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
                    {inventoryInfo[selectIndex].events.map((item:any, index:number) => 
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
