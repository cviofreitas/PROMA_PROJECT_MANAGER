import { React, useState, useEffect } from 'react'
// mui iports
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
// uuid import
import uuid from 'react-uuid';
// child components
import NewInvoiceServiceTable from './NewInvoiceServiceTable';


var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});

const NewInvoiceServicesForm = ({ setProjectFormState, projectFormState, client, projectId }) => {

    // service form data state
    const [formData, setFormData] = useState({
        service: '',
        description: '',
        qty: '',
        rate: '',
    })

    // update form data state
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    // updated projectFormState
    const handleSubmit = () => {
        setProjectFormState({
            ...projectFormState,
            services: [...projectFormState.services,
            {
                id: uuid(),
                ...formData
            }]
        })
    }

    // reset form when services are added
    useEffect(() => {
        setFormData({
            service: '',
            description: '',
            qty: '',
            rate: '',

        })
    }, [projectFormState.services.length]);

    return (
        <div className='ServiceItems MarginLeft20 Padding20 Desktop'>
            <h3>
                Services
            </h3>
            <div className='ServiceSummary FlexRow FlexBetween NewServiceForm MarginTop20'
                style={{
                    borderRadius: '10px',
                    border: '1px solid lightgray'
                }}>
                <TextField
                    variant='standard'
                    name='service'
                    size='small'
                    className='serviceForm'
                    label='Service'
                    onChange={handleChange}
                    value={formData.service} />
                <TextField
                    variant='standard'
                    name='description'
                    size='small'
                    className='descriptionForm'
                    label='Description'
                    onChange={handleChange}
                    value={formData.description} />
                <TextField
                    variant='standard'
                    name='qty'
                    type='number'
                    size='small'
                    className='qtyForm'
                    label='qty'
                    onChange={handleChange}
                    value={formData.qty} />
                <TextField
                    variant='standard'
                    name='rate'
                    type='number'
                    size='small'
                    className='rateForm'
                    label='rate'
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    value={formData.rate} />
                <TextField
                    variant='standard'
                    size='small'
                    className='amountForm'
                    label='amount'
                    InputProps={{
                        readOnly: true,
                    }}
                    value={formatterUSD.format(formData.qty * formData.rate)} />
                <Button
                    className='SaveButton'
                    onClick={handleSubmit}>
                    <AddIcon />
                </Button>
            </div>

            <NewInvoiceServiceTable
                projectId={projectId}
                client={client}
                setProjectFormState={setProjectFormState}
                projectFormState={projectFormState}
            />

        </div>
    )
}

export default NewInvoiceServicesForm