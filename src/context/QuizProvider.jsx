import QuizContext from "./QuizContext";
import React, { Children, useState } from "react";

const QuizProvider = ({ children }) => {
    const questions = [
  {
    id: 1,
    question: "Over the past two weeks, how often have you felt little interest or pleasure in doing things?",
    answer: ""
  },
  {
    id: 2,
    question: "In the last fortnight, how often have you felt tense, restless, or “on edge”?",
    answer: ""
  },
  {
    id: 3,
    question: "In the last two weeks, how often have you felt confident in your ability to handle personal problems and stress?",
    answer: ""
  },
  {
    id: 4,
    question: "Over the past two weeks, how often have you struggled to fall asleep, stay asleep, or slept too much?",
    answer: ""
  },
  {
    id: 5,
    question: "How often have you found it hard to concentrate on tasks (e.g., reading, working, conversations)?",
    answer: ""
  },
  {
    id: 6,
    question: "In the last two weeks, how often have you felt easily annoyed or short‑tempered with others?",
    answer: ""
  },
  {
    id: 7,
    question: "How often have you experienced unexplained physical symptoms such as headaches, stomachaches, or muscle tension?",
    answer: ""
  },
  {
    id: 8,
    question: "Over the past fortnight, how often have you avoided social interactions or felt disconnected from people?",
    answer: ""
  },
  {
    id: 9,
    question: "How often have you woken up feeling unrefreshed, even after what should have been a full night’s rest?",
    answer: ""
  },
  {
    id: 10,
    question: "How often have you felt overwhelmed by your day-to-day responsibilities?",
    answer: ""
  }
];


const options = Array(10).fill([
  "Never",
  "Rarely",
  "Sometimes",
  "Often",
  "Always"
]);


    const [Answers,setAnswers] = useState({});

    const setAnswer = (id,answer) =>{
        setAnswers((prev)=>({
            ...prev,
            [id]:answer,
        }));
    }

return(
    <QuizContext.Provider
        value={{
            questions,
            setAnswer,
            options,
            Answers,
        }}>
            {children}
    </QuizContext.Provider>
);
};
export default QuizProvider;