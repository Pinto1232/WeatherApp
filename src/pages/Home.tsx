import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/__fotter/Footer';
import AboutSection from '../components/__sectionabout/AboutSection';
import ServiceSection from '../components/__services/ServiceSection';
import WorkSection from '../components/__work/WorkSection';

const Home = () => {
	return (
		<div>
			<Header />
			<ServiceSection />
			<WorkSection />
			<AboutSection />
			<Footer />
		</div>
	);
};

export default Home;
