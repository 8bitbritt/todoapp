import { useState } from 'react';
import GetDate from './components/GetDate';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div id="wrapper"> 
      <GetDate/>
      <AddTodo onAddTodo={addTodoHandler} />
      <p id="form-error" style={{ display: "none" }}>Please enter a todo</p>
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
  
    </div>
  );
}

export default App;
