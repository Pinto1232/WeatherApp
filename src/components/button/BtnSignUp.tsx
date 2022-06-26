import { lightBlue } from '@mui/material/colors';
import React from 'react';
import { FaAngleDown } from 'react-icons/fa';

const BtnSignUp = () =>
{
	return (
		<div className='bg-black-text'>
			<button
				type='submit'
				className='bg-black border-2 flex 
				   uppercase border-purple md:px-7
				   md:py-1.5  text-white 
				   font-bold text-sm hover:bg-midnight
				 '>
				Sign Up<FaAngleDown
					style={{
						marginTop: '5px',
						marginLeft: '3px',
						color: ' rgb(63 60 187)'
					}}
				/>
			</button>
		</div>
	);
};

export default BtnSignUp;
