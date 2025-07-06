import React from 'react';
import Options from './Options';

function QuizBox(props) {
  return (
    <>
      <div className="p-5 h-150 w-130 bg-purple-500 shadow-fuchsia-300 rounded-3xl">
        <label className="text-3xl">
          Q{props.num}: {props.statement}
        </label>
        <ul className="mt-20 text-3xl">
          <Options questionId={props.num} />
        </ul>
      </div>
    </>
  );
}

export default QuizBox;
