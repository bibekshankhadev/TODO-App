import React, { useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";

function EditTodo() {
  const { state } = useLocation();

  const [todo, setTodo] = useState(state?.title ?? "");
  const [todoError, setTodoError] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(TodoContext);

  // Opened directly (or refreshed) without a todo to edit
  if (!state) {
    return <Navigate to="/todo" replace />;
  }

  return (
    <div>
      <div className="      ">
        <div className=" gap-x-4  p-10 flex  justify-center ">
          <label htmlFor="">
            <input
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
                setTodoError("");
              }}
              required
              className="  bg-white shadow outline-none w-full p-3 rounded-2xl"
              type="text"
              placeholder="Enter Task.."
            />
          </label>
          <button
            onClick={() => {
              if (todo.trim().length === 0) {
                setTodoError("Most Be Some characters in the input field !* ");
                return;
              }
              dispatch({
                type: "updateTodo",
                payload: {
                  title: todo,
                  id: state.id,
                },
              });

              navigate("/todo");
            }}
            className="bg-orange-500 p-3  text-white rounded-sm"
          >
            Edit Todo
          </button>
        </div>

        {todoError.length > 0 && (
          <p className="  italic  font-bold text-sm text-center text-red-500 ">
            {todoError}
          </p>
        )}
      </div>
    </div>
  );
}

export default EditTodo;
