import React from 'react';
import { motion as m } from 'framer-motion';
import './Header.css';
import picture from '../assets/images/coding.jpg';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs.png';
import expressjs from '../assets/images/expressjs.png';
import mysql from '../assets/images/mysql.png';
import swagger from '../assets/images/swagger.png';

function Header() {
	return (
		<section className="header" id="home">
			<div className="header-container">
				<div className="header-content">
					<div className="left-content">
						<m.h1
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								visible: { scale: 1 },
								hidden: { scale: 0 },
							}}
							transition={{
								type: 'spring',
								stiffness: 660,
								damping: 150,
								delay: 0.4,
							}}
						>
							Back-End Developer
						</m.h1>
						<m.p
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								visible: { scale: 1 },
								hidden: { scale: 0 },
							}}
							transition={{
								type: 'spring',
								stiffness: 260,
								damping: 20,
								delay: 0.8,
							}}
						>
							Hi I'm Petar Topić. A passionate Back-end Developer based in
							Solin, Croatia 📍
						</m.p>
						<div className="links">
							<m.div
								className="linkedin"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									visible: { scale: 1 },
									hidden: { scale: 0 },
								}}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
									delay: 1.2,
								}}
							>
								<a href="https://www.linkedin.com/in/petar-topi%C4%87-4a551a234/">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
									</svg>
								</a>
							</m.div>
							<m.div
								className="github"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									visible: { scale: 1 },
									hidden: { scale: 0 },
								}}
								transition={{
									type: 'spring',
									stiffness: 260,
									damping: 20,
									delay: 1.4,
								}}
							>
								<a href="https://github.com/Ptopic">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
									</svg>
								</a>
							</m.div>
						</div>
					</div>

					<m.div
						className="right-content"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
						transition={{
							type: 'ease',
							duration: 3,
							delay: 3,
						}}
					>
						<img src={picture} alt="" />
					</m.div>
				</div>

				<div className="tech-stack">
					<m.h2
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							visible: { opacity: 1 },
							hidden: { opacity: 0 },
						}}
						transition={{
							type: 'easeIn',
							duration: 0.6,
							delay: 1.6,
						}}
					>
						Tech stack
					</m.h2>
					<div className="tech-stack-images">
						<div>
							<m.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									visible: { scale: 1 },
									hidden: { scale: 0 },
								}}
								transition={{
									type: 'spring',
									stiffness: 220,
									damping: 30,
									delay: 1.6,
								}}
							>
								Back-End
							</m.p>
							<m.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
								transition={{
									type: 'spring',
									stiffness: 220,
									damping: 30,
									delayChildren: 0.3,
									staggerChildren: 0.05,
									delay: 1.6,
								}}
							>
								<m.div
									className="tech-stack-image"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{
										type: 'ease',
										duration: 1,
									}}
								>
									<img src={nodejs} alt="" />
								</m.div>
								<m.div className="tech-stack-image">
									<img src={expressjs} alt="" />
								</m.div>
								<m.div className="tech-stack-image">
									<img src={mysql} alt="" />
								</m.div>
								<m.div className="tech-stack-image">
									<img src={swagger} alt="" />
								</m.div>
							</m.div>
						</div>

						<div>
							<m.p
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									visible: { scale: 1 },
									hidden: { scale: 0 },
								}}
								transition={{
									type: 'spring',
									stiffness: 220,
									damping: 30,
									delay: 1.6,
								}}
							>
								Front-End
							</m.p>
							<m.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									visible: { opacity: 1 },
									hidden: { opacity: 0 },
								}}
								transition={{
									type: 'spring',
									stiffness: 220,
									damping: 30,
									delayChildren: 0.3,
									staggerChildren: 0.05,
									delay: 1.6,
								}}
							>
								<m.div className="tech-stack-image">
									<img src={html} alt="" />
								</m.div>
								<m.div className="tech-stack-image">
									<img src={css} alt="" />
								</m.div>
								<m.div className="tech-stack-image">
									<img src={javascript} alt="" />
								</m.div>
								<m.div className="tech-stack-image">
									<img src={react} alt="" />
								</m.div>
							</m.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
