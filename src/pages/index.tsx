/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconAt, IconMapPin, IconClock } from "@tabler/icons";
import { type NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";


const Home: NextPage = () => {

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      window.location.href = "/mobile";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      window.location.href = "/mobile";
    }
  }, []);

  return (
    <>
      <Head>
        <title>Thebigbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*<nav className="rounded-md border bg-red-600 p-5">a</nav>*/}
        <div className="flex">
          <div className="inline">
            <div className="mr-9 h-56 w-56 rounded-md border-2">
              <img
                src="/favicon.ico"
                className="m-8 h-40 w-40 rounded-full"
                alt="image"
              />
            </div>
          </div>
          <div className="inline">
            <div className="m-5 flex h-28 w-[26rem] justify-center rounded-md border-2 p-5">
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

            <div className="m-5 flex h-28 w-[26rem] justify-center rounded-md border-2 p-5">
              <div>
                <h1 className="text-4xl m-4">?</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="inline">
            <div className="m-5 h-72 w-56 rounded-md border-2">
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

            <div className="m-5 h-72 w-56 rounded-md border-2">
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
          <div className="inline">
            <div className="m-5 flex w-[26rem] justify-center rounded-md border-2 p-5">
              <div className="flex">
                <span className="mr-10 flex">
                  <IconMapPin className="mr-2 inline-block" />{" "}
                  <p className="inline-block cursor-default">Italy</p>
                </span>

                <span className="flex">
                  <IconClock className="mr-2 inline-block " />{" "}
                  <p className="inline-block cursor-default">
                    UTC +01:00
                  </p>
                </span>
              </div>
            </div>
            <div className="m-5 flex w-[26rem] rounded-md border-2 p-5 text-justify">
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
