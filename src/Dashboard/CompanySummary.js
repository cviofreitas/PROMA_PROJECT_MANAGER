import React from 'react'
// helperFuncs
import projectTotal from '../HelperFuncs/projectTotal'
// redux 
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';

var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});

const CompanySummary = ({ clients }) => {

    const allProjectsTotalArray = []
    const allProjectsTotalPaidArray = []

    let totalInvoices = 0
    clients.forEach(client =>
        client.projects.forEach(
            project => {
                totalInvoices += 1;
                allProjectsTotalArray.push(projectTotal(project));
                allProjectsTotalPaidArray.push(project.paid ? project.paid : 0)
            }

        ))

    const totalInvoiced = (allProjectsTotalArray.reduce((a, b) => a + b))
    const totalPaid = (allProjectsTotalPaidArray.reduce((a, b) => a + b))

    return (
        <div className='DashboardSummaries'>
            <div className="DashboardSummary">
                <button>
                    <ContactsOutlinedIcon />
                </button>

                <p>
                    CLIENTS
                </p>
                <h1>
                    {clients.length}
                </h1>
            </div>
            <div className="DashboardSummary">
                <button>
                    <DescriptionOutlinedIcon />
                </button>

                <p>
                    PROJECTS
                </p>
                <h1>
                    {totalInvoices}
                </h1>
            </div>
            <div className="DashboardSummary">
                <button>
                    <RequestQuoteOutlinedIcon />
                </button>

                <p>
                    INVOICED
                </p>
                <h1>
                    {formatterUSD.format(totalInvoiced)}
                </h1>
            </div>
            <div className="DashboardSummary">
                <button>
                    <CreditScoreOutlinedIcon />
                </button>

                <p>
                    PAID
                </p>
                <h1>
                    {formatterUSD.format(totalPaid)}
                </h1>
            </div>


        </div>
    )
}

export default CompanySummary