import { useDispatch } from "react-redux";
import { addTodo, updateTodo, type ReduxTodo } from "./todosReducer";

export default function ReduxTodoForm({
  todo,
  setTodo,
  emptyTodo,
}: {
  todo: ReduxTodo;
  setTodo: (todo: ReduxTodo) => void;
  emptyTodo: ReduxTodo;
}) {
  const dispatch = useDispatch();
  const save = () => {
    if (todo.id) {
      dispatch(updateTodo(todo));
    } else {
      dispatch(addTodo(todo.title));
    }
    setTodo(emptyTodo);
  };
  return (
    <div id="wd-redux-todo-form" className="mb-2 flex flex-wrap gap-2">
      <input
        id="wd-redux-todo-title"
        className="rounded border border-neutral-300 px-2 py-1"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <button
        type="button"
        id="wd-redux-add-todo"
        className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        onClick={save}
      >
        {todo.id ? "Update" : "Add"}
      </button>
    </div>
  );
}
