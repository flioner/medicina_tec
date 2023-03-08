import Link from "next/link";
import React, { Children } from "react";
import s from "./quiz.module.css";
import questions from "./quiz.json";
import { useState } from "react";
import axios from "axios";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
    axios.post("https://formsubmit.co/lionerrochae@gmail.com", {
      message: newScore,
      name: "calificacionQuiz",
    });
  };

  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };

  return (
    <div className={s.quizCont}>
      {showScore ? (
        <div className={s.score}>
          <h1 className={s.questionTitle}>
            You scored {score} out of {questions.length}
          </h1>
        </div>
      ) : (
        <>
          <div className={s.quizContCont}>
            <div>
              <h4 className={s.counter}>
                Question {currentQuestion + 1} of {questions.length}
              </h4>
              <div className={s.questionTitle}>
                {questions[currentQuestion].question}
              </div>
            </div>
            <div>
              {questions[currentQuestion].answerOptions.map((answer, index) => (
                <div
                  key={index}
                  onClick={(e) => handleAnswerOption(answer.answer)}
                  className={s.question}
                >
                  <input
                    type="radio"
                    name={answer.answer}
                    value={answer.answer}
                    checked={
                      answer.answer ===
                      selectedOptions[currentQuestion]?.answerByUser
                    }
                    onChange={(e) => handleAnswerOption(answer.answer)}
                  />
                  <p className={s.questionText}>{answer.answer}</p>
                </div>
              ))}
            </div>
            <div>
              <button onClick={handlePrevious} className={s.button}>
                Previous
              </button>
              <button
                onClick={
                  currentQuestion + 1 === questions.length
                    ? handleSubmitButton
                    : handleNext
                }
                className={s.button}
              >
                {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export { Quiz };
