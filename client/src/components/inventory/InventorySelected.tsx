
const InventorySelected = ({inventorySelected}:any) => {
    return (

        <div>
            <div className="tableContainer">
                <h2>재고상황</h2>
                <div className="table">
                    <div className="inventorySelectedHeader header ">
                        <div className="headerCell">
                            <p>재료이름</p>
                        </div>
                        <div className="headerCell">
                            <p>재고양</p>
                        </div>
                        <div className="headerCell">
                            <p>유통기한</p>
                        </div>
                        <div className="headerCell">
                            <p>설명</p>
                        </div>
                    </div>

                <div className="inventorySelectedRow row">
                    <div className="cell">
                        <p>{inventorySelected.inventory_name}</p>
                    </div>
                    <div className="cell">
                        <p>{inventorySelected.inventory_amount}</p>
                    </div>
                    <div className="cell">
                        <p>{inventorySelected.expiration_date}</p>
                    </div>
                    <div className="cell">
                        <p>{inventorySelected.inventory_desc}</p>
                    </div>
                        
                    </div>
                </div>

            </div>
        </div>



    )
}

export default InventorySelected
