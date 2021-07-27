import styles from './styles.module.scss'

interface SubscribeProps {
	priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeProps) => {
	return (
		<button
			type="button"
			className={styles.subButton}
		>
			Subscribe now
		</button>
	)
}


export { SubscribeButton }