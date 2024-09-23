import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  Button
} from '@mui/material';

const EditUserDialog = ({ open, user, onClose, onSave }) => {
  const [editUser, setEditUser] = useState(user || { name: '', email: '', role: '' });

  useEffect(() => {
    if (user) {
      setEditUser(user);
    }
  }, [user]);

  const handleSave = () => {
    onSave(editUser);
    onClose();
  };

  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
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
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" sx={{ backgroundColor: '#21CBF3' }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserDialog;