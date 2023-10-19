import React from 'react'
// CSS imports
import './invoiceSummaryCard.css'
// helperFuncs imports
import useIsOverdue from '../../HelperFuncs/useIsOverdue';
import useDisplayDate from '../../HelperFuncs/useDisplayDate';
import useGetProjectTotal from '../../HelperFuncs/useGetProjectTotal';
// Child Components imports
import ServicesList from './ServicesList';
import { CustomerName } from '../../models/client.model';
import { Project } from '../../models/project.model';

var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});

type Colors = {
    [key: string]: string;
  }

type InvoiceSummaryCardProps = {
    id: string | number;
    customerName: CustomerName;
    project: Project;
    colors: Colors
}

const InvoiceSummaryCard = ({ id, customerName, project, colors }: InvoiceSummaryCardProps) => {

    const projectTotal = useGetProjectTotal(project)
    const Balance = projectTotal - project.paid
    const { red, yellow, green } = colors
    let color = yellow
    if (Balance <= 0) {
        color = green
    }
    if (useIsOverdue(project.dueDate) && Balance > 0) {
        color = red
    }

    return (
        <div className='SummaryCard'
            id={`${id}`}>
            <div
                className='statusBar'
                style={{
                    backgroundColor: `${color}`
                }} />


            <div className='infoContainer'>
                <div className='summaryHeader'>
                    <h4>INVOICE# {project.invoiceId}</h4>
                    <h3>
                        {customerName.last}, {customerName.first}
                    </h3>
                </div>
                <div className='Breakdown'>
                    <div className='Totals'>
                        <h5>Invoiced</h5>
                        <p>{formatterUSD.format(projectTotal)}</p>
                    </div>
                    <div className='Totals Right'>
                        <h5>Balance</h5>
                        <p>{formatterUSD.format(Balance)}</p>
                    </div>

                </div>
                <div className='Breakdown DueDate'>
                    <div>
                        <h5>Due Date:</h5>
                        <h4>{useDisplayDate(project.dueDate)}</h4>
                    </div>
                </div>
                <div className='ServicesContainer'>
                    <div className='ServicesTitle'>
                        <h4>Project Name:</h4>
                        <h3>{project.projectName}</h3>
                    </div>

                    <ServicesList services={project.services} />
                </div>
            </div>
        </div>
    )
}

export default InvoiceSummaryCard