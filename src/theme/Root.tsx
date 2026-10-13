import React from 'react';
import BrowserTranslateBanner from './BrowserTranslateBanner';

export default function Root({children}: {children: React.ReactNode}): React.ReactElement {
  return (
    <>
      <BrowserTranslateBanner />
      {children}
    </>
  );
}
