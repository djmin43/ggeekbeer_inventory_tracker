import React, { useContext, useState } from 'react'
import moment from 'moment'
import axios from 'axios'

export const TodayContext = React.createContext<string>('')
export const InventoryContext = React.createContext<any>('')
export const GetInventoryContext = React.createContext<any>('')
export const BrewContext = React.createContext<any>('')
export const GetBrewContext = React.createContext<any>('')
export const PurchaseContext = React.createContext<any>('')
export const GetPurchaseContext = React.createContext<any>('')
export const EventContext = React.createContext<any>('')
export const GetEventContext = React.createContext<any>('')


export const DataProvider = ({children}:any) => {
    const today: string = moment().format('YYYY-MM-DD');
    const [inventoryInfo, setInventoryInfo] = useState<any>([])
    const [brewInfo, setBrewInfo] = useState<any>([])
    const [purchaseInfo, setPurchaseInfo] = useState<any>([])
    const [eventInfo, setEventInfo] = useState<any>([])

    const getInventoryInfo = async (): Promise<any> => {
        try {
            const res = await axios.get('/inventory/data')
            const inventoryInfo = await res.data
            inventoryInfo.forEach((item:any) => item.expiration_date = moment().format('YYYY-MM-DD'))
            await setInventoryInfo(inventoryInfo)
        } catch(error) {
            console.log(error)
        }
    };

    const getBrewInfo = async (): Promise<any> => {
        try {
            const res = await axios.get('brew/data')
            const brewInfo = await res.data
            await brewInfo.forEach((item:any) => item.brew_date = moment().format('YYYY-MM-DD'))
            console.log(brewInfo)
            await setBrewInfo(brewInfo)
        } catch(error) {
            console.log(error)
        }
    };

    const getPurchaseInfo = async (): Promise<any> => {
        try {
            const res = await axios.get('/purchase/data')
            const purchaseInfo = await res.data
            console.log(purchaseInfo)
            await purchaseInfo.forEach((item:any) => {
              item.purchase_date = moment().format('YYYY-MM-DD')
              item.expiration_date = moment().format('YYYY-MM-DD')
            })
            await setPurchaseInfo(purchaseInfo)
        } catch(error) {
            console.log(error)
        }
    };

    const getEventInfo = async (): Promise<any> => {
        try {
            const res = await axios.get('/event/data')
            const eventInfo = await res.data
            await eventInfo.forEach((item: any) => {
                item.event_date = moment().format('YYYY-MM-DD')
            })
            await setEventInfo(eventInfo)
        } catch(error) {
            console.log(error)
        }
      };

    return (
        <TodayContext.Provider value={today}>
            <InventoryContext.Provider value={inventoryInfo}>
            <GetInventoryContext.Provider value={getInventoryInfo}>
                <BrewContext.Provider value={brewInfo}>
                <GetBrewContext.Provider value={getBrewInfo}>
                        <EventContext.Provider value={eventInfo}>
                        <GetEventContext.Provider value={getEventInfo}>
                            <PurchaseContext.Provider value={purchaseInfo}>
                            <GetPurchaseContext.Provider value={getPurchaseInfo}>
                                    {children}
                            </GetPurchaseContext.Provider>    
                            </PurchaseContext.Provider>
                        </GetEventContext.Provider>
                        </EventContext.Provider>
                </GetBrewContext.Provider>
                </BrewContext.Provider>
            </GetInventoryContext.Provider>
            </InventoryContext.Provider>
        </TodayContext.Provider>

    )
}

