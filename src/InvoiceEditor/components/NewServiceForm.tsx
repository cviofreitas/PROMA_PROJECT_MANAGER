import React from 'react';
import { useState, useEffect } from 'react'
// mui iports
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
// css import
import './NewServiceForm.css'
// uuid import
import uuid from 'react-uuid';
// redux imports
import { useDispatch } from 'react-redux';
import { addProjectService } from '../../ReduxSetUp/Reducers/clientsSlice';

import {Project} from '../../models/project.model';
import {Client} from '../../models/client.model'
var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});

type NewServiceFormProps = {
    projectId: number;
    client: Client;
    project: Project;
}

const NewServiceForm = ({ projectId, client, project }: NewServiceFormProps) => {


    const reduxDispatch = useDispatch()

    const [formData, setFormData] = useState({
        clientId: client.id,
        projectId,
        serviceId: uuid(),
        service: '',
        description: '',
        qty: '',
        rate: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        reduxDispatch(addProjectService(formData))
    }

    useEffect(() => {
        setFormData({
            clientId: client.id,
            projectId,
            serviceId: uuid(),
            service: '',
            description: '',
            qty: '',
            rate: '',

        })
    }, [project.services.length]);

    return (
        <div className='ServiceSummary FlexRow FlexBetween NewServiceForm'>
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
                value={formatterUSD.format(Number(formData.qty) * Number(formData.rate))} />
            <Button
                className='SaveButton'
                onClick={handleSubmit}>
                <AddIcon />
            </Button>
        </div>
    )
}

export default NewServiceForm