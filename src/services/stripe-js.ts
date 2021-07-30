import { loadStripe } from '@stripe/stripe-js'

const getStripeJs = async () => {
	const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY_PUBLIC)

	return stripe
}

export { getStripeJs }