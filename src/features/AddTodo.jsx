import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, delAllTodo } from "./todoSlice";

function AddTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="field-cta">
      <input
        type="text"
        value={task}
        className="field"
        placeholder="Add task..."
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn" onClick={handleAddTask}>
        Add
      </button>
      <button className="btn-del" onClick={() => dispatch(delAllTodo())}>
        Delete All
      </button>
    </div>
  );
}

export default AddTodo;
