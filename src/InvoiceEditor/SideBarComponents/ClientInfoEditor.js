import { React, useReducer } from 'react'
// reducer imports
import clientFormReducer from '../../useReducers/clientFormReducer';
// redux import
import { useDispatch } from 'react-redux';
import { updateClientInfo } from '../../ReduxSetUp/Reducers/clientsSlice';
// mui iports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// local data import
import states from '../../LocalData/states';

// actions
import clientActions from '../../LocalData/clientActions';


const ClientInfoEditor = ({ client, setEditMode }) => {
    const {
        updateClientAddress,
        updateClientEmail,
        updateClientName,
        updateClientPhoneNumber } = clientActions

    const reduxDispatch = useDispatch()
    const { id, customerName, address, phoneNum, email, projects } = client
    const [formState, dispatch] = useReducer(clientFormReducer, {
        id,
        customerName,
        address,
        phoneNum,
        email,
        projects
    })

    const handleSubmit = () => {
        setEditMode(false)
        reduxDispatch(updateClientInfo(formState))
    }
    return (
        <div className='PopUpBackground'>
            <form className='InfoForm'>

                <div className='FlexRow Gap10'>
                    <TextField
                        className='FormInput fullWidthInput'
                        variant='outlined'
                        label="First Name"
                        name='first'
                        value={formState.customerName.first}
                        onChange={(e) => dispatch({
                            type: updateClientName, name: e.target.name, value: e.target.value
                        })}
                    />
                    <TextField
                        className='FormInput fullWidthInput'
                        variant='outlined'
                        label="Last Name"
                        name='last'
                        value={formState.customerName.last}
                        onChange={(e) => dispatch({
                            type: updateClientName, name: e.target.name, value: e.target.value
                        })}

                    />
                </div>

                <div className='MarginTop10 FlexColumn Gap10'>
                    <TextField
                        className='FormInput '
                        variant='outlined'
                        label="Street"
                        name='street'
                        value={formState.address.street}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}
                    />
                    <TextField
                        className='FormInput'
                        variant='outlined'
                        label="City"
                        name='city'
                        value={formState.address.city}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}
                    />
                </div>
                <div className='FlexRow Gap10 MarginTop10'>
                    <TextField
                        className='FormInput fullWidthInput'
                        variant='outlined'
                        select
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
                        className='FormInput fullWidthInput'
                        variant='outlined'
                        label="Zip Code"
                        name='zipCode'
                        value={formState.address.zipCode}
                        onChange={(e) => dispatch({
                            type: updateClientAddress, name: e.target.name, value: e.target.value
                        })}

                    />
                </div>
                <div className='FlexColumn MarginTop10 Gap10'>
                    <TextField
                        className='FormInput'
                        variant='outlined'
                        label="Email"
                        name='email'
                        value={formState.email}
                        onChange={(e) => dispatch({
                            type: updateClientEmail, value: e.target.value
                        })}

                    />
                    <TextField
                        className='FormInput'
                        variant='outlined'
                        label="Phone Number"
                        name='phoneNum'
                        placeholder="###-###-####"
                        value={formState.phoneNum}
                        onChange={(e) => dispatch({
                            type: updateClientPhoneNumber, value: e.target.value
                        })}

                    />
                </div>
                <div className='FlexRow MarginTop10'>
                    <Button className='SaveButton'
                        onClick={() => handleSubmit()}
                    >
                        SAVE
                    </Button>
                    <Button className='SaveButton'
                        onClick={() => setEditMode(false)}
                    >
                        CANCEL
                    </Button>
                </div>

            </form>
        </div >
    )
}

export default ClientInfoEditor