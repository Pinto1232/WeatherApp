import { Box, Container, Grid, ListItem } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from 'react';
import AboutCard from './AboutCard';
import AboutHeader from './AboutHeader';

const AboutSection = () => {
	return (
		<div>
			<Grid container className='mt-8  bg-smooth-black text-white text-2xl font-bold  p-10'>
				<Container>
					<AboutHeader />
					<AboutCard />
				</Container>
			</Grid>
		</div>
	);
};

export default AboutSection;
