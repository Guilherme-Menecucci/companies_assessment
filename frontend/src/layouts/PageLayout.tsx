import React from 'react';

export interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = (props: PageLayoutProps) => {
  const { children } = props;

  return (
    <main className="text-brutal-on-background h-screen flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-2">
      {children}
    </main>
  );
};

export default PageLayout;
