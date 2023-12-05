import React from 'react'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';


const StyledToolbar = styled(Toolbar)({
    display : 'flex',
    justifyContent : 'space-between',
})

function NavBar() {
    return (
        <AppBar position="static">
            <StyledToolbar variant="dense">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    
                    <Typography variant="h6" color="inherit" component="div">
                       STUDENT & TEACHER ADMIN DASHBOARD
                    </Typography>
                </Box>
                <Box sx={{display:'flex', alignItems:'center', gap:'10px'}}>
                    <Badge badgeContent={4} color="primary">
                        <NotificationsActiveIcon color="action" />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default NavBar