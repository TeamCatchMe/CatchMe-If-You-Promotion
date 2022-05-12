import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  ImgCatchuTestTitle,
  ButtonLink,
  ButtonDownload,
  ButtonRetry,
} from '../../../assets';
import AppDownloadButton from '../../../components/AppDownloadButton';
import {
  questionToType,
  answerToCatchu,
  CatchuDataType,
  TextType,
} from '../../../data/catchutest-map';
import { RESULT_IMAGE_SOURCE } from '../../../data/misc';
import {
  StCatchuImage,
  StCatchuText,
  StCharacteristicList,
  StCharacteristicListWrapper,
  StDot,
  StLongDescription,
  StLongDescriptionWrapper,
  StRetryButtonWrapper,
  StShareButtonWrapper,
  StShareWrapper,
  StShortDescription,
  StShortDescriptionWrapper,
  StTextResultWrapper,
} from '../style';
import { saveAs } from 'file-saver';

type TestResultType = CatchuDataType & {
  reverseCatchu: {
    name: string;
    catchuText: string;
    catchuImage: string;
  };
};

function CatchuTestResult() {
  const [result, setResult] = useState<null | TestResultType>(null);
  const [resultURL, setResultURL] = useState<null | string>(null);
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
        catchuImage: reverseCatchu.catchuImage,
      },
    });
    setResultURL(
      `${getType(점수.외향성)}${getType(점수.성실성)}${getType(
        점수.우호성
      )}${getType(점수.개방성)}.png`.toLowerCase()
    );
  }, [navigate]);
  if (!result) return <div>로딩중</div>;

  const resetText = () => {
    localStorage.clear();
    navigate('/test');
  };

  const getCatchuCardBlob = async () => {
    if (resultURL === null) return undefined;
    const imageResponse = await fetch(RESULT_IMAGE_SOURCE + resultURL);
    const imageBlob = await imageResponse.blob();
    return imageBlob;
  };

  const saveCatchuCard = async () => {
    const catchuCardBlob = await getCatchuCardBlob();
    if (!catchuCardBlob) return;
    saveAs(catchuCardBlob, 'my-lovely-catchu.png');
  };

  const shareCatchuCard = () => {
    if (resultURL === null) return;
    navigator.clipboard.writeText(`${window.location.origin}/test`);
  };

  return (
    <StTextResultWrapper>
      <ImgCatchuTestTitle style={{ alignSelf: 'center', marginBottom: 32 }} />
      <StCatchuText src={result.catchuText} alt={result.name} />
      <div style={{ height: 33 }} />
      <StCatchuImage src={result.catchuImage} alt={result.name} />
      <div style={{ height: 28 }} />
      <div style={{ height: 1, width: '100%', backgroundColor: '#2C2C2C' }} />
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
        <StCatchuImage
          src={result.reverseCatchu.catchuImage}
          alt={result.name}
          reverse
        />
        <div style={{ height: 8 }} />
        <StCatchuText
          src={result.reverseCatchu.catchuText}
          alt={result.name}
          reverse
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
      <div style={{ height: 35 }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AppDownloadButton />
      </div>
      <div style={{ height: 40 }} />
      <div style={{ height: 1, width: '100%', backgroundColor: '#2C2C2C' }} />
      <div style={{ height: 48 }} />
      <StShareWrapper>
        <div>내 결과 공유하기</div>
        <StShareButtonWrapper>
          <div onClick={shareCatchuCard}>
            <ButtonLink />
          </div>
          <div onClick={saveCatchuCard}>
            <ButtonDownload />
          </div>
        </StShareButtonWrapper>
        <StRetryButtonWrapper onClick={resetText}>
          <ButtonRetry />
          <div>테스트 다시하기</div>
        </StRetryButtonWrapper>
      </StShareWrapper>
    </StTextResultWrapper>
  );
}

export default CatchuTestResult;
