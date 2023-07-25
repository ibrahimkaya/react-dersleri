import "./App.css";
import { useState } from "react";

function App() {
  //varsayılan değer ataması state içindeki
  const [name, setName] = useState("ibrahim");
  const [age, setAge] = useState(27);
  return (
    <div className="App">
      <h1>
        Selam {name}, yaş: {age}{" "}
      </h1>
      <button onClick={() => setName("ahmet")}>change name</button>
      <button onClick={() => setAge(Math.random)}>change age</button>
    </div>
  );
}

export default App;
