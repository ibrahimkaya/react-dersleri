import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("ibrahim");

  return (
    <div>
      <h1>Please enter name</h1>
      <div>{name}</div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
    </div>
  );
}

export default InputExample;
