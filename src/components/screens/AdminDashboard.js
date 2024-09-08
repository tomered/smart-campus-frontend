import React, { useState } from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Select,
  MenuItem,
} from '@mui/material';

const AdminDashboard = () => {
  // Example data for the table
  const [rows, setRows] = useState([
    { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', role: 'User', email: 'jane@example.com' },
    { id: 3, name: 'Alex Johnson', role: 'Moderator', email: 'alex@example.com' },
  ]);

  // Handle role change
  const handleRoleChange = (id, newRole) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, role: newRole } : row
    );
    setRows(updatedRows);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Drawer - Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: 240, top: '64px', boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemText primary="User Profile" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Add Admin Account" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main content container */}
      <Container sx={{ mt: 4, ml: '240px' }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        {/* Dashboard section: Example table */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            User Management
          </Typography>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
                        <Select
                          value={row.role}
                          onChange={(e) => handleRoleChange(row.id, e.target.value)}
                        >
                          <MenuItem value="Admin">Admin</MenuItem>
                          <MenuItem value="User">User</MenuItem>
                          <MenuItem value="Moderator">Moderator</MenuItem>
                        </Select>
                      </TableCell>
                      <TableCell>{row.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default AdminDashboard;
