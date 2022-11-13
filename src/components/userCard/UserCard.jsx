import { useState } from "react";
import styles from "./UserCard.module.css";
import OtherData from "../OtherData/OtherData";

const UserCard = ({ user, todos, users, setUsers }) => {
  const [isMouseOverOtherData, setIsMouseOverOtherData] = useState(false);
  const [isTasksComplete, setIsTasksComplete] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});

  const btnContainer_row = {
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const btnContainer_column = {
    flexDirection: "column",
  };

  const checkIfTasksComplete = () => {
    let totalTasksNum = 0;
    const completedTasks = todos.map((todo) => {
      if (todo.userId !== user.id) return;
      totalTasksNum++;
      if (!todo.completed) return;
      return true;
    });

    if (totalTasksNum === completedTasks.length) setIsTasksComplete(true);
  };

  const saveUpdates = (e) => {
    setUpdatedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateHandle = () => {
    const tempUsers = [...users];
    tempUsers.find((person, i) => {
      if (person.id === user.id) {
        // person = updatedUser;
        tempUsers[i] = { ...tempUsers[i], ...updatedUser };
      }
    });
    setUsers(tempUsers);
  };

  const deleteHandle = () => {
    const tempUsers = [...users];
    tempUsers.find((person, i) => {
      if (person?.id === user?.id) {
        // person = updatedUser;
        tempUsers.splice(i, 1);
        console.log(tempUsers);
      }
    });
    setUsers(tempUsers);
  };

  checkIfTasksComplete();

  return (
    <article
      className={styles.card}
      style={{ border: `0.13em solid ${isTasksComplete ? "green" : "red"} ` }}
    >
      <p>ID : {user.id}</p>
      <div className={styles.userDetails}>
        <label>Name : </label>
        <input
          type="text"
          name="name"
          defaultValue={user.name}
          onChange={(e) => saveUpdates(e)}
        />
      </div>
      <div className={styles.userDetails}>
        <label>Email :</label>
        <input
          type="text"
          name="email"
          defaultValue={user.email}
          onChange={(e) => saveUpdates(e)}
        />
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
          <button className={styles.btn} onClick={updateHandle}>
            Update
          </button>
          <button className={styles.btn} onClick={deleteHandle}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
