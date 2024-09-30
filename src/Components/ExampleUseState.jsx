import React, { useState } from "react";

function ExampleUseState() {
  const [score, setScore] = useState(100);

  return (
    <div className="p-10">
      <h1 className="text-bold text-xl">{score}</h1>

      <button onClick={() => setScore(score + 1)}
        // onClick={() => setScore((prev) => prev + 1)}>
        className="py-2 px-2 bg-blue-500 text-bold hover:bg-blue-600 mt-2 text-white rounded"
      >
        Change
      </button>

      <button onClick={() => setScore(score + 1)}
        className="py-2 px-2 bg-blue-500 ml-3 text-bold hover:bg-blue-600 mt-2 text-white rounded"
      >
        Increment
      </button>

      <button onClick={() => setScore(score - 1)}
        className="py-2 px-2 bg-blue-500 text-bold ml-3 hover:bg-blue-600 mt-2 text-white rounded"
      >
        Decrement
      </button>
    </div>
  );
}

export default ExampleUseState;
