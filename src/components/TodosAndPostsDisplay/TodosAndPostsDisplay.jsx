import styles from "./TodosAndPostsDisplay.module.css";

const TodosAndPostsDisplay = ({ idClicked, posts, todos }) => {
  return (
    <article className={styles.container}>
      <div className={styles.todosContainer}>
        <div className={styles.TodosTop}>
          <h3>Todos - User {idClicked.userId}</h3>
          <button>Add</button>
        </div>

        <div className={styles.todosData}>
          {todos.map((todo) => {
            <>
              <p>Title: {todo.title}</p>
              <div >
                <p>Completed: </p> <button>Mark Completed</button>
              </div>
            </>;
          })}
        </div>
      </div>

      <div className={styles.postsContainer}></div>
    </article>
  );
};

export default TodosAndPostsDisplay;
