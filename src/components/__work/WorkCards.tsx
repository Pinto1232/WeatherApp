import React from 'react';
import { Box, Grid, ListItem } from '@mui/material';
import ImageBack from './../../../src/assets/sky.jpg';

const WorkCards = () => {
	return (
		<div>
			<Grid container xs={12} className='grid grid-cols-6 text-white gap-1 '>
				<Grid className='basis-6 flex-grow bg-white '>
					<Box>
						<div>
							<div>
								<h1>
									<img src={ImageBack} alt='' />
                                    <span className='absolute -mt-60'>
                                        
                                    </span>
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
									<img src={ImageBack} alt='' />
                                    <span className='absolute -mt-60'>
                                        
                                    </span>
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
									<img src={ImageBack} alt='' />
                                    <span className='absolute -mt-60'>
                                        
                                    </span>
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
									<img src={ImageBack} alt='' />
                                    <span className='absolute -mt-60'>
                                        
                                    </span>
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
									<img src={ImageBack} alt='' />
                                    <span className='absolute -mt-60'>
                                        
                                    </span>
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
									<img src={ImageBack} alt='' />
                                    <span className='absolute -mt-60'>
                                        
                                    </span>
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
