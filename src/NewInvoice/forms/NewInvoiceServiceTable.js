import { React, useState } from 'react'
import NewInvoiceServiceTableRow from './NewInvoiceServiceTableRow'
const NewInvoiceServiceTable = ({ projectId, client, setProjectFormState, projectFormState }) => {

    const [editMode, setEditMode] = useState(false)
    const project = client.projects.filter(project => project.invoiceId == projectId)[0]
    return (
        <div>
            <div className='FlexRow CustomTableHeader MarginTop20'>
                <h5 className='rowNum'>#</h5>
                <h5 className='service'>SERVICE</h5>
                <h5 className='description'>DESCRIPTION</h5>
                <h5 className='qty'>QTY</h5>
                <h5 className='rate'>RATE</h5>
                <h5 className='amount'>AMOUNT</h5>
                <h5 className='button'></h5>
                <h5 className='button'></h5>
            </div>
            <div>
                {project.services.map((service, index) =>
                    <NewInvoiceServiceTableRow
                        service={service}
                        index={index}
                        setProjectFormState={setProjectFormState}
                        projectFormState={projectFormState}
                    />)}
            </div>
        </div>
    )
}

export default NewInvoiceServiceTable