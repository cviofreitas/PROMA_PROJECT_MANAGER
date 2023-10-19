// react imports
import React from 'react';
import { useState, useEffect } from 'react'
// Router imports
import { Link } from 'react-router-dom';
// Redux imports
import { useSelector } from 'react-redux'
// CSS
import './Dashboard.css'
// Child Components import
import InvoiceSummaryCard from './components/InvoiceSummaryCard';
import FilterButtons from './components/FilterButtons';
import CompanySummary from './CompanySummary';
// MUI Components
import Button from '@mui/material/Button';
// helper funcs import
import displayByInvoiceNumber from '../HelperFuncs/displayByInvoiceNumber';
import { Client } from '../models/client.model'
type RootState = {
    clients: Client[]
}

const Dashboard = () => {
    const clients = useSelector((state:RootState) => state.clients)
    const [clientsArray, setClientsArray] = useState(displayByInvoiceNumber(clients))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const colors = {
        red: '#FC8C6D',
        yellow: '#F2DC7E',
        green: '#5AC464',
        blue: '#078AE6'
    }

    return (
        <div className='Dashboard'>
            <header className='PageHeader'>
                <h2>
                    DASHBOARD
                </h2>
            </header>

            <CompanySummary clients={clients} />

            <div className='DashboardActions'>
                <FilterButtons
                    colors={colors}
                    setClientsArray={setClientsArray}
                    clients={clients} />
                <Link
                    className='Links addInvoiceButton'
                    to={`/NewInvoice`}>
                    <Button
                        variant='contained'
                        sx={{
                            backgroundColor: 'var(--blue)',
                            '&:hover': {
                                backgroundColor: 'var(--darkestBlue)'
                            }
                        }}>
                        + Add Invoice
                    </Button>
                </Link>

            </div>

            <div className='Grid InvoiceSummaries'>
                {
                    clientsArray.map(({ id, customerName, projects }) =>
                        projects?.map(project =>
                            <Link
                                key={project.invoiceId}
                                // clientid={id}
                                className='Links'
                                to={`/InvoiceEditor/${id}/${project.invoiceId}`}>
                                <InvoiceSummaryCard
                                    id={id}
                                    customerName={customerName}
                                    project={project}
                                    colors={colors} />
                            </Link>)
                    )}
            </div>


        </div >
    )
}

export default Dashboard