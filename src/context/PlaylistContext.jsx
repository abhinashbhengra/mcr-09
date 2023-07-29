import { createContext, useState } from "react";

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlists, setPlaylists] = useState([]);

  const [check, setCheck] = useState();

  const addPlaylist = (playlist) => {
    setPlaylists((curr) => [...curr, playlist]);
  };

  const removePlaylist = (playlistId) => {
    const updatedPlaylist = playlists.filter(
      (playlist) => playlist._id !== playlistId
    );
    setPlaylists(updatedPlaylist);
  };

  return (
    <PlaylistContext.Provider
      value={{ playlists, addPlaylist, removePlaylist }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
