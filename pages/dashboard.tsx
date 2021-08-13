import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import firebase from '@firebase/app'
import 'firebase/auth'

import '../data/user'
import '../data/limboid'
import { Limboid } from '../data/limboid'

const Dashboard: NextPage = () => {

    /*firebase.auth().createUserWithEmailAndPassword(email, passowrd)
    

    const dbRef = firebase.database().ref();
    dbRef.child("users").child(userId).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });*/
    let limboids: Limboid[] = []

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Dashboard
        </h1>
        {
        // maybe search bar here 
        }

        <div className={styles.grid}>

            {limboids.map(function(limboid: Limboid) {
            return (
                <a
                    key={limboid.name}
                    href="./{limboid.url}"
                    className={styles.card}
                >
                    <h2>{limboid.name}</h2>
                    <p>
                        programatically generarated table and properties for this limboid
                    </p>
                </a>
            )
            })}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Dashboard
