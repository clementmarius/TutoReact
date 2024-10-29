const title = "Bonjour les gens";
const style = { color: "red", background: "yellow" };
const showTitle = true;
const todos = [
  'Acheter de la farine',
  'Preparer la pate',
  'Faire les crepes'
]

function App() {
  const handleClick = () => {
    alert("J'ai clique sur le titre");
  };

  return (
    <>
      <Title /> 
      <input type="text" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
        quae voluptatem earum exercitationem necessitatibus, itaque, quo
        doloribus eos praesentium ex rem non suscipit alias inventore,
        consequatur rerum recusandae sit labore?
      </p>
      <ul>
        {todos.map(todo => (<li key={todo}>{todo}</li>))}
      </ul>
    </>
  );
}

function Title () {
  return <h1>Bonjour les gens</h1>
}

export default App;
