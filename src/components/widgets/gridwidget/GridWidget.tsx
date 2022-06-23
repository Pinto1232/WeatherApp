import { Box, Container, Grid } from '@mui/material';
import { height } from '@mui/system';
import React from 'react';
import BoxCard from '../../boxcard/BoxCard';
import UI from './../../ui/UI';

export const GridWidget = () => {
	return (
		<Container>
      <Box
        sx={{
          backgroundColor: '#fff',
          height: 500
         }}
      >
        <Grid>
          1
        </Grid>
			</Box>
		</Container>
	);
};
