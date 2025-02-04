import styles from "./styles/Home.module.css";
import { useState } from "react";

export default function TaskWiser() {
	const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
		useState(false);
	const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

	const closeAll = () => {
		setIsNetworkSwitchHighlighted(false);
		setIsConnectHighlighted(false);
	};

	return (
		<>
			<header className={styles.headerContainer}>
				<div
					className={styles.backdrop}
					style={{
						opacity:
							isConnectHighlighted || isNetworkSwitchHighlighted
								? 1
								: 0,
					}}
				/>
				<div className={styles.header}>
					{/* Empty div added to push the buttons to the right */}
					<div style={{ flex: 1 }}></div>
					<div className={styles.buttons}>
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isNetworkSwitchHighlighted
									? styles.highlightSelected
									: ""
							}`}
						>
							<w3m-network-button />
						</div>
						<div
							onClick={closeAll}
							className={`${styles.highlight} ${
								isConnectHighlighted
									? styles.highlightSelected
									: ""
							}`}
						>
							<w3m-button />
						</div>
					</div>
				</div>
			</header>
			<main className={styles.main}>
				<section className={styles.hero}>
					<h1>Task Wiser - Web3 Kanban Board</h1>
					<p>
						Manage your projects securely with blockchain-powered
						transparency and automation.
					</p>
				</section>
				<section className={styles.features} id="features">
					<h2>Why Task Wiser?</h2>
					<ul>
						<li>🛡️ Secure & Transparent Web3 Integration</li>
						<li>💰 On-Chain Payments & Task Automation</li>
						<li>🤝 Decentralized Collaboration</li>
					</ul>
				</section>
			</main>
		</>
	);
}
