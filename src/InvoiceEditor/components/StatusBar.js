import { React, useState } from 'react'
// css import
import './StatusBar.css'
// helper funcs import
import useDisplayDate from '../../HelperFuncs/useDisplayDate';
import useIsOverdue from '../../HelperFuncs/useIsOverdue';
import useGetProjectTotal from '../../HelperFuncs/useGetProjectTotal';
// mui imports
import PrintIcon from '@mui/icons-material/Print';
import { Button } from '@mui/material';
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';
// child components import
import InvoiceDataForm from './InvoiceDataForm';


var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});


const StatusBar = ({ projectId, client }) => {
    const project = client.projects.filter(project => project.invoiceId == projectId)[0]
    const [editMode, setEditMode] = useState(false)
    const colors = {
        red: '#FC8C6D',
        yellow: '#F2DC7E',
        green: '#5AC464',
    }
    const dueDate = useDisplayDate(project.dueDate)
    const sentDate = useDisplayDate(project.sentDate)
    const projectTotal = useGetProjectTotal(project)
    const Balance = projectTotal - project.paid
    const { red, yellow, green } = colors

    let color = yellow
    let paymentStatus = 'pending'
    if (Balance <= 0) {
        color = green;
        paymentStatus = 'paid'
    }

    if (useIsOverdue(project.dueDate) && Balance > 0) {
        color = red
        paymentStatus = 'overdue'
    }
    return (
        <div className='StatusBarContainer FlexColumn'>
            <div className='FlexRow FlexCenter MobileColumn FlexBetween'>

                <div className='FlexRow FlexCenter'>

                    <h2>
                        {project.projectName}
                    </h2>

                    <div
                        style={{
                            padding: '5px',
                            marginLeft: '10px',
                            backgroundColor: [color],
                            borderRadius: '5px'
                        }} >{
                            paymentStatus
                        }
                    </div>

                </div>


            </div>

            <div className='FlexRow MarginTop10 FlexBetween MobileColumn'
                style={{
                    gap: '10px'
                }}>

                <div className='FlexRow FlexBetween StatusDisplay'>

                    <div className='FlexColumn FlexCenter MobileColumn'>
                        <h5 className='leftAlign'>
                            Sent date
                        </h5>
                        <h6>
                            {sentDate}
                        </h6>
                    </div>

                    <div className='FlexColumn FlexCenter MobileColumn'>
                        <h5 className='rightAlign'>
                            Due date
                        </h5>
                        <h6>
                            {dueDate}
                        </h6>
                    </div>

                </div>

                <div className='FlexRow FlexBetween StatusDisplay'>

                    <div className='FlexColumn FlexCenter MobileColumn'>
                        <h5 className='leftAlign'>
                            Paid
                        </h5>
                        <h6>
                            {formatterUSD.format(project.paid)}
                        </h6>
                    </div>

                    <div className='FlexColumn FlexCenter MobileColumn'>
                        <h5 className='rightAlign'>
                            Balance
                        </h5>
                        <h6>
                            {formatterUSD.format(projectTotal - project.paid)}
                        </h6>
                    </div>

                </div>

            </div>

            <div className='MarginTop10 FlexRow FlexBetween BorderLightGray'>

                <div className='FlexRow FlexCenter'>
                    <h5 className='MarginRight10'>
                        Invoiced
                    </h5>
                    <h3>
                        {formatterUSD.format(projectTotal)}
                    </h3>
                </div>

                <div className='FlexRow FlexCenter StatusButtons'>
                    <Button className='RowButton ' id='print'>
                        <PrintIcon />
                    </Button>
                    <Button
                        className='RowButton'
                        id='edit'
                        onClick={() => setEditMode(true)}>
                        <ModeEditOutlineSharpIcon />
                    </Button>
                </div>

            </div>

            {
                editMode ?
                    <InvoiceDataForm
                        project={project}
                        client={client}
                        setEditMode={setEditMode} />
                    :
                    <></>
            }
        </div>
    )
}

export default StatusBar