import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { MainHeader } from '@components/main-header/main-header';
import { theme } from '../../theme';

export const metadata = {
  title: 'Libby42',
  description: 'Your personal library',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>Libby42</title>
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MainHeader />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
