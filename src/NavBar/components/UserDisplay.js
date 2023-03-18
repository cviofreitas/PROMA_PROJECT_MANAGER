import React from 'react'
// MUI imports
import Avatar from '@mui/material/Avatar';
// Redux imports
import { useSelector } from 'react-redux'
const UserDisplay = ({ inverted }) => {
    const profile = useSelector(state => state.userProfile)
    return (
        <div className='CompanyInfo'>
            {inverted ?
                <>

                    <Avatar alt={`avatar of ${profile.name.first} ${profile.name.last}`} src={profile.avatar} />
                    <h3 className='userWelcomeLeft'>
                        {profile.companyName}
                    </h3>
                </> :
                <>
                    <h3 className='userWelcome'>
                        {profile.companyName}
                    </h3>
                    <Avatar alt={`avatar of ${profile.name.first} ${profile.name.last}`} src={profile.avatar} />
                </>

            }


        </div>
    )
}

export default UserDisplay