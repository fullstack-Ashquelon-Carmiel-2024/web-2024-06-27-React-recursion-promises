import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';

function App() {

  const todos = [
    {text:'Run 10 km', completed: false, important: false},
    {text:'React for 7 hours', completed: false, important: true},
    {text:'Wash Dishes', completed: false, important: false},
    {text:'Buy Eggs and Rice', completed: false, important: true},
  ]
  
  return (
    <div className="App">
      <Header />
      <div className="wrapper">

       <TodoList />

      </div>
    </div>
  );
}

export default App;
