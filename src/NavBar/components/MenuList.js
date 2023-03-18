import { React, useRef, useState } from 'react'
// MUI imports
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
// Router imports
import { Link } from 'react-router-dom';
// Helper Funcs imports
import useOnClickOutside from '../../HelperFuncs/useOnClickOutside';
// css
import './MenuList.css'
import logo from '../components/abstract.png'
// redux
import { useSelector } from 'react-redux';
// child components
import UserDisplay from './UserDisplay';

const MenuList = ({ toggleDrawer, changePageHeader, closeMenu }) => {

    const profile = useSelector(state => state.userProfile)

    const ref = useRef();
    useOnClickOutside(ref, () => {
        closeMenu()
    })

    return (
        <Box
            ref={ref}
            className='MenuCard'
            sx={{ width: 250, height: '100vh' }}
            onMouseLeave={toggleDrawer('left', false)}
        >
            <div className='MenuListHeader'>
                <div className='FlexRow FlexCenter'>
                    <img className='companylogo' src={logo} />
                    <h3>PROMA</h3>
                </div>
            </div>

            <List className='MenuListContainer FlexColumn FlexBetween'>
                <div>
                    <Link
                        to='/'
                        className='Links'>
                        <ListItem key='Dashboard' disablePadding>
                            <ListItemButton>
                                <DashboardIcon />
                                <ListItemText
                                    sx={{ paddingLeft: '10px', textTransform: 'uppercase' }}
                                    className='Links'
                                    primary='Dashboard' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link
                        to='/Clients'
                        className='Links'>
                        <ListItem key='Clients' disablePadding>
                            <ListItemButton>
                                <PeopleIcon />
                                <ListItemText
                                    sx={{ paddingLeft: '10px', textTransform: 'uppercase' }}
                                    className='Links'
                                    primary='Clients' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </div>

                <div className='MarginLeft10'>
                    <UserDisplay inverted={true} />
                </div>

            </List>

        </Box >
    )
}

export default MenuList