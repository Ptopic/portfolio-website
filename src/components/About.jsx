import React from 'react';
import { motion as m } from 'framer-motion';
import './About.css';
import codingImg from '../assets/images/coding.jpg';
import cv from '../assets/CV.pdf';

function About() {
	return (
		<section className="about" id="about">
			<div className="about-left">
				<m.img
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					src={codingImg}
					alt=""
					transition={{
						type: 'spring',
						stiffness: 660,
						damping: 150,
						delay: 0.4,
					}}
				/>
			</div>
			<div className="about-right">
				<m.h2
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					src={codingImg}
					alt=""
					transition={{
						type: 'spring',
						stiffness: 660,
						damping: 150,
						delay: 1,
					}}
				>
					ABOUT ME
				</m.h2>
				<m.h1
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					src={codingImg}
					alt=""
					transition={{
						type: 'spring',
						stiffness: 660,
						damping: 150,
						delay: 1.6,
					}}
				>
					A Back-End developer based in Solin, Croatia 📍
				</m.h1>
				<m.p
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					transition={{
						type: 'spring',
						stiffness: 660,
						damping: 150,
						delay: 2,
					}}
					src={codingImg}
					alt=""
				>
					Full stack developer with experience building both the front-end and
					back-end of web apps as well as mobile applications.
				</m.p>

				<m.div className="cv-container">
					<m.a
						href={cv}
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							visible: { opacity: 1, scale: 1 },
							hidden: { opacity: 0, scale: 0 },
						}}
						transition={{
							type: 'spring',
							stiffness: 660,
							damping: 150,
							delay: 2.4,
						}}
					>
						View My CV
					</m.a>
				</m.div>
			</div>
		</section>
	);
}

export default About;
