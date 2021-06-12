import React, { useContext, useEffect, useState } from 'react'
import { GetInventoryContext, InventoryContext, TodayContext } from '../../contextAPI/DataContext'
import '../../styling/Table.css'
import InventoryDesc from './InventoryDesc'
import InventoryTable from './InventoryTable'
import InventoryEvents from './InventoryEvents'
import InventoryEdit from './InventoryEdit'
import Inventorysearch from './InventorySearch'


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


const Inventory = () => {
    // UseContexts
    const getInventory = useContext(GetInventoryContext)
    const inventoryInfo = useContext(InventoryContext)
    const today = useContext(TodayContext)

    // Initial States
    const [descComp, setDescComp] = useState<boolean>(false)
    const [editComp, setEditComp] = useState<boolean>(false)
    const [inventory, setInventory] = useState<Inventory[]>([{
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

    const [inventorySelect, setInventorySelect] = useState<Inventory>({
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

    const closeDesc = (e: any) => {
        e.preventDefault()
        setDescComp(false)
    }

    const editInv = (e: any) => {
        e.preventDefault()
        setEditComp(!editComp)
    }

    useEffect(() => {
        getInventory()
    }, [getInventory])

    useEffect(() => {
        setInventory(inventoryInfo)
    }, [inventoryInfo])

    return (
        <div>
            <div className="tableContainer">
                <h2>재고상황</h2>
                    {/* This controls rendering for description and edit components */}
                    {descComp ?
                        <>
                            {editComp ? <>
                                            <InventoryEdit inventorySelect={inventorySelect}/>
                                            <button className="editButton" onClick={editInv}>개별재고</button>
                                        </>
                            : 
                                <>
                                    <InventoryDesc inventorySelect={inventorySelect} setInventorySelect={setInventorySelect} setDescComp={setDescComp}/>
                                    <InventoryEvents inventorySelect={inventorySelect} />
                                    <button className="editButton" onClick={editInv}>내용변경</button>
                                </>
                            }
                        <button className="closeButton" onClick={closeDesc}>재고테이블</button>
                        </> 
                    :
                    <>
                        <InventoryTable inventory={inventory} setInventory={setInventory} setInventorySelect={setInventorySelect} setDescComp={setDescComp} />

                        <Inventorysearch setInventory={setInventory} />
                    </>
                    }

            </div>
        </div>
    )
}

export default Inventory;
