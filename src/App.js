import React, {useState, useEffect} from 'react';
import './assets/style.css';
import quizService from "./quizService";
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';
import Answers from './components/Answers';

const App = () => {
  const [bank, setBank] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);
  
  const getQuestions = () => {
    quizService().then(question => {
      setBank(question)
    });
  };

  const computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer){
      setScore(score + 1);
    }
      setResponses(responses < 5 ? responses +1 : 5);
  }
  const playAgain = () => {
    getQuestions();
    setScore(0);
    setResponses(0);
 }
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="title">QuizApp using ReactHooks</div>
        {bank.length > 0 && responses < 5 && bank.map(({question,answers,correct,questionId}) => (
              <QuestionBox question={question} options={answers} key={questionId} selected={answer => computeAnswer(answer, correct)} />
              )
            )
        }
        {responses === 5 ? bank.map(({question,correct,questionId,answer}) => (<Answers question={question} correct={correct} key={questionId} selected={answer} />)) : null}
        {responses === 5 ? (<Result score={score} playAgain={playAgain} />) : null}
      </div>
    </div>
  );
};

export default App;
