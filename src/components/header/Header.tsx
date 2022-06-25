import { Box, Container, Grid, ListItem } from '@mui/material';
import * as React from 'react';
import BtnStart from '../button/BtnStart';
import Card from '../card/Card';
import WeatherImg from './../../assets/weather.png'



const Header = () => {
	return (
		<Container maxWidth='md' className=' mt-10 text-white'>
			<Grid>
				<Box className='justify-items-center'>
					<Box className='flex'>
						<div className='grow '>
							<h1 className='mb-4 mt-4 text-purple font-extrabold'>PRO UPDATES ON TIME </h1>

							<h1 className='flex font-bold flex-col text-5xl leading-none mb-20 '>
								Weather forecasts, 
								<span>nowcasts.</span>
								<BtnStart />
							</h1>
						</div>

						<div className='grow -z-50'>
							<img src={WeatherImg} alt="" />
						</div>
					</Box>
					{/* Card Component */}
					<Card />
				</Box>
			</Grid>
			
		</Container>
	);
};

export default Header;
