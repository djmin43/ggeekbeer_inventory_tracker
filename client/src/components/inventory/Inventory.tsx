import React, { useContext, useEffect, useState } from 'react'
import { GetInventoryContext, InventoryContext, TodayContext } from '../../contextAPI/DataContext'
import '../../styling/Table.css'
import InventoryDesc from './InventoryDesc'


interface Inventory {
    id: number;
    inventory_name: string;
    inventory_type: string;
    inventory_amount: number;
    expiration_date: string;
    import_date: string;
    inventory_desc: string;
    events: any[]
}


const InventoryTable = () => {

    const getInventory = useContext(GetInventoryContext)
    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)

    const [inventoryTable, setInventoryTable] = useState<Inventory[]>([{
        id: 0,
        inventory_name: '',
        inventory_type: '',
        inventory_amount: 0,
        expiration_date: today,
        import_date: today,
        inventory_desc: '',
        events: [{
            event_type: '',
            event_desc: '',
            event_date: ''
        }]
    }])

    const [inventorySelected, setInventorySelected] = useState<Inventory>({
        id: 0,
        inventory_name: '',
        inventory_type: '',
        inventory_amount: 0,
        expiration_date: today,
        import_date: today,
        inventory_desc: '',
        events: [{
            event_type: '',
            event_desc: '',
            event_date: ''
        }]
    })

    const handleClick = (e: any) => {
        const event = e.target.getAttribute('data-value')
        const select = inventoryTable.filter((item:any )=> item.id === +event)
        // setEventSelect(select[0])
    }

    useEffect(() => {
        getInventory()
    }, [getInventory])

    useEffect(() => {
        setInventoryTable(inventoryInfo)
    }, [inventoryInfo])

    return (
        <div>
            <div className="tableContainer">
                <h2>재고상황</h2>
                
                <div className="table">
                    <div className="inventoryHeader header">
                        <div className="headerCell">
                            <p>이름</p>
                        </div>
                        <div className="headerCell">
                            <p>타입</p>
                        </div>
                        <div className="headerCell">
                            <p>재고양</p>
                        </div>
                        <div className="headerCell">
                            <p>유통기한</p>
                        </div>
                        <div className="headerCell">
                            <p>비고</p>
                        </div>
                    </div>

                    {inventoryTable.map((item: any) => 
                    <div key={item.id} className="inventoryRow row">
                            <div className="cell">
                                <p>{item.inventory_name}</p>
                            </div>
                            <div className="cell">
                                <p>{item.inventory_type}</p>
                            </div>
                            <div className="cell">
                                <p>{item.inventory_amount}</p>
                            </div>
                            <div className="cell" >
                                <p>{item.expiration_date}</p>
                            </div>
                            <div className="cell">
                                <p>{item.inventory_desc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InventoryTable
