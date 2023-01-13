import { Question } from "./Question";
import { questions } from "../questions";

export function Quiz() {
  return (
    <>
      {questions.map((question, idx) => (
        <Question
          key={idx}
          question={question.question}
          code={question.code}
          choices={question.choices}
          answer={question.answer}
          explanation={question.explanation}
        />
      ))}
    </>
  );
}
