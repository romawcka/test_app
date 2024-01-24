import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import styles from "./UserPosts.module.scss";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";

const UserPosts = () => {
  const { userId } = useParams();
  const { data: posts, isLoading } = useFetchData("posts", userId);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation isHome={false} nextPage="album" id={userId} />
          <h2>User Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id} className={styles.list}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserPosts;
