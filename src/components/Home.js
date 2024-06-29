import { Box, Grid, Typography } from '@mui/material';
import clouds from '../assets/images/clouds.png';
import plane from '../assets/images/plane_1.gif';
import TypewriterComponent from 'typewriter-effect';
// import {Typography} from '@mui/material';

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={clouds} alt="clouds" className='banner'/>
        <img src={plane} alt="Overlay" className="overlay-image fly-right" />
        <p className='dancing-script-title'>test</p>
        <Typography
          component="p"
          sx={{
            position: 'absolute',
            top: '40%',
            width: '100%',
            color: 'white',
            justifyContent: 'center',
            fontFamily: '"Dancing Script", cursive',
            fontSize: '5rem',
            '@media (max-width: 600px)': {
              fontSize: '2.5rem',
              top: '18%',
            },
          }}
         >Vivek Mandal</Typography>
        <Typography
          component="p"
          sx={{
            position: 'absolute',
            top: '60%',
            width: '100%',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '3rem',
            '@media (max-width: 600px)': {
              fontSize: '1.5rem',
              top: '45%',
            },
          }}
         > I am&nbsp;
          <Box sx={{ fontWeight: 'bold' }}>
            <TypewriterComponent
              options={{
                strings: ['a proud Indian.', 'a software engineer.', 'a web developer.', 'a programmer.', 'Mr. Zero.', 'Nobody.'],
                autoStart: true,
                loop: true,
                deleteSpeed: 30
              }}
            />
          </Box>
        </Typography>
      </div>
    </>
  )
};

export default Home;