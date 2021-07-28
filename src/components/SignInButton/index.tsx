import { useSession, signIn, signOut } from 'next-auth/client'

import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi' 

const SignInButton = (props) => {
	const isLogged = true
	const [session] = useSession()

	const sigInGithub = () => signIn('github') 

	return session ? (
		<button onClick={signOut} className={styles.container} type="button" {...props}>
			<FaGithub color="#04d361"/>
			{session.user.name}
			<FiX className={styles.closeIcon} />
		</button>
	) : (
		<button onClick={sigInGithub} className={styles.container} type="button" {...props}>
			<FaGithub color="#eba417"/>
			Sing in with GitHub
		</button>
	)
}

export { SignInButton }