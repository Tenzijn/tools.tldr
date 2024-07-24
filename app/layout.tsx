import React from 'react';
import Nav from '@/components/Nav';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'TLDR.run',
  description: 'A collection of useful tools for developers',
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
