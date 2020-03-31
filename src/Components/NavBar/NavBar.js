import ToolBar from '@material-ui/core/ToolBar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const NavBar=() =>{
return(
    <div>
        <AppBar>
            <ToolBar>
                <Typography>
                    COVID-19 TamilNadu Status
                </Typography>
            </ToolBar>
        </AppBar>
    </div>
)

}

export default NavBar;