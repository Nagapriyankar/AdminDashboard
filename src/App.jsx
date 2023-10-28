import { useState } from 'react'
import NavBar from './Components/NavBar'
import { Box, Container, Stack } from '@mui/material'
import SideBar from './Components/SideBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewTeacherList from './Components/Teacher/ViewTeacherList'
import AddNewTeacher from './Components/Teacher/AddNewTeacher'
import ViewStudentList from './Components/Teacher/ViewStudentList'
import AddNewStudent from './Components/Teacher/AddNewStudent'
import Body from './Components/Body'

function App() {


  return (
    <Box>
      <NavBar />
      <Container>
        <Stack direction='row' justifyContent="space-between" spacing={2}>
          <SideBar />
          <Router>
            <Routes>
              <Route exact path="/" element={<Body />}></Route>
              <Route exact path="/teacherList" element={<ViewTeacherList />}></Route>
              <Route exact path="/addNewTeacher" element={<AddNewTeacher />}></Route>
              <Route exact path="/studentList" element={<ViewStudentList />}></Route>
              <Route exact path="/addNewStudent" element={<AddNewStudent />}></Route>
            </Routes>
          </Router>
        </Stack>
      </Container>
    </Box>


  )
}

export default App
