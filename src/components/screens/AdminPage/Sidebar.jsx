import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Divider, ListItemIcon, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleDrawer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: isExpanded ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': { 
          width: isExpanded ? 240 : 60, 
          boxSizing: 'border-box', 
          backgroundColor: '#f4f6f8', 
          top: '64px',
          transition: 'width 0.3s'
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, justifyContent: isExpanded ? 'space-between' : 'center' }}>
        {isExpanded && (
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold', 
              background: 'linear-gradient(45deg, #3f51b5, #21CBF3)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              textTransform: 'uppercase', 
              letterSpacing: '1px' 
            }}
          >
            Admin Panel
          </Typography>
        )}
        <IconButton onClick={toggleDrawer} sx={{ minWidth: 40, minHeight: 40 }}>
          {isExpanded ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem button onClick={() => navigate('/admin')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: '#3f51b5' }} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Admin dashboard" />}
        </ListItem>
        <ListItem button onClick={() => navigate('/UsersTable')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
          <ListItemIcon>
            <GroupIcon sx={{ color: '#3f51b5' }} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Users management" />}
        </ListItem>
        <ListItem button onClick={() => navigate('/SensorStatistics')} sx={{ '&:hover': { backgroundColor: '#e0f7fa' } }}>
          <ListItemIcon>
            <BarChartIcon sx={{ color: '#3f51b5' }} />
          </ListItemIcon>
          {isExpanded && <ListItemText primary="Sensor" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;