// react imports
import { React, useEffect } from 'react'
// Redux imports
import { useSelector } from 'react-redux'
// react-router-dom
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// child components 
import EditorMenuBar from './SideBarComponents/EditorMenuBar'
import ServicesTable from './components/ServicesTable'
import StatusBar from './components/StatusBar'
// mui imports
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// css imports
import './InvoiceEditor.css'


const InvoiceEditor = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id, projectId } = useParams()
    const client = useSelector(state => state.clients.filter(client => client.id == id)[0])
    return (
        <div className='InvoiceEditorContainer'>
            <header className='PageHeader'>
                <h2>
                    INVOICE #{projectId}
                </h2>
            </header>

            <div className='InvoiceNavigation FlexRow FlexBetween MarginBottom20'>
                <Link
                    className='BackButton FlexRow'
                    to='/'>
                    <ArrowBackIosIcon />
                    <h5>BACK</h5>
                </Link>
                <h4>Easily edit your invoices</h4>
            </div>

            <div className='FlexRow FlexBetween'>
                <div className='InvoiceDataContainer'>
                    <StatusBar client={client} projectId={projectId} />
                    <ServicesTable client={client} projectId={projectId} />
                </div>

                <EditorMenuBar client={client} />
            </div>

        </div >
    )
}

export default InvoiceEditor