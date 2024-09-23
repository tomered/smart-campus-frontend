import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Menu, MenuItem, Tooltip} from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, CategoryScale, Tooltip as ChartTooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, ChartTooltip, Legend);

const PowerDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = window.innerWidth < 700;

  const [menuState, setMenuState] = useState({
    anchorEl: null,
    classAnchorEl: null,
    selectedBuilding: '',
    selectedClass: ''
  });

  const handleMenuOpen = (event, menuType) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menuType]: event.currentTarget
    }));
  };

  // Unified handler for closing menus and selecting values
  const handleMenuClose = (menuType, value) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menuType]: null,
      ...(value && menuType === 'anchorEl' ? { selectedBuilding: value } : {}),
      ...(value && menuType === 'classAnchorEl' ? { selectedClass: value } : {})
    }));
  };

  const  cardValue = [['2/4', "the front ones", 'off', 'on', 'on'],['3/4', "the front ones", 'off', 'off', 'on']];
 

  const cardData = [
    { title: "Number of light bulbs in the room", value: cardValue[0][0], bgColor: "#3f51b5" },
    { title: "The lights that are on", value: cardValue[0][1], bgColor: "#4caf50" },
    { title: "Projector on/off", value: cardValue[0][2], bgColor: "#ff9800" },
    { title: "Computer on/off", value: cardValue[0][3], bgColor: "#e91e63" },
    { title: "Air condition on/off", value: cardValue[0][4], bgColor: "#673ab7" }
  ];

  const cardData2 = [
    { title: "Number of light bulbs in the room", value: cardValue[1][0], bgColor: "#3f51b5" },
    { title: "The lights that are on", value: cardValue[1][1], bgColor: "#4caf50" },
    { title: "Projector on/off", value: cardValue[1][2], bgColor: "#ff9800" },
    { title: "Computer on/off", value: cardValue[1][3], bgColor: "#e91e63" },
    { title: "Air condition on/off", value: cardValue[1][4], bgColor: "#673ab7" }
  ];
  const scatterData = {
    datasets: [
      {
        label: 'Light On Times',
        data: [
          { x: 'Rear Right', y: 3 },
          { x: 'Rear Right', y: 14 },
          { x: 'Front Left', y: 8 },
          { x: 'Front Right', y: 10 },
          { x: 'Front Left', y: 18 },
          { x: 'Rear Left', y: 21 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 6,
      },
    ],
  };

  const scatterOptions = {
    scales: {
      x: {
        type: 'category',
        labels: ['Rear Right', 'Rear Left', 'Front Right', 'Front Left'],
        title: { display: true, text: 'Lights in the Room' },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Hours of the Day' },
        ticks: { stepSize: 1 },
        min: 0,
        max: 24,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black', // Change legend text color to black for readability on white
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)', // Darker background for tooltips
      },
    },
    layout: {
      padding: 20, // Add padding around the chart
    },
    backgroundColor: 'white', // Set the background color of the chart area to white
  };

  return (
    <Box sx={{ padding: 4}}>
      {/* Header Section with Title and Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
      <Typography
          variant="h3"
          gutterBottom
          sx={{
            mb: 4,
            padding : '25px 1px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #3f51b5, #21CBF3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Power Dashboard
        </Typography>
        

        <Box>
          <Tooltip title="Select a building" arrow>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2, backgroundColor: '#0288d1', '&:hover': { backgroundColor: '#01579b' } }}
              onClick={(e) => handleMenuOpen(e, 'anchorEl')}
            >
              Building
            </Button>
          </Tooltip>
          <Menu
            anchorEl={menuState.anchorEl}
            open={Boolean(menuState.anchorEl)}
            onClose={() => handleMenuClose('anchorEl')}
          >
            {['Building 1', 'Building 2'].map((building) => (
              <MenuItem key={building} onClick={() => handleMenuClose('anchorEl', building)}>
                {building}
              </MenuItem>
            ))}
          </Menu>

          <Tooltip title="Select a class" arrow>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginRight: 2, backgroundColor: '#7b1fa2', '&:hover': { backgroundColor: '#4a148c' } }}
              onClick={(e) => handleMenuOpen(e, 'classAnchorEl')}
            >
              Class
            </Button>
          </Tooltip>
          <Menu
            anchorEl={menuState.classAnchorEl}
            open={Boolean(menuState.classAnchorEl)}
            onClose={() => handleMenuClose('classAnchorEl')}
          >
            {['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'].map((className) => (
              <MenuItem key={className} onClick={() => handleMenuClose('classAnchorEl', className)}>
                {className}
              </MenuItem>
            ))}
          </Menu>

          <Tooltip title="Click to display data" arrow>
            <Button variant="outlined" color="info">
              {`Selected: ${menuState.selectedBuilding || 'None'}, ${menuState.selectedClass || 'None'}`}
            </Button>
          </Tooltip>
        </Box>
      </Box>

      {/* Grid with Cards */}
      
      <Grid container spacing={4} sx={{ width: '100%', mb: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              backgroundColor: card.bgColor, 
              borderRadius: '12px', 
              boxShadow: 3, 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                }
              }}>
              <CardContent>
                <LightbulbIcon sx={{ color: '#ffd700', fontSize: 36 }} />
                <Typography variant="h6" gutterBottom>{card.title}</Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{card.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Scatter Plot Graph */}
      <Box sx={{ marginTop: 4, height: 400, backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" gutterBottom>Light On Times Throughout the Day</Typography>
        <Scatter data={scatterData} options={scatterOptions} />
      </Box>

      {/* Material Design Back to Main Page Button */}
      <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: '10px 20px', borderRadius: 2 }}
          onClick={() => (window.location.href = '/')}
        >
          {isMobile ? 'Main' : 'Back to Main Page'}
        </Button>
      </Box>
    </Box>
  );
};

export default PowerDashboard;
