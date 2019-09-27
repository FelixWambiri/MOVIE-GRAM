import React from "react";
import { IEpisode } from "./interfaces";

const EpisodesList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            season: {episode.season} Number: {episode.number}
          </div>
          <button
            type="button"
            onClick={() => toggleFavAction(state, dispatch, episode)}
          >
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "UNLIKE"
              : "LIKE"}
          </button>
          <button>
            <a
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-link"
            >
              watch
            </a>
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
