import React, { useContext } from 'react';
import QuizContext from './context/QuizContext';

function Options({ questionId }) {
  const { options, setAnswer, Answers } = useContext(QuizContext);

  const opts = options[questionId - 1];

  return (
    <>
      {opts.map((opt, index) => (
        <li
          key={index}
          className={`cursor-pointer m-3 hover:underline ${
            Answers[questionId] === opt ? 'text-green-300' : ''
          }`}
          onClick={() => setAnswer(questionId, opt)}
        >
          {opt}
        </li>
        
      ))}
    </>
  );
}

export default Options;
