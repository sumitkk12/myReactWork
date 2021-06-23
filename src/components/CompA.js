import { useState } from "react";
import CompB from "./CompB";

import CompD from "./CompD";


const CompA = () => {
  const [A, setA] = useState({
    key1: "10",
    key2: "20",
    key3: "30"
  });

  const handleUpdate = () => {
    setA({
      key1: "100",
      key2: "20",
      key3: "30"
    });
  };

  return (
    <>
      <div>
        <h2>Hello Welcome To Props</h2>
        <CompB updateFunction={handleUpdate} propoA={A.key1} />
        <br />
        <CompD propoD={A.key2} />
      </div>
    </>
  );
};

export default CompA;


