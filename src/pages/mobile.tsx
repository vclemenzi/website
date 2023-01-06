/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconAt, IconMapPin, IconClock } from "@tabler/icons";
import { type NextPage } from "next";
import Head from "next/head";

const HomeMobile: NextPage = () => {

  return (
    <>
      <Head>
        <title>Thebigbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*<nav className="rounded-md border bg-red-600 p-5">a</nav>*/}
        <div>
          <div className=" flex justify-center">
            <img
              src="/favicon.ico"
              className="m-8 h-40 w-40 rounded-full border-2"
              alt="image"
            />
          </div>
          <div>
            <div className="m-5 flex h-28 justify-center rounded-md border-2 p-5">
              <IconBrandGithub
                className="m-4 cursor-pointer hover:scale-110"
                size={35}
                onClick={() =>
                   (window.location.href = "https://github.com/athebigbot")
                }
              />
              <IconAt
                className="m-4 cursor-pointer hover:scale-110"
                size={35}
                onClick={() =>
                   (window.location.href = "mailto:hello@thebigbot.dev")
                }
              />
            </div>
            <div className="m-5 flex rounded-md border-2 p-5 text-justify">
              <div>
                <h1 className="mb-2 text-xl">About Me</h1>
                <p className="text-md">
                  Hi! My name is Thebigbot, and I am a web developer with 2
                  years of experience in the field. I specialize in React ecc..,
                  and have a passion for creating intuitive and user-friendly
                  websites and applications. Contact me for any question! :)
                </p>
              </div>
            </div>
            <div className="m-5 flex h-28  justify-center rounded-md border-2 p-5">
              <div>
                <h1 className="m-4 text-4xl">?</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="m-5 flex  justify-center rounded-md border-2 p-5">
            <div className="flex">
              <span className="mr-10 flex">
                <IconMapPin className="mr-2 inline-block" />{" "}
                <p className="inline-block cursor-default">Italy</p>
              </span>

              <span className="flex">
                <IconClock className="mr-2 inline-block " />{" "}
                <p className="inline-block cursor-default">UTC +01:00</p>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="m-5 flex  h-72 justify-center rounded-md border-2">
              <div className="m-8 h-40 w-40">
                <h1 className="text-xl">Favorite Stacks</h1>
                <br />
                <div className="h-40">
                  <button
                    onClick={() =>
                      (window.location.href = "https://www.typescriptlang.org/")
                    }
                    className="cursor-pointer rounded-lg border p-2 pr-8 pl-8 hover:bg-slate-50 hover:text-black"
                  >
                    Typescript
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "https://nextjs.org/")
                    }
                    className="mt-3 cursor-pointer rounded-lg border p-2 pr-11 pl-11 hover:bg-slate-50 hover:text-black"
                  >
                    Next.js
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "https://tailwindcss.com/")
                    }
                    className="mt-3 cursor-pointer rounded-lg border p-2 pr-10 pl-10 hover:bg-slate-50 hover:text-black"
                  >
                    Tailwind
                  </button>
                </div>
              </div>
            </div>

            <div className="m-5 flex h-72 justify-center rounded-md border-2">
              <div className="m-8 h-40 w-40">
                <h1 className="text-xl">Favorite Apps</h1>
                <br />
                <div className="h-40">
                  <button
                    onClick={() =>
                      (window.location.href = "https://insomnia.rest/")
                    }
                    className="cursor-pointer rounded-lg border p-2 pr-8 pl-8 hover:bg-slate-50 hover:text-black"
                  >
                    Insomnia
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "https://code.visualstudio.com/")
                    }
                    className="mt-3 cursor-pointer rounded-lg border p-2 pr-10 pl-10 hover:bg-slate-50 hover:text-black"
                  >
                    Vscode
                  </button>
                  <button
                    onClick={() =>
                      (window.location.href = "https://alacritty.org/")
                    }
                    className="mt-3 cursor-pointer rounded-lg border p-2 pr-9 pl-9 hover:bg-slate-50 hover:text-black"
                  >
                    Alacritty
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomeMobile;
