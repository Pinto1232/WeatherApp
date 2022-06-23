import { lightBlue } from '@mui/material/colors';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const BtnStart = () =>
{
	return (
		<div className='bg-black-text'>
			<button
				type='submit'
				className='bg-black border-2 flex 
				   uppercase border-purple md:px-9
                   mt-10
				   md:py-2.5  text-white  text-sm
				 '>
				Sign Up<FaAngleDown
					style={{
						marginTop: '1px',
						marginLeft: '2px',
                        color: ' rgb(63 60 187)'
					}}
				/>
			</button>
		</div>
	);
};

export default BtnStart;
