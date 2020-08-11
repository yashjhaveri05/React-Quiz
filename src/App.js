import React, {useState, useEffect} from 'react';
import './assets/style.css';
import quizService from "./quizService";
import QuestionBox from './components/QuestionBox';
import Answers from './components/Answers';

const App = () => {
  const [bank, setBank] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);
  
  function refreshPage() {
    window.location.reload(false);
  }

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
      <div className="nav">
        <div className="title">QuizApp using ReactHooks</div>
        {responses !== 5 ? <button onClick={refreshPage} className="reload">Change All Answers</button>: ""}
        {responses === 5 ? 
        (score === 5 ? <h1 className="message">You are awesome!!!</h1> : <h1 className="danger-message">You can do better!!We believe in you!!</h1>)
        : ""}
        {responses === 5 ? <div><h1 className="score">Score : {score}/5</h1><button className="playBtn" onClick={playAgain}>Play again!</button><h1 className="answer-title">Answers:</h1></div>: ""}
      </div>
        
        {bank.length > 0 && responses < 5 && bank.map(({question,answers,correct,questionId}) => (
              <QuestionBox question={question} options={answers} key={questionId} selected={answer => computeAnswer(answer, correct)} />
              )
            )
        }
        {responses === 5 ? bank.map(({question,correct,questionId}) => (<Answers question={question} correct={correct} key={questionId} />)) : null}
      </div>
    </div>
  );
};

export default App;
