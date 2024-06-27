function SelectUser() {

  return (
    <select>
      <option value="Aquaman">Aquaman</option>
      <option value="Batman">Batman</option>
      <option value="Spiderman">Spiderman</option>
      <option value="Superman">Superman</option>
      <option value="Wonderwoman">Wonderwoman</option>
    </select>
  )
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="layout">{children}</main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <UserInfo />
    </header>
  );
}

const Emoji = props => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>
);

function UserInfo() {
  let u="Aquaman"
  const uu={ Aquaman: "Artur Curry"}
  return (<span>
    <Emoji symbol={"👶"}/>
    {u+" ("+uu[u]+")"}
    </span>);
}


function App() {

  const userName = 'Aquaman';

  const users = {
    Aquaman: "Arthur Curry",
    Batman: "Bruce Wayne",
    Spiderman: "Peter Parker",
    Superman: "Clark Kent",
    Wonderwoman: "Princess Diana of Themyscira"
  }

  return (

      <div className="App">
        <Layout>
          <SelectUser />
          <article>
            Content
          </article>
        </Layout>
      </div>

  );
}

export default App;
