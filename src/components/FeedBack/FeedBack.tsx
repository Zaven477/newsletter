import React, {useState} from 'react';
import { IFeedbackProps } from "./types"
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { IconSuccess } from "../IconSuccess/IconSuccess";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Back } from "../Back/Back";



export const Feedback = ({value}: IFeedbackProps) => {
  const [showContent, setShowContent] = useState(false);
  


  const handleClickBtn = () => {
    setShowContent(true);
    
 }


 if(showContent) {
    return (
        <Back />
     )
  }
  return (
        <Box sx={{
            boxShadow: 0,
            width: '450px',
            height: '450px',
            background: 'white',
            margin: 'auto',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: '24px',
        }}>
         <Box sx={{
            position: 'absolute',
            top: '40px',
            left: '40px'

         }}>
           <SvgIcon component={IconSuccess} />
         </Box>
         <Typography sx={{
            position: 'absolute',
            top: '130px',
            left: '40px',
            fontSize: '36px',
            fontWeight: 700,
            lineHeight: 1.2

         }}>
          Thanks for subscribing!
         </Typography>
         <Typography sx={{
            position: 'absolute',
            top: '240px',
            left: '40px'
         }}>
           A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription
         </Typography>
        <Box display="flex" justifyContent="center">
         <Button variant="contained"
          sx={{
            mt: '350px',
            pt: '10px',
            pb: '10px',
            pl: '90px',
            pr: '90px',
            mr: '50px',
            borderRadius: 2,
          }}
          onClick={handleClickBtn}
         >
          Dismiss message
         </Button>
         </Box>
        </Box>
    )
}