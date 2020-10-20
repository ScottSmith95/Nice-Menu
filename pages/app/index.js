import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from '../../styles/Home.module.css'

export default function AppPage() {
	const [ session, loading ] = useSession();
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Dashboard | Nice Menu</title>
			</Head>
			
			<main className={styles.main}>
				<h1 className={styles.title}>
					Nice Menu Dashboard
				</h1>
				{!session && <>
					<p className={styles.description}>
						Not signed in <br/>
						<button onClick={signIn}>Sign in</button>
					</p>
				</>}
				{session && <>
					<p className={styles.description}>
						Signed in as {session.user.email} <br/>
						<button onClick={signOut}>Sign out</button>
					</p>
				</>}
			</main>
		</div>
	)
}