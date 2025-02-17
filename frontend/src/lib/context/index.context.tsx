import React, { ReactNode } from 'react';

import { ToastProvider } from './toast.context';

export default function ContextProvider({ children }: { children: ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
