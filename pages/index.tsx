import { FC } from "react";


const Home: FC = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
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

export const getStaticProps = async () => {
  return {
    props: {
      page: "index"
    }
  }
}
