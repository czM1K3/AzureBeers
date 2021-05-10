import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Azure beers</title>
        <meta name="description" content="ai-powered beer counting" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar page="index" />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          main content goes here
        </div>
      </main>
    </>
  );
};
export default Home;
