import Head from 'next/head'

import { SubscribeButton } from 'components'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
		<>
			<Head>
				<title>Home | ig news</title>
			</Head>
			<main className={styles.container}>
				<section className={styles.hero}>
					<span className={styles.subtitle}>👏 Hey, welcome</span>
					<h1>
						News about the <span>React</span> world
					</h1>
					<p>
						Get acess to all the publications<br />
						<span>for $9.90 month</span>
					</p>
					<SubscribeButton />
				</section>
				<img src="/images/avatar.svg" alt="girl-coding" />
			</main>
		</>
  )
}
