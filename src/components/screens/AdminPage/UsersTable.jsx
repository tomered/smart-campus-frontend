import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@mui/material";
import   
 { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import UserRow from './UserRow';

const UsersTable = ({
  users,
  handleSort,
  sortField,
  sortDirection,
  handleEdit,
  handleDelete
}) => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, flexGrow: 1, display: "flex", flexDirection: "column", overflow: "auto", maxHeight: "500px" }}> {/* Set max height and enable overflow */}
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold" }}>ID
              <IconButton onClick={() => handleSort("id")}>
                {sortField === "id" ? (
                  sortDirection === "asc" ? <ArrowDropUp color="primary" /> : <ArrowDropDown color="primary" />
                ) : (
                  <ArrowDropUp color="disabled" />
                )}
              </IconButton>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Name
              <IconButton onClick={() => handleSort("firstName")}>
                {sortField === "firstName" ? (
                  sortDirection === "asc" ? <ArrowDropUp color="primary" /> : <ArrowDropDown color="primary" />
                ) : (
                  <ArrowDropUp color="disabled" />
                )}
              </IconButton>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Email
              <IconButton onClick={() => handleSort("email")}>
                {sortField === "email" ? (
                  sortDirection === "asc" ? <ArrowDropUp color="primary" /> : <ArrowDropDown color="primary" />
                ) : (
                  <ArrowDropUp color="disabled" />
                )}
              </IconButton>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Role
              <IconButton onClick={() => handleSort("role")}>
                {sortField === "role" ? (
                  sortDirection === "asc" ? <ArrowDropUp color="primary" /> : <ArrowDropDown color="primary" />
                ) : (
                  <ArrowDropUp color="disabled" />
                )}
              </IconButton>
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Edit</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>   

          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;