import { FC } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";

const About: FC = () => {
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
        <div className="max-w-7xl mx-auto py-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            How it all began?
          </h2>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="HowItStarted max-w-3xl m-4">
            <p className="m-4">
              This project was born out of a love of beer.
              We love the well-brewed beer. But the thing is, when all pubs were closed in March 2020, there was no opportunity to enjoy the draft beer in the local pub.
              Because of this, We moved our regular Friday talks on to the Microsoft Teams.
            </p>
            <p className="m-4">
              From the beginning, It was tough, but after few meetings,
              we've got used to it. One of the issues and probably the toughest we've
              faced was the risk of not having the beer at home. The problem with drinking beer at home is that You might lose track
              of how much You have at home and forget to buy some. It doesn't have the same feeling when you talk with guys and drink orange juice instead of beer.
            </p>
            <p className="m-4">
              And there, finally, comes our solution. Azure Beers will keep track of how many bottles of beer you currently have at home.
              No more unexpected surprises of only empty bottles... With Azure Beers, You can take a look have many bottles do You have and even get notified when
              You are running out of beer!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What is the goal?
          </h2>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="HowItStarted max-w-3xl m-4">
            <p className="m-4">
              Yap, this is a question we all ask... It will be here as soon as we know!
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default About;
