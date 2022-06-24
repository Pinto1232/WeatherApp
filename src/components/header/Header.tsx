import { Box, Container, Grid, ListItem } from '@mui/material';
import * as React from 'react';
import BtnStart from '../button/BtnStart';
import Card from '../card/Card';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
		}
	}
}

const Header = () => {
	return (
		<Container maxWidth='md' className=' mt-10 text-white'>
			<Grid>
				<Box className='justify-items-center'>
					<Box className='flex'>
						<div className='grow '>
							<h1 className='mb-4 mt-4 text-purple'>CREATIVE MIND, CREATIVE WORKS</h1>

							<h1 className='flex font-bold flex-col text-6xl leading-none mb-20 '>
								We are digital
								<span>agency.</span>
								<BtnStart />
							</h1>
						</div>
						<div className='grow' />
					</Box>
					{/* Card Component */}
					<Card />
				</Box>
			</Grid>
		</Container>
	);
};

export default Header;
