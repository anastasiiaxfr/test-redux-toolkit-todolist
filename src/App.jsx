import "./App.css";
import AddTodo from "./features/AddTodo";
import TodoList from "./features/TodoList";

function App() {
  return (
    <>
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
