import { FC } from "react";
import { useState, useEffect } from "react";
import CountUp from "react-countup";
import ReactLoading from "react-loading";

type Analyzed = {
  image: {
    type: string;
    data: number[];
  };
  result: number[][];
};

type AnalyzeProps = {
  limit: number
}

const Analyze: FC<AnalyzeProps> = ({limit}) => {
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
          //@ts-ignore
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

  if (loading)
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900 float-left py-4">
              Beers
            </h1>
          </div>
        </header>
        <main className="absolute inset-y-1/2 w-full">
          <ReactLoading
            className="m-auto "
            type="spinningBubbles"
            color="#1F2937"
          />
        </main>
      </>
    );

  if (error)
    return (
      <>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold text-gray-900 float-left py-4">
              Beers
            </h1>
          </div>
        </header>
        <main>
          <h2>Error</h2>
        </main>
      </>
    );

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 className="text-3xl font-bold text-gray-900 float-left py-4">
            Beers
          </h1>
          <h2 className="font-semibold text-gray-900 float-right py-2">
            Opened beers:{" "}
            <span className="text-beer font-bold">
              {opened == -1 ? (
                "0"
              ) : (
                <CountUp
                  start={0}
                  end={opened}
                  duration={2}
                  separator=" "
                  decimals={0}
                />
              )}
            </span>
            <br />
            Fresh beers:{" "}
            <span
              className={`${
                closed < 4 ? "text-red-400" : "text-green-400"
              } font-bold`}
            >
              {closed == -1 ? (
                "0"
              ) : (
                <CountUp
                  start={0}
                  end={closed}
                  duration={2}
                  separator=" "
                  decimals={0}
                />
              )}
            </span>
          </h2>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <img
            src={img ?? "/logo.png"}
            alt="image"
            id="image"
            className="m-auto rounded "
          />
        </div>
      </main>
    </>
  );
};
export default Analyze;

export const getServerSideProps = async () => {
  return {
    props: {
      page: "beers",
      limit: parseFloat(process.env.LIMIT ?? "0.5")
    },
  };
};
