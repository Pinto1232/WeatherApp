import { Box, Container, Grid } from '@mui/material';
import BtnStart from '../button/BtnStart';
import Card from '../card/Card';
import WeatherImg from './../../assets/weather.png';
import { motion } from 'framer-motion';

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

						<motion.div
							animate={{ x: [ 0, 100, 0 ] }}
							transition={{ ease: 'easeOut', duration: 2 }}
							className='grow -z-50'>
							<img src={WeatherImg} alt='' />
						</motion.div>
					</Box>
					{/* Card Component */}
					<Card />
				</Box>
			</Grid>
		</Container>
	);
};

export default Header;
