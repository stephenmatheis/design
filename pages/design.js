import { } from 'react';
import Head from 'next/head';
import styles from '../styles/design.module.scss';

export default function Home() {
    return (
        <>
            <Head>
                <title>Stephen Matheis | Design</title>
                <meta name="description" content="Stephen Matheis | Design" />
            </Head>
            <div id={styles['design']}>
                <h1>Hello</h1>
                <h2>World</h2>
            </div>
        </>
    )
}