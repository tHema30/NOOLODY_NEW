import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [tailorCount, setTailorCount] = useState(0);
  const [designCount, setDesignCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:7300/api/admin/all-users', { withCredentials: true });
        setUserCount(usersResponse.data.length);

        const tailorsResponse = await axios.get('http://localhost:7300/api/admin/tailorsProfile', { withCredentials: true });
        setTailorCount(tailorsResponse.data.length);

        const designsResponse = await axios.get('http://localhost:7300/api/designs/dress-designs/', { withCredentials: true });
        setDesignCount(designsResponse.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={dashboardStyle}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="div">
                Users
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {userCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="div">
                Tailors
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {tailorCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6" component="div">
                Designs
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {designCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

const dashboardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '10%',
  marginLeft: '25%',
};

const cardStyle = {
  minWidth: 275,
  textAlign: 'center',
};

export default Dashboard;
