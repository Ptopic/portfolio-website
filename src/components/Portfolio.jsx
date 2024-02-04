import React from 'react';
import { motion as m } from 'framer-motion';
import './Portfolio.css';
import Card from './Card';
import project1 from '../assets/images/projects/fontcollection.png';
import project2 from '../assets/images/projects/pikacode.png';
import river from '../assets/images/projects/river.png';
import portfolio from '../assets/images/projects/portfolio.png';
import erc721 from '../assets/images/projects/erc721.png';
import table from '../assets/images/projects/table.png';
import dopamine from '../assets/images/projects/dopamine.jpg';
import pikachu from '../assets/images/projects/pikachu.png';

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
						title={'PikaCode ERC-1155 NFT contract'}
						description={
							'ERC-1155 Smart Contract built with solidity. Allows for multiple owners on same NFT. Also has a frontend website for buying from NFT collection'
						}
						techStack={['Solidity', 'React']}
						image={project2}
						codeLink={
							'https://github.com/Ptopic/Advanced-smart-contracts/tree/main/PikaCode%20nft%20contract%20ERC-1155'
						}
						demoLink={'https://pikacode.netlify.app/'}
						reversed={false}
					/>

					<Card
						title={'ERC-721 Smart Contract'}
						description={
							'ERC-721 Smart Contract built with solidity. In this contract all NFT-s are unique which means they have only one owner. Smart Contract is hosted on Opensea'
						}
						techStack={['Solidity']}
						image={erc721}
						codeLink={
							'https://github.com/Ptopic/Advanced-smart-contracts/tree/main/ERC-721%20Contract'
						}
						demoLink={'https://testnets.opensea.io/collection/web3builderss'}
						reversed={true}
					/>

					<Card
						title={'Table Management App'}
						description={
							'App for managing tables in a restaurant. User can view all tables that are free or reserved at specific time. User can also add new reservations at specific time, edit reservations or delete reservations'
						}
						techStack={['Nodejs', 'React']}
						image={table}
						codeLink={'https://github.com/Ptopic/Table-management-app'}
						demoLink={'https://github.com/Ptopic/Table-management-app'}
						reversed={false}
					/>

					<Card
						title={'Dopamine App'}
						description={
							'React Native app for tracking users dopamine levels. Currently only authentication is built'
						}
						techStack={['Nodejs', 'React']}
						image={dopamine}
						codeLink={'https://github.com/Ptopic/Dopamine-full-stack-app'}
						demoLink={'https://github.com/Ptopic/Dopamine-full-stack-app'}
						reversed={true}
					/>

					<Card
						title={'Font Collection Website'}
						description={
							'App for collecting all of your favourite fonts in one place. Users can view all fonts in collection, add new fonts, edit them or delete them'
						}
						techStack={['Nodejs', 'React']}
						image={project1}
						codeLink={'https://github.com/Ptopic/Font-collection'}
						demoLink={'https://fontcollection.org/'}
						reversed={false}
					/>

					<Card
						title={'Funko Pop Collection Website'}
						description={
							'Project for personal use. Used to keep track of all funko pop pikachu figures that are in my collection'
						}
						techStack={['Nodejs', 'React']}
						image={pikachu}
						codeLink={
							'https://github.com/Ptopic/Pikachu-funko-pop-collection-app'
						}
						demoLink={'https://funkopikachu.netlify.app/'}
						reversed={true}
					/>

					<Card
						title={'Personal Portfolio Website'}
						description={'My personal portfolio website'}
						techStack={['React']}
						image={portfolio}
						codeLink={'https://github.com/Ptopic/portfolio-website'}
						demoLink={'https://petartopic.dev/'}
						reversed={false}
					/>

					<Card
						title={'Konoba Pizzeria River Website'}
						description={
							'Website for restaurant. Includes header carousel, about section, contact section, gallery and food, drinks and wine menu'
						}
						techStack={['React']}
						image={river}
						codeLink={'https://www.konoba-pizzeria-river.com/'}
						demoLink={'https://www.konoba-pizzeria-river.com/'}
						reversed={true}
					/>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
