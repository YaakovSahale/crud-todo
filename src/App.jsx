import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./components/userCard/UserCard";
import Search from "./components/search/Search";
import TodosAndPostsDisplay from "./components/TodosAndPostsDisplay/TodosAndPostsDisplay";
import styles from "./App.module.css";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState([]);
  const [idClicked, setIdClicked] = useState({ isIdClicked: false, userId: 0 });

  useEffect(() => {
    const getUsersAndTodos = async () => {
      const { data: usersData } = await axios.get(USERS_URL);
      const { data: usersTodo } = await axios.get(TODOS_URL);
      const { data: usersPosts } = await axios.get(POSTS_URL);
      setUsers(usersData);
      setTodos(usersTodo);
      setPosts(usersPosts);
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
  }, []);

  useEffect(() => {
    setSearchDisplay(users);
  }, [users]);

  return (
    <div className={styles.App}>
      <div className={styles.cardsContainer}>
        <Search users={users} setSearchDisplay={setSearchDisplay} />
        {searchDisplay.map((user) => {
          return (
            <UserCard
              user={user}
              todos={todos}
              users={users}
              setUsers={setUsers}
              idClicked={idClicked}
              setIdClicked={setIdClicked}
            />
          );
        })}
      </div>
      {idClicked.isIdClicked && (
        <TodosAndPostsDisplay
          idClicked={idClicked}
          posts={posts}
          todos={todos}
        />
      )}
    </div>
  );
}

export default App;
