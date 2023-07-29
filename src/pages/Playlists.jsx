import { useNavigate } from "react-router-dom";
import { videos } from "../api/videos/videos";
export const Playlists = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap px-4 mt-8">
      {videos.map((video) => (
        <div key={video._id} className="mb-4 p-6 cursor-pointer">
          <img
            src={video.thumbnail}
            alt={video.category}
            onClick={() => navigate(`/video/${video._id}`)}
          />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};
