import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';



function Counter() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`Count: ${count}`);

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
