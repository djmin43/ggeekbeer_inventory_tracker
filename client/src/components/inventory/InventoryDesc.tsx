import React from 'react'
import InventoryEvents from './InventoryEvents'

const InventoryDesc = ({inventorySelect, setDescComp}: any) => {



    return (
        <div >
            <div className="table">
                <div className="descHeader header">
                    <div className="headerCell">
                        <h4>{inventorySelect.inventory_name}</h4>
                    </div>
                </div>
                <div className="descRow">
                    <div className="descCell">
                        <p><b>재고타입:</b> {inventorySelect.inventory_type}</p>
                        <p><b>재고양:</b> {inventorySelect.inventory_amount}</p>
                        <p><b>유통기한:</b> {inventorySelect.expiration_date}</p>
                        <p><b>입고날짜:</b> {inventorySelect.import_date}</p>
                        <h3>재고설명</h3>
                        <span>{inventorySelect.inventory_desc}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InventoryDesc
