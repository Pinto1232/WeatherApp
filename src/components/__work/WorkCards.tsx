import { Box, Grid } from '@mui/material';
import ImageBack from './../../../src/assets/sky.jpg';
import ImagePC from './../../../src/assets/pc.jpg';
import Imagecromatic from './../../../src/assets/cromatic.jpg';
import IphoneImage from './../../assets/phone.jpg';
import BrabosImage from './../../assets/brabos.jpeg';
import ImageMayback from './../../assets/mayback.jpg';

const WorkCards = () => {
	return (
		<div>
			<Grid container className='grid grid-cols-6 flex-grow text-white gap-0.3 mb-24 '>
				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={ImageBack} alt='' />
									<span className='absolute -mt-60' />
								</h1>
							</div>
						</div>
					</Box>
				</Grid>

				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={Imagecromatic} alt='' />
									<span className='absolute -mt-60' />
								</h1>
							</div>
						</div>
					</Box>
				</Grid>

				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={IphoneImage} alt='' />
									<span className='absolute -mt-60' />
								</h1>
							</div>
						</div>
					</Box>
				</Grid>

				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={ImagePC} alt='' />
									<span className='absolute -mt-60' />
								</h1>
							</div>
						</div>
					</Box>
				</Grid>

				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={BrabosImage} alt='' />
									<span className='absolute -mt-60' />
								</h1>
							</div>
						</div>
					</Box>
				</Grid>

				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={ImageMayback} alt='' />
									<span className='absolute -mt-60' />
								</h1>
							</div>
						</div>
					</Box>
				</Grid>
			</Grid>
		</div>
	);
};

export default WorkCards;
