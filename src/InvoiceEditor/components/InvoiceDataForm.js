import { React, useState } from 'react'

// redux imports
import { useDispatch } from 'react-redux';
import { updateProjectInfo } from '../../ReduxSetUp/Reducers/clientsSlice';
// css imports
import './InvoiceDataForm.css'
// mui imports
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button } from '@mui/material';
// helper functions import
import useGetProjectTotal from '../../HelperFuncs/useGetProjectTotal';
import useDisplayDate from '../../HelperFuncs/useDisplayDate';


var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});


const InvoiceDataForm = ({ project, setEditMode, client }) => {
    const reduxDispatch = useDispatch()
    let projectTotal = useGetProjectTotal(project)

    const [dueDate, setDueDate] = useState(useDisplayDate(project.dueDate))
    const [sentDate, setSentDate] = useState(useDisplayDate(project.sentDate))
    const [amountPaid, setAmountPaid] = useState(project.paid)
    const [projectName, setProjectName] = useState(project.projectName)

    let balance = projectTotal - amountPaid;

    const handleSubmit = (e) => {
        setEditMode(false)
        reduxDispatch(updateProjectInfo({
            clientId: client.id,
            projectId: project.invoiceId,
            dueDate: {
                day: dueDate.$D ? dueDate.$D : project.dueDate.day,
                month: dueDate.$M ? (dueDate.$M + 1) : project.dueDate.month,
                year: dueDate.$y ? dueDate.$y : project.dueDate.year
            },
            sentDate: {
                day: sentDate.$D ? sentDate.$D : project.sentDate.day,
                month: sentDate.$M ? (sentDate.$M + 1) : project.sentDate.month,
                year: sentDate.$y ? sentDate.$y : project.sentDate.year,
            },
            paid: amountPaid,
            projectName: projectName
        }))
    }

    return (
        <div className='PopUpBackground'>
            <form className='InfoForm'
                onSubmit={handleSubmit}>

                <TextField
                    className='FormInput'
                    variant='outlined'
                    label='Project Name'
                    value={projectName}
                    onChange={(e) => { setProjectName(e.target.value) }} />

                <div className='DatesPicker FlexRow'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
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

                <div className='FlexRow'>
                    <TextField
                        className='FormInput'
                        variant='outlined'
                        label='Amount Paid'
                        type='number'
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        value={amountPaid}
                        onChange={(e) => { setAmountPaid(e.target.value) }}
                    />

                </div>
                <div className='MarginLeft10'>
                    <h6>
                        Balance
                    </h6>
                    <h5>
                        {formatterUSD.format(balance)}
                    </h5>
                </div>

                <div className='MarginTop10'>
                    <Button
                        className='SaveButton'
                        onClick={handleSubmit}>
                        save
                    </Button>
                    <Button
                        className='SaveButton'
                        onClick={() => { setEditMode(false) }}>
                        cancel
                    </Button>
                </div>


            </form>

        </div>
    )
}

export default InvoiceDataForm