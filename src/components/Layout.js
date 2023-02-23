import Head from "next/head";
const name = "Nanako Muramatsu";

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" src="favicon.ico" />
      </Head>
      <header>
        <img src="/images/profile.png" alt="profile image"/>
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
