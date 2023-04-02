import { type NextPage } from "next";
import {
  IconMail,
  IconBrandGithub,
  IconBrandTelegram,
  IconBrandMatrix,
} from "@tabler/icons";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Valerio Clemenzi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto md:px-36 lg:px-36 px-4 md:py-36 lg:py-36 py-8">
        <h1 className="text-xl font-semibold flex items-center">
          <img src="/favicon.ico" alt="pic" className="rounded-full w-16 h-16 mr-4 hover:animate-spin hover:cursor-wait" />
          Hello! I&apos;m Valerio Clemenzi
        </h1>
        <br />
        <p className="font-light">
          Hi! I&apos;m Valerio Clemenzi, I come from Italy, and I really enjoy
          using computers and experimenting with and learning about the world
          surrounding this field. Currently, I&apos;m still attending school,
          but I hope that this passion can become a job.
        </p>
        <br />
        <p className="font-light">
          I can use JavaScript and TypeScript quite well, along with many
          libraries that can be found on the npm registry (such as Express,
          etc.). Lately, I&apos;ve been looking at Deno and I really like it,
          especially now that you can use npm modules. I enjoy using many
          frameworks, but primarily React, although I&apos;m starting to look
          into Svelte. Meanwhile, I&apos;m learning Rust, a fantastic language
          that allows me to express myself best thanks to all its functions (I
          won&apos;t list them all because if you don&apos;t live under a rock,
          you&apos;ve probably heard about them many times). Anyway, I never
          refuse a game of Rocket, Minecraft, or Grand Theft Auto 5, which is my
          favorite game, but I always end up breaking it with mods and have to
          reinstall it :(
        </p>

        <br />
        {/* Tools */}
        <br />

        <h2 className="text-xl font-semibold">Favourite Tools</h2>
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="box">
            <h3 className="text-lg font-semibold">Visual Studio Code</h3>
            <p>
              I use Visual Studio Code as my main editor, and I really like it.
            </p>
          </div>

          <div className="box">
            <h3 className="text-lg font-semibold">Insomnia</h3>
            <p>
              I use Insomnia to test my APIs. It&apos;s really easy to use, and
              it&apos;s really fast.
            </p>
          </div>

          <div className="box">
            <h3 className="text-lg font-semibold">Alacritty</h3>
            <p>
              I use Alacritty as my terminal emulator. It&apos;s really fast.
            </p>
          </div>
        </div>

        <br />
        {/* Links */}
        <br />

        <h2 className="text-xl font-semibold">Links</h2>
        <br />
        <div>
          <a href="mailto:my@vclemenzi.dev" className="flex items-center">
            <IconMail size={24} stroke={1} />
            <span className="ml-2 hover:underline">
              <code>my@vclemenzi.dev</code>
            </span>
          </a>
          <a href="https://github.com/vclemenzi" className="flex items-center">
            <IconBrandGithub size={24} stroke={1} />
            <span className="ml-2 hover:underline">
              <code>github.com/vclemenzi</code>
            </span>
          </a>
          <a href="https://t.me/vclemenzi" className="flex items-center">
            <IconBrandTelegram size={24} stroke={1} />
            <span className="ml-2 hover:underline">
              <code>t.me/@vclemenzi</code>
            </span>
          </a>
          <a
            href="https://matrix.to/#/@thebigbot:matrix.org"
            className="flex items-center"
          >
            <IconBrandMatrix size={24} stroke={1} />
            <span className="ml-2 hover:underline">
              <code>@thebigbot:matrix.org</code>
            </span>
          </a>
        </div>

        <br />

        <footer>
          <p className="text-sm font-light">
            Valerio Clemenzi &copy; 2023 - Made with Next.js and Tailwind CSS
          </p>
        </footer>
      </main>
    </>
  );
};

export default Home;
