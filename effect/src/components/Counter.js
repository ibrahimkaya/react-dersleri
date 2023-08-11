import { useState, useEffect } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    //ikinci parametre boş array, sadece component mount edilince tetiklenmesini sağlar
    console.log("component mount oldu");

    const interval = setInterval(() => {
      setNumber((previousNumber) => previousNumber + 1);
    }, 1000);

    return () => clearInterval(interval); //component unmount olduğu zaman alınacak aksiyon
  }, []);

  return (
    <div>
      {number}
      <br />
      <button onClick={() => setNumber(number + 1)}>increase</button>
    </div>
  );
}

export default Counter;
