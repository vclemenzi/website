import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valerio Clemenzi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex h-[45vh] items-center justify-center bg-[#ffc700] p-10">
          <div className="mr-36 animate-fall border-2 border-r-[6px] border-b-[6px] border-black bg-[#f3763d] p-6 drop-shadow-2xl">
            <h1 className="text-4xl font-semibold">Valerio Clemenzi</h1>
            <p>A young web developer</p>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
              src="/favicon.ico"
              className="h-44 w-44 animate-fall rounded-full border-8 border-green-600"
            />
          </div>
        </div>
        <div className="flex h-[10vh] items-center justify-center bg-[#5551ff] p-10">
          <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-12 pr-12 hover:mr-4 hover:border-r-2 hover:border-b-2">
            GitHub
          </button>
          <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-10 pr-10 hover:mr-4 hover:border-r-2 hover:border-b-2">
            Discord
          </button>
          <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-10 pr-10 hover:mr-4 hover:border-r-2 hover:border-b-2">
            Contact
          </button>
        </div>
        <div className="flex justify-center bg-[#c7b9ff] p-10">
          <div className="ml-28 mr-28 h-[18vh] border-2 border-r-[6px] border-b-[6px] border-black bg-[#0fa958] p-4">
            <h1 className="mb-4 text-4xl font-semibold">About Me!</h1>
            <p>
              Hello! My name is Valerio, but on the internet. I love programming
              and using computers in general, and haven&apos;t touched grass in
              a while. My favorite technologies are Typescript because my code
              has to always be typesafe, Nextjs because I want a fantastic
              routing system, and Tailwindcss to make my websites always look
              beautiful. But Rust is also not bad! Want to contact me?
              Don&apos;t hesitate to do so!
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-[#c7b9ff] p-10">
          <div className="border-2 border-r-[6px] border-b-[6px] border-black bg-[#a259ff] p-5 text-center">
            <h1 className="mb-4 text-4xl font-semibold">Favorite Stacks</h1>
            <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2">
              Next.js
            </button>
            <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2">
              Tailwind
            </button>
            <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2">
              Typescript
            </button>
          </div>
          <div className="ml-12 border-2 border-r-[6px] border-b-[6px] border-black bg-[#a259ff] p-5 text-center">
            <h1 className="mb-4 text-4xl font-semibold">Favorite Apps</h1>
            <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2">
              Insomnia
            </button>
            <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2">
              Vscode
            </button>
            <button className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2">
              Alacritty
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
