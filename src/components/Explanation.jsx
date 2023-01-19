import paragraphMaker from "../utils/paragraphMaker";

export function Explanation({ explanation }) {
  const paragraphs = paragraphMaker(explanation, "\n");

  return (
    <div className='mt-2'>
      {paragraphs.map((paragraph) => (
        //paragraph being used as unique key to avoid console error
        <p key={paragraph} className='mt-2'>
          {paragraph}
        </p>
      ))}
      <br />
    </div>
  );
}
