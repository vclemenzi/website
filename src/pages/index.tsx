import { IconBrandGithub, IconAt } from "@tabler/icons";
import { type NextPage } from "next";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thebigbot</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="hidden lg:block">
          <div className="flex min-h-screen flex-row items-center justify-center">
            <div className="mr-20">
              <h1 className="text-4xl">Hello! I&apos;m Thebigbot</h1>
              <p className="text-md mt-8 leading-loose text-slate-300">
                Hello! My name is Valerio, but on the internet, I go by
                Thebigbot. <br />
                I love programming and using computers in general, and
                haven&apos;t touched grass in a while. <br />
                My favorite technologies are Typescript because my code has to
                always be typesafe, <br />
                Nextjs because I want a fantastic routing system, <br />
                and Tailwindcss to make my websites always look beautiful.{" "}
                <br />
                But Rust is also not bad! Want to contact me? Don&apos;t
                hesitate to do so! <br />
              </p>
              <div className="flex">
                <IconBrandGithub
                  onClick={() => window.open("https://github.com/athebigbot")}
                  className="m-3 ml-0 h-8 w-8 cursor-pointer hover:scale-110"
                />
                <IconAt
                  onClick={() =>
                    (window.location.href = "mailto:hello@thebigbot.dev")
                  }
                  className="m-3 h-8 w-8 cursor-pointer hover:scale-110"
                />
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/favicon.ico" alt="" className="h-60 w-60" />
            </div>
          </div>
        </div>
        <div className="sm:visible md:hidden lg:hidden xl:hidden 2xl:hidden">
          <div className="flex min-h-screen flex-row items-center justify-center">
            <div className="p-8">
              <h1 className="text-center text-4xl">
                Hello! I&apos;m Thebigbot
              </h1>
              <p className="text-md mt-8 text-justify leading-loose text-slate-300 md:mr-14 md:ml-14">
                Hello! My name is Valerio, but on the internet, I go by
                Thebigbot. I love programming and using computers in general,
                and haven&apos;t touched grass in a while. My favorite
                technologies are Typescript because my code has to always be
                typesafe, Nextjs because I want a fantastic routing system, and
                Tailwindcss to make my websites always look beautiful. But Rust
                is also not bad! Want to contact me? Don&apos;t hesitate to do
                so!
              </p>
              <div className="mt-4 flex justify-center">
                <IconBrandGithub
                  onClick={() => window.open("https://github.com/athebigbot")}
                  className="m-3 ml-0 h-10 w-10 cursor-pointer hover:scale-110"
                />
                <IconAt
                  onClick={() =>
                    (window.location.href = "mailto:hello@thebigbot.dev")
                  }
                  className="m-3 h-10 w-10 cursor-pointer hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
