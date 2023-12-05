import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function ViewStudentList({ studentList, setStudentList}) {

  const Navigate = useNavigate();

  const handleEdit = async ({ id, firstName, lastName, percentage, course }) => {
    localStorage.setItem('id', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('percentage', percentage)
    localStorage.setItem('course', course)
    Navigate('/editStudent')
  }


  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3000/studentList/" + id)
    callAPIurl()
  }
  const callAPIurl = async () => {
    const response = await axios.get("http://localhost:3000/studentList/")
    setStudentList(response.data)
  }

  useEffect(() => {
    callAPIurl()
  }, [])


  return (
    <Box flex={4}>
      <Container sx={{ width: 1000, mt: 10, pb: 2 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">S.No</StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Percentage</StyledTableCell>
                <StyledTableCell align="center">Course</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
             <TableBody>
              {studentList.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center">{row.id}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.firstName}&nbsp;{row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.percentage}</StyledTableCell>
                  <StyledTableCell align="center">{row.course}</StyledTableCell>
                  <StyledTableCell align="center"><EditNoteIcon onClick={() => handleEdit(row)} />&nbsp;&nbsp;&nbsp;<DeleteIcon onClick={() => handleDelete(row.id)} /></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody> 
          </Table>
        </TableContainer>
      </Container>
    </Box>
  )
}

export default ViewStudentList