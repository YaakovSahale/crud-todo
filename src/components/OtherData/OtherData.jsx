import React from "react";
import styles from "./OtherData.module.css";

const OtherData = ({ user, saveUpdates }) => {
  return (
    <div className={styles.otherDataContainer}>
      <p>Street : {user.id}</p>
      <div className={styles.userDetails}>
        <label>City : </label>
        <input
          type="text"
          name="city"
          defaultValue={user.address.city}
          onChange={(e) => saveUpdates(e)}
        />
      </div>
      <div className={styles.userDetails}>
        <label>Zip Code : </label>
        <input
          type="text"
          name="zipcode"
          defaultValue={user.address.zipcode}
          onChange={(e) => saveUpdates(e)}
        />
      </div>
    </div>
  );
};

export default OtherData;
