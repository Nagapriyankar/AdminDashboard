import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';

function SideBar() {
  
  const [open, setOpen] = React.useState(true);
  const [drop, setDrop] = React.useState(true);


  const handleClickTeacher = () => {
    setOpen(!open);
  };
  const handleClickStudent = () => {
    setDrop(!drop)
  };


  return (
    <Box backgroundColor='yellowgreen' flex={1}>
      {/* sidebar menu items for Teacher */}
      <ListItemButton onClick={handleClickTeacher}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Teacher" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="View List" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Add new Teacher" />
          </ListItemButton>
        </List>   
      </Collapse>
      
      {/* sidebar menu items for Student */}
      <ListItemButton onClick={handleClickStudent}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Student" />
        {drop ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={drop} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="View List" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={drop} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText primary="Add new Student" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  )
}

export default SideBar