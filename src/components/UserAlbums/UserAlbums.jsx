import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import styles from "./UserAlbums.module.scss";

const UserAlbums = () => {
  const { userId } = useParams();
  const { data: albums, isLoading } = useFetchData("albums", userId);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation isHome={false} nextPage="post" id={userId} />
          <h2>User Albums</h2>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>
                <p>{album.title}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserAlbums;
