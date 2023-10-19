import React from 'react'
import {  useState } from 'react'
// child components import
import ClientInfo from './ClientInfo'
import ClientInfoEditor from './ClientInfoEditor';
import ProjectsSummary from './ProjectsSummary';
// css imports
import './EditorMenuBar.css'
// mui imports
import { Link } from 'react-router-dom';

import {Client} from '../../models/client.model'

type EditorMenuBarProps = {
    client: Client
}

const EditorMenuBar = ({ client }: EditorMenuBarProps) => {
    // show edit client info if true
    const [editMode, setEditMode] = useState(false)

    return (
        <div className='EditorMenuContainer'>
            <ClientInfo
                client={client}
                setEditMode={setEditMode} />
            <div className='ProjectSummaryContainer'>
                <h6 className='MarginTop10'>
                    PROJECTS
                </h6>
                <div className='SummaryContainer'>
                    {client.projects.map(project =>
                        <Link
                            to={`/InvoiceEditor/${client.id}/${project.invoiceId}`}
                            className='Links'
                            style={{
                                color: 'white'
                            }}>
                            <ProjectsSummary project={project} />
                        </Link>
                    )}
                </div>
                <Link className='NewProjectButton'
                    to={`/NewInvoice/${client.id}?`}>
                    <h3 >NEW INVOICE</h3>
                </Link>
            </div>
            {editMode ?
                <ClientInfoEditor client={client} setEditMode={setEditMode} /> : <></>
            }

        </div>
    )
}

export default EditorMenuBar