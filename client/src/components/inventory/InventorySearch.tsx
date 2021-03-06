import React, { useState, useContext } from 'react'
import moment from 'moment'
import { InventoryContext } from '../../contextAPI/DataContext';


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

const InventorySearch = ({setInventory}:any) => {
    const month: string = moment().format('YYYY-MM');
    const inventoryInfo = useContext(InventoryContext)

    const [searchType, setSearchType] = useState<string>('default')
    
    const [targetMonth, setTargetMonth] = useState<string>(month)
    const [targetType, setTargetType] = useState<string>('default')

    // Change handlers
    const handleSearch = (e:any) => {
        e.preventDefault()
        setSearchType(e.target.value)
    }
    const handleMonth = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTargetMonth(e.target.value)
    }
    const handleType = (e:any) => {
        e.preventDefault()
        setTargetType(e.target.value)
    }

    // Search handler. If 'default(none)' is selected, return all.
    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault()
        if (searchType === "expire") {
            const targetInventory = inventoryInfo.filter((item:Inventory) => item.expiration_date.includes(targetMonth))
            setInventory(targetInventory)
        } else if (searchType === "type") {
            if (targetType === "default") {
                setInventory(inventoryInfo)
            } else {
                const targetInventory = inventoryInfo.filter((item:Inventory) => item.inventory_type.includes(targetType))
                setInventory(targetInventory)
            }
            console.log('type')
        } else if (searchType === "default") {
            setInventory(inventoryInfo)
        }
    }

    return (
        <div className="search">
            <form  onSubmit={handleSubmit} >
                <select onChange={handleSearch}>
                    <option value="default">??????????????? ???????????????</option>
                    <option value="expire">????????????</option>
                    <option value="type">??????</option>
                </select>

                {searchType === 'default' ? '' 
                : searchType === 'expire' ? 
                    <label>expiration date by month
                        <input type="month" value={targetMonth} onChange={handleMonth}></input>
                    </label>
                : searchType === 'type' ? 
                    <label>inventory type
                        <select onChange={handleType}>
                            <option value="default">????????? ??????????????????</option>
                            <option value="???">???</option>
                            <option value="??????">??????</option>
                            <option value="?????????">?????????</option>
                            <option value="?????????">?????????</option>
                        </select>
                    </label> 
                : ''}

                <button>Search</button>
            </form>
        </div>
    )
}

export default InventorySearch
