import React, { useState } from 'react'

const InventoryDetail = ({inventoryInfo}: any) => {

    const [selectDetail, setSelectDetail] = useState<any>([

    ])

    const handleChange = async (e: any) => {
        e.preventDefault()
        await setSelectDetail(inventoryInfo[e.target.value])
    }

    return (
        <div>
            <h1>재료정보</h1>
            <select onChange={handleChange}>
                <option>원하시는 재고를 고르세요.</option>
                {inventoryInfo.map((item:any, index: number) => 
                    <option key={index} value={index}>{item.inventory_name}</option>
                )}
            </select>

            <div>
                <p>재료이름: </p>{selectDetail.inventory_name}
                <p>재료내용</p>{selectDetail.events.map((item:any) =>
                <div> 
                <p>{item.event_type}</p>
                <p>{item.event_amount}</p>
                </div>
                )}
            </div>


        </div>
    )
}

export default InventoryDetail
