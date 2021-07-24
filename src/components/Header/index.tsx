import Image from 'next/image'
import { SignInButton } from 'components'
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
			<SignInButton id={styles.signInButton} />
			</div>
		</header>
	)
}

export { Header }