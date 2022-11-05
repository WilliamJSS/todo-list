import { useState } from "react";
import Input from "./components/Input"
import TodoList from "./components/TodoList"

function App() {

  const initialTodos = [
    { id: 1, title: 'Estudar React', checked: false },
    { id: 2, title: 'Estudar Inglês', checked: true },
    { id: 3, title: 'Tocar guitarra', checked: false },
  ]

  const [todos, setTodos] = useState(initialTodos);

  const onSubmit = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: newTodo,
        checked: false
      }
    ])
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
        <Input onSubmit={onSubmit} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </section>
    </section>
  );
}

export default App;
