import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(USERS_URL);
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>HELLO FROM APP</h1>

      {users.map((user) => (
        <UserCard user={user} />
        
      ))}
    </div>
  );
}

export default App;
