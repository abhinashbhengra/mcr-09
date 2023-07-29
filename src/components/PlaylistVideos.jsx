import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../api/videos/videos";
import { useContext, useEffect, useState } from "react";
import { WatchLaterContext } from "../context/WatchLaterContext";
import { PlaylistContext } from "../context/PlaylistContext";
export const PlaylistVideos = () => {
  const navigate = useNavigate();
  const { playlistId } = useParams();
  const { watchLaterItems, addToWatchLater, removeFromWatchLater } =
    useContext(WatchLaterContext);
  const { playlists } = useContext(PlaylistContext);

  const [selectedPlaylist, setSelectedPlaylist] = useState({});

  //   const selectedPlaylist = playlists.find(
  //     (playlist) => playlist._id === playlistId
  //   );

  const removeFromPlaylist = (playlistId, videoId) => {
    const updatedVideos = selectedPlaylist.videos.filter(
      (video) => video._id !== videoId
    );
    const updatedPlaylist = { ...selectedPlaylist, videos: updatedVideos };
    setSelectedPlaylist(updatedPlaylist);
  };

  const checkId = (selectedId) => {
    return watchLaterItems.find((video) => video._id === selectedId);
  };

  //   console.log(selectedPlaylist.videos);

  useEffect(() => {
    const selectedPlaylist = playlists.find(
      (playlist) => playlist._id === playlistId
    );
    setSelectedPlaylist(selectedPlaylist);
  }, []);
  return (
    <div className="px-4 mt-8">
      <div className="flex flex-wrap ">
        {selectedPlaylist?.videos?.map((video) => (
          <div
            key={video._id}
            className="mb-12 p-6 cursor-pointer w-60 relative"
          >
            <div className="">
              <img
                src="/logo/close.svg"
                alt="close-btn"
                width={22}
                onClick={() => removeFromPlaylist(playlistId, video._id)}
              />
            </div>
            <img
              src={video.thumbnail}
              alt={video.category}
              onClick={() => navigate(`/video/${video._id}`)}
              className="w-full h-full object-cover"
            />
            <p className="text-xs font-bold">{video.title}</p>
            <p className="text-xs mt-2">
              <span>
                {video.views} views | {video.creator}
              </span>
            </p>
            <div className="w-6 p-0.5 bg-white absolute top-11 right-6 rounded-sm">
              {checkId(video._id) ? (
                <img
                  src="../logo/remove-timer.svg"
                  alt="remove"
                  onClick={() => removeFromWatchLater(video._id)}
                />
              ) : (
                <img
                  src="../logo/add-timer.svg"
                  alt="remove"
                  onClick={() => addToWatchLater(video._id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
