import Prismic from '@prismicio/client'

const getPrismicClient = (req?: unknown) => {
	return Prismic.client(
		process.env.PRISMIC_URL,
		{
			req,
			accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		}
	)
}

export { getPrismicClient }