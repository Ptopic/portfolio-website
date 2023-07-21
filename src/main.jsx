import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Navbar />
		<Header />
		<About />
		<Portfolio />
		<Contact />
		<Footer />
	</React.StrictMode>
);
