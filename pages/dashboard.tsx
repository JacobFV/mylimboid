import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import firebase from '@firebase/app'
import 'firebase/auth'

import { User } from './data/user'

const Dashboard: NextPage = () => {

    //firebase.auth().createUserWithEmailAndPassword(email, passowrd)
    

    const dbRef = firebase.database().ref();
    dbRef.child("users").child(userId).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Dashboard
        </h1>

        <div className={styles.grid}>

          <a
            href="./"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Dashboard
