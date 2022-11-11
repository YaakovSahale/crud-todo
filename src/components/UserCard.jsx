import React from "react";
import styles from "../components/UserCard.module.css";

const UserCard = ({ user }) => {

  const isUserTodoCompleted = () => {
    user.forEach(element => {
      
    });
  }

  const borderColor = "red"
  return (
  
  <article className={styles.card} style={{border: `0.13em solid ${borderColor} `  }}>
      <p>ID : {user.id}</p>
      <p>
        Name : <span className={styles.nameAndEmail}>{user.name}</span>
      </p>
      <p>
        Email : <span className={styles.nameAndEmail}>{user.email}</span>
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>Other Data</button>
        <div>
        <button className={styles.btn}>Update</button>
        <button className={styles.btn}>Delete</button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
