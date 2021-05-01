import React from 'react'

const Event = ({eventInfo, brewInfo, purchaseInfo, inventoryInfo}: any) => {

    // This is where I need join table for the event.
    return (
        <div>

        <table>
            {/* Table Header */}
            <tr>
                <th>id</th>
                <th>event type</th>
                <th>event date</th>
                <th>change amount</th>
                <th>user id</th>
                <th>brew id</th>
                <th>purchase id</th>
            </tr>

            {/* Table Information */}
            {eventInfo.map((item:any) => 
            <tr key={item.id} >
                <td >{item.id}</td>
                <td>{item.event_type}</td>
                <td>{item.event_date}</td>
                <td>{item.change_amount}</td>
                <td>{item.user_id}</td>
                <td>{item.brew_id}</td>
                <td>{item.purchase_id}</td>
            </tr>
            )}

        </table>
    </div>
    )
}

export default Event
