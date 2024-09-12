import React, { useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, CategoryScale, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const PowerDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardData = [
    { title: "Number of light bulbs in the room", value: "2/4", bgColor: "#e0f7fa" },
    { title: "The lights that are on", value: "the front ones", bgColor: "#e8f5e9" },
    { title: "Projector on/off", value: "off", bgColor: "#e3f2fd" },
    { title: "Computer on/off", value: "on", bgColor: "#f1f8e9" },
  ];

  // Example data for the scatter plot
  const scatterData = {
    datasets: [
      {
        label: 'Light On Times',
        data: [
          { x: 'Rear Right', y: 3 },  // Light on at 3 AM
          { x: 'Rear Right', y: 14 }, // Light on at 2 PM
          { x: 'Front Left', y: 8 },  // Light on at 8 AM
          { x: 'Front Right', y: 10 }, // Light on at 10 AM
          { x: 'Front Left', y: 18 }, // Light on at 6 PM
          { x: 'Rear Left', y: 21 },  // Light on at 9 PM
        ],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 6, // Size of the dots
      },
    ],
  };

  // Chart options for customizing the axes
  const scatterOptions = {
    scales: {
      x: {
        type: 'category',
        labels: ['Rear Right', 'Rear Left', 'Front Right', 'Front Left'], // X-axis labels for the lights
        title: {
          display: true,
          text: 'Lights in the Room',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours of the Day',
        },
        ticks: {
          stepSize: 1, // Increment of 1 hour on Y-axis
        },
        min: 0,
        max: 24,
      },
    },
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section with Title and Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        {/* Title */}
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>
          Power Dashboard
        </Typography>

        {/* Buttons */}
        <Box>
          <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
            Building
          </Button>
          <Button variant="contained" color="secondary">
            Class
          </Button>
        </Box>
      </Box>

      {/* Grid with Cards */}
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={10} key={index}>
            <Card sx={{ backgroundColor: card.bgColor }}>
              <CardContent>
                <LightbulbIcon sx={{ color: '#ffd700' }} />
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Scatter Plot Graph */}
      <Box sx={{ marginTop: 4, height: 400 }}> {/* Set height for the chart container */}
        <Typography variant="h5" gutterBottom>
          Light On Times Throughout the Day
        </Typography>
        <Scatter data={scatterData} options={scatterOptions} />
      </Box>
    </Box>
  );
};

export default PowerDashboard;
 