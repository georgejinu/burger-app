import React from 'react'
import classes from './ToolBar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from '../SideDrawer/SideDrawer'

const toolBar = (props) => (
    <header className={classes.Toolbar}>
        {/* <div>
            <SideDrawer />
        </div> */}
        <div className={classes.Logo}>
            <Logo />
        </div>a
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolBar;