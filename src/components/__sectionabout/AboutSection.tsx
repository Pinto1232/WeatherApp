import { Box, Container, Grid, ListItem } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from 'react';
import AboutCard from './AboutCard';

const AboutSection = () => {
	return (
		<div>
			<Grid container xs={12} className='mt-8  bg-smooth-black text-white text-2xl font-bold  p-10'>
				<Container>
					<AboutCard />
				</Container>
			</Grid>
		</div>
	);
};

export default AboutSection;
