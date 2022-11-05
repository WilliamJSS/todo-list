import { useState } from "react";
import { MdDelete } from 'react-icons/md'
import "./App.css";

function App() {
  const KEY_ENTER = 13;
  const KEY_ESCAPE = 27;

  const initialTodos = [
    { id: 1, title: 'Estudar React', checked: false },
    { id: 2, title: 'Estudar Inglês', checked: true },
    { id: 3, title: 'Tocar guitarra', checked: false },
  ]

  const [todos, setTodos] = useState(initialTodos);
  const [value, setValue] = useState('');

  const clear = () => setValue('');

  const submit = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false
      }
    ])

    clear();
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event) => {
    if (event.which === KEY_ENTER) {
      submit();
    }
    else if (event.which === KEY_ESCAPE) {
      clear();
    }
  }

  const onToggle = (todo) => {
    setTodos(todos.map((obj) => (
      obj.id === todo.id ? { ...obj, checked: !obj.checked } : obj
    )));
  }

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">TODO</h1>
      </header>
      <section className="main">
        <input className="new-todo"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown} />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                onClick={() => onToggle(todo)}
              >
                {todo.title}
              </span>
              <button className="remove" onClick={() => onRemove(todo)}>
                <MdDelete size={28}></MdDelete>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default App;
