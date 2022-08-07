import React from 'react';
import AboutCalendarSection from './Calendar';
import AboutCommunitySection from './Community';
import AboutSectionEnd from './End';
import AboutRecordSection from './Record';

function AboutFeaturePage() {
  return (
    <div>
      <AboutRecordSection />
      <AboutCalendarSection />
      <AboutCommunitySection />
      <AboutSectionEnd />
    </div>
  );
}

export default AboutFeaturePage;
