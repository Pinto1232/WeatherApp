import Header from '../components/header/Header';
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
		</div>
	);
};

export default Home;
