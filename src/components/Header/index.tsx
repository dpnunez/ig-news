import Image from 'next/image'
import Link from 'next/link'
import { ActiveLink, SignInButton } from 'components'
import styles from './styles.module.scss'

import logoImage from 'public/images/logo.svg'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
	const { asPath } = useRouter()

	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Image src={logoImage} alt="ig-news"/>
				<nav>
					<ActiveLink activeClassName={styles.active} href="/">
						<a>Home</a>
					</ActiveLink>
					<ActiveLink activeClassName={styles.active} href="/posts">
						<a>Posts</a>
					</ActiveLink>
				</nav>
			<SignInButton id={styles.signInButton} />
			</div>
		</header>
	)
}

export { Header }