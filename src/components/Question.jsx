import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Question({ question, code, choices, answer }) {
  const [result, setResult] = useState("");

  let selectedAnswer = "";

  const test = (e) => {
    const radioBtn = e.target.children[0];
    radioBtn.checked = true;
    selectedAnswer = radioBtn.value;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === answer) {
      setResult("Correct!");
    } else {
      setResult("Wrong");
    }
  };

  return (
    <form className='my-8 border-2 border-neutral-800 bg-neutral-900 p-10 text-white rounded-2xl shadow-black shadow-lg'>
      <p className='text-4xl font-bold pb-4'>{question}</p>
      <SyntaxHighlighter language='javascript' style={materialOceanic}>
        {code}
      </SyntaxHighlighter>

      {choices.map((choice, index) => (
        <div
          key={index}
          className='text-lg font-bold p-5 my-2 border-2 border-neutral-800 rounded-lg hover:pl-8 hover:border-neutral-700 hover:cursor-pointer transition-all shadow-black shadow-sm"'
          onClick={(e) => test(e)}>
          <input
            type='radio'
            name={code}
            value={choice}
            style={{ display: "none" }}
          />
          <label htmlFor={code} style={{ display: "none" }}>
            {choice}
          </label>

          {choice}
          <br></br>
        </div>
      ))}

      <button
        type='submit'
        onClick={onSubmit}
        className='mt-8 bg-[#263238] px-10 py-2 text-lg font-bold rounded-md hover:bg-teal-900  transition-all'>
        Submit
      </button>

      <p
        style={result === "Correct!" ? { color: "green" } : { color: "red" }}
        className='mt-4'>
        {result}
      </p>
    </form>
  );
}
