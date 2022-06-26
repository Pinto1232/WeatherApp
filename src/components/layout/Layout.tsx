import React, { ReactNode } from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../__fotter/Footer';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
	return (
		<div>
			<NavBar />
      <div {...props}>{children}</div>
      <Footer/>
		</div>
	);
};

export default Layout;
