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
        {/* HEAD */}
        <div className="flex h-[45vh] items-center justify-center bg-[#ffc700] p-10">
          <div className="animate-fall border-2 border-r-[6px] border-b-[6px] border-black bg-[#f3763d] p-6 text-center drop-shadow-2xl md:mr-36 md:text-left lg:mr-36 lg:text-left">
            <h1 className="text-4xl font-semibold">Valerio Clemenzi</h1>
            <p>A young web developer</p>
          </div>
          <div className="hidden md:block lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
              src="/favicon.ico"
              className="h-44 w-44 animate-fall rounded-full border-8 border-green-600"
            />
          </div>
        </div>
        {/* LINKS */}
        <div className="flex h-[10vh] items-center justify-center bg-[#5551ff] p-10">
          <button
            onClick={() => {
              window.open("https://github.com/vclemenzi");
            }}
            className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-6 pr-6 hover:mr-4 hover:border-r-2 hover:border-b-2 md:pl-10 md:pr-10 lg:pl-12 lg:pr-12"
          >
            GitHub
          </button>
          <button
            onClick={() => {
              window.open("https://discord.com/users/921444071791296633");
            }}
            className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-5 pr-5 hover:mr-4 hover:border-r-2 hover:border-b-2 md:pl-10 md:pr-10 lg:pl-10 lg:pr-10"
          >
            Discord
          </button>
          <button
            onClick={() => {
              window.location.href = "mailto:hello@thebigbot.dev";
            }}
            className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-5 pr-5 hover:mr-4 hover:border-r-2 hover:border-b-2 md:pl-10 md:pr-10 lg:pl-10 lg:pr-10"
          >
            Contact
          </button>
        </div>
        {/* ABOUT */}
        <div className="flex justify-center bg-[#c7b9ff] p-10">
          <div className="border-2 border-r-[6px] border-b-[6px] border-black bg-[#0fa958] p-4 md:ml-12 md:mr-12 lg:ml-72 lg:mr-72">
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
        {/* FAVORITE */}
        <div className="block justify-center bg-[#c7b9ff] p-10 md:flex lg:flex">
          <div className="border-2 border-r-[6px] border-b-[6px] border-black bg-[#a259ff] p-5 text-center">
            <h1 className="mb-4 text-4xl font-semibold">Favorite Stacks</h1>
            <button
              onClick={() => {
                window.open("https://nextjs.org/");
              }}
              className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2"
            >
              Next.js
            </button>
            <button
              onClick={() => {
                window.open("https://tailwindcss.com/");
              }}
              className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2"
            >
              Tailwind
            </button>
            <button
              onClick={() => {
                window.open("https://www.typescriptlang.org/");
              }}
              className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2"
            >
              Typescript
            </button>
          </div>
          <div className="border-2 border-r-[6px] border-b-[6px] border-black bg-[#a259ff] p-5 text-center sm:ml-12 lg:ml-12">
            <h1 className="mb-4 text-4xl font-semibold">Favorite Apps</h1>
            <button
              onClick={() => {
                window.open("https://insomnia.rest/");
              }}
              className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2"
            >
              Insomnia
            </button>
            <button
              onClick={() => {
                window.open("https://code.visualstudio.com/");
              }}
              className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2"
            >
              Vscode
            </button>
            <button
              onClick={() => {
                window.open("https://alacritty.org/");
              }}
              className="m-3 border-2 border-r-[6px] border-b-[6px] border-black bg-white p-2 pl-20 pr-20 hover:mr-4 hover:border-r-2 hover:border-b-2"
            >
              Alacritty
            </button>
          </div>
        </div>
        {/* FOOTER */}
        <footer className="flex h-[10vh] items-center justify-center bg-[#5551ff] p-2">
          <h1>
            Made by Valerio Clemenzi with ❤ | Made with Nextjs & Tailwindcss
          </h1>
        </footer>
      </main>
    </>
  );
};

export default Home;
