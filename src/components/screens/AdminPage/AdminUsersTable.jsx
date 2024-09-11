import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Container,
  Select,
  MenuItem,
  Typography
} from "@mui/material";
import Sidebar from './Sidebar'; // ייבוא של ה-Sidebar

const AdminUsersTable = () => {
  //Mock users
  const initialUsers = [
    { id: 1, name: "David Azran", email: "david@gmail.com", role: "Student" },
    { id: 2, name: "Ofir Harar", email: "ofir@gmail.com", role: "Student" },
    { id: 3, name: "Gal Touti", email: "gal@gmail.com", role: "Lecturer" },
    { id: 4, name: "Itamar Mizrahi", email: "itamar@gmail.com", role: "Admin" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editUser, setEditUser] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  const handleEditClick = (user) => {
    setEditUser(user);
  };

  const handleClose = () => {
    setEditUser(null);
    setDeleteConfirmation(null);
  };

  const handleSave = () => {
    // שמירת המשתמש המעודכן ברשימה
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    handleClose();
  };
  const handleDelete = () => {
    setUsers(users.filter(user => user.id !== deleteConfirmation.id));
    handleClose();
  };
  const handleDeleteClick = (user) => {
    setDeleteConfirmation(user);
  };
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content container */}
      <Container 
        sx={{ 
          mt: 4, 
          ml: '150px', 
          display: 'flex', 
          flexDirection: 'column',
          height: 'calc(100vh - 32px)', // Subtracting top margin
          overflow: 'hidden' // Prevent scrolling on the container
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4, 
            background: 'linear-gradient(45deg, #2196F3, #21CBF3)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}
        >
          Users Management
        </Typography>

        <Box sx={{ 
          flexGrow: 1,
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden' // Prevent scrolling on the Box
        }}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              borderRadius: 2, 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden' // Changed from 'auto' to 'hidden'
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <Box sx={{ overflow: 'auto', flexGrow: 1 }}>
              <Table>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f9f9f9' }, '&:hover': { backgroundColor: '#f1f1f1' } }}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{ 
                            backgroundColor: '#21CBF3', 
                            '&:hover': { backgroundColor: '#1e88e5' }, 
                            borderRadius: '20px', 
                            textTransform: 'none'
                          }}
                          size="small"
                          onClick={() => handleEditClick(user)}
                        >
                          Edit
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          sx={{ 
                            backgroundColor: '#ff4444', 
                            '&:hover': { backgroundColor: '#cc0000' }, 
                            borderRadius: '20px', 
                            textTransform: 'none'
                          }}
                          size="small"
                          onClick={() => handleDeleteClick(user)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>

          {editUser && (
            <Dialog open={Boolean(editUser)} onClose={handleClose} maxWidth="sm" fullWidth>
              <DialogTitle>Edit User</DialogTitle>
              <DialogContent>
                <TextField
                  margin="dense"
                  label="Name"
                  fullWidth
                  value={editUser.name}
                  onChange={(e) =>
                    setEditUser({ ...editUser, name: e.target.value })
                  }
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="dense"
                  label="Email"
                  fullWidth
                  value={editUser.email}
                  onChange={(e) =>
                    setEditUser({ ...editUser, email: e.target.value })
                  }
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Select
                  margin="dense"
                  fullWidth
                  value={editUser.role}
                  onChange={(e) =>
                    setEditUser({ ...editUser, role: e.target.value })
                  }
                  sx={{ mb: 2 }}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">Student</MenuItem>
                  <MenuItem value="Moderator">Lecturer</MenuItem>
                </Select>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: '#21CBF3' }}>
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          )}

          {deleteConfirmation && (
            <Dialog open={Boolean(deleteConfirmation)} onClose={handleClose} maxWidth="sm" fullWidth>
              <DialogTitle>Delete User</DialogTitle>
              <DialogContent>
                Are you sure you want to delete this user?
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} variant="contained" color="error">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default AdminUsersTable;
