import Head from "next/head";
import Navbar from "../components/navbar";

const About = () => {
  return (
    <>
      <Head>
        <title>Azure beers</title>
        <meta name="description" content="ai-powered beer counting" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar page="about" />

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            About Azure beers
          </h1>
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
export default About;
