import { useParams } from "react-router-dom";
import { videos } from "../api/videos/videos";

export const SingleVideo = () => {
  const { videoId } = useParams();
  const selectedVideo = videos.find((video) => video._id === +videoId);
  const showMoreVideo = videos.filter((video) => video._id !== +videoId);

  return (
    <div className="flex justify-between w-full mt-12">
      <div>
        <div className="px-8">
          <iframe width="900" height="450" src={selectedVideo.src}></iframe>
          <div className="flex justify-between">
            <div>
              <p className="font-bold">{selectedVideo.title}</p>
            </div>
            <div>check</div>
          </div>
        </div>
        <div className="mt-6 px-6">
          <p className="font-bold text-xl">My Notes</p>
        </div>
      </div>
      <div className="w-full">
        <p className="text-bold">More Videos:</p>
        <div className="h-screen overflow-scroll">
          {showMoreVideo.map((video) => (
            <div key={video._id} className="flex gap-2 mb-4">
              <img src={video.thumbnail} alt={video.title} width={100} />
              <div>
                <p className="font-bold text-blue-400">{video.title}</p>
                <p className="text-blue-400">{video.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
