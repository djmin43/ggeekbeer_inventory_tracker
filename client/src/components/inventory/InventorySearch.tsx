import React, { useState, useContext } from 'react'
import moment from 'moment'
import { InventoryContext } from '../../contextAPI/DataContext';

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
    const handleMonth = (e:any) => {
        e.preventDefault()
        setTargetMonth(e.target.value)
    }
    const handleType = (e:any) => {
        e.preventDefault()
        setTargetType(e.target.value)
    }

    // Search handler. If 'default(none)' is selected, return all.
    const handleSubmit = (e:any) => {
        e.preventDefault()
        if (searchType === "expire") {
            const targetInventory = inventoryInfo.filter((item:any) => item.expiration_date.includes(targetMonth))
            setInventory(targetInventory)
        } else if (searchType === "type") {
            if (targetType === "default") {
                setInventory(inventoryInfo)
            } else {
                const targetInventory = inventoryInfo.filter((item:any) => item.inventory_type.includes(targetType))
                setInventory(targetInventory)
            }
            console.log('type')
        } else if (searchType === "default") {
            setInventory(inventoryInfo)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <select onChange={handleSearch}>
                    <option value="default">검색항목을 선택하세요</option>
                    <option value="expire">유통기한</option>
                    <option value="type">타입</option>
                </select>

                {searchType === 'default' ? '' 
                : searchType === 'expire' ? 
                    <label>expiration date by month
                        <input type="month" value={targetMonth} onChange={handleMonth}></input>
                    </label>
                : searchType === 'type' ? 
                    <label>inventory type
                        <select onChange={handleType}>
                            <option value="default">타입을 선택해주세요</option>
                            <option value="홉">홉</option>
                            <option value="몰트">몰트</option>
                            <option value="이스트">이스트</option>
                            <option value="부재료">부재료</option>
                        </select>
                    </label> 
                : ''}

                <button>Search</button>
            </form>
        </div>
    )
}

export default InventorySearch
