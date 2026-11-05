import { useState } from "react";
import { useTodosContext, type ContextTodo } from "./todosContext";

const emptyDraft: ContextTodo = { id: "", title: "Learn useContext" };

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [draft, setDraft] = useState<ContextTodo>(emptyDraft);
  const save = () => {
    if (draft.id) {
      updateTodo(draft);
    } else {
      addTodo(draft.title);
    }
    setDraft(emptyDraft);
  };
  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          id="wd-context-todo-title"
          className="rounded border border-neutral-300 px-2 py-1"
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
        />
        <button
          type="button"
          id="wd-context-save-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          onClick={save}
        >
          {draft.id ? "Update" : "Add"}
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            id={`wd-context-todo-${todo.id}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span>{todo.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
                onClick={() => setDraft(todo)}
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
