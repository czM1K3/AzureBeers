import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react"

const limit = 0.1;

const Analyze = () => {
    const [opened, setOpened] = useState(-1);
    const [closed, setClosed] = useState(-1);

    useEffect(async () => {
        const fetched = await (await fetch("/api/analyze").catch(null)).json(x => x);
        let currentOpened = 0, currentClosed = 0;
        for (let i = 0; i < fetched[1].length; i++) {
            if (fetched[1][i] > limit)
            {
                if (fetched[2][i] === 1) currentOpened++;
                else currentClosed++;
            }       
        }
        setOpened(currentOpened);
        setClosed(currentClosed);
        console.log(fetched);
    });

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Beers</h1>
                <img src="http://192.168.1.21/jpg" alt="image" id="image"/>
                <p>Number of opened: {opened == -1 ? "LOADING" : opened}. Number of closed: {closed == -1 ? "LOADING" : closed}.</p>
            </main>

        </div>
    );
}
export default Analyze;