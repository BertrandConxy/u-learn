import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Rating from '@mui/material/Rating';
import { BsFillCircleFill } from 'react-icons/bs';
import { SlUser, SlUserFemale } from 'react-icons/sl';
import data from '../storage/data.json';

const CardGrid = () => (
  <Container maxWidth="md">
    <CssBaseline />
    <Toolbar />
    <Grid container spacing={2}>
      {
            data.map((tutor) => (
              <Grid item key={tutor.id} xs={12} sm={6} md={6}>
                <Card className="card">
                  <CardContent>
                    <div className="tutor-profile">
                      <div className="tutor-names">
                        <Box>
                          {tutor.gender === 'male' ? <SlUser className="user-icon" /> : <SlUserFemale className="user-icon" />}
                        </Box>
                        <div>
                          <Typography variant="body1" sx={{ fontSize: '2rem' }} component="div">
                            {tutor.name}
                          </Typography>
                          <Typography variant="body1" sx={{ fontSize: '2rem', fontWeight: 'bold' }} component="div">
                            {tutor.location}
                          </Typography>
                        </div>
                      </div>
                      <div className="tutor-active">
                        {tutor.active ? <BsFillCircleFill className="green" /> : <BsFillCircleFill className="red" />}
                      </div>
                    </div>
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                      <div className="chip">
                        <Typography variant="body1" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} component="div">
                          {tutor.teachings}
                          + teachings
                        </Typography>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div className="chip">
                        <Typography variant="body1" sx={{ fontSize: '1.5rem' }} component="div">
                          <a href="#call" className="link">{tutor.active ? 'Call Now' : 'Schedule call'}</a>
                        </Typography>
                      </div>
                      <Rating name="read-only" precision={0.5} size="large" value={tutor.rating} sx={{ color: 'black' }} readOnly />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
        }
    </Grid>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: [2] }}>
      <Toolbar />

      <Typography variant="body1" sx={{ fontSize: '2rem', fontWeight: 'bold' }} component="div">
        <a href="#index" className="link">Load More</a>
      </Typography>
    </Box>
  </Container>
);

export default CardGrid;
