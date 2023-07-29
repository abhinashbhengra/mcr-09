import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Modal from "react-modal";
import { PlaylistContext } from "../context/PlaylistContext";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.70)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#262626",
    color: "#a5a5a5",
    width: 500,
    height: 380,
    overflow: "hidden",
    border: "none",
  },
};

const defaultThumbnail =
  "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxheWxpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";

export const Playlists = () => {
  const { playlists, addPlaylist, removePlaylist } =
    useContext(PlaylistContext);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const playlist = {
    _id: uuid(),
    name,
    desc: description,
    thumbnail: defaultThumbnail,
    videos: [
      {
        _id: 19,
        title: "Origami Swan - Simple and Elegant",
        views: 2879,
        chips: ["origami", "swan", "paper", "elegant"],
        thumbnail: "https://picsum.photos/300/174",
        src: "https://www.youtube.com/embed/GBIIQ0kP15E",
        category: "Origami",
        creator: "PaperCraftPro",
      },
      {
        _id: 20,
        title: "Kirigami Flower Bouquet - Beautiful Handmade Gift",
        views: 1756,
        chips: ["kirigami", "flower bouquet", "paper", "gift"],
        thumbnail: "https://picsum.photos/300/175",
        src: "https://www.youtube.com/embed/GBIIQ0kP15E",
        category: "Kirigami",
        creator: "Crafty Delights",
      },
    ],
  };

  const createPlaylist = () => {
    addPlaylist(playlist);
    setModalOpen(false);
    setName("");
    setDescription("");
  };
  return (
    <div className="px-4 mt-8">
      {playlists.length < 1 ? (
        <p className="font-bold">No Playlists</p>
      ) : (
        <p className="font-bold">Playlists</p>
      )}
      <div className="flex flex-wrap items-center">
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
          ariaHideApp={false}
        >
          <p className="font-bold text-xl">Add new Playlist</p>
          <p className="mt-8">New Playlist</p>
          <input
            type="text"
            placeholder="New Playlist"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2"
          />
          <p className="mt-4">Description</p>
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2"
          />
          <button
            className="p-2 mt-8 bg-blue-300 text-white w-full rounded-md"
            onClick={createPlaylist}
          >
            Create Playlist
          </button>
        </Modal>

        {playlists.map((playlist) => (
          <div key={playlist._id} className="mb-4 p-6 w-64 cursor-pointer">
            <div className="relative">
              <img
                src="/logo/close.svg"
                alt="close-btn"
                width={24}
                className="absolute right-1 p-1"
                onClick={() => removePlaylist(playlist._id)}
              />
            </div>
            <img
              src={playlist.thumbnail}
              alt={playlist.category}
              className="w-full h-full object-cover"
              onClick={() => navigate(`/playlist/${playlist._id}`)}
            />
            <p className="font-bold">{playlist.name}</p>
            <p>{playlist.desc}</p>
          </div>
        ))}
        <button onClick={() => setModalOpen(true)}>
          <img src="/logo/add.svg" alt="add-button" width={34} />
        </button>
      </div>
    </div>
  );
};
