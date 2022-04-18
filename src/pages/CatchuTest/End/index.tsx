import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  questionToType,
  answerToCatchu,
  CatchuDataType,
  TextType,
} from '../../../data/catchutest-map';
import {
  StCatchuText,
  StCharacteristicList,
  StCharacteristicListWrapper,
  StDot,
  StLongDescription,
  StLongDescriptionWrapper,
  StShortDescription,
  StShortDescriptionWrapper,
  StTextResultWrapper,
} from '../style';

type TestResultType = CatchuDataType & {
  reverseCatchu: {
    name: string;
    catchuText: string;
  };
};

function CatchuTestResult() {
  const [result, setResult] = useState<null | TestResultType>(null);
  const navigate = useNavigate();

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
      if (!answer) {
        return navigate('/test');
      }
      if (answer === 'A' || answer === 'B')
        점수[questionToType[i.toString()]][answer] += 1;
    }
    const targetCatchu =
      answerToCatchu[
        `${getType(점수.외향성)}${getType(점수.성실성)}${getType(
          점수.우호성
        )}${getType(점수.개방성)}`
      ];
    const reverseCatchu = answerToCatchu[targetCatchu.reverse];
    setResult({
      ...targetCatchu,
      reverseCatchu: {
        name: reverseCatchu.name,
        catchuText: reverseCatchu.catchuText,
      },
    });
  }, [navigate]);
  if (!result) return <div>로딩중</div>;

  return (
    <StTextResultWrapper>
      <StCatchuText src={result.catchuText} alt={result.name} />
      <StShortDescriptionWrapper>
        {result.shortDescription.map((text) => (
          <StShortDescription type={text.type} key={text.content}>
            {text.content}
          </StShortDescription>
        ))}
      </StShortDescriptionWrapper>
      <StLongDescriptionWrapper>
        {result.longDescription.map((text) => (
          <StLongDescription type={text.type} key={text.content}>
            {text.content}
          </StLongDescription>
        ))}
      </StLongDescriptionWrapper>
      <StShortDescriptionWrapper>
        <StShortDescription type={TextType.special}>특징</StShortDescription>
        <StShortDescription type={TextType.normal}>이 있어</StShortDescription>
      </StShortDescriptionWrapper>
      <StLongDescriptionWrapper>
        <StCharacteristicListWrapper>
          {result.characteristics.map((text) => (
            <React.Fragment key={text}>
              <StDot />
              <StCharacteristicList>{text}</StCharacteristicList>
            </React.Fragment>
          ))}
        </StCharacteristicListWrapper>
      </StLongDescriptionWrapper>
      <StShortDescriptionWrapper>
        <StShortDescription type={TextType.normal}>
          내 마음속에서 찾지 못한{' '}
        </StShortDescription>
        <StShortDescription type={TextType.special}>캐츄</StShortDescription>
      </StShortDescriptionWrapper>
      <StLongDescriptionWrapper center={true}>
        <StCatchuText
          src={result.reverseCatchu.catchuText}
          alt={result.name}
          reverse={true}
        />
      </StLongDescriptionWrapper>
      <StShortDescriptionWrapper>
        <StShortDescription type={TextType.special}>캐치미</StShortDescription>
        <StShortDescription type={TextType.normal}>
          에서 기록해봐
        </StShortDescription>
      </StShortDescriptionWrapper>
      <StLongDescriptionWrapper>
        <StLongDescription type={TextType.normal}>캐치미는 </StLongDescription>
        <StLongDescription type={TextType.ultra}>
          여러 가지 나의 모습들을 캐릭터로 관리
        </StLongDescription>
        <StLongDescription type={TextType.normal}>
          하는 서비스에요. 기록하고, 리포트로 확인하고, 다른 사람들의 모습을
          구경하며, 각자의 개성을 발견하고 몰입하길 기대하고 있어요.
        </StLongDescription>
      </StLongDescriptionWrapper>
    </StTextResultWrapper>
  );
}

export default CatchuTestResult;
