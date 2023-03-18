import { React, useState } from 'react'
// MUI Components
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// helper funcs 
import overDueProjects from '../../HelperFuncs/overDueProjects';
import paidProjects from '../../HelperFuncs/paidProjects';
import pendingProjects from '../../HelperFuncs/pendingProjects';

import projectByClientName from '../../HelperFuncs/projectByClientName';
import displayByInvoiceNumber from '../../HelperFuncs/displayByInvoiceNumber';
const FilterButtons = ({ colors, setClientsArray, clients }) => {

    const [value, setValue] = useState(
        ''
    );
    const [inputValue, setInputValue] = useState('');

    const clientNames = clients.map(client => ({
        label: `${client.customerName.first} ${client.customerName.last}`,
        id: client.id
    }))

    return (
        <div className='Filters'>
            <div className=''>
                <Button
                    onClick={() => {
                        setValue('')
                        setClientsArray(displayByInvoiceNumber(clients))
                    }}
                    variant="text"
                    sx={{
                        color: [colors.blue],
                        '&:hover': {
                            color: 'white',
                            backgroundColor: [colors.blue]
                        }
                    }}>
                    <CircleIcon fontSize="small" className='hideMobile' />
                    show all
                </Button>
                <Button

                    onClick={() => setClientsArray(pendingProjects(clients))}
                    variant="text"
                    sx={{
                        color: [colors.yellow],
                        '&:hover': {
                            color: 'white',
                            backgroundColor: [colors.yellow]
                        }
                    }}>
                    <CircleIcon fontSize="small" className='hideMobile' />
                    pending
                </Button>
                <Button
                    onClick={() => setClientsArray(overDueProjects(clients))}
                    variant="text"
                    sx={{
                        color: [colors.red],
                        '&:hover': {
                            color: 'white',
                            backgroundColor: [colors.red]
                        }
                    }}>
                    <CircleIcon fontSize="small" className='hideMobile' />
                    Overdue
                </Button>
                <Button
                    onClick={() => setClientsArray(
                        paidProjects(clients))}
                    variant="text"
                    sx={{
                        color: [colors.green],
                        '&:hover': {
                            color: 'white',
                            backgroundColor: [colors.green]
                        }
                    }}>
                    <CircleIcon fontSize="small" className='hideMobile' />
                    Paid
                </Button>
            </div>


            <Autocomplete
                disablePortal
                id="client-names"
                options={clientNames}
                size="small"
                sx={{
                    width: '200px',
                }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                    newValue ?
                        setClientsArray(
                            projectByClientName(clients, newValue)
                        ) : setClientsArray(displayByInvoiceNumber(clients))
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="Client" />}
            />
        </div>
    )
}

export default FilterButtons