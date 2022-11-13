import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../lib/theme';
import createEmotionCache from '../lib/emotionCache';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { EmotionCache } from '@emotion/react';

import '../styles/globals.css';

type AppPropsWithCache = AppProps & {
  Component: NextPage;
  emotionCache?: EmotionCache;
};

const MyApp = ({ Component, pageProps }: AppPropsWithCache): JSX.Element => {
  const clientSideEmotionCache = createEmotionCache();

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
