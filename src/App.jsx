export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative px-8 md:px-24 pt-20 pb-24">

        {/* Subtle Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90"></div>

        <div className="relative flex flex-col md:flex-row items-center gap-14">

          {/* Playlist Cover */}
          <img
            src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8417b6782eb9f284b4831218b5"
            alt="Playlist Cover"
            className="w-72 md:w-96 rounded-lg shadow-2xl"
          />

          {/* Playlist Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
              NUMBBB
            </h1>

            <p className="text-zinc-400 text-xl mt-4">
              Created by ArnaVVvV
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://open.spotify.com/playlist/3trgFYbfNw93Cm0z092T2V"
                )
              }
              className="mt-8 px-8 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-md transition"
            >
              ▶ OPEN IN SPOTIFY
            </button>
          </div>
        </div>
      </section>

      {/* SPOTIFY EMBED SECTION */}
      <section className="px-8 md:px-24 pb-20">

        <h2 className="text-3xl tracking-widest mb-10">
          PLAYLIST
        </h2>

        <div className="flex justify-center">
          <iframe
            className="w-full max-w-4xl h-[400px] rounded-xl shadow-xl"
            src="https://open.spotify.com/embed/playlist/3trgFYbfNw93Cm0z092T2V"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

      </section>
    </div>
  );
}
