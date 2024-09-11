// screens/AdminPage/AdminDashboard.js
import React from 'react';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';
import Sidebar from './Sidebar'; // ייבוא Sidebar
import { Bar, Line, Pie, Radar, Doughnut } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';
import InfoCard from '../../card/InfoCard';


// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale);

const AdminDashboard = () => {


  const initialUsers = [
    { id: 1, name: "David Azran", email: "david@gmail.com", role: "Student" },
    { id: 2, name: "Ofir Harar", email: "ofir@gmail.com", role: "Student" },
    { id: 3, name: "Gal Touti", email: "gal@gmail.com", role: "Lecturer" },
    { id: 4, name: "Itamar Mizrahi", email: "itamar@gmail.com", role: "Admin" },
  ];
  const totalUsers = initialUsers.length;
  const totalStudents = initialUsers.filter(user => user.role === "Student").length;
  const totalLecturers = initialUsers.filter(user => user.role === "Lecturer").length;
  const totalAdmins = initialUsers.filter(user => user.role === "Admin").length;
  // נתוני הגרפים (הנתונים נשארים זהים)
  const barData = {
    labels: ['Students', 'Lecturers', 'Admins'],
    datasets: [
      {
        label: 'Number of Users',
        data: [totalStudents,totalLecturers, totalAdmins],
        backgroundColor: ['#3f51b5', '#ff4081', '#4caf50', '#f44336'],
        borderRadius: 10,
      },
    ],
  };

  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'User Activity (Monthly)',
        data: [20, 30, 60, 45],
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const deviceData = {
    labels: ['Mobile', 'Desktop', 'Tablet'],
    datasets: [
      {
        label: 'Device Usage',
        data: [65, 25, 10],
        backgroundColor: ['#3f51b5', '#4caf50', '#ff4081'],
        borderRadius: 10,
      },
    ],
  };

  const pieData = {
    labels: ['Students', 'Lecturers', 'Admins'],
    datasets: [
      {
        label: 'User Roles Distribution',
        dadata: [totalStudents,totalLecturers, totalAdmins],
        backgroundColor: ['#3f51b5', '#ff4081', '#4caf50', '#f44336'],
      },
    ],
  };

  const radarData = {
    labels: ['Login', 'Signups', 'Profile Updates', 'Posts', 'Comments'],
    datasets: [
      {
        label: 'Feature Usage',
        data: [85, 65, 70, 90, 50],
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        borderColor: '#3f51b5',
        pointBackgroundColor: '#3f51b5',
        fill: true,
      },
    ],
  };

  const doughnutData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        label: 'Tasks Completion',
        data: [40, 30, 30],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
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
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Admin Dashboard
        </Typography>

        {/* כרטיסי מידע מהירים */}
        <Grid container spacing={4} sx={{ width: '100%', mb: 4 }}>
          <Grid item xs={12} md={4}>
            <InfoCard title="Total Users" value={totalUsers} bgColor="#3f51b5" />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard title="Active Users" value="56" bgColor="#4caf50" />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard title="New Signups" value="15" bgColor="#ff4081" />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard title="Logins Today" value="34" bgColor="#ff9800" />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard title="Banned Users" value="2" bgColor="#e91e63" />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard title="Daily Visits" value="124" bgColor="#673ab7" />
          </Grid>
        </Grid>

        {/* Grid for Charts */}
        <Grid container spacing={4} sx={{ width: '100%' }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Users Overview
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Bar data={barData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                User Activity (Last Month)
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Line data={lineData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Device Usage
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Bar data={deviceData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          {/* Pie Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                User Roles Distribution
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Pie data={pieData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          {/* Radar Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Feature Usage by Users
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Radar data={radarData} options={chartOptions} />
              </Box>
            </Paper>
          </Grid>

          {/* Doughnut Chart */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, boxShadow: 4, borderRadius: 3, height: '400px', backgroundColor: '#f5f7fa', transition: 'box-shadow 0.3s ease', '&:hover': { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' } }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                Tasks Completion
              </Typography>
              <Box sx={{ height: '100%' }}>
                <Doughnut data={doughnutData} options={chartOptions} />
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
