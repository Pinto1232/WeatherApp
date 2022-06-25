import { Box, Container, Grid, ListItem } from '@mui/material';
import ImageBack from './../../assets/pc.jpg';


const AboutCard = () => {
	return (
		<div>
			<Container>
				<Box className='grid md:grid-cols-2  flex-grow  gap-1'>
					<Grid
						style={{
							backgroundImage: `url(${ImageBack})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							minWidth: '100%'
						}}
						className='Card bg-card-bg shadow-3xl '>
						<ListItem>
							<div className='text-start p-4 mt-10'>
								<h1 className='text-md font-extrabold mb-3'>Digital Strategy</h1>
								<div className='text-xs'>Lorem ipsum dolor sit amet.</div>
							</div>
						</ListItem>
					</Grid>

					<Box className='flex md:flex-col gap-1   flex-grow'>
						<Grid>
							<Grid
								style={{
									backgroundImage: `url(${ImageBack})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
									minWidth: '100%'
								}}
								className='Card bg-card-bg shadow-3xl h-full  pb-20 '
							/>

							<ListItem>
								<div className='text-start h-40 p-4 '>
									<h1 className='text-md font-extrabold mb-3'>Digital Strategy</h1>
									<div className='text-xs mt-4'>Lorem ipsum dolor sit amet.</div>
								</div>
							</ListItem>
						</Grid>

						<Grid
							style={{
								backgroundImage: `url(${ImageBack})`,
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								minWidth: '100%'
							}}
							className='Card bg-card-bg shadow-3xl h-72  pb-20'>
							<ListItem>
								<div className='text-start h-40 p-4 '>
									<h1 className='text-md font-extrabold mb-3'>Digital Strategy</h1>
									<div className='text-xs mt-4'>Lorem ipsum dolor sit amet.</div>
								</div>
							</ListItem>
						</Grid>
					</Box>
				</Box>
			</Container>
		</div>
	);
};

export default AboutCard;
