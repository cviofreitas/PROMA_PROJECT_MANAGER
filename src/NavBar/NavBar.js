// React imports
import React from 'react'
// child components import
import MenuList from './components/MenuList';
import UserDisplay from './components/UserDisplay';
// MUI imports
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
// CSS imports
import './NavBar.css'
import zIndex from '@mui/material/styles/zIndex';
// react router dom

export default function NavBar() {

    let windowName = window.location.pathname.substring(1);
    if (window.location.pathname === '/') {
        windowName = 'Dashboard'
    }
    const [state, setState] = React.useState({
        left: false,
        page: windowName
    });

    // menu drawer toggle
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const changePageHeader = (header) => {
        setState({ ...state, page: header })
    }

    const closeMenu = () => {
        setState({
            ...state,
            left: false
        })
    };


    return (
        <div
            className='header'>
            < Button
                className='menuIcon'
                style={{
                    color: 'black',
                    paddingLeft: '5vw',
                }}
                onClick={toggleDrawer('left', true)} > <MenuIcon />
            </Button >

            <UserDisplay />
            <Drawer open={state['left']}>
                <MenuList
                    changePageHeader={changePageHeader}
                    toggleDrawer={toggleDrawer}
                    closeMenu={closeMenu} />
            </Drawer>
        </div >
    );
}
