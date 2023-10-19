
import React, { useState } from "react";
// redux imports
import { useDispatch } from 'react-redux';
import { deleteInvoice } from "../../ReduxSetUp/Reducers/clientsSlice";
// mui import
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// react-router-dom
import { useNavigate } from 'react-router-dom'

import {Project} from '../../models/project.model';
import {Client} from '../../models/client.model'

type InvoiceDeletionConfirmationProps = {
    project: Project;
    client: Client;
  };

function InvoiceDeletionConfirmation({ project, client }: InvoiceDeletionConfirmationProps) {
    const navigate = useNavigate();
    const reduxDispatch = useDispatch()
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDelete = () => {

        setShowConfirmation(false);
        reduxDispatch(deleteInvoice({
            clientId: client.id,
            projectId: project.invoiceId
        }));
        navigate('/', { replace: true })
    };

    const toggleConfirmation = () => {
        setShowConfirmation(!showConfirmation);
    };

    return (
        <div>
            <Button onClick={toggleConfirmation}
                className='RowButton'
                id='delete'>
                <DeleteIcon />
            </Button>
            {showConfirmation && (
                <div className='PopUpBackground'>
                    <div className='InfoForm'>
                        <p>Are you sure you want to delete this invoice?</p>
                        <Button
                            className="SaveButton"
                            onClick={handleDelete}>Yes</Button>
                        <Button
                            className="SaveButton"
                            onClick={toggleConfirmation}>No</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InvoiceDeletionConfirmation;
