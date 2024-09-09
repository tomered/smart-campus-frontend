import React from 'react';
import { Typography, Container, Box, Grid, Paper, Card, CardContent } from '@mui/material';
import Sidebar from './Sidebar'; // ייבוא הקומפוננטה החדשה
import { Bar, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  // Data for Bar Chart - User Overview
  const barData = {
    labels: ['Admins', 'Moderators', 'Users', 'Guests'],
    datasets: [
      {
        label: 'Number of Users',
        data: [5, 10, 60, 5],
        backgroundColor: ['#3f51b5', '#ff4081', '#4caf50', '#f44336'],
      },
    ],
  };

  // Data for Line Chart - User Activity
  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'User Activity (Monthly)',
        data: [20, 30, 60, 45, 55, 80],
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data for Bar Chart - Device Usage
  const deviceData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [65, 25, 10],
        backgroundColor: ['#3f51b5', '#4caf50', '#ff4081'],
      },
    ],
  };

  // Chart options to prevent infinite resizing and ensure responsiveness
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      },
    },
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar component */}
      <Sidebar />

      {/* Main content container */}
      <Container sx={{ mt: 4, ml: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* כותרת עם גרדיאנט */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mb: 4,
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #3f51b5, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Admin Dashboard
        </Typography>

        {/* כרטיסי מידע מהירים */}
        <Grid container spacing={4} sx={{ width: '100%', mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#3f51b5', color: 'white', p: 2, borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h5">Total Users</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>89</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#4caf50', color: 'white', p: 2, borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h5">Active Users</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>56</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#ff4081', color: 'white', p: 2, borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h5">New Signups</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>15</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#ff9800', color: 'white', p: 2, borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h5">Logins Today</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>34</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#e91e63', color: 'white', p: 2, borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h5">Banned Users</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Grid for Charts */}
        <Grid container spacing={4} sx={{ width: '100%' }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Users Overview
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Bar data={barData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                User Activity (Last Month)
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Line data={lineData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa' }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Device Usage
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Bar data={deviceData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Placeholder for future content */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            More data and insights coming soon!
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default AdminDashboard;
