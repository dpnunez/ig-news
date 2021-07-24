import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi' 

const SignInButton = (props) => {
	const isLogged = true

	return isLogged ? (
		<button className={styles.container} type="button" {...props}>
			<FaGithub color="#04d361"/>
			dpnunez
			<FiX className={styles.closeIcon} />
		</button>
	) : (
		<button className={styles.container} type="button" {...props}>
			<FaGithub color="#eba417"/>
			Sing in with GitHub
		</button>
	)
}

export { SignInButton }