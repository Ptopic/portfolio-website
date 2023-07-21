import React from 'react';
import { motion as m } from 'framer-motion';
import './Card.css';
import shareImg from '../assets/images/share.png';
function Card({
	image,
	title,
	description,
	techStack,
	codeLink,
	demoLink,
	reversed,
}) {
	return (
		<div className="card">
			<div className={reversed ? 'card-container reversed' : 'card-container'}>
				<m.div
					className="image-content"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						visible: { opacity: 1, x: '0' },
						hidden: { opacity: 0, x: '-150px' },
					}}
					transition={{
						type: 'spring',
						stiffness: 560,
						damping: 150,
						delay: 0.2,
					}}
				>
					<img src={image} alt="" />
				</m.div>
				<div className="text-content">
					<div>
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
							{title}
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
								stiffness: 660,
								damping: 150,
								delay: 0.8,
							}}
						>
							{description}
						</m.p>
						<m.div
							className={
								reversed ? 'card-tech-stack reversed' : 'card-tech-stack'
							}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={{
								visible: { opacity: 1, y: '0' },
								hidden: { opacity: 0, y: '40' },
							}}
							transition={{
								type: 'spring',
								stiffness: 660,
								damping: 150,
								delay: 1.2,
							}}
						>
							{techStack.map((icon) => {
								return <button>{icon}</button>;
							})}
						</m.div>
					</div>
					<m.div
						className={reversed ? 'card-links reversed' : 'card-links'}
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
							delay: 1.4,
						}}
					>
						<div>
							<a href={codeLink}>
								<p>Code</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="26"
									height="26"
									viewBox="0 0 24 24"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
								</svg>
							</a>
						</div>
						<div>
							<a href={demoLink}>
								<p>Live Demo</p>
								<img src={shareImg} alt="" />
							</a>
						</div>
					</m.div>
				</div>
			</div>
		</div>
	);
}

export default Card;
