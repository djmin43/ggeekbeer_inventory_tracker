
const InventorySelected = ({inventorySelected}:any) => {
    return (
        <div>
            <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>재료이름: </th>
                        <th>재료양: </th>
                        <th>유통기한: </th>
                        <th>재료설명: </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{inventorySelected.inventory_name}</td>
                        <td>{inventorySelected.inventory_amount}</td>
                        <td>{inventorySelected.expiration_date}</td>
                        <td>{inventorySelected.inventory_desc}</td>
                    </tr>
                </tbody>
            </table> 
            </div>

        </div>
    )
}

export default InventorySelected
