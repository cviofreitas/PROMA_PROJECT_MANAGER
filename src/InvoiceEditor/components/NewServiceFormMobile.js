import { React, useState, useEffect } from 'react'
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

var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});


const NewServiceFormMobile = ({ projectId, client, project, setEditMode }) => {


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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        reduxDispatch(addProjectService(formData));
        setEditMode(false)
    }

    useEffect(() => {
        console.log('effected')
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
        <div className='PopUpBackground'>
            <form className='InfoForm '
                onSubmit={handleSubmit}>
                <div className='FlexColumn Gap10'>
                    <TextField
                        className='fullWidthInput'
                        variant='outlined'
                        name='service'
                        label='Service'
                        onChange={handleChange}
                        value={formData.service} />
                    <TextField
                        className='fullWidthInput'
                        variant='outlined'
                        name='description'
                        label='Description'
                        onChange={handleChange}
                        value={formData.description} />
                </div>
                <div className='FlexRow Gap10 MarginTop10'>
                    <TextField

                        variant='outlined'
                        name='qty'
                        type='number'
                        className='FormInput fullWidthInput'
                        label='qty'
                        onChange={handleChange}
                        value={formData.qty} />
                    <TextField
                        variant='outlined'
                        name='rate'
                        type='number'
                        className='FormInput fullWidthInput'
                        label='rate'
                        onChange={handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        value={formData.rate} />
                </div>
                <div className='MarginTop10'>
                    <h6>
                        Amount
                    </h6>
                    <h5>
                        {formatterUSD.format(formData.qty * formData.rate)}
                    </h5>
                </div>
                <div className='MarginTop10'>
                    <Button
                        className='SaveButton'
                        onClick={handleSubmit}>
                        Add
                    </Button>
                    <Button
                        className='SaveButton'
                        onClick={() => setEditMode(false)}>
                        Cancel
                    </Button>
                </div>

            </form>
        </div>
    )
}

export default NewServiceFormMobile