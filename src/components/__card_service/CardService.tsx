import { Box, Grid, ListItem } from '@mui/material';
import { Container } from '@mui/system';
import { FaChartLine } from 'react-icons/fa';

const CardService = () => {
	return (
		<div>
			<Container>
				<Box className='grid grid-cols-3 basis-full pb-10 gap-3'>
					<Grid
						style={{
							borderBottom: '2px solid #fff',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
						}}
						className='Card bg-card-bg shadow-2xl'>
						<ListItem>
							<div className='text-start h-40 p-4 mt-10'>
								<div>
									<FaChartLine
										style={{
											marginBottom: '20px',
											fontSize: '30px'
									  }}
									/>
								</div>
								<h1 className='text-sm font-extrabold mb-3'>Digital Strategy</h1>
								<div className="text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</ListItem>
					</Grid>

					<Grid
						style={{
							borderBottom: '2px solid #fff',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
						}}
						className='Card bg-card-bg shadow-2xl
						'>
						<ListItem>
							<div className='text-start h-40 p-4 mt-10'>
								<div>
									<FaChartLine
										style={{
											marginBottom: '20px',
											fontSize: '30px'
									  }}
									/>
								</div>
								<h1 className='text-sm font-extrabold  mb-3'>Digital Strategy</h1>
								<div className="text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</ListItem>
					</Grid>

					<Grid
						style={{
							borderBottom: '2px solid #fff',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
						}}
						className='Card bg-purple shadow-2xl
						'>
						<ListItem>
							<div className='text-start h-40 p-4 mt-10'>
								<div>
									<FaChartLine
										style={{
											marginBottom: '20px',
											fontSize: '30px'
									  }}
									/>
								</div>
								<h1 className='text-sm font-extrabold  mb-3'>Digital Strategy</h1>
								<div className="text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</ListItem>
					</Grid>

					<Grid
						style={{
							borderBottom: '2px solid #fff',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
						}}
						className='Card bg-card-bg shadow-2xl
						'>
						<ListItem>
							<div className='text-start h-40 p-4 mt-10'>
								<div>
									<FaChartLine
										style={{
											marginBottom: '20px',
											fontSize: '30px'
									  }}
									/>
								</div>
								<h1 className='text-sm font-extrabold  mb-3'>Digital Strategy</h1>
								<div className="text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</ListItem>
					</Grid>

					<Grid
						style={{
							borderBottom: '2px solid #fff',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
						}}
						className='Card bg-card-bg shadow-2xl
						'>
						<ListItem>
							<div className='text-start h-40 p-4 mt-10'>
								<div>
									<FaChartLine
										style={{
											marginBottom: '20px',
											fontSize: '30px'
									  }}
									/>
								</div>
								<h1 className='text-sm font-extrabold  mb-3'>Digital Strategy</h1>
								<div className="text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</ListItem>
					</Grid>

					<Grid
						style={{
							borderBottom: '2px solid #fff',
							display: 'flex',
							flexDirection: 'column',
							boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
						}}
						className='Card bg-card-bg shadow-2xl
						'>
						<ListItem>
							<div className='text-start h-40 p-4 mt-10'>
								<div>
									<FaChartLine
										style={{
											marginBottom: '20px',
											fontSize: '30px'
									  }}
									/>
								</div>
								<h1 className='text-sm font-extrabold  mb-3'>Digital Strategy</h1>
								<div className="text-xs">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</div>
							</div>
						</ListItem>
					</Grid>
				</Box>
			</Container>
		</div>
	);
};

export default CardService;
