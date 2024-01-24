import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import styles from "./UsersList.module.scss";

const UsersList = () => {
  const { data: users, isLoading } = useFetchData("users", "");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.username.localeCompare(b.username);
    } else {
      return b.username.localeCompare(a.username);
    }
  });

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <h1>Users List</h1>
          <input
            type="text"
            placeholder="Search by username"
            onChange={handleSearch}
          />
          <ul>
            {sortedUsers.map((user) => (
              <li key={user.id}>
                <Link to={`/posts/${user.id}`}>{user.username}</Link> |{" "}
                <Link to={`/albums/${user.id}`}>Albums</Link>
              </li>
            ))}
          </ul>
          <button onClick={handleSort}>
            Sort {sortOrder === "asc" ? "asc" : "desc"}
          </button>
        </>
      )}
    </div>
  );
};

export default memo(UsersList);
