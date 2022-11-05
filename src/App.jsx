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
    setValue(`[SUBMIT] ${value}`)
    // clear();
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
              <span className="todo">{todo.title}</span>
              <button className="remove">
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
