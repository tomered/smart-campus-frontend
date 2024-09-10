import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Divider, ListItemIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // נשתמש ב-useNavigate לניווט
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', backgroundColor: '#f4f6f8', top: '64px' }, // גובה ה-Navbar
      }}
    >
      <Box sx={{ overflow: 'auto', p: 2 }}>
        {/* כותרת מעוצבת עם גרדיאנט */}
        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center', 
            mb: 2, 
            fontWeight: 'bold', 
            background: 'linear-gradient(45deg, #3f51b5, #21CBF3)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            textTransform: 'uppercase', 
            letterSpacing: '2px' 
          }}
        >
          Admin Panel
        </Typography>
        <List>
          <ListItem button onClick={() => navigate('/admin')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: '#3f51b5' }} />
            </ListItemIcon>
            <ListItemText primary="מסך ראשי" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate('/UsersTable')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
            <ListItemIcon>
              <GroupIcon sx={{ color: '#3f51b5' }} />
            </ListItemIcon>
            <ListItemText primary="ניהול משתמשים" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate('/reports')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
            <ListItemIcon>
              <BarChartIcon sx={{ color: '#3f51b5' }} />
            </ListItemIcon>
            <ListItemText primary="דוחות וסטטיסטיקות" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate('/settings')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: '#3f51b5' }} />
            </ListItemIcon>
            <ListItemText primary="הגדרות מערכת" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
