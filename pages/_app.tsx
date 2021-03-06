// NextJS
import { AppProps } from 'next/app';

// React
import React, { ReactElement } from 'react';

// Style Imports
import '../styles/global.scss';
import '../styles/index.scss';
import '../styles/Countdown.scss';
import '../styles/Header.scss';

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
