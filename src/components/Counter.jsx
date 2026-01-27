import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

 const handleClick = () => {
  setCount(prev => {
    console.log("Prev 1:", prev);
    return prev + 1;
  });

  setCount(prev => {
    console.log("Prev 2:", prev);
    return prev + 1;
  });

  setCount(prev => {
    console.log("Prev 3:", prev);
    return prev + 1;
  });
};


  return (
    <>
     <div className="bg-blue-900 ml p-10 text-center text-white">
        <h1 className="text-center text-xl">State Update Process</h1>
         <h2 className="text-xl mt-10" >Count: {count}</h2>
              <button className="bg-blue-500 rounded p-2 m-5  text-white font-bold" onClick={handleClick}>Increase by 3</button>
     </div>
    </>
 

  );
};

export default Counter;
