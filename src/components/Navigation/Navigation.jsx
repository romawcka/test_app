import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = ({ isHome = true, nextPage, id }) => {
  const navigate = useNavigate();

  const path = nextPage === "post" ? "posts" : "albums";

  return (
    <div className={styles.btns}>
      {!isHome && <button onClick={() => navigate("/")}>Home</button>}
      <button onClick={() => navigate(-1)}>Back</button>
      {!isHome && (
        <button onClick={() => navigate(`/${path}/${id}`)}>
          Go to user's {nextPage}
        </button>
      )}
    </div>
  );
};

export default memo(Navigation);
