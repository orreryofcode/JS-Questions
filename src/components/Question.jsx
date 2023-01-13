import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Explanation } from "./Explanation";
import { useState } from "react";

export function Question({ question, code, choices, answer, explanation }) {
  const [result, setResult] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);

  let selectedAnswer = "";

  const userAnswer = (e) => {
    const radioBtn = e.target.children[0];
    radioBtn.checked = true;
    selectedAnswer = radioBtn.value;

    const options = document.querySelectorAll("input");
    options.forEach((option) => {
      option.checked
        ? (option.parentElement.style.border = "2px solid #134e4a")
        : (option.parentElement.style.border = "2px solid #262626");
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswer === "" || selectedAnswer === null) {
      setResult("Please make a selection!");
    } else if (selectedAnswer === answer) {
      setResult("✔ Correct!");
    } else {
      setResult("❌ Try Again!");
    }
  };

  return (
    <div className='my-8 border-2 border-neutral-800 bg-neutral-900 p-10 text-white rounded-2xl shadow-black shadow-lg'>
      <form>
        <p className='text-4xl font-bold pb-4'>{question}</p>
        <SyntaxHighlighter language='javascript' style={materialOceanic}>
          {code}
        </SyntaxHighlighter>

        {choices.map((choice, index) => (
          <div
            key={index}
            className='text-lg font-bold p-5 my-2 border-2 border-neutral-800 rounded-lg hover:pl-8 hover:border-neutral-600 hover:cursor-pointer transition-all shadow-black shadow-sm"'
            onClick={(e) => userAnswer(e)}>
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

        <div className='flex items-center mt-6'>
          <button
            type='submit'
            onClick={onSubmit}
            className='bg-[#263238] px-10 py-2 text-lg font-bold rounded-md hover:bg-teal-900  transition-all'>
            Submit
          </button>

          <p className='ml-4 text-lg font-bold'>{result}</p>
        </div>
      </form>
      <button
        onClick={() => setShowExplanation(!showExplanation)}
        className='mt-2 py-2 text-lg font-bold rounded-md'>
        {showExplanation ? "Close" : "Show"} Explanation
      </button>
      {showExplanation ? <Explanation explanation={explanation} /> : null}
    </div>
  );
}
