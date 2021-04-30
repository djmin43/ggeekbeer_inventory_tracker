import React, { useState, useEffect } from 'react';
import AddBrew from './AddBrew'
import axios from 'axios'

const Brew = ({brewInfo}: any) => {

    return (
        <div>
            <h1>Add New Brew</h1>
            <AddBrew />
            <h1>Brew History</h1>
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
            <tr key={item.id} >
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

export default Brew
