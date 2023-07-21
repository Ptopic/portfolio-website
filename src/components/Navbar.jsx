import React, { useState } from 'react';
import './Navbar.css';
import { motion as m, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';

function Navbar() {
	const [open, setOpen] = useState();

	const toggleNav = () => {
		open ? setOpen(false) : setOpen(true);
	};

	return (
		<>
			<nav className="navbar">
				<h1>Petar Topić</h1>{' '}
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#portfolio">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>

			<nav className="navbar-mobile">
				<h1>Petar Topić</h1>
				<button onClick={() => toggleNav()}>
					<RxHamburgerMenu size={36} color="#000" />
				</button>
				<AnimatePresence>
					{open && (
						<m.div
							className="navbar-mobile-container"
							// style={{ display: open ? 'none' : 'flex' }}
							initial={{ x: 80, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{}}
							exit={{
								opacity: 0,
								x: -100,
								transition: {
									ease: 'easeInOut',
								},
							}}
						>
							<button onClick={() => toggleNav()}>
								<IoCloseOutline size={46} color="#000" />
							</button>
							<m.div
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',
									},
								}}
							>
								<a href="#home">Home</a>
							</m.div>
							<m.div
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.6 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',
									},
								}}
							>
								<a href="#about">About</a>
							</m.div>
							<m.div
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 1 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',
									},
								}}
							>
								<a href="#portfolio">Projects</a>
							</m.div>
							<m.div
								initial={{ y: 80, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 1.4 }}
								exit={{
									opacity: 0,
									y: 90,
									transition: {
										ease: 'easeInOut',
									},
								}}
							>
								<a href="#contact">Contact</a>
							</m.div>
						</m.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
}

export default Navbar;
