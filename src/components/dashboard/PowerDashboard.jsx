import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  ChartTooltip,
  Legend
);

const PowerDashboard = () => {
  const sensorFunction = async () => {
    try {
      const res = await axios.get(
        "http://localhost:10000/sensorsData/all-data"
      );
      setSensorsData(res.data); // Store fetched data in state
    } catch (error) {
      console.error("error fetching sensors " + error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    sensorFunction();
  }, []);

  const [menuState, setMenuState] = useState({
    anchorEl: null,
    classAnchorEl: null,
    selectedBuilding: "",
    selectedClass: "",
  });

  const handleMenuOpen = (event, menuType) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menuType]: event.currentTarget,
    }));
  };

  const handleMenuClose = (menuType, value) => {
    setMenuState((prevState) => ({
      ...prevState,
      [menuType]: null,
      ...(value && menuType === "anchorEl" ? { selectedBuilding: value } : {}),
      ...(value && menuType === "classAnchorEl"
        ? { selectedClass: value }
        : {}),
    }));
  };

  const initialCardData = [
    { title: "Temperature", value: "", bgColor: "#3f51b5" },
    { title: "Humidity", value: "", bgColor: "#4caf50" },
    { title: "CO2", value: "", bgColor: "#ff9800" },
    { title: "Computer on/off", value: "", bgColor: "#e91e63" },
    { title: "Air condition on/off", value: "", bgColor: "#673ab7" },
  ];

  const [sensorsData, setSensorsData] = useState([]);
  const [cardData, setCardData] = useState(initialCardData);

  const handleDisplayDataClick = () => {
    const selectedClass = `${menuState.selectedClass || "None"}_${menuState.selectedBuilding || "None"}`;

    const selectedClassSensors = sensorsData.filter((sens) =>
      sens.location.room.includes(selectedClass)
    );
    //console.log(selectedClassSensors);
    if (selectedClassSensors.length == 0) {
      alert(
        `There is no sensors in the class- ${selectedClass}, please choose another one.`
      );
      return;
    } else {
      alert(`Data updated to ${selectedClass}`);
    }

    const tempSensors = selectedClassSensors.filter((sens) =>
      sens.type.includes("Temperature")
    );
    const humiditySensors = selectedClassSensors.filter((sens) =>
      sens.type.includes("Humidity")
    );
    const co2Sensors = selectedClassSensors.filter((sens) =>
      sens.type.includes("CO2")
    );

    // Update each card with a unique value based on the selected format
    const updatedCardData = cardData.map((card, index) => {
      let newValue;
      switch (index) {
        case 0:
          if (tempSensors.length === 0) {
            newValue = `There is no temperature sensor in this class`;
          } else {
            tempSensors.forEach((sensor, index) => {
              const temperatureIndex = sensor.type.indexOf("Temperature");
              // Get the latest data entry (last element in sensors_data array)
              const latestData =
                sensor.sensors_data[sensor.sensors_data.length - 1];
              const temperatureValue = latestData.data[temperatureIndex];
              newValue = `${temperatureValue} , Last Update: ${latestData.last_update}`;
            });
          }
          break;
        case 1:
          if (humiditySensors.length == 0) {
            newValue = `There is no a humidity sensor in this class`;
          } else {
            newValue = `30%`;
          }
          break;
        case 2:
          if (co2Sensors.length == 0) {
            newValue = `There is no a CO2 sensor in this class`;
          } else {
            newValue = `10pcc`;
          }
          break;
        case 3:
          newValue = `Computer: ${Math.random() > 0.5 ? "On" : "Off"}`; // מצב מחשב
          break;
        case 4:
          newValue = `AC: ${Math.random() > 0.5 ? "On" : "Off"}`; // מצב מיזוג אוויר
          break;
        default:
          newValue = "N/A";
      }

      return { ...card, value: newValue };
    });

    setCardData(updatedCardData);
  };

  const buildingsData = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const classesData = [
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
    "106",
    "107",
    "108",
    "109",
    "110",
    "111",
    "112",
    "200",
    "201",
    "202",
    "203",
    "204",
    "205",
    "206",
    "207",
    "208",
    "209",
    "210",
    "211",
    "212",
    "300",
    "301",
    "302",
    "303",
    "304",
    "305",
    "306",
    "307",
    "308",
    "309",
    "310",
    "311",
    "312",
  ];

  const scatterData = {
    datasets: [
      {
        label: "Light On Times",
        data: [
          { x: "Rear Right", y: 3 },
          { x: "Rear Right", y: 14 },
          { x: "Front Left", y: 8 },
          { x: "Front Right", y: 10 },
          { x: "Front Left", y: 18 },
          { x: "Rear Left", y: 21 },
        ],
        backgroundColor: "rgba(75, 192, 192, 1)",
        pointRadius: 6,
      },
    ],
  };

  const scatterOptions = {
    scales: {
      x: {
        type: "category",
        labels: ["Rear Right", "Rear Left", "Front Right", "Front Left"],
        title: { display: true, text: "Lights in the Room" },
      },
      y: {
        beginAtZero: true,
        title: { display: true, text: "Hours of the Day" },
        ticks: { stepSize: 1 },
        min: 0,
        max: 24,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "black",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
      },
    },
    layout: {
      padding: 20,
    },
    backgroundColor: "white",
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mb: 4,
            padding: "25px 1px",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #3f51b5, #21CBF3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          Power Dashboard
        </Typography>

        <Box>
          <Tooltip title="Select a building" arrow>
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginRight: 2,
                backgroundColor: "#0288d1",
                "&:hover": { backgroundColor: "#01579b" },
              }}
              onClick={(e) => handleMenuOpen(e, "anchorEl")}
            >
              Building
            </Button>
          </Tooltip>
          <Menu
            anchorEl={menuState.anchorEl}
            open={Boolean(menuState.anchorEl)}
            onClose={() => handleMenuClose("anchorEl")}
          >
            {buildingsData.map((building) => (
              <MenuItem
                key={building}
                onClick={() => handleMenuClose("anchorEl", building)}
              >
                {building}
              </MenuItem>
            ))}
          </Menu>

          <Tooltip title="Select a class" arrow>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                marginRight: 2,
                backgroundColor: "#7b1fa2",
                "&:hover": { backgroundColor: "#4a148c" },
              }}
              onClick={(e) => handleMenuOpen(e, "classAnchorEl")}
            >
              Class
            </Button>
          </Tooltip>
          <Menu
            anchorEl={menuState.classAnchorEl}
            open={Boolean(menuState.classAnchorEl)}
            onClose={() => handleMenuClose("classAnchorEl")}
          >
            {classesData.map((className) => (
              <MenuItem
                key={className}
                onClick={() => handleMenuClose("classAnchorEl", className)}
              >
                {className}
              </MenuItem>
            ))}
          </Menu>

          <Tooltip title="Click to display data" arrow>
            <Button
              variant="outlined"
              color="info"
              onClick={handleDisplayDataClick}
            >
              {`Selected: ${menuState.selectedBuilding || "None"}, ${menuState.selectedClass || "None"}`}
            </Button>
          </Tooltip>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ width: "100%", mb: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: card.bgColor,
                borderRadius: "12px",
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <LightbulbIcon
                  sx={{ fontSize: 40, color: "white", marginRight: 2 }}
                />
                <Typography variant="h5" sx={{ color: "white" }}>
                  {card.title}
                </Typography>
              </CardContent>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Scatter options={scatterOptions} data={scatterData} />
    </Box>
  );
};

export default PowerDashboard;
