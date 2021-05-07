import React, {useEffect} from 'react'
import AddBrew from '../brew/AddBrew'
import axios from 'axios'

const Brew = ({brewInfo, getBrewInfo, today}: any,) => {



    useEffect(() => {
        getBrewInfo()
    }, [])

    return (
        <div>
            <AddBrew today={today}/>
            <h1>Brew History</h1>
        <table>
            {/* Table Header */}
            <thead>
            <tr>
                <th>id</th>
                <th>brew date</th>
                <th>brew name</th>
                <th>brew type</th>
                <th>desription</th>
            </tr>
            </thead>

            {/* Table Information */}
            <tbody>
            {brewInfo.map((item:any) => 
            <tr key={item.id} >
                <td >{item.id}</td>
                <td>{item.brew_date}</td>
                <td>{item.brew_name}</td>
                <td>{item.brew_type}</td>
                <td>{item.brew_description}</td>
            </tr>
            )}
            </tbody>

        </table>
    </div>
    )
}

export default Brew
