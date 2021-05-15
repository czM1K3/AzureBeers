import Head from "next/head";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Azure beers</title>
        <meta name="description" content="ai-powered beer counting" />
          <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar page={pageProps.page} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
