const title = "Bonjour les gens";
const style = { color: "red", background: "yellow" };
const showTitle = true;

function App() {
  const handleClick = () => {
    alert("J'ai clique sur le titre");
  };

  return (
    <>
      {showTitle ? 
        <h1 id="title" className="title" style={style}>
          {title}
        </h1> : <p>demo</p>
      }
      <input type="text" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
        quae voluptatem earum exercitationem necessitatibus, itaque, quo
        doloribus eos praesentium ex rem non suscipit alias inventore,
        consequatur rerum recusandae sit labore?
      </p>
    </>
  );
}

export default App;
