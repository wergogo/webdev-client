import { useState } from "react";
import { useSelector } from "react-redux";
import type { ReduxTodo } from "./todosReducer";
import type { RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

const emptyTodo: ReduxTodo = { id: "", title: "Learn Mongo" };

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [todo, setTodo] = useState<ReduxTodo>(emptyTodo);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm todo={todo} setTodo={setTodo} emptyTodo={emptyTodo} />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((t) => (
          <ReduxTodoItem key={t.id} todo={t} setTodo={setTodo} />
        ))}
      </ul>
    </div>
  );
}
