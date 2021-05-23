import { FC } from "react";
import { useState, useEffect } from "react";

type Analyzed = {
  image: {
    type: string;
    data: number[];
  };
  result: number[][];
};

type HomeProps = {
    limit: number
}

const Home: FC<HomeProps> = ({limit}) => {
  const [opened, setOpened] = useState(-1);
  const [closed, setClosed] = useState(-1);
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // @ts-ignore
  useEffect(async () => {
    const fetched = await (
      await fetch("/api/analyze").catch(null)
    ).json(
      // @ts-ignore
      (x: Analyzed) => x
    );
    if (fetched) {
      setImg(
        "data:image/jpeg;base64," +
          // @ts-ignore
          btoa(String.fromCharCode(...new Uint8Array(fetched.image.data)))
      );

      let currentOpened = 0,
        currentClosed = 0;
      for (let i = 0; i < fetched.result[1].length; i++) {
        if (fetched.result[1][i] > limit) {
          if (fetched.result[2][i] === 1) currentOpened++;
          else currentClosed++;
        }
      }
      setOpened(currentOpened);
      setClosed(currentClosed);
      setLoading(false);
    } else {
      setError(true);
    }
  }, []);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          You have {opened} fresh beers and {closed} fresh beers
          <br />
          {closed < 2 ? (
            <span className="text-red-400 font-bold">
              You don't have enough beer
            </span>
          ) : (
            ""
          )}
          <br />
          {opened > 5 ? (
            <span className="text-green-400 font-bold">
              You can sell your bottles to buy more beer
            </span>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
};
export default Home;

export const getServerSideProps = async () => {
  return {
    props: {
      page: "index",
      limit: parseFloat(process.env.LIMIT ?? "0.5")
    },
  };
};
