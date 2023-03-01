import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type Link = {
  label: string;
  url: string;
};

const Home: NextPage = () => {
  const navLinks: Link[] = [
    {
      label: "GitHub",
      url: "https://github.com/vclemenzi",
    },
    {
      label: "Discord",
      url: "https://discord.com/users/921444071791296633",
    },
    {
      label: "Contact",
      url: "mailto:hello@thebigbot.dev",
    },
  ];

  const stackLinks: Link[] = [
    {
      label: "Next.js",
      url: "https://nextjs.org",
    },
    {
      label: "TailwindCSS",
      url: "https://tailwindcss.com",
    },
    {
      label: "TypeScript",
      url: "https://typescriptlang.org",
    },
  ];

  const toolsLinks: Link[] = [
    {
      label: "VSCode",
      url: "https://code.visualstudio.com/",
    },
    {
      label: "Insomnia",
      url: "https://insomnia.rest/",
    },
    {
      label: "Alacritty",
      url: "https://alacritty.org/",
    },
  ];

  return (
    <>
      <Head>
        <title>Valerio Clemenzi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-cyan-400">
        {/* Header */}
        <div className="flex w-full items-center justify-center gap-6 bg-yellow-400 py-6">
          <section className="neobrutalistic-border animate-fall bg-orange-400 p-3">
            <h1 className="text-3xl font-semibold">Valerio Clemenzi</h1>
            <p>A young web developer</p>
          </section>
          <div className="neobrutalistic-border hidden h-32 w-32 animate-fall rounded-full bg-orange-400 sm:block">
            <Image
              src="/favicon.ico"
              alt="Profile Picture"
              fill={true}
              className="rounded-full p-1"
            />
          </div>
        </div>
        {/* Navigation */}
        <div className="flex justify-center gap-3 bg-rose-400 py-3">
          {navLinks.map((link, i) => (
            <Link
              href={link.url}
              key={i}
              className="neobrutalistic-border box-border bg-white px-3 py-2 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Main content */}
        <div className="m-auto flex w-full max-w-screen-sm flex-col gap-3 p-3">
          {/* About */}
          <section className="neobrutalistic-border flex flex-col gap-2 bg-green-400 p-3">
            <h1 className="text-3xl font-semibold">About me...</h1>
            <p>
              {`Hello! My name is Valerio, but on the internet I go by TheBigBot.
                I love programming and using computers in general, which caused
                me not to touch grass in a good while. My favourite technologies
                are TypeScript as I love it's type-safety, Next.js since it has
                a fantastic routing system and TailwindCSS because it makes my
                websites always look beautiful. As of recently, I've also began
                working on Rust and it's not that bad. Don't hesistate to contact
                me if you want to chat!`}
            </p>
          </section>
          {/* Tech stack */}
          <div className="neobrutalistic-border flex flex-col gap-2 bg-purple-400 p-3">
            <h1 className="text-3xl font-semibold">Tech Stack</h1>
            {stackLinks.map((link, i) => (
              <Link
                href={link.url}
                key={i}
                className="neobrutalistic-border box-border bg-white px-3 py-2 text-center hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Favourite tools */}
          <div className="neobrutalistic-border flex flex-col gap-2 bg-purple-400 p-3">
            <h1 className="text-3xl font-semibold">Favourite tools</h1>
            {toolsLinks.map((link, i) => (
              <Link
                href={link.url}
                key={i}
                className="neobrutalistic-border box-border bg-white px-3 py-2 text-center hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Footer */}
        <footer className="flex h-[10vh] items-center justify-center bg-orange-400 p-2">
          <p>
            {"Made with ❤ by Valerio Clemenzi • Built using "}
            <Link href="https://nextjs.org/" className="font-bold underline">
              Next.js
            </Link>
            {" and "}
            <Link
              href="https://tailwindcss.com/"
              className="font-bold underline"
            >
              TailwindCSS
            </Link>
          </p>
        </footer>
      </main>
    </>
  );
};

export default Home;
