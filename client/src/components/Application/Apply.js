import React from 'react';
import Filter from '../Filter/Filter';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Send from './Send';

const Apply = () => {
  return (
    <div style={{marginBottom:25}}>
        <Filter showSearch={false} />
        <Typography variant="h3" component="h1" mt={4} ml={11}>
               APPLY
        </Typography>
        <Typography variant="subtitle2" sx={{ color: grey[500] }} component="p" mt={1} ml={11}>
         Send your profile information and motivation message to PINK UNICORN
        </Typography>
        <Send/>
    </div>
  );
};

export default Apply;
