import { React, useState } from 'react'
// mui imports
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// css imports
import './ClientInfo.css'


const ClientInfo = ({ client, setEditMode }) => {
    return (
        <div>
            <div className='FlexRow FlexCenter Mobile'>
                <AccountCircleIcon className='MarginRight10' />
                <h3>
                    {`${client.customerName.first} ${client.customerName.last}`}
                </h3>
                <Button className='EditButtons'
                    onClick={() => setEditMode(true)}
                >
                    <EditIcon />
                </Button>
            </div>
            <div className='ClientInfoContainer'>
                <div className='FlexRow FlexCenter MarginTop10'>
                    <HomeIcon className='MarginRight10' />
                    <div>
                        <h5>
                            {`${client.address.street},`}
                        </h5>
                        <h5>{
                            `${client.address.city}, 
                                ${client.address.state}, 
                                ${client.address.zipCode}`
                        }
                        </h5>
                    </div>
                </div>
                <div className='FlexRow FlexCenter MarginTop10'>
                    <PhoneIphoneIcon className='MarginRight10' />
                    <h5>{client.phoneNum}</h5>
                </div>
                <div className='FlexRow FlexCenter MarginTop10'>
                    <EmailIcon className='MarginRight10' />
                    <h5>{client.email}</h5>
                </div>
            </div>


        </div>
    )
}

export default ClientInfo