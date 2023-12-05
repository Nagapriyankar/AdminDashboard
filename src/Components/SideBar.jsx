import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

function SideBar() {
  
  const [open, setOpen] = React.useState(true);
  const [drop, setDrop] = React.useState(true);
  const navigate = useNavigate();

  const handleClickTeacher = () => {
    setOpen(!open);
  }
  const handleClickStudent = () => {
    setDrop(!drop)
  }
  const handleTeacherList = () => { 
    navigate('/teacherList')
  }
  const handleAddNewTeacher = () => {
    navigate('/addNewTeacher')
  } 
  const handleStuList = () => { 
    navigate('/studentList')
  }
  const handleAddNewStudent = () => { 
    navigate('/addNewStudent')
  }
  const handleHome = () => { 
    navigate('/')
  }
  const handleUpdateTeacher = () => { 
    navigate('/updateTeacher')
  }

  return (
    <Box flex={1}>
      <ListItemButton onClick={handleHome}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
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
          <ListItemButton sx={{ pl: 10 }} onClick={handleTeacherList}>
            <ListItemText primary="View List" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }} onClick={handleAddNewTeacher}>
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
          <ListItemButton sx={{ pl: 10 }} onClick={handleStuList}>
            <ListItemText primary="View List" />
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={drop} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }} onClick={handleAddNewStudent}>
            <ListItemText primary="Add new Student" />
          </ListItemButton>
        </List>
      </Collapse>
    </Box>
  )
}

export default SideBar