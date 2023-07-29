import { createContext, useState } from "react";
import { videos } from "../api/videos/videos";

export const WatchLaterContext = createContext();

export const WatchLaterProvider = ({ children }) => {
  const [watchLaterItems, setWatchLaterItems] = useState([]);

  const addToWatchLater = (selectedId) => {
    const selectedVideo = videos.find(({ _id }) => _id === selectedId);
    setWatchLaterItems((curr) => [...curr, selectedVideo]);
  };

  const removeFromWatchLater = (selectedId) => {
    const filteredVideos = watchLaterItems.filter(
      (video) => video._id !== selectedId
    );
    setWatchLaterItems(filteredVideos);
  };
  return (
    <WatchLaterContext.Provider
      value={{ watchLaterItems, addToWatchLater, removeFromWatchLater }}
    >
      {children}
    </WatchLaterContext.Provider>
  );
};
