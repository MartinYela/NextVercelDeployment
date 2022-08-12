import { FC } from 'react';
import Head from 'next/head'

import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'

type PropsWithChildren = {
    children: React.ReactNode
  }

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Nextjs Page</title>
                <meta name="description" content="Home Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>

                {children}

            </main>
        </div>
    )
}
