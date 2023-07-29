import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex flex-col font-bold mt-12 gap-10">
      <NavLink to="/">
        <div className="flex gap-2">
          <img src="/logo/home.svg" alt="home" width={20} />
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink to="/explore">
        <div className="flex gap-2">
          <img src="/logo/explore.svg" alt="explore" width={20} />
          <p>Explore</p>
        </div>
      </NavLink>
      <NavLink to="/playlists">
        <div className="flex gap-2">
          <img src="/logo/playlist.svg" alt="playlist" width={20} />
          <p>Playlists</p>
        </div>
      </NavLink>
      <NavLink to="/watchlater">
        <div className="flex gap-2">
          <img src="/logo/watch-later.svg" alt="watch-later" width={20} />
          <p>Watch Later</p>
        </div>
      </NavLink>
    </div>
  );
};
