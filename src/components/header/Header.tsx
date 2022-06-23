import { Box, Container, Grid, ListItem } from '@mui/material';
import * as React from 'react';
import BtnStart from '../button/BtnStart';
import { FaGgCircle } from 'react-icons/fa';
import Divider from '@mui/material/Divider';



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
					<Box className='flex md:flex justify-items-center gap-4'>
						<div className='Card basis-full bg-smooth-black p-5'>
                            <ListItem><FaGgCircle />
                            </ListItem>
                            <ListItem>
                                <h1>Lorem ipsum dolor adipisicing elit.</h1>
                            </ListItem>
                             <Divider />
						</div>
						<div className='Card basis-full border-2 border-purple bg-smooth-black p-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, tempora incidunt!
							Blanditiis error obcaecati dolore veniam sapiente fugit magnam dolorem.
						</div>
						<div className='Card basis-full bg-smooth-black p-5'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem consequatur ipsum eligendi
							officiis! Reiciendis cumque dolorum sed alias. Mollitia, enim.
						</div>
					</Box>
				</Box>
			</Grid>
		</Container>
	);
};

export default Header;