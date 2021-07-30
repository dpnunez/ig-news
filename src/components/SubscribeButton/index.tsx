import { useSession, signIn, getSession } from 'next-auth/client'
import { api } from 'services/api'
import { getStripeJs } from 'services/stripe-js'
import styles from './styles.module.scss'

interface SubscribeProps {
	priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeProps) => {
	const [session] = useSession()

	const handleSubscribe = async () => {
		if(!session) {
			signIn('github')
			return
		}

		try {
			const response = await api.post('/subscribe')
			const { sessionId } = response.data

			const stripe = await getStripeJs()
			await stripe.redirectToCheckout({ sessionId })
		} catch (err) {
			alert(err)
		}

	}

	return (
		<button
			type="button"
			className={styles.subButton}
			onClick={handleSubscribe}
		>
			Subscribe now
		</button>
	)
}


export { SubscribeButton }