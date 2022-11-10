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
        Name : <span className={styles.userDetails}>{user.name}</span>
      </p>
      <p>
        Email : <span className={styles.userDetails}>{user.email}</span>
      </p>
      <div>
        <button>Other Data</button>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </article>
  );
};

export default UserCard;
