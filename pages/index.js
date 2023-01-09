import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Black Dog Metal and Wood</title>
        <meta name="description" content="Black Dog Metal and Wood" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Image
            src="/blackdog_logo.jpg"
            alt="Black Dog Logo"
            layout="fill"
            objectFit="contain"
            objectPosition="center top"
            priority={true}
          />
        </div>
        <div>
          <h1 className={styles.title}>Custom Metal Creations</h1>

          <div className={styles.banner}>
            <Image
              src="/table.jpg"
              alt="Black Dog Table"
              layout="fill"
              objectFit="contain"
              objectPosition="center top"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          <strong className={styles.textGray}>Location:</strong> Phoenix, AZ
          &nbsp;|&nbsp;
        </span>
        <span>
          <strong className={styles.textGray}>Tel:</strong> (623) 680-1376
          &nbsp;|&nbsp;
        </span>
        <span>
          <strong className={styles.textGray}>Email: </strong>
          <a href="mailto:info@blackdogmetalwood.com" target="_top">
            info@blackdogmetalwood.com
          </a>
          &nbsp;|&nbsp;
        </span>
        <span>
          <strong className={styles.textGray}>Facebook:</strong>
          <a href="https://www.facebook.com/blackdogmetalwood/">
            &nbsp;
            <Image
              src="/f_logo_RGB-Blue_58.png"
              alt="Facebook Logo"
              width={18}
              height={18}
            />
          </a>
        </span>
      </footer>
    </div>
  );
}
