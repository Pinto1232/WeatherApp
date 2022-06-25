import { Box, Container, Grid, ListItem } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from 'react';
import ServiceHeader from '../__serviceheader/ServiceHeader';

const ServiceSection = () => {
	return (
		<div>
			<Grid container className='mt-8  bg-smooth-black text-white text-2xl font-bold  p-10'>
				<Container>
					<ServiceHeader />
				</Container>
			</Grid>
		</div>
	);
};

export default ServiceSection;
