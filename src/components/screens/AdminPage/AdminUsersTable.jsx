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
  // רשימת משתמשים פיקטיבית
  const initialUsers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Student" },
    { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com", role: "Student" },
    { id: 4, name: "Emily Brown", email: "emily.brown@example.com", role: "Lecturer" },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editUser, setEditUser] = useState(null);

  const handleEditClick = (user) => {
    setEditUser(user);
  };

  const handleClose = () => {
    setEditUser(null);
  };

  const handleSave = () => {
    // שמירת המשתמש המעודכן ברשימה
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    handleClose();
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content container */}
      <Container sx={{ mt: 4, ml: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* שיפור עיצוב הכותרת עם גרדיאנט */}
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

        {/* עיצוב מודרני לטבלה */}
        <Box sx={{ mt: 4, width: '100%', boxShadow: 10, borderRadius: 2, p: 3, backgroundColor: '#fff' }}>
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
                </TableRow>
              </TableHead>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Moderator">Moderator</MenuItem>
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
        </Box>
      </Container>
    </div>
  );
};

export default AdminUsersTable;
