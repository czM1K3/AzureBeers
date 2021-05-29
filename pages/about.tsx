import { FC } from "react";

const About: FC = () => {
  return (
    <>
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
            The story of starting this project isn't something exciting, we have no fairy tale as the background of doing this particular thing. 
            We all love to learn and discuss new technologies and there is no better drink like a beer for these long talks over all the stuff that is happening in tech. 
            So this project is a kind of mixture combining both tech and beer. For Us, this project was a great but also fun way to learn how to use all the Cloud and Machine Learning tools, 
            which may be useful knowledge for our future projects. 
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
            That is a great question! It may look like it's just a weird mistake, a project that has no sense in making and developing. 
            We don't live in illusion, this won't be the next Nobel prize thing... It's more like a maker project.
            </p>
            <p className="m-4">
            The reason for our effort is, that AI is most of the time shown as something complex, something that is meant only for nerds and experts. 
            We want to change that view, new technologies, which AI definitely is, are super exciting. 
            But applications like self-driving cars or data analysis are for most people too distant topics. 
            We believe that AI is excellent to be used in highly complex cases as well as in some small and fun hobby projects.
            </p>
            <p className="m-4">
            With AzureBeers, we want to show off that AI isn't a thing for a few chosen, it's a tool that could be used for a wide variety of purposes, 
            that anyone could benefit out of it and Our ultimate goal would be if it will help anyone, even a single person, 
            to get more used to working with AI and get comfortable about this another industrial revolution tool.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Made with ❤ for open source
          </h2>
        </div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="HowItStarted max-w-3xl m-4">
            <p className="m-4">
            We strongly believe in the open source movement, so all of our code is available 
            for the community on <a href='https://github.com/czM1K3/AzureBeers'>Github</a>, for everyone, forever.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default About;

export const getStaticProps = async () => {
  return {
    props: {
      page: "about"
    }
  }
}
