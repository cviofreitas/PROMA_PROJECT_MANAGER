import { React, useState, useEffect } from 'react'
// redux imports
import { useDispatch } from 'react-redux';
import { updateProjectService, deleteProjectService } from '../../ReduxSetUp/Reducers/clientsSlice';
// mui iports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';

var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});


const ServiceTableRow = ({ service, projectId, client, index }) => {
    const reduxDispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [serviceData, setServiceData] = useState({
        clientId: client.id,
        projectId,
        serviceId: service.id,
        service: service.service,
        description: service.description,
        qty: service.qty,
        rate: service.rate,
    })

    useEffect(() => {
        setServiceData({
            clientId: client.id,
            projectId,
            serviceId: service.id,
            service: service.service,
            description: service.description,
            qty: service.qty,
            rate: service.rate,
        })
    }, [projectId, service, client, index]);

    const serviceTotal = formatterUSD.format(service.rate * service.qty)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setServiceData(data => ({
            ...data,
            [name]: value
        }
        ))
    }

    const handleSubmit = () => {
        setEditMode(false)
        reduxDispatch(updateProjectService(serviceData))
    }
    const handleDelete = () => {
        setEditMode(false)
        console.log(serviceData.serviceId)
        reduxDispatch(deleteProjectService(serviceData))
    }

    return (
        <div className='ServiceSummary FlexRow FlexBetweens'>
            <p className='rowNum'>{index + 1}</p >
            <p className='service'>{service.service}</p >
            <p className='description'>{service.description}</p >
            <p className='qty'>{service.qty}</p >
            <p className='rate'>{formatterUSD.format(service.rate)}</p >
            <p className='amount'>{serviceTotal}</p >

            <Button
                id={serviceData.serviceId}
                className='RowButton'
                onClick={() => {
                    setEditMode(true)
                }}>
                <EditIcon />
            </Button>


            <Button
                className='RowButton'
                onClick={handleDelete}>
                <DeleteIcon />
            </Button>

            {editMode ?
                <div className='PopUpBackground'>
                    <form className='InfoForm'>
                        <TextField
                            className='FormInput'
                            variant='outlined' name='service'
                            label='Service'
                            value={serviceData.service}
                            type='text'
                            onChange={handleChange} />
                        <TextField
                            className='FormInput'
                            variant='outlined' name='description'
                            label='Description'
                            value={serviceData.description}
                            type=''
                            onChange={handleChange} />

                        <div className='FlexRow'>
                            <TextField
                                className='FormInput'
                                variant='outlined' name='qty'
                                label='QTY'
                                value={serviceData.qty}
                                type='number'
                                onChange={handleChange} />
                            <TextField
                                className='FormInput'
                                variant='outlined' name='rate'
                                label='Rate'
                                value={serviceData.rate}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                type='number'
                                onChange={handleChange} />
                        </div>
                        <div className='MarginLeft10 MarginBottom10'>
                            <h6>
                                Amount
                            </h6>
                            <h5>
                                {formatterUSD.format(serviceData.rate * serviceData.qty)}
                            </h5>
                        </div>
                        <Button
                            className='SaveButton'
                            onClick={() => handleSubmit()}>
                            save
                        </Button>


                    </form>
                </div> : <></>
            }
        </div>

    )
}

export default ServiceTableRow