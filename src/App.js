import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { Playlists } from "./pages/Playlists";
import { WatchLater } from "./pages/WatchLater";
import { Sidebar } from "./components/Sidebar";
import { CategoryVideos } from "./components/CategoryVideos";
import { SingleVideo } from "./components/SingleVideo";
import { PlaylistVideos } from "./components/PlaylistVideos";

function App() {
  return (
    <div className="flex px-12  max-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route
          path="/category/:selectedcategory"
          element={<CategoryVideos />}
        />
        <Route path="/video/:videoId" element={<SingleVideo />} />
        <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
      </Routes>
    </div>
  );
}

export default App;
