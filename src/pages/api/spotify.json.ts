import axios from "axios";

export async function GET() {
  const req = await axios({
    method: "get",
    url: "https://api.spotify.com/v1/me/player/currently-playing",
    headers: {
      Authorization: `Bearer ${import.meta.env.SPOTIFY_TOKEN}`,
    },
  });

  if (req.status !== 200 && req.status !== 204) {
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        issues: "https://github.com/vclemenzi/website/issues",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  const data = req.data;

  return new Response(
    JSON.stringify({
      listening: req.status != 200 ? false : true,
      track:
        req.status != 200
          ? {}
          : {
              artists: data.item.artists.map((artist) => {
                return {
                  id: artist.id,
                  images: artist.images,
                  name: artist.name,
                  url: artist.uri,
                };
              }),
              id: data.item.album.id,
              name: data.item.album.name,
              url: data.item.album.uri,
              images: data.item.album.images,
            },
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
}
