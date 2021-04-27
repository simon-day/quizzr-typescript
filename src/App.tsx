import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import "./spinner.css";
import { fetchQuizQuestions } from "./API";
// TYPES
import { Difficulty, QuestionState } from "./API";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";
import DifficultySelect from "./components/DifficultySelect";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.EASY);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, difficulty);

    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObj = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObj]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const difficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.currentTarget.value;
    console.log("selected ", selected);

    switch (selected) {
      case "easy":
        setDifficulty(Difficulty.EASY);
        break;
      case "medium":
        setDifficulty(Difficulty.MEDIUM);
        break;
      case "hard":
        setDifficulty(Difficulty.HARD);
        break;
      default:
        setDifficulty(Difficulty.EASY);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quizzr</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <>
            <DifficultySelect callback={difficultyChange} />
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          </>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <div className="loader">Loading...</div>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
