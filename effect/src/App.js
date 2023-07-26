import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState(" ");
  useEffect(() => {
    //component üzerindeki state güncellenince side effect olarak tetiklenir
    console.log("component render edildi");
  });

  useEffect(() => {
    //ikinci parametre boş array, sadece component mount edilince tetiklenmesini sağlar
    console.log("component mount oldu");
  }, []);

  useEffect(() => {
    //number stateinin side effecti olarak çalışır artık
    console.log("sadece number güncellendi ");
  }, [number]);

  return (
    <div>
      {number} {name}
      <br />
      <button onClick={() => setNumber(number + 1)}>increase</button>
      <button onClick={() => setName("ibrahim")}>add name</button>
    </div>
  );
}

export default App;
