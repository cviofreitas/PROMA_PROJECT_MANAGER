import React from 'react';
import { useState } from 'react'
// child components import
import ServiceTableRow from './ServiceTableRow';
import ServiceTableRowMobile from './ServiceTableRowMobile'
import NewServiceForm from './NewServiceForm';
// css imports
import './ServicesTable.css'
// mui
import { Button } from '@mui/material';
import NewServiceFormMobile from './NewServiceFormMobile';


import {Client} from '../../models/client.model'

type ServicesTableProps = {
    projectId: number;
    client: Client
}

const ServicesTable = ({ projectId, client }: ServicesTableProps) => {
    const [editMode, setEditMode] = useState(false)
    const project = client.projects?.filter(project => project.invoiceId == projectId)[0]

    return (
        <>
            <div className='servicesTableContainer'>
                <div className='FlexRow TableTitle FlexBetween'>
                    <h3>Services</h3>
                </div>
                <div className='table'>
                    <div className='FlexRow CustomTableHeader'>
                        <h5 className='rowNum'>#</h5>
                        <h5 className='service'>SERVICE</h5>
                        <h5 className='description'>DESCRIPTION</h5>
                        <h5 className='qty'>QTY</h5>
                        <h5 className='rate'>RATE</h5>
                        <h5 className='amount'>AMOUNT</h5>
                        <h5 className='button'></h5>
                        <h5 className='button'></h5>
                    </div>
                    {project?.services.map((service, index) =>
                        <ServiceTableRow
                            service={service}
                            projectId={projectId}
                            client={client}
                            index={index} />)}
                </div>
                <NewServiceForm
                    project={project}
                    projectId={projectId}
                    client={client} />
            </div>

            <div className='servicesCardsContainer Mobile'>
                <Button
                    id='AddService'
                    onClick={() => setEditMode(true)}>
                    Add Service
                </Button>
                {editMode ? <NewServiceFormMobile
                    setEditMode={setEditMode}
                    project={project}
                    projectId={projectId}
                    client={client} /> : <></>}
                {project?.services.map((service, index) =>
                    <ServiceTableRowMobile
                        service={service}
                        projectId={projectId}
                        client={client}
                        index={index} />)}
            </div>

        </>
    )
}

export default ServicesTable