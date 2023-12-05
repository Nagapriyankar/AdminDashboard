import React, { useEffect, useState } from 'react'
import { Box, Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const subjectList = [
    {
        value: '--Select--',
        label: '--select--',
    },
    {
        value: 'Maths',
        label: 'Maths',
    },
    {
        value: 'Computer Science',
        label: 'Computer Science',
    },
    {
        value: 'Phy & Che',
        label: 'Phy & Che',
    },
    {
        value: 'English',
        label: 'English',
    },
    {
        value: 'Tamil',
        label: 'Tamil',
    },
    {
        value: 'Social',
        label: 'Social',
    },
    {
        value: 'Economics',
        label: 'Economics',
    },
    {
        value: 'Commerce',
        label: 'Commerce',
    },
    {
        value: 'History',
        label: 'History',
    },
    {
        value: 'Biology',
        label: 'Biology',
    },
];

function EditTeacher() {

    const [id, setId] = useState('')
    const [Name, setName] = useState('')
    const [Subject, setSubject] = useState('')
    const [Salary, setSalary] = useState('')
    const navigate = useNavigate()

     useEffect(() => {
       setId(localStorage.getItem('id'))
       setName(localStorage.getItem('Name'))
       setSubject(localStorage.getItem('Subject'))
       setSalary(localStorage.getItem('Salary'))
     }, [])
    
    const handleSubmit = async () => {
        await axios.put(`http://localhost:3000/teacherList/${id}`, {
            Name, Subject, Salary
        })
        /* input field refresh */
        setName('')
        setSubject('')
        setSalary('')
        navigate("/teacherList")
    }

    return (
        <Box flex={4}>
            <Container sx={{ width: 500, mt: 10, pb: 2 }} aria-label="custom pagination table">
                <Typography variant="h3" component="h2">
                    Add New Teacher
                </Typography><br />
                <TextField
                    required
                    value={Name}
                    id="name"
                    label="Name"
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    required
                    value={Salary}
                    id="Salary"
                    label="Salary"
                    onChange={e => setSalary(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    id="select-subject"
                    select
                    label="Select Subject"
                    defaultValue={Subject}
                    value={Subject}
                    helperText="Please select Subject"
                    onChange={e => setSubject(e.target.value)}
                >   
                    {subjectList.map((option) => (
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

export default EditTeacher