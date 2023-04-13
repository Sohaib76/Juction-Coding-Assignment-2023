import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { grey } from '@mui/material/colors';
import { CircularProgress, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const FormSent = () => {
  return (
    <div>
 <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop={6}
       // This will make the container take up at least the full height of the viewport
    >
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={100}
        thickness={2}
        size={80} // Adjust the size of the circle here
        sx={{
          color: 'primary.main',
        }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
       
      >
        <CheckIcon
          sx={{
            fontSize: 50, // Adjust the size of the tick mark here
            color: 'primary.main',
          }}
        />
      </Box>
    </Box>
    </Box>
     <Typography sx={{ fontSize: 20, textAlign:'center' }} variant="h4" component="h3" mt={2} ml={2}>
        Form sent successfully
      </Typography>
      <Link href="#" underline="hover">    
      
      <Typography ml={2}  sx={{ fontSize: 14, color: grey[500],textAlign:'center', textDecoration:'underline'  }} gutterBottom>
        View the form
      </Typography>
      </Link>
        
        <Typography sx={{ fontSize: 14, textAlign:'center', marginTop:7 }} variant="h7" component="h3" mt={1} ml={2}>
        Please wait for the teams response in your mail.
      </Typography>
    </div>
  )
}

export default FormSent