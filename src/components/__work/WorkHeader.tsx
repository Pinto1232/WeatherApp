import { Divider } from '@material-ui/core';
import { Box, Grid, ListItem as div, ListItem } from '@mui/material';
import { Container } from '@mui/system';
import BtnView from '../button/BtnView';


const WorkHeader = () => {
	return (
		<div>
			<Container maxWidth='md'>
				<Grid className='flex justify-between text-white mb-10 mt-20'>
					<Box>
						<div>
							<Divider
								style={{
									borderBottom: '2px solid #fff',
									width: '2em',
									color: 'purple'
								}}
							/>
							<h1 className='-mt-4 mx-10 text-lg font-extrabold '>Works.</h1>
							<div>
								<p className='text-sm  mt-4 font-extrabold text-purple'>OUR SERVICES FOR CUSTOMERS</p>
							</div>
						</div>
					</Box>

					<Box>
						<div>
							<BtnView />
						</div>
					</Box>
				</Grid>
			</Container>
		</div>
	);
};

export default WorkHeader;
