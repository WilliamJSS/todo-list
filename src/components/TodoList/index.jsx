import { MdDelete } from 'react-icons/md'

import "./styles.css"

function TodoList({todos, onToggle, onRemove}) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
            className={["todo", todo.checked ? "checked" : ""].join(" ")}
            onClick={() => onToggle(todo)}>
              {todo.title}
          </span>
          <button className="remove" onClick={() => onRemove(todo)}>
            <MdDelete size={28}></MdDelete>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
