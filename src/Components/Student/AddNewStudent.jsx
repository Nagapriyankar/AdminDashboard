import React, { useEffect, useState } from 'react'
import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Course = [
  {
    value: '--Select--',
    label: '--select--',
  },
  {
    value: 'Bio-Maths',
    label: 'Bio-Maths',
  },
  {
    value: 'Computer Science',
    label: 'Computer Science',
  },
  {
    value: 'Pure Science',
    label: 'Pure Science',
  },
  {
    value: 'Commerce',
    label: 'Commerce',
  },
  {
    value: 'Information Technology',
    label: 'Information Technology',
  },
];

function AddNewStudent() {

  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [percentage, setPercentage] = useState('')
  const [course, setCourse] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    await axios.post("http://localhost:3000/studentList", {
      firstName, lastName, percentage, course
    })
    /* input field refresh */
    setFirstName('')
    setLastName('')
    setPercentage('')
    setCourse('')
    navigate("/studentList")
  }
  return (
    <Box flex={4}>
      <Container sx={{ width: 500, mt: 10, pb: 2 }} aria-label="custom pagination table">
        <Typography variant="h3" component="h2">
          Add New Student
        </Typography><br />
        <TextField
          required
          id="first-name"
          label="First Name"
          defaultValue=""
          value={firstName }
          onChange={e => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          required
          id="last-name"
          label="Last Name"
          defaultValue=""
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          required
          id="percentage"
          label="Percentage"
          defaultValue=""
          value={percentage}
          onChange={e => setPercentage(e.target.value)}
        />
        <br />
        <br />
        <TextField
          id="select-course"
          select
          label="Course Required"
          defaultValue="--Select--"
          helperText="Please select your course"
          value={course}
          onChange={e => setCourse(e.target.value)}
        >
          {Course.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br /><br />
        <Button variant="outlined" onClick={() => handleSubmit()}>Submit</Button>
      </Container>
    </Box>
  )
}

export default AddNewStudent