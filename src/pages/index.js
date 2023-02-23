import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "components/styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import Link from "next/link";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>村松菜々子です。エンジニアになるために勉強している学生です。</p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="1" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Fubruary 23, 2020
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="1" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Fubruary 23, 2020
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="1" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Fubruary 23, 2020
            </small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="1" className={styles.thumbnailImage} />
            </Link>
            <Link href="/" className={utilStyle.boldText}>
              SSGとSSRの使い分けの場面はいつなのか？
            </Link>
            <br />
            <small className={utilStyle.lightText}>
              Fubruary 23, 2020
            </small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
