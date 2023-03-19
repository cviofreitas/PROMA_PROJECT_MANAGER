import { React, useEffect, useState } from 'react'
// mui imports
import { TextField, Button, Autocomplete } from '@mui/material';
// local data import
import states from '../../LocalData/states';
import clientActions from '../../LocalData/clientActions';
// redux import
import { useSelector } from 'react-redux';
// helper funcs
import projectByClientName from '../../HelperFuncs/projectByClientName';
// react router 
import { useParams } from 'react-router-dom';

const NewInvoiceClientForm = ({ formState, dispatch, initialState, existingClient, setExistingClient, required }) => {
    // dispatch actions
    const {
        updateClientAddress,
        updateClientEmail,
        updateClientName,
        updateClientPhoneNumber,
        useExistingClient,
        resetForm } = clientActions

    // used for autocomplete form
    const [value, setValue] = useState(
        null
    );
    const [inputValue, setInputValue] = useState('');

    const clients = useSelector(state => state.clients)

    const { id } = useParams()

    // fills out form only on initial render
    useEffect(() => {
        if (id) {
            dispatch({
                type: useExistingClient,
                value: projectByClientName(clients, { id: id })
            })
            setValue(`${projectByClientName(clients, { id: id })[0].customerName.first} ${projectByClientName(clients, { id: id })[0].customerName.last}  `)
        }
    }, [id])


    // client objects for auto complete options
    const clientNames = clients.map(client => ({
        label: `${client.customerName.first} ${client.customerName.last}`,
        id: client.id
    }))




    console.log(existingClient)
    return (
        <div >
            <div className='MarginTop10'>
                <button className={`clientSelectButton ${existingClient ? 'active' : ''}`}

                    onClick={() => setExistingClient(true)}>
                    Existing Client
                </button>
                <button
                    className={`clientSelectButton ${existingClient ? '' : 'active'}`}
                    onClick={() => {
                        setValue('')
                        setExistingClient(false)
                        dispatch({
                            type: useExistingClient,
                            value: [initialState]
                        })
                    }}>
                    New Client
                </button>
            </div>
            <form >
                <div className='FlexRow FlexCenter Gap10'>
                    {
                        existingClient ? <>
                            {/* Autocomplete allows user to select an exisiting client and autofills the rest of the form */}
                            <Autocomplete
                                required={true}
                                disablePortal
                                id="client-names"
                                options={clientNames}
                                size="small"
                                sx={{
                                    width: '50%',
                                }}
                                value={value}
                                onChange={(event, newValue) => {

                                    setValue(newValue)
                                    // if value != null then update form with client info, else clear form to initial state
                                    newValue ?
                                        dispatch({
                                            type: useExistingClient,
                                            value: projectByClientName(clients, newValue)
                                        }) :
                                        dispatch({
                                            type: resetForm,
                                            value: [initialState]
                                        })
                                }}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                renderInput={(params) =>
                                    <TextField {...params}
                                        label="Select Client"
                                        variant='standard'
                                        required={true}
                                        error={value == null && required} />} />
                        </> :
                            <>
                                <TextField
                                    className='fullWidthInput'
                                    margin="none"
                                    size='small'
                                    variant='standard'
                                    label="First Name"
                                    name='first'
                                    value={formState.customerName.first}
                                    required={true}
                                    error={formState.customerName.first.length < 2 && required}
                                    onChange={(e) => dispatch({
                                        type: updateClientName, name: e.target.name, value: e.target.value
                                    })}
                                />
                                <TextField
                                    className='fullWidthInput'
                                    required={true}
                                    error={formState.customerName.last.length < 2 && required}
                                    margin="none"
                                    size='small'
                                    variant='standard'
                                    label="Last Name"
                                    name='last'
                                    value={formState.customerName.last}
                                    onChange={(e) => dispatch({
                                        type: updateClientName, name: e.target.name, value: e.target.value
                                    })}
                                />
                            </>
                    }
                </div>

                <div className='MarginTop10'>
                    <TextField
                        disabled={existingClient}
                        margin="none"
                        className='fullWidthInput'
                        size='small'
                        variant='standard'
                        label="Street"
                        name='street'
                        value={formState.address.street}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}
                    />
                </div>


                <div className='MarginTop10'>
                    <TextField
                        disabled={existingClient}
                        margin="none"
                        className='fullWidthInput'
                        size='small'
                        variant='standard'
                        label="City"
                        name='city'
                        value={formState.address.city}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}
                    />
                </div>
                <div className='FlexRow FlexBetween Gap10 MarginTop10'>

                    <TextField
                        sx={{ width: '50%' }}
                        disabled={existingClient}
                        margin="none"
                        size='small'
                        variant='standard'
                        select={!existingClient}
                        label="State"
                        name='state'
                        SelectProps={{
                            native: true,
                        }}
                        value={formState.address.state}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}>
                        {states.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        sx={{ width: '50%' }}
                        disabled={existingClient}
                        margin="none"
                        size='small'
                        variant='standard'
                        label="Zip Code"
                        name='zipCode'
                        value={formState.address.zipCode}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}
                    />
                </div>
                <div className='FlexColumn EmailPhoneInputs Gap10 MarginTop10' >
                    <TextField
                        disabled={existingClient}
                        className='fullWidthInput'
                        margin="none"
                        size='small'
                        variant='standard'
                        label="Email"
                        name='email'
                        value={formState.email}
                        onChange={(e) => dispatch({
                            type: updateClientEmail, value: e.target.value
                        })}
                    />
                    <TextField
                        disabled={existingClient}
                        className='fullWidthInput'
                        margin="none"
                        size='small'
                        variant='standard'
                        label="Phone Number"
                        name='phoneNum'
                        placeholder="###-###-####"
                        value={formState.phoneNum}
                        onChange={(e) => dispatch({
                            type: updateClientPhoneNumber, value: e.target.value
                        })}
                    />
                </div>
            </form>
        </div >
    )
}

export default NewInvoiceClientForm