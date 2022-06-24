import React from 'react';
import Header from '../components/header/Header';
import ServiceSection from '../components/__services/ServiceSection';
import WorkSection from '../components/__work/WorkSection';

const Home = () => {
	return (
		<div>
			<Header />
			<ServiceSection />
			<WorkSection />
		</div>
	);
};

export default Home;
