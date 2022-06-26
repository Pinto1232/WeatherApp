import { Box, Divider, ListItem } from '@mui/material';
import { FaGgCircle } from 'react-icons/fa';


const Card = () => {
	return (
		<div>
			<Box className='flex md:flex justify-items-center gap-4'>
				<div className='Card basis-full bg-smooth-black p-5'>
					<ListItem>
						<FaGgCircle
							style={{
								fontSize: '3em'
							}}
						/>
					</ListItem>
					<ListItem className='font-extrabold capitalize'>
						<h1>Lorem ipsum dolor.</h1>
					</ListItem>
					<ListItem>
						<Divider
							style={{
								color: 'white',
								borderBottom: '1px solid white',
								padding: '10px',
								width: '6em'
							}}
						/>
					</ListItem>
					<ListItem>
						<p className='text-sm'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt esse architecto?
						</p>
					</ListItem>
				</div>

				<div className='Card basis-full border-2 border-purple bg-smooth-black p-5'>
					<ListItem>
						<FaGgCircle
							style={{
								fontSize: '3em'
							}}
						/>
					</ListItem>
					<ListItem className='font-extrabold capitalize'>
						<h1>Lorem ipsum dolor.</h1>
					</ListItem>
					<ListItem>
						<Divider
							style={{
								color: 'white',
								borderBottom: '1px solid white',
								padding: '10px',
								width: '6em'
							}}
						/>
					</ListItem>
					<ListItem>
						<p className='text-sm'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt esse architecto?
						</p>
					</ListItem>
				</div>

				<div className='Card basis-full bg-smooth-black p-5'>
					<ListItem>
						<FaGgCircle
							style={{
								fontSize: '3em'
							}}
						/>
					</ListItem>
					<ListItem className='font-extrabold capitalize'>
						<h1>Lorem ipsum dolor.</h1>
					</ListItem>
					<ListItem>
						<Divider
							style={{
								color: 'white',
								borderBottom: '1px solid white',
								padding: '10px',
								width: '6em'
							}}
						/>
					</ListItem>
					<ListItem>
						<p className='text-sm'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt esse architecto?
						</p>
					</ListItem>
				</div>
			</Box>
		</div>
	);
};

export default Card;
