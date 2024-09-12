import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Typography, Grid, Card, CardContent, Button, Menu, MenuItem } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, CategoryScale, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const PowerDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = window.innerWidth < 700;

  // State for controlling the dropdown menus and storing selected values
  const [menuState, setMenuState] = useState({
    anchorEl: null,
    classAnchorEl: null,
    selectedBuilding: '',
    selectedClass: ''
  });

  // Unified handler for opening menus
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

  const cardData = [
    { title: "Number of light bulbs in the room", value: "2/4", bgColor: "#e0f7fa" },
    { title: "The lights that are on", value: "the front ones", bgColor: "#e8f5e9" },
    { title: "Projector on/off", value: "off", bgColor: "#e3f2fd" },
    { title: "Computer on/off", value: "on", bgColor: "#f1f8e9" },
    { title: "Air condition on/off", value: "on", bgColor: "#f1f8e9" }
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
  };

  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section with Title and Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'black' }}>Power Dashboard</Typography>

        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
            onClick={(e) => handleMenuOpen(e, 'anchorEl')}
          >
            Building
          </Button>
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

          <Button
            variant="contained"
            color="secondary"
            sx={{ marginRight: 2 }}
            onClick={(e) => handleMenuOpen(e, 'classAnchorEl')}
          >
            Class
          </Button>
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

          <Button variant="outlined" color="info">
            {`Selected: ${menuState.selectedBuilding || 'None'}, ${menuState.selectedClass || 'None'}`}
          </Button>
        </Box>
      </Box>

      {/* Grid with Cards */}
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ backgroundColor: card.bgColor }}>
              <CardContent>
                <LightbulbIcon sx={{ color: '#ffd700' }} />
                <Typography variant="h6" gutterBottom>{card.title}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{card.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Scatter Plot Graph */}
      <Box sx={{ marginTop: 4, height: 400 }}>
        <Typography variant="h5" gutterBottom>Light On Times Throughout the Day</Typography>
        <Scatter data={scatterData} options={scatterOptions} />
      </Box>

      {/* Home Button */}
      <BtnContainer>
        <HomeBtn onClick={() => (window.location.href = '/')}>
          {isMobile ? 'Main' : 'Back to Main Page'}
        </HomeBtn>
      </BtnContainer>
    </Box>
  );
};

export default PowerDashboard;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.button`
  background-color: rgb(24, 153, 214);
  border: none;
  border-radius: 16px;
  color: white;
  cursor: pointer;
  font-family: din-round, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  padding: 13px 16px;
  text-transform: uppercase;
  width: 13rem;
  transition: filter 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }

  &:disabled {
    cursor: auto;
  }

  &:active {
    background: none;
    border-top-width: 4px;
  }

  @media (max-width: 700px) {
    width: 150px;
  }
`;
