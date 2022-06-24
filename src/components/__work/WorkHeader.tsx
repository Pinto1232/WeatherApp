import { Divider } from '@material-ui/core';
import { Box, Grid, ListItem as div } from '@mui/material';
import { Container } from '@mui/system';

const WorkHeader = () => {
	return (
		<div>
			<Grid>
				<Box className='text-white'>
					<Container maxWidth='md'>
						<div className='flex mb-10 mt-20'>
							<Divider
								style={{
									borderBottom: '2px solid #fff',
									width: '2em',
									color: 'purple'
								}}
							/>
							<h1 className='-mt-4 mx-2 text-lg font-extrabold '>Works.</h1>
							<div>
								<p className='text-sm -mx-28 mt-4 font-bold text-purple'>OUR SERVICES FOR CUSTOMERS</p>
							</div>
						</div>
					</Container>
				</Box>
			</Grid>
		</div>
	);
};

export default WorkHeader;
