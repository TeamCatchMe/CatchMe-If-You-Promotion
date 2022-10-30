import _ from 'lodash';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { IcBtnDown } from '../../../assets';
import { StAboutWrapper, StBtnDownWrapper } from '../style';
import AboutCalendarSection from './Calendar';
import AboutCommunitySection from './Community';
import AboutSectionEnd from './End';
import AboutRecordSection from './Record';

const PAGE_LENGTH = 4;

function AboutFeaturePage() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (page === -1) {
      navigate(-1);
    }
    if (!wrapperRef.current) return;
    const wrapperHeight = wrapperRef.current.getBoundingClientRect().height;
    const positionY = wrapperHeight * page;
    wrapperRef.current?.scrollTo(0, positionY);
  }, [page, navigate]);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    console.log(e.deltaY);
    if (e.deltaY > 1) {
      setPage((prev) => Math.min(prev + 1, PAGE_LENGTH - 1));
    } else if (e.deltaY < -1) {
      setPage((prev) => Math.max(prev - 1, -1));
    }
  };

  const throttleWheel = useMemo(
    () => _.throttle(onWheel, 1500, { leading: true, trailing: false }),
    []
  );

  return (
    <StAboutWrapper onWheel={throttleWheel} ref={wrapperRef}>
      <AboutRecordSection />
      <AboutCalendarSection />
      <AboutCommunitySection />
      <AboutSectionEnd />
      {page < PAGE_LENGTH - 1 && (
        <StBtnDownWrapper>
          <IcBtnDown onClick={() => setPage((prev) => prev + 1)} />
        </StBtnDownWrapper>
      )}
    </StAboutWrapper>
  );
}

export default AboutFeaturePage;
