import React from 'react';
import { motion as m } from 'framer-motion';
import './Portfolio.css';
import Card from './Card';
import project1 from '../assets/images/fontcollection.png';

function Portfolio() {
	return (
		<section className="portfolio" id="portfolio">
			<div className="portfolio-container">
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
					Portfolio
				</m.h1>
				<m.h2
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
						delay: 1,
					}}
				>
					Check out my work
				</m.h2>
				<div className="cards-container">
					<Card
						title={'Font collection'}
						description={
							'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sapiente. Consectetur esse vel eum eveniet doloremque eaque error, natus distinctio.'
						}
						techStack={['Nodejs', 'React']}
						image={project1}
						codeLink={''}
						demoLink={''}
						reversed={false}
					/>

					<Card
						title={'Font collection'}
						description={
							'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sapiente. Consectetur esse vel eum eveniet doloremque eaque error, natus distinctio.'
						}
						techStack={['Nodejs', 'React']}
						image={project1}
						codeLink={''}
						demoLink={''}
						reversed={true}
					/>

					<Card
						title={'Font collection'}
						description={
							'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sapiente. Consectetur esse vel eum eveniet doloremque eaque error, natus distinctio.'
						}
						techStack={['Nodejs', 'React']}
						image={project1}
						codeLink={''}
						demoLink={''}
						reversed={false}
					/>

					<Card
						title={'Font collection'}
						description={
							'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sapiente. Consectetur esse vel eum eveniet doloremque eaque error, natus distinctio.'
						}
						techStack={['Nodejs', 'React']}
						image={project1}
						codeLink={''}
						demoLink={''}
						reversed={true}
					/>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
