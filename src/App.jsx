import { Question } from "./components/Question";
import { questions } from "./data/questions";

function App() {
  return (
    <div className='App flex justify-center items-center flex-col'>
      <div className='sm:px-4 md:px-10 sm:w-full xl:max-w-5xl'>
        {questions.map((question, idx) => (
          <Question
            key={idx}
            question={question.question}
            code={question.code}
            choices={question.choices}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
