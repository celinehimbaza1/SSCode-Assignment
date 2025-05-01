import React, { useState, useEffect } from "react";

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (result !== null) {
      console.log("Result:", result);
    }
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstNumber === "" || secondNumber === "") {
      setError("Both fields are required.");
      setResult(null);
      return;
    }

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      setError("Please enter valid numbers.");
      setResult(null);
      return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    let calcResult;

    switch (operation) {
      case "add":
         calcResult = num1 + num2;
        break;
      case "subtract":
        calcResult = num1 - num2;
        break;
      case "multiply":
        calcResult = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          setError("Cannot divide by zero.");
          setResult(null);
          return;
        }
        calcResult = num1 / num2;
        break;
      default:
        calcResult = 0;
    }

    setResult(calcResult);
    setError("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
      <form
        className="bg-white shadow-2xl p-10 rounded-2xl w-full max-w-md flex flex-col gap-5 animate-fade-in"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-extrabold mb-4 text-center text-blue-600">
          Calculator
        </h1>

        <input
          type="number"
          name="firstNumber"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          placeholder="Enter First Number"
          className="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />

        <input
          type="number"
          name="secondNumber"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Enter Second Number"
          className="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          className="border-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        > 
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </select>

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-lg"
        >
          Calculate
        </button>

        {error && (
          <p className="text-red-500 font-semibold text-center animate-bounce">
            {error}
          </p>
        )}

        {result !== null && !error && (
          <p className="text-green-600 font-bold text-center text-2xl animate-pulse">
            Result: {result}
          </p>
        )}
      </form>
    </div>
  );
}
