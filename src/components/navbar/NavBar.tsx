import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BtnSignUp from '../button/BtnSignUp';
import NavLinks from '../navLinks/NavLinks';

import SearchBar from '../search/SearchBar';
import { FaAngleDown } from 'react-icons/fa';
import '@ionic/react/css/core.css';
import { IoMenu } from 'react-icons/io5';

const navBar = (props: any) => {
	const [ open, setOpen ] = useState(false);

	return (
		<nav className=' sticky top-0 bg-black-text bg-black z-50 '>
			<div className='flex mx-40 sm:mx-10 items-center font-medium  justify-around '>
				<div className=' text-white uppercase md:w-auto w-full flex justify-around'>
					<Link to='/'>
						<h1 className='text-xl font-bold'>Forecast</h1>
					</Link>
					<div className='text-3xl md:hidden z-50 text-white' onClick={() => setOpen(!open)}>
						<IoMenu name={`${open ? 'close' : 'menu'}`} ></IoMenu>
					</div>
				</div>

				<ul className='md:flex  hidden text-white uppercase items-center gap-8 md:cursor-pointer'>
					<li>
						<Link to='/' className='flex py-5 px-3 border-b-2 border-purple'>
							Home<FaAngleDown
								style={{
									marginTop: '5px',
									marginLeft: '2px',
									color: ' rgb(63 60 187)'
								}}
							/>
						</Link>
					</li>
					<NavLinks />
				</ul>

				<div className='md:block hidden'>
					<BtnSignUp />
				</div>

				<div className='md:block hidden text-white'>
					<SearchBar />
				</div>

				{/* Mobile navbar*/}
				<ul
					className={`md:hidden bg-menu-bg-color z-50 text-white  absolute w-full h-full bottom-0 py-24 pl-4
                    duration-500 easy-in ${open ? 'left-0' : 'left-[-100%]'}`}>
					<li>
						<Link to='/' className=' py-7 px-3 inline-block'>
							Home
						</Link>
					</li>
					<NavLinks />
					<li className='py-5'>
						<BtnSignUp />
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default navBar;
