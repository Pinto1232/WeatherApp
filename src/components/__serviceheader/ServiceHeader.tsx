import { Box, Grid, ListItem, Divider } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CardService from '../__card_service/CardService';

const ServiceHeader = () => {
	return (
		<div>
			<Container maxWidth='md'>
				<Box>
					<Grid>
						<ListItem className='mb-10'>
							<Divider
								style={{
									color: 'white',
									borderBottom: '2px solid white',
									padding: '10px',
									marginRight: '10px',
									width: '2em'
								}}
							/>
							<h1>Services.</h1>
						</ListItem>

						<ListItem>
							<p className='text-sm -mt-20 text-purple font-extrabold'>OUR SERVICES FOR CUSTOMERS</p>
						</ListItem>
						<CardService />
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default ServiceHeader;
