import './App.css';
import './components/tShirt/TShirt';
import TShirt from './components/tShirt/TShirt';

function App() {
  // 0. Everything here in React is written in JSX: combination
  //    of HTML and JS
  // 1. function App() creates component <App />, and it is generaly
  //     like a class, so it's name starts with uppercase A
  // 2. return () of the component contains the code that should be rendered
  // 3. JS inside HTML should be in curly braces, like {logo}
  // 4. <header className="App-header"> - in JSX we use attribute className
  //        instead of attribute "class", to diminsh confusion between
  //        group id of HTML or CSS and class of OO JS

  return (
    <div className="App">
      
      {/* Slash as the "end" of the component is NEEDED */}
       <TShirt />
       <TShirt />
       <TShirt />
       <TShirt />
       <TShirt />
       <TShirt />

    </div>
  );
}

export default App;
