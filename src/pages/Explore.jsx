import { useNavigate } from "react-router-dom";
import { videos } from "../api/videos/videos";
import { useContext } from "react";
import { WatchLaterContext } from "../context/WatchLaterContext";
export const Explore = () => {
  const navigate = useNavigate();
  const { watchLaterItems, addToWatchLater, removeFromWatchLater } =
    useContext(WatchLaterContext);

  const checkId = (selectedId) => {
    return watchLaterItems.find((video) => video._id === selectedId);
  };
  return (
    <div className="px-4 mt-8">
      <div className="flex flex-wrap ">
        {videos.map((video) => (
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
