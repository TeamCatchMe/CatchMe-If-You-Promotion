import React from 'react';
import { StProgressBar } from './style';

type ProgressBarProps = {
  total: number;
  current: number;
};

function ProgressBar(props: ProgressBarProps) {
  const { total, current } = props;
  return (
    <StProgressBar total={total} current={current}>
      <div></div>
    </StProgressBar>
  );
}

export default ProgressBar;
