import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Nanako Muramatsu";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" src="favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/images/profile.png" alt="profile image" className={utilStyles.borderCircle}/>
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
