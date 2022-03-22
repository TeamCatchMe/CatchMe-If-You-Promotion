import React, { useEffect, useState } from 'react';
import { questionToType, answerToCatchu } from '../../../data/catchutest-map';

function CatchuTestResult() {
  const [result, setResult] = useState('');

  const getType = ({ A, B }: { A: number; B: number }) => (A > B ? 'A' : 'B');
  useEffect(() => {
    const 점수 = {
      외향성: { A: 0, B: 0 },
      성실성: { A: 0, B: 0 },
      우호성: { A: 0, B: 0 },
      개방성: { A: 0, B: 0 },
    };
    for (let i = 1; i < 13; i += 1) {
      const answer = localStorage.getItem(i.toString());
      if (!answer) return;
      if (answer === 'A' || answer === 'B')
        점수[questionToType[i.toString()]][answer] += 1;
    }
    setResult(
      answerToCatchu[
        `${getType(점수.외향성)}${getType(점수.성실성)}${getType(
          점수.우호성
        )}${getType(점수.개방성)}`
      ].name
    );
  }, []);

  return <div>{result}</div>;
}

export default CatchuTestResult;
