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


const ServiceTableRowMobile = ({ service, projectId, client, index }) => {
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
        <div className='ServiceSummaryMobile FlexColumn FlexBetweens '>
            <div className='MobileCardContainer'>
                <div className='ServiceCardContainer'>
                    <div className='FlexRow FlexCenter FlexBetween'>
                        <div className='serviceMobile'>
                            <h5>
                                Service
                            </h5>
                            <h6>
                                {service.service}
                            </h6>
                        </div>
                        <h2 id='indexNumber'>#{index + 1}</h2>
                    </div>


                    <div className='descriptionMobile MarginTop10'>
                        <h5>
                            Description
                        </h5>
                        <h6>
                            {service.description}
                        </h6>
                    </div>

                    <div className='FlexRow FlexBetween MarginTop20'>
                        <div className='qtyMobile FlexRow'>
                            <h5 className='MarginRight10'>
                                qty
                            </h5>
                            <h3>
                                {service.qty}
                            </h3>
                        </div>
                        <div className='rateMobile FlexRow'>
                            <h5 className='MarginRight10'>
                                rate
                            </h5>
                            <h3>
                                {formatterUSD.format(service.rate)}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='BottomCard FlexRow FlexBetween FlexCenter'>
                    <div className='amountMobile FlexColumn '>
                        <h5 className='MarginRight20'>
                            Service Total
                        </h5>
                        <h3>
                            {serviceTotal}
                        </h3>
                    </div>
                    <div>
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
                    </div>
                </div>
            </div>



            {editMode ?
                <div className='PopUpBackground'>
                    <form className='InfoForm'>
                        <div className='FlexColumn Gap10'>
                            <TextField
                                className='FormInput fullWidthInput'
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
                        </div>

                        <div className='FlexRow Gap10 MarginTop10'>
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
                        <div className='MarginTop10 MarginBottom10'>
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

export default ServiceTableRowMobile