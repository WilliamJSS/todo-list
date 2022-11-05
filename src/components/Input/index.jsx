import { useState } from "react";

import "./styles.css"

function Input({ onSubmit }) {
  const KEY_ENTER = 13;
  const KEY_ESCAPE = 27;

  const [value, setValue] = useState('');

  const clear = () => setValue('');

  const submit = () => {
    if (onSubmit) {
      onSubmit(value)
      clear();
    }
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
    <input className="new-todo"
      placeholder="O que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
