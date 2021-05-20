import React, {useContext, useState, useEffect} from 'react'
import axios from 'axios'
import { GetInventoryContext, InventoryContext, TodayContext } from '../../contextAPI/DataContext'
import '../../styling/InventoryEdit.css'
import { useHistory } from 'react-router-dom'

const InventoryEdit = ({setEditing}: any) => {


    return (
        <div>
            <h1></h1>
            <div className="editContainer">
    
            </div>

        </div>
    )
}

export default InventoryEdit
