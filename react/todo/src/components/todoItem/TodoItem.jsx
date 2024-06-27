import "./TodoItem.css";
import { useContext } from "react";
import Context from '../../contexts/context';

// MISSION03: a) don't get deleteTodo as a prop
//  b) get removeTodo from the value of the context
//  c) use removeTodo instead of deleteTodo
export default function TodoItem({ todo, num, importantColor,
                                   changeCompleted, deleteTodo }) {

  const { id, text, completed, important } = todo;
  const { comment } = useContext(Context);
  console.log(comment);
  const defaultColor = "white";
  const style = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "1rem 2rem",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "2px",
      background: important ? importantColor : defaultColor,
    },
    span: {
      display: "flex",
      alignItems: "center",
    },
    checkbox: {
      marginRight: "1rem",
    },
  };

  return (
    <li style={style.li}>
      <span style={style.span}
            className={completed?"completed":""}>
        <input type="checkbox" style={style.checkbox}
            checked={completed} 
            onChange={() => {changeCompleted(id)}} />
        <strong>{num + ".\xa0"}</strong>
        {text}
      </span>
      <button className="delete" onClick={()=> deleteTodo(id)}>&times;</button>
    </li>
  );
}
