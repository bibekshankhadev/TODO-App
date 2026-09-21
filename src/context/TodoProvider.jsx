import { useEffect, useReducer } from "react";
import { Bounce, toast } from "react-toastify";
import { TodoContext } from "./TodoContext";

const getData = () => {
  let data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const initialState = {
  todos: getData(),
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addTodo": {
      //todo
      //1. get todo or (get data)
      //2. checks if exist or not
      //3. if exists, do not do any thing
      // 4. then add that data or todo to the todos
      // 5. return new todo

      const isExist = state.todos.find((item) => {
        return item.id == action.payload.id;
      });

      if (isExist) {
        return state;
      } else {
        const newTodo = [...state.todos, action.payload];

        toast.success("Added Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        return {
          todos: newTodo,
        };
      }
    }
    case "deleteTodo": {
      // todo
      // get id of that todo
      // find and remove that todo
      // then return new todo

      const newTodo = state.todos.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        todos: newTodo,
      };
    }
    case "updateTodo": {
      // todo
      // collect new todo and old id
      // update the old todo with new todo using map
      // then return new todo

      const updatedTodo = state.todos.map((item) => {
        return item.id == action.payload.id
          ? { ...item, title: action.payload.title }
          : item;
      });

      return {
        todos: updatedTodo,
      };
    }
    default: {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
