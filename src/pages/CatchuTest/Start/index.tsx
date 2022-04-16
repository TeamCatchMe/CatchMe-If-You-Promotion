import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { IcBtnBack } from '../../../assets';
import ProgressBar from '../../../components/ProgressBar';
import { catchuTestItems } from '../../../data/catchutest';
import { COLORS } from '../../../styles/color';
import { StAnswer, StQuestion } from '../style';

function CatchuTestStart() {
  const { questionID } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState<CatchuTestItem | null>(null);

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
      return navigate('/test/result');
    } else {
      return navigate(`/test/${+questionID + 1}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ height: 48 }}>
        {questionID !== '1' && <IcBtnBack onClick={() => navigate(-1)} />}
      </div>
      <div style={{ height: 48 }}></div>
      <div
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ alignSelf: 'flex-end', marginBottom: 17 }}>
          <span style={{ color: COLORS.PINK_210 }}>{questionID}</span>/12
        </div>
        {questionID && <ProgressBar total={12} current={+questionID} />}
        <div style={{ height: 96 }}></div>
        {question && (
          <>
            <question.Catchu />
            <div style={{ height: 18 }} />
            <StQuestion>{question.question}</StQuestion>
            <StAnswer onClick={() => saveAnswer('A')}>
              <div>{question.answer.a}</div>
            </StAnswer>
            <StAnswer onClick={() => saveAnswer('B')}>
              <div>{question.answer.b}</div>
            </StAnswer>
          </>
        )}
      </div>
    </div>
  );
}

export default CatchuTestStart;
