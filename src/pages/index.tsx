import { GetStaticProps } from 'next'
import Head from 'next/head'

import { SubscribeButton } from 'components'

import { stripe } from 'services/stripe'

import styles from 'styles/home.module.scss'

interface HomeProps {
	product: {
		priceId: string;
		price: number
	}
}

export default function Home({ product }: HomeProps) {
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
						<span>for {product.price} month</span>
					</p>
					<SubscribeButton priceId={product.priceId} />
				</section>
				<img src="/images/avatar.svg" alt="girl-coding" />
			</main>
		</>
  )
}


export const getStaticProps: GetStaticProps = async () => {
	const productData = await stripe.prices.retrieve("price_1JHbRRJgH64G4lDDKZMUOHqn")

	const product = {
		priceId: productData.id,
		price: new Intl.NumberFormat("en-US", {
			style: 'currency',
			currency: 'USD'
		}).format(productData.unit_amount / 100	)	
	}

	return {
		props: {
			product
		},
		revalidate: 60 * 60 * 24 // 24 hours 
	}
}
