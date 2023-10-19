import React from 'react'
// Redux imports
import { useSelector } from 'react-redux'
// ChildComponents
import ClientSummaryCard from './ClientSummaryCard'
// css
import './Clients.css'
import { Client } from '../models/client.model'
type RootState = {
    clients: Client[]
}


const Clients = () => {
    const clients:Client[] = useSelector((state:RootState) => state.clients)
    return (
        <div className='ClientsContainer Grid'>
            <header className='PageHeader'>
                <h2>
                    CLIENTS
                </h2>
            </header>
            {clients.map((client:Client) =>
                <ClientSummaryCard
                    client={client}
                />)}
        </div>
    )
}

export default Clients