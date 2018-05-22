import React from "react";

import { PageHelmet } from "../components/helmet/";

import styles from "./Spotify.module.css";

const PLAYLISTS = [
  {
    id: `aperitief`,
    image: `https://pl.scdn.co/images/pl/default/77ab29f193715b43d3c664d624cb3375fcb1e6e3`,
    name: `🥂 Diner | Feestje | Aperitief`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/5HDQmC0jdxsu5XeVuQzvwy`,
  },
  {
    id: `world`,
    image: `https://pl.scdn.co/images/pl/default/136858c6083ce422e86864abc4d73cbf40f00efa`,
    name: `🌍 World`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/0S3ijUMYfcTbPkTUjHGF4v`,
  },
  {
    id: `neon`,
    image: `https://pl.scdn.co/images/pl/default/136858c6083ce422e86864abc4d73cbf40f00efa`,
    name: `💎 Neon`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/4DuiX3HXjFVXBHVNxajhYy`,
  },
  {
    id: `fall`,
    image: `https://pl.scdn.co/images/pl/default/8ce0c5a02f11b2f65bdaa5baa43eeafcb8d37a4d`,
    name: `🍁 Fall`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/2Ui8wlScpXhXAF9Ou4qlLK`,
  },
  {
    id: `big_from_belgium`,
    image: `https://pl.scdn.co/images/pl/default/fbc308b0a0af4ab814b93dafe9e6e1fc1f6c721c`,
    name: `🇧🇪 Big from Belgium`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/3GNcIkMbPXDXdlDUYbLvwV`,
  },
  {
    id: `barbecue`,
    image: `https://pl.scdn.co/images/pl/default/2b3dda57459e8ea6d62d0bafc572b48c1ba63ef2`,
    name: `🔥 Barbeque`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/6y5VMqiqhJOTh0cBdQiCnn`,
  },
  {
    id: `discoveries`,
    image: `https://pl.scdn.co/images/pl/default/04ceabbd8a153ebc793dbf82ad4039b75b44bbe1`,
    name: `🌈 Discoveries`,
    url: `https://open.spotify.com/embed/user/thibault.maekelbergh/playlist/3wzp44GiNDwiCdHtlINgRW`,
  },
].sort((a, b) => a.id > b.id);

const Spotify = () => (
  <section>
    <PageHelmet title='🔊 Spotify' />
    <header>
      <h1>Spotify</h1>
    </header>
    <article className={styles.playlistItems}>
      {PLAYLISTS.map(({ name, image, url }) => (
        <div className={styles.playlistItemContainer} key={name}>
          <h2>{name}</h2>
          <div className={styles.playlistItem}>
            <img alt='Spotify Cover' src={image} />
            <iframe
              allowTransparency='true'
              className={styles.spotifyEmbed}
              frameBorder='0'
              src={url}
              title='Spotify Playlist embed'
            />
          </div>
        </div>
      ))}
    </article>
  </section>
);

export default Spotify;
