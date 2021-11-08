import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import doctor from '../../images/doctor.png'
import bg from '../../images/appointment-bg.png'
import { Button,Typography } from '@mui/material';

const appoinmentBg={
    background:`url(${bg})`,
    backgroundColor:'rgba(17, 21, 56, 0.6)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:150,
    
}


const AponmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         <img 
         style={{width:400,marginTop:"-130px"}}
         src={doctor} alt=""/>
        </Grid>
        <Grid item xs={12} md={6}>
        <Box style={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facere totam aliquam praesentium vel. Amet veniam odio vero doloremque laborum.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }} sx={{ mb: 5 }}>Learn More</Button>
                    </Box>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default AponmentBanner;