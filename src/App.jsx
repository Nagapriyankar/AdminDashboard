import NavBar from './Components/NavBar'
import { Box, Container, Stack } from '@mui/material'
import SideBar from './Components/SideBar'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ViewTeacherList from './Components/Teacher/ViewTeacherList'
import AddNewTeacher from './Components/Teacher/AddNewTeacher'
import ViewStudentList from './Components/Student/ViewStudentList'
import AddNewStudent from './Components/Student/AddNewStudent'
import EditTeacher from './Components/Teacher/EditTeacher'
import EditStudent from './Components/Student/EditStudent'
import Body from './Components/Body'



function App() {
  //defines state
  const [teacherList, setTeacherList] = useState([]);
  const [studentList, setStudentList] = useState([]);


  useEffect(() => {
    axios
      .get('http://localhost:3000/teacherList')
      .then(response => setTeacherList(response.data))
  }, [])
  useEffect(() => {
    axios
      .get('http://localhost:3000/studentList')
      .then(response => setStudentList(response.data))
  }, [])

  return (
    <Box>
      <NavBar />

      <Stack direction='row' justifyContent="space-between" spacing={2}>
        <SideBar />

        <Routes>
          <Route exact path="/" element={<Body />}></Route>
          <Route exact path="/teacherList" element={<ViewTeacherList teacherList={teacherList} setTeacherList={setTeacherList} />}></Route>
          <Route exact path="/addNewTeacher" element={<AddNewTeacher />}></Route>
          <Route exact path="/editTeacher" element={<EditTeacher />}></Route>
          <Route exact path="/studentList" element={<ViewStudentList studentList={studentList} setStudentList={setStudentList} />}></Route>
          <Route exact path="/addNewStudent" element={<AddNewStudent />}></Route>
          <Route exact path="/editStudent" element={<EditStudent />}></Route>

        </Routes>

      </Stack>

    </Box>


  )
}

export default App
