import React from "react";

const Answers = ({question, correct}) => (
  <div className="answer-board">
    <h3 className="correct">Question : {question}</h3>
    <h3 className="correctAnswer">Correct Answer : {correct}</h3>
  </div>
);

export default Answers;