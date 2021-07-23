import Image from 'next/image'
import styles from './styles.module.scss'

import logoImage from 'public/images/logo.svg'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Image src={logoImage} alt="ig-news"/>
				<nav>
					<a className={styles.active}>Home</a>
					<a>Posts</a>
				</nav>
			</div>
		</header>
	)
}

export { Header }