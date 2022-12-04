import { type NextPage } from "next";
import Head from "next/head";
import { IconAt, IconBrandGithub } from "@tabler/icons";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thebigbot</title>
        <meta name="description" content="Hi! I'm Thebigbot. I love to code!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content-center items-center text-center">
          <img
            className="ml-auto mr-auto block w-[35%] rounded-full p-5"
            src="/favicon.ico"
            alt={""}
          />
          <h1 className="text-center text-[2rem] font-bold">
            Hello! I&apos;m Thebigbot
          </h1>

          <div>
            <button
              onClick={() =>
                window.location.replace("https://github.com/athebigbot")
              }
              className="m-5 cursor-pointer p-2"
            >
              <IconBrandGithub />
            </button>

            <button
              onClick={() =>
                window.location.replace("mailto:hello@thebigbot.dev")
              }
              className="m-5 cursor-pointer p-2"
            >
              <IconAt />
            </button>
          </div>

          <hr className="p-2" />

          <p className="m-2">
            Hi! My real name is Valerio but on the internet I&apos;m known as
            Thebigbot. I love to code and I&apos;m currently learning Rust. I make
            cli, websites, apps and more! I&apos;m also a big fan of open source and
            I&apos;m always looking for new projects to contribute to. I use linux
            and i love changing my distro every 3 months.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
