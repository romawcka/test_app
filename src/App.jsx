import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import UsersList from "./components/UsersList/UsersList";
import UserPosts from "./components/UserPosts/UserPosts";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/posts/:userId" element={<UserPosts />} />
        <Route path="/albums/:userId" element={<UserAlbums />} />
      </Routes>
    </Router>
  );
};
