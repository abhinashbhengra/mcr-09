import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../api/videos/videos";

export const CategoryVideos = () => {
  const { selectedcategory } = useParams();
  const navigate = useNavigate();

  const filteredVideos = videos.filter(
    (video) => video.category === selectedcategory
  );

  return (
    <div className="px-4 mt-8">
      <p className="px-6 text-2xl font-bold">{selectedcategory}</p>
      <div className="flex flex-wrap ">
        {filteredVideos.map((video) => (
          <div key={video._id} className="mb-4 p-6 cursor-pointer">
            <img
              src={video.thumbnail}
              alt={video.video}
              onClick={() => navigate(`/video/${video._id}`)}
            />
            <p>{video.title}</p>
            <p>{video.category}</p>
            <p>
              <span>
                {video.views} views | {video.creator}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
