import React, { useState, useContext, useEffect } from 'react';
import QuizBox from './QuizBox';
import QuizContext from './context/QuizContext';
import Results from './Results';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [Qnum, setQnum] = useState(0);
  const { questions } = useContext(QuizContext);

  const navigate = useNavigate();

  const next = () => {
    if (Qnum < questions.length - 1) setQnum(Qnum + 1);
  };

  const prev = () => {
    if (Qnum > 0) setQnum(Qnum - 1);
  };

  return (
    <div className="flex justify-between items-center">
      <button disabled={Qnum === 0} onClick={prev} className="h-20 m-10">
        Prev
      </button>

      <QuizBox
        num={questions[Qnum].id}
        statement={questions[Qnum].question}
      />
      
      {console.log(Qnum)}

      <button disabled={Qnum === questions.length - 1} onClick={next} className="h-20 m-10">
        Next
      </button>
      {Qnum === questions.length-1 && <button onClick={() => navigate('/results')} className='w-60 absolute bottom-36 left-162'>Submit</button>}
    </div>
  );
}

export default Quiz;
