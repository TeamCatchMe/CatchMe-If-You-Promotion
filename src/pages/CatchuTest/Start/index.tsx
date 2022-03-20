import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { catchuTestItems } from '../../../data/catchutest';

function CatchuTestStart() {
  const { questionID } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState<CatchuTestItem | null>(null);
  console.log(questionID);
  useEffect(() => {
    if (questionID === undefined || isNaN(+questionID))
      return navigate('/test');
    if (
      +questionID !== 1 &&
      localStorage.getItem((+questionID - 1).toString()) === null
    )
      return navigate('/test');
    const question = catchuTestItems.find((data) => data.index === questionID);
    if (!question) return navigate('/test');
    setQuestion(question);
  }, [questionID, navigate]);

  const saveAnswer = (answer: 'A' | 'B') => {
    if (!question || !questionID) return;
    localStorage.setItem(question.index, answer);
    if (+questionID === 12) {
      console.log('hi');
      return navigate('/test/result');
    } else {
      console.log('hello');
      return navigate(`/test/${+questionID + 1}`);
    }
  };

  return (
    <div>
      {question && (
        <>
          <div>{question.question}</div>
          <div onClick={() => saveAnswer('A')}>{question.answer.a}</div>
          <div onClick={() => saveAnswer('B')}>{question.answer.b}</div>
        </>
      )}
    </div>
  );
}

export default CatchuTestStart;
