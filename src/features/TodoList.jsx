import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delTodo, editTodo, toggleChecked } from "./todoSlice";
import { Square, SquareCheckBig } from "lucide-react";

export default function TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveClick = (id) => {
    if (editText.trim()) {
      dispatch(editTodo({ id, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <>
      {tasks.map((task) => {
        const isChecked = task.checked;

        return (
          <div className="field-group" key={task.id}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  className={
                    isChecked
                      ? "field field-edit field-done"
                      : "field field-edit"
                  }
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="btn-secondary"
                  onClick={() => handleSaveClick(task.id)}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div
                  className="field-label"
                  onClick={() => dispatch(toggleChecked(task.id))}
                >
                  {isChecked ? (
                    <SquareCheckBig size={30} />
                  ) : (
                    <Square size={30} />
                  )}
                  <span className={isChecked ? "field field-done" : "field"}>
                    {task.text}
                  </span>
                </div>
                <button
                  className="btn-secondary"
                  onClick={() => handleEditClick(task.id, task.text)}
                >
                  Edit
                </button>
                <button
                  className="btn-del"
                  onClick={() => dispatch(delTodo(task.id))}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
