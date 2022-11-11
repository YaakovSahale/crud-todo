import { useState, useEffect } from "react";
import UserCard from "./components/userCard/UserCard";
import Search from "./components/search/Search";
import axios from "axios";
import styles from "./App.module.css";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState([]);

  useEffect(() => {
    const getUsersAndTodos = async () => {
      const { data: usersData } = await axios.get(USERS_URL);
      const { data: usersTodo } = await axios.get(TODOS_URL);
      setUsers(usersData);
      setTodos(usersTodo);
      setSearchDisplay(usersData);
    };

    const encapsulateTodosById = () => {
      let newTodos = [];
      todos.forEach((todo) => {
        const userTodos = newTodos.find((obg) => obg.userId === todo.userId);
        if (!userTodos) {
          return newTodos.push({ userId: todo.userId, todos: [todo] });
        }
        userTodos.todos.push(todo);
      });

      setTodos(newTodos);
    };

    getUsersAndTodos();
    encapsulateTodosById();
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.cardsContainer}>
        <Search
          users={users}
          setSearchDisplay={setSearchDisplay}
        />
        {searchDisplay.map((user) => {
          return <UserCard user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
