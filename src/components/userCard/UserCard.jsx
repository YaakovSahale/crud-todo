import { useState, useEffect } from "react";
import styles from "./UserCard.module.css";
import OtherData from "../OtherData/OtherData";

const UserCard = ({ user, todos, users, setUsers, setIdClicked }) => {
  const [isMouseOverOtherData, setIsMouseOverOtherData] = useState(false);
  const [isTasksComplete, setIsTasksComplete] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
    address: { city: "", zipcode: "" },
  });

  const btnContainer_row = {
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const btnContainer_column = {
    flexDirection: "column",
  };

  useEffect(() => {
    const checkIfTasksComplete = () => {
      const tempIsTasksComplete = todos.find((todo) => {
        if (todo.userId == user.id) {
          if (!todo.completed) {
            return false;
          }
        }
      });
    };
    // checkIfTasksComplete();
  }, []);

  const saveUpdates = (e) => {
    if (e.target.name === "city" || "zipcode") {
      setUpdatedUser((prev) => ({
        ...prev, address: { ...address, [e.target.name]: e.target.value },
      }));
    }
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

  // console.log(isTasksComplete);

  return (
    <div>
      <article
        className={styles.card}
        style={{ border: `0.13em solid ${isTasksComplete ? "green" : "red"} ` }}
      >
        <p>
          {" "}
          <span
            onClick={() => setIdClicked({ isIdClicked: true, userId: user.id })}
          >
            ID :
          </span>{" "}
          {user.id}
        </p>
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
          {isMouseOverOtherData && (
            <OtherData user={user} saveUpdates={saveUpdates} />
          )}
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
    </div>
  );
};

export default UserCard;
