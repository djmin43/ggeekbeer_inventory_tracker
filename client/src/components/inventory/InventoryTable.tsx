import React from 'react'

const InventoryTable = ({inventory, setInventory, setInventorySelect, setDescComp}: any) => {

    const handleClick = (e: any) => {
        const inventoryId = e.target.getAttribute('data-value')
        const select: any = inventory.filter((item:any )=> item.id === +inventoryId)
        setInventorySelect(select[`0`])
        setDescComp(true)
    }

    


    return (
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
        </div>
        {inventory.map((item: any) => 
        <div key={item.id} className="inventoryRow row">
                <div className="cell">
                    <p data-value={item.id} onClick={handleClick}>{item.inventory_name}</p>
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

            </div>
        )}
    </div>
    )
}

export default InventoryTable
