import "./TodoList.css";
import TodoItem from "../todoItem/TodoItem";

// MISSION02: a) don't get deleteTodo as a prop
//  b) don't pass deleteTodo as a prop
//  c) go to TodoItem
export default function TodoList({todos,importantColor,
                                      changeCompleted}) {
  const style = {
    ul: {
      listStyle: "none",
      padding: "0",
      fontSize: "2rem",
      color: "black",
    },
  };

  const showTodos = todos.length !== 0 ? todos.map((todo,idx) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      num={idx+1}
      importantColor={importantColor}
      changeCompleted={changeCompleted}
    />
  )) : 
  <h5>😴Sorry, no more missions</h5>;

  return (
    <ul style={style.ul}>
      { showTodos }
    </ul>
  );
}
