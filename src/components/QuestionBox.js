import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question"><ul><li>{question}</li></ul></div>
      <ol>
        {answer.map((text, index) => (
          <li><button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAnswer([text]);
              selected(text);
            }}
          >
            {text}
          </button></li>
          ))}
      </ol>
      <h5>Selected Answer: <span className="value">{answer}</span></h5>
    </div>
  );
};

export default QuestionBox;
