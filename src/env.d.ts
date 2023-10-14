/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SPOTIFY_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
