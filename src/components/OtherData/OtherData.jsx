import React from "react";
import styles from "./OtherData.module.css";

const OtherData = ({ user }) => {
  return (
    <div className={styles.otherDataContainer}>
      <p>Street : {user.id}</p>
      <div className={styles.userDetails}>
        <label>City : </label>
        <input type="text" defaultValue={user.city} />
      </div>
      <div className={styles.userDetails}>
        <label>Zip Code :</label>
        <input type="text" defaultValue={user.zipCode} />
      </div>
    </div>
  );
};

export default OtherData;
