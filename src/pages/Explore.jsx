import { useNavigate } from "react-router-dom";
import { videos } from "../api/videos/videos";
import { useContext, useState } from "react";
import { WatchLaterContext } from "../context/WatchLaterContext";
export const Explore = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const { watchLaterItems, addToWatchLater, removeFromWatchLater } =
    useContext(WatchLaterContext);

  const checkId = (selectedId) => {
    return watchLaterItems.find((video) => video._id === selectedId);
  };

  let displayVideos = videos;

  displayVideos = displayVideos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 mt-8">
      <p className="text-2xl font-bold px-6">Explore</p>
      <div className="px-36 mt-4">
        <input
          type="text"
          name="search"
          placeholder="Search video by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-full p-2 text-sm"
        />
      </div>

      <div className="flex flex-wrap ">
        {displayVideos.length < 1 && (
          <p className="font-bold mt-16">No videos found !!</p>
        )}
        {displayVideos.map((video) => (
          <div
            key={video._id}
            className="mb-12 p-6 cursor-pointer w-60 relative"
          >
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
            <div className="w-6 p-0.5 bg-white absolute top-6 right-6 rounded-sm">
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
