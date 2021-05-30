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




const InventoryTable = ({inventory, setInventorySelect, setDescComp, setInventory}: any) => {

    const handleClick = (e: any) => {
        const inventoryId = e.target.getAttribute('data-value')
        const select: any = inventory.filter((item:Inventory )=> item.id === +inventoryId)
        setInventorySelect(select[`0`])
        setDescComp(true)
    }
    
    // SORT BY DATE (TOGGLE)
    const sortByDate = () => {
        if (new Date(inventory[0].expiration_date).valueOf() < new Date(inventory[inventory.length -1 ].expiration_date).valueOf()) {
            const sortedInventory = inventory.slice(0).sort((a: Inventory, b:Inventory) => {return new Date(b.expiration_date).valueOf() - new Date(a.expiration_date).valueOf()})
            setInventory(sortedInventory)
        } else {
            const sortedInventory = inventory.slice(0).sort((a: Inventory, b:Inventory) => {return new Date(a.expiration_date).valueOf() - new Date(b.expiration_date).valueOf()})
            setInventory(sortedInventory)
        }
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
            <div className="headerCell dateHeader" onClick={sortByDate}>
                <p>유통기한</p>
            </div>
        </div>
        {inventory.map((item: Inventory) => 
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
