import { useState } from "react";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

import Context from './contexts/context';

function App() {
  const [wrapperColor, setWrapperColor] = useState("white");
  const [appTitle, setAppTitle] = useState("Todo App");

  const color = "orange";
  const comment = "I am comment and I am sitting in the Context";

  const [todos, setTodos] = useState([
    { id: 1, text: "Run 10 km", completed: true, important: false },
    { id: 22, text: "React for 7 hours", completed: false, important: true },
    { id: 73, text: "Wash Dishes", completed: false, important: false },
    { id: 1004, text: "Buy Eggs and Rice", completed: false, important: true },
  ]);

  const changeCompleted = (id) => {

    const newTodos = todos.map(todo => {

      if (todo.id === id) todo.completed = !todo.completed;
      return todo;

    })

    setTodos(newTodos);

  }

  const removeTodo = (id) => {

    setTodos(todos.filter(todo => todo.id !== id ));

  }

  console.log(`wrapperColor outside "changeColor" function is ${wrapperColor}`);

  const changeColor = () => {
    console.log(`wrapperColor before the change is ${wrapperColor}`);

    setWrapperColor(
      wrapperColor === "white"
        ? "lightblue"
        : wrapperColor === "lightblue"
        ? "lightgreen"
        : "white"
    );
    console.log(`wrapperColor after the change is ${wrapperColor}`);
  };

  const changeTitle = () => {
    const titles = [
      "Todo App",
      "Todo List",
      "Todo",
      "To-Do List",
      "To-Do App",
      "To-Do",
    ];

    setAppTitle(titles[Math.floor(Math.random() * titles.length)]);
  };

  // MISSION01: a) add removeTodo to the Context
  //  b) Don't pass it as a prop
  //  c) Go to TodoList

  return (
    <Context.Provider value={{comment, removeTodo}}>
    <div className="App">
      <Header appTitle={appTitle} />
      <div className="wrapper" style={{ background: wrapperColor }}>
        <button onClick={changeColor} style={{marginLeft: "2rem"}}>Change Color</button>
        <button onClick={changeTitle}>Change Title</button>
{/* MISSION: a) create component AddTodo
    b) import it into App.jsx
    c) put it here */}
        <TodoList importantColor={color} todos={todos}
                  changeCompleted={changeCompleted} />
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
