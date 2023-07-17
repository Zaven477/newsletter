import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { SignUp } from './components/SignUp/SignUp';
import './App.css';
import { IconList } from './components/IconList/IconList';
import { FormSubmit } from './components/Form/Form';
import { Feedback } from './components/FeedBack/FeedBack';




const App = () => {
 const [value, setValue] = useState('');
 
 
 
 if(value) {
   return (
      <Feedback value={value} />
   )
 }
 return (

    <Box sx={{
      boxShadow: 0,
      width: '850px',
      height: '600px',
      margin: 'auto',
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      borderRadius: '16px',
      background: 'white',
      pt: '15px',
      pr: '15px',
      pb: '8px',
      zIndex: 5,
    }}>
     <Box display="flex" justifyContent="center" width="450px">
      <Typography sx={{
          position: 'absolute',
          zIndex: 3,
          pt: '50px',
          fontSize: '50px',
          fontWeight: 700,
      }}>
        Stay updated!
      </Typography>
     </Box>
    <Box width="450px" display="flex" justifyContent="center">
     <Typography sx={{
         position: 'absolute',
         pt: '140px',
         zIndex: 2,
         ml: '55px'
      }}>
        Join 60,000+ product managers receiving monthly updates on:
      </Typography>
    </Box>
  <Box display="flex" justifyContent="center" width="450px">
    <Box sx={{
        position: 'absolute',
        zIndex: 4,
        pt: '210px',
        display: 'flex',
        ml: '10px',
        gap: '12px'
     }}>
       <SvgIcon component={IconList} />
       <Typography>Product discovery and building what matters</Typography>
     </Box>
     <Box sx={{
       position: 'absolute',
       zIndex: 7,
       pt: '255px',
       display: 'flex',
       ml: '7px',
       gap: '12px',
     }}>
       <SvgIcon component={IconList} />
       <Typography>Measuring to ensure updates are a success</Typography>
     </Box>
     <Box sx={{
      position: 'absolute',
      zIndex: 8,
      pt: '300px',
      left: 54,
      display: 'flex',
      gap: '12px'
     }}>
       <SvgIcon component={IconList} />
       <Typography>And much more!</Typography>
     </Box>
    </Box>
    <FormSubmit setValue={setValue} />
     <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        
      }}>
        <SvgIcon component={SignUp} />
     </Box>
    </Box>
   

  );
}

export default App;
