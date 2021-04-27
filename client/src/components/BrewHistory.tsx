import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BrewHistory = () => {
    
    const [brewInfo, setBrewInfo] = useState([])

    const getBrewInfo = async () => {
        const brewInfo = await axios.get('info/brew');
        await setBrewInfo(brewInfo.data)
        console.log(brewInfo)
    };

    useEffect(() =>
    {
        getBrewInfo()
    }, []);
    
    return (
        <div>
            Brew History
        <table>
            {/* Table Header */}
            <tr>
                <th>id</th>
                <th>brew date</th>
                <th>brew name</th>
                <th>brew type</th>
                <th>desription</th>
            </tr>

            {/* Table Information */}
            {brewInfo.map((item:any) => 
            <tr >
                <td >{item.id}</td>
                <td>{item.brew_date}</td>
                <td>{item.brew_name}</td>
                <td>{item.brew_type}</td>
                <td>{item.brew_description}</td>
            </tr>
            )}

        </table>
    </div>
    )
}

export default BrewHistory
