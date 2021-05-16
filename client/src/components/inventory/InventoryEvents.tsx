import React, {useContext} from 'react'
import { InventoryContext } from '../../DataContext'

const InventoryEvents = ({selectIndex}:any) => {
    const inventoryInfo = useContext(InventoryContext)

    return (
        <div>
            {/* TABLE#2 - events */}
            <table>
                <thead>
                    <tr>
                        <th>이벤트타입</th>
                        <th>양</th>
                        <th>날짜</th>
                        <th>비고</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryInfo[selectIndex].events.map((item:any, index:number) => 
                    <tr key={index}>
                        <td>{item.event_type}</td>
                        <td>{item.event_amount}</td>
                        <td>{item.event_date}</td>
                        <td>{item.event_desc}</td>
                    </tr>
                    )}
                </tbody>
            </table>
    
        </div>
    )
}

export default InventoryEvents
