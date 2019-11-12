import React from 'react'
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'
import ToolBar from '../../components/Navigation/ToolBar/ToolBar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => (
    <Aux>
        <SideDrawer/>
        <ToolBar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;