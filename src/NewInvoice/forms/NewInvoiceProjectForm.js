import { React, useState, useEffect } from 'react'
// redux imports
import { useSelector } from 'react-redux';
// mui imports
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// helper functions import
import useDisplayDate from '../../HelperFuncs/useDisplayDate';


const NewInvoiceProjectForm = ({ formState, setProjectFormState, required }) => {
    const currentDate = useSelector(state => state.date)

    const [dueDate, setDueDate] = useState(useDisplayDate(currentDate))
    const [sentDate, setSentDate] = useState(useDisplayDate(currentDate))
    const [amountPaid, setAmountPaid] = useState(0)
    const [projectName, setProjectName] = useState('')

    useEffect(() => {
        setProjectFormState({
            ...formState,
            dueDate: {
                day: dueDate.$D ? dueDate.$D : currentDate.day,
                month: dueDate.$M ? dueDate.$M + 1 : currentDate.month,
                year: dueDate.$y ? dueDate.$y : currentDate.year,
            },
            sentDate: {
                day: dueDate.$D ? dueDate.$D : currentDate.day,
                month: dueDate.$M ? dueDate.$M + 1 : currentDate.month,
                year: dueDate.$y ? dueDate.$y : currentDate.year,
            },
            projectName: projectName,
            paid: amountPaid
        })
    }, [dueDate, sentDate, amountPaid, projectName]);

    return (
        <div >

            <form >
                <div className='FlexRow '>
                    <TextField
                        className='fullWidthInput'
                        variant='standard'
                        label='Project Name'
                        required={true}
                        error={projectName < 1 && required}
                        value={projectName}
                        onChange={(e) => { setProjectName(e.target.value) }} />
                </div>

                <div className='FlexRow MarginTop10'>
                    <TextField
                        className='FormInput fullWidthInput'
                        variant='standard'
                        label='Depoosit'
                        type='number'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        value={amountPaid}
                        onChange={(e) => { setAmountPaid(e.target.value) }}
                    />
                </div>

                <div className='DatesPicker FlexRow MarginTop20 Gap10'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            variant='standard'
                            className='dateInput'
                            views={['month', 'day', 'year']}
                            label='Sent date'
                            openTo="month"
                            value={sentDate}
                            onChange={(newValue) => { setSentDate(newValue) }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            variant='standard'
                            className='dateInput'
                            views={['month', 'day', 'year']}
                            label='Due date'
                            openTo="month"
                            value={dueDate}
                            onChange={(newValue) => { setDueDate(newValue) }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </form>
        </div>
    )
}

export default NewInvoiceProjectForm