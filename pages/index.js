import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'

import styles from '../styles/Home.module.css'

export default function NiceMenuApp() {
  const [ session, loading ] = useSession();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nice Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nice Menu
        </h1>

        <p className={styles.description}>
          Nice Menu lets you serve nice menus to your customers. 
        </p>
        
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
