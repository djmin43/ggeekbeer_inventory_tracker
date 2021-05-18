import React, { useState, useEffect, useContext } from 'react';
import { InventoryContext, GetInventoryContext, TodayContext, } from '../../contextAPI/DataContext';
import InventoryTable from './InventoryTable'
import InventoryDetail from './InventoryDetail'

// {inventoryInfo, getInventoryInfo,
const Inventory = () => {
    const inventoryInfo = useContext(InventoryContext)
    const getInventoryInfo = useContext(GetInventoryContext)
    const today = useContext(TodayContext)

    useEffect( () => {
        getInventoryInfo()
        console.log(inventoryInfo)
    }, [])

    return (
        <div>
            <h1>Inventory Table</h1>
            <InventoryDetail />
            <InventoryTable />
        </div>
    )
}

export default Inventory

