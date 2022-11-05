import { useState } from "react";
import "./App.css";

function App() {
  const KEY_ENTER = 13;
  const KEY_ESCAPE = 27;

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
        <p>My task: {value}</p>
      </section>
    </section>
  );
}

export default App;
