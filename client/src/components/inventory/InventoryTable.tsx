import React, { useContext, useEffect } from 'react'
import { GetInventoryContext, InventoryContext } from '../../contextAPI/DataContext'
import '../../styling/Table.css'

const InventoryTable = () => {

    const getInventory = useContext(GetInventoryContext)
    const inventoryInfo = useContext(InventoryContext)

    useEffect(() => {
        getInventory()
        console.log('getinventory')
    }, [getInventory])

    return (
        <div>
            <div className="tableContainer">
                <h1>이벤트 로그</h1>
                <div className="table">
                    <div className="inventoryHeader">
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

                    {inventoryInfo.map((item: any) => 
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
