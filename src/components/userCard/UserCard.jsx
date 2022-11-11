import { useState } from "react";
import styles from "./UserCard.module.css";
import OtherData from "../OtherData/OtherData";

const UserCard = ({ user }) => {
  const [isMouseOverOtherData, setIsMouseOverOtherData] = useState(false);

  const borderColor = "red";
  const btnContainer_row = {
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const btnContainer_column = {
    flexDirection: "column",
  };

  return (
    <article
      className={styles.card}
      style={{ border: `0.13em solid ${borderColor} ` }}
    >
      <p>ID : {user.id}</p>
      <div className={styles.userDetails}>
        <label>Name : </label>
        <input type="text" defaultValue={user.name} />
      </div>
      <div className={styles.userDetails}>
        <label>Email :</label>
        <input type="text" defaultValue={user.email} />
      </div>
      <div
        className={styles.btnContainer}
        style={isMouseOverOtherData ? btnContainer_column : btnContainer_row}
      >
        <div>
          <button
            onMouseOver={() => setIsMouseOverOtherData(true)}
            onClick={() => setIsMouseOverOtherData(false)}
            className={styles.btn}
          >
            Other Data
          </button>
        </div>
        {isMouseOverOtherData && <OtherData user={user} />}
        <div className={styles.updateAndDeleteContainer}>
          <button className={styles.btn}>Update</button>
          <button className={styles.btn}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
