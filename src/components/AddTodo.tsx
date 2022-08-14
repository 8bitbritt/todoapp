import { useRef } from 'react';

import classes from './AddTodo.module.css';

const AddTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    const formError : any = document.getElementById("form-error");

    if (enteredText.trim().length === 0) {
      // throw an error if text is empty
      formError.style.display = 'block';
      return;
    }
    else{
      formError.style.display = 'none';
    }


    props.onAddTodo(enteredText);
    todoTextInputRef.current!.value = '';//clear the input text once a todo is added
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Add a ToDo Item</label>
      <input type='text' id='text' ref={todoTextInputRef} placeholder="Add a todo..." />
      <button>+</button>
    </form>
  );
};

export default AddTodo;
