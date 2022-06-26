import { Routes, Route } from 'react-router-dom';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Home from '../pages/Home';
import Login from '../pages/login/Login';
import MapPages from '../pages/map/MapPages';
import { Portfolio } from '../pages/portfolio/Portfolio';
import SignUp from '../pages/signup/SignUp';

const Roteator = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/about' element={<About />} />
			<Route path='/map' element={<MapPages />} />
			<Route path='/portfolio' element={<Portfolio />} />
			<Route path='/signup' element={<SignUp />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
};

export default Roteator;
