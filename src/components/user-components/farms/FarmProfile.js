import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import classes from './FarmProfile.module.css';

function FarmProfile(props) {
    console.log(props.data);
    return (
        <Grid item xs={12}>
          <Card className={classes.profileCard}>
            <CardMedia
              component="img"
              height="194"
              image={props.data.image}
              alt={props.data.name}
            />
            <CardHeader 
            title={<Typography variant="h3">{props.data.name}</Typography>}  
            subheader={props.data.owner} 
            action={
              <Typography style={{ paddingTop: "25px" }}>Tannourine</Typography>
            }
            >
              
            </CardHeader>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {props.data.description}
              </Typography>
            </CardContent>
          </Card>
          </Grid>
    );
}

export default FarmProfile;