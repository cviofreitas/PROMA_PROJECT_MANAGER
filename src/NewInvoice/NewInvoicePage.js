import { React, useReducer, useState, useEffect } from 'react'
// reducer imports
import clientFormReducer from '../useReducers/clientFormReducer'
// css imports
import './NewInvoicePage.css'
// mui imports
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
// redux import
import { useDispatch, useSelector } from 'react-redux';
import { createNewClientInvoice, createExistingClientInvoice } from '../ReduxSetUp/Reducers/clientsSlice';
// react-router-dom
import { Link, useNavigate } from 'react-router-dom'
// helper funcs import
import useNewClientId from '../HelperFuncs/useNewClientId';
import useNewInvoiceId from '../HelperFuncs/useNewInvoiceId';
// child components import
import NewInvoiceClientForm from './forms/NewInvoiceClientForm';
import NewInvoiceProjectForm from './forms/NewInvoiceProjectForm';
import NewInvoiceServicesForm from './forms/NewInvoiceServicesForm';
import NewInvoiceServicesFormMobile from './forms/NewInvoiceServicesFormMobile';
import NewInvoiceServiceCardsMobile from './forms/NewInvoiceServiceCardsMobile';


const NewInvoicePage = () => {
    // for handling loading animation
    const [loading, setLoading] = useState(false)

    const clients = useSelector(state => state.clients)
    const navigate = useNavigate();
    const reduxDispatch = useDispatch()
    let today = new Date();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // user will choose between creating a new client or using existing client
    const [existingClient, setExistingClient] = useState(true)
    // form validation
    const [required, setRequired] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const initialState = {
        id: useNewClientId(clients),
        customerName: {
            first: '',
            last: '',
        },
        address: {
            street: '',
            city: '',
            state: '  ',
            zipCode: ''
        },
        phoneNum: '',
        email: '',
    }
    // initial Client Form state
    const [clientFormState, clientDispatch] = useReducer(clientFormReducer, initialState)

    // initial Project Form state
    const [projectFormState, setProjectFormState] = useState({
        invoiceId: useNewInvoiceId(clients),
        sentDate: {
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear()
        },
        dueDate: {
            day: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear()
        },
        projectName: '',
        services: [],
        paid: 0
    })

    if (showAlert) {
        setTimeout(() => {
            setShowAlert(false)
        }, '2000')
    }
    // combined client and project form
    const [newInvoiceForm, setNewInvoiceForm] = useState({
        ...clientFormState,
        projects: [projectFormState]
    })

    // updated "newInvoiceForm" anytime projectFormState or clientFormState changes
    useEffect(() => {
        setNewInvoiceForm({
            ...clientFormState,
            projects: [projectFormState]
        })
    }, [projectFormState, clientFormState]);

    // submit newInvoice to project data
    const createInvoice = () => {
        const { customerName } = clientFormState

        if (customerName.first.length < 2 || projectFormState.projectName.length < 2) {
            setRequired(true)
            setShowAlert(true)
        }
        else {
            existingClient ? reduxDispatch(createExistingClientInvoice(newInvoiceForm)) : reduxDispatch(createNewClientInvoice(newInvoiceForm))
            setLoading(true)
            setTimeout(() => {

                navigate('/', { replace: true });
            }, 1000);
        }


    }

    return (
        <div className='NewInvoicePage'>

            <header className='PageHeader'>
                <h2>
                    NEW INVOICE
                </h2>
            </header>

            <div className='InvoiceNavigation FlexRow FlexBetween MarginBottom20'>
                <Link
                    className='BackButton FlexRow'
                    to='/'>
                    <ArrowBackIosIcon />
                    <h5>BACK</h5>
                </Link>
                <h4 className=''>Invoicing made simple</h4>
            </div>


            <div className='FlexRow NewInvoiceFormContainer'>
                <div className='NewInfoForm FlexColumn FlexBetween Padding20 MobileFullWidth Gap20'>
                    <div className='NewInvoiceClientForm'>
                        <h3 >
                            Client Info
                        </h3>
                        <NewInvoiceClientForm
                            // user will choose between creating a new client or using existing client
                            existingClient={existingClient}
                            setExistingClient={setExistingClient}
                            formState={clientFormState}
                            dispatch={clientDispatch}
                            initialState={initialState}
                            required={required}
                        />
                    </div>

                    <div className='NewInvoiceProjectForm'>
                        <h3 >
                            Project Info
                        </h3>
                        <NewInvoiceProjectForm
                            required={required}
                            formState={projectFormState}
                            setProjectFormState={setProjectFormState}
                        />
                    </div>

                </div>

                <NewInvoiceServicesForm
                    setProjectFormState={setProjectFormState}
                    projectFormState={projectFormState}
                    client={newInvoiceForm}
                    projectId={projectFormState.invoiceId} />


            </div>

            <div className='Sticky MarginTop20'>
                <NewInvoiceServicesFormMobile
                    setProjectFormState={setProjectFormState}
                    projectFormState={projectFormState}
                    client={newInvoiceForm}
                    projectId={projectFormState.invoiceId} />
            </div>

            <div className='NewInvoiceServiceCardsMobile MarginTop10'>
                {projectFormState.services.map((service, index) =>
                    <NewInvoiceServiceCardsMobile
                        index={index}
                        service={service}
                        setProjectFormState={setProjectFormState}
                        projectFormState={projectFormState} />)
                }
            </div>


            <Button
                id='NewInvoiceButton'
                onClick={createInvoice}>
                create invoice
            </Button>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className='errorMessage'>
                {showAlert ? <Alert
                    severity="error">Please fill out all required fields
                </Alert> : <></>}
            </div>

        </div>

    )
}

export default NewInvoicePage