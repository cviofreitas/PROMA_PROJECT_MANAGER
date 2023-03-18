import React from 'react'
// Redux imports
import { useSelector } from 'react-redux'
// ChildComponents
import ClientSummaryCard from './ClientSummaryCard.js'
// css
import './Clients.css'
const Clients = () => {
    const clients = useSelector(state => state.clients)
    return (
        <div className='ClientsContainer Grid'>
            <header className='PageHeader'>
                <h2>
                    CLIENTS
                </h2>
            </header>
            {clients.map(client =>
                <ClientSummaryCard
                    client={client}
                />)}
        </div>
    )
}

export default Clients