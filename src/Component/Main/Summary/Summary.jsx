import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
function createData(orderID, name, Date, Status, Amount, Agent) {
  return { orderID, name, Date, Status, Amount, Agent };
}
const rows = [
  createData(
    "00716",
    "Peterson Eloagu",
    "8 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#3ded97",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='success'
    >
      success
    </Button>,
    "#100,000.55",
    "Caleb"
  ),
  createData(
    "00717",
    "Success Dominik",
    "8 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#3ded97",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='success'
    >
      success
    </Button>,
    "#100,000.55",
    "Ann"
  ),
  createData(
    "00718",
    "Ahmad Yusuf",
    "9 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#ff9999",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='error'
    >
      success
    </Button>,
    "#100,000.55",
    "Ann"
  ),
  createData(
    "00719",
    "Bennard Eze",
    "9 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#3ded97",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='success'
    >
      success
    </Button>,
    "#100,000.55",
    "Caleb"
  ),
  createData(
    "00720",
    "Kemi Adeola",
    "9 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#3ded97",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='success'
    >
      success
    </Button>,
    "#100,000.55",
    "Caleb"
  ),
  createData(
    "00721",
    "Ezekiel Jobin",
    "10 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#3ded97",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='success'
    >
      success
    </Button>,
    "#100,000.55",
    "Caleb"
  ),
  createData(
    "00722",
    "Ekele Samson",
    "10 Jan",
    <Button
      variant='text'
      style={{
        backgroundColor: "#3ded97",
        fontSize: "12px",
        borderRadius: "2rem",
        padding: "0rem 1rem",
      }}
      color='success'
    >
      success
    </Button>,
    "#100,000.55",
    "Ann"
  ),
];
const Summary = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#AEAEAE",
                }}
              >
                Order ID
              </TableCell>
              <TableCell sx={{ color: "#AEAEAE" }}>name</TableCell>
              <TableCell sx={{ color: "#AEAEAE" }}>Date</TableCell>
              <TableCell sx={{ color: "#AEAEAE" }}>Status</TableCell>
              <TableCell sx={{ color: "#AEAEAE" }}>Amount</TableCell>
              <TableCell sx={{ color: "#AEAEAE" }}>Agent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component='th'
                  scope='row'
                  sx={{
                    fontSize: "14px",
                    lineHeight: "18.23px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  {row.orderID}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    lineHeight: "18.23px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  {row.Date}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {row.Status}
                </TableCell>
                <TableCell>{row.Amount}</TableCell>
                <TableCell
                  sx={{
                    fontSize: "14px",
                    lineHeight: "18.23px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  {row.Agent}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Summary;
