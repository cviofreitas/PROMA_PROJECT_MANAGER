import React from 'react';
import { useState } from 'react'
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

import {Client} from '../../models/client.model'


type Colors = {
    [key: string]: string;
  }
type FilterButtonsProps = {
    colors: Colors;
    setClientsArray: React.Dispatch<React.SetStateAction<any[]>>;
    clients: Client[];
}

type Value = {
    label: string;
    id: number
}

const FilterButtons = ({ colors, setClientsArray, clients }:FilterButtonsProps) => {

    const [value, setValue] = useState<Value | null>(null);
    const [inputValue, setInputValue] = useState('');

    const clientNames:Value[] = clients.map((client:Client) => ({
        label: `${client.customerName?.first} ${client.customerName?.last}`,
        id: client.id
    }))


    return (
        <div className='Filters'>
            <div className=''>
                <Button
                    onClick={() => {
                        setValue(null)
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
                onChange={(event, newValue ) => {
                    console.log(newValue)
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