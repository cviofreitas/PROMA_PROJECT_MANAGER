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

const NewInvoiceServiesFormMobile = ({ setProjectFormState, projectFormState, client, projectId }) => {

    const [formData, setFormData] = useState({
        service: '',
        description: '',
        qty: '',
        rate: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

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

    useEffect(() => {
        setFormData({
            service: '',
            description: '',
            qty: '',
            rate: '',

        })
    }, [projectFormState.services.length]);


    return (
        <div className='NewInvoiceServiceFormMobile'>
            <div className='ServiceFormMobile FlexColumn'
                style={{
                    borderRadius: '20px',
                    border: '1px solid lightgray'
                }}>
                <div>
                    <TextField
                        className='fullWidthInput'
                        variant='standard'
                        name='service'
                        size='small'
                        label='Service'
                        onChange={handleChange}
                        value={formData.service} />
                    <TextField
                        className='fullWidthInput'
                        variant='standard'
                        name='description'
                        size='small'
                        label='Description'
                        onChange={handleChange}
                        value={formData.description} />
                </div>
                <div className='FlexRow'>
                    <TextField
                        variant='standard'
                        name='qty'
                        type='number'
                        size='small'
                        label='qty'
                        onChange={handleChange}
                        value={formData.qty} />
                    <TextField
                        variant='standard'
                        name='rate'
                        type='number'
                        size='small'
                        label='rate'
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        value={formData.rate} />
                    <TextField
                        variant='standard'
                        size='small'
                        label='amount'
                        InputProps={{
                            readOnly: true,
                        }}
                        value={formatterUSD.format(formData.qty * formData.rate)} />
                </div>



                <Button

                    className='SaveButton'
                    onClick={handleSubmit}
                    sx={{
                        backgroundColor: 'var(--lightGray) !important',
                        border: '1px solid lightgray'

                    }}>
                    <AddIcon
                        sx={{
                            color: 'var(--darkestBlue)'
                        }} />
                </Button>
            </div>

            {/* <NewInvoiceServiceTable
                projectId={projectId}
                client={client}
                setProjectFormState={setProjectFormState}
                projectFormState={projectFormState}
            /> */}


        </div >
    )
}

export default NewInvoiceServiesFormMobile