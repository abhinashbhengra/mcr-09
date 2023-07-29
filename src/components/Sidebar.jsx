import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="flex flex-col font-bold mt-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/playlists">Playlists</NavLink>
      <NavLink to="/watchlater">Watch Later</NavLink>
    </div>
  );
};
