'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ResumeFormContextProvider from './resumeFormProvider/resumeFormProvider';

const Providers = ({ children }: React.PropsWithChildren) => {
  const [client] = React.useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ResumeFormContextProvider>{children}</ResumeFormContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default Providers;
