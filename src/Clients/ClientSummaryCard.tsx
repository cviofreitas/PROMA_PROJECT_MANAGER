import React from 'react';
import {  useState } from 'react'

import ClientInfo from '../InvoiceEditor/SideBarComponents/ClientInfo';
import ClientInfoEditor from '../InvoiceEditor/SideBarComponents/ClientInfoEditor'
import ProjectsSummary from '../InvoiceEditor/SideBarComponents/ProjectsSummary'
// mui imports
import { Link } from 'react-router-dom';
import { Client } from '../models/client.model';

type ClientSummaryCardProps ={
    client: Client
}
const ClientSummaryCard = ( {client}:ClientSummaryCardProps ) => {
    // show edit client info if true
    const [editMode, setEditMode] = useState(false)

    return (
        <div className='ClientSummaryCard'>
            <ClientInfo
                client={client}
                setEditMode={setEditMode} />
            <div className='ProjectSummaryContainer'>
                <h6 className='MarginTop10'>
                    PROJECTS
                </h6>
                <div className='SummaryContainer'>
                    {client.projects.map(project =>
                        <Link
                            to={`/InvoiceEditor/${client.id}/${project.invoiceId}`}
                            className='Links'
                            style={{
                                color: 'white'
                            }}>
                            <ProjectsSummary project={project} />
                        </Link>
                    )}
                </div>
                <Link className='NewProjectButton'
                    to={`/NewInvoice/${client.id}?`}>
                    <h3 >NEW INVOICE</h3>
                </Link>
            </div>
            {editMode ?
                <ClientInfoEditor client={client} setEditMode={setEditMode} /> : <></>
            }

        </div>
    )
}

export default ClientSummaryCard