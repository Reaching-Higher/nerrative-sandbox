'use client';

import { createContext, useContext } from 'react';
import {
  useObservable,
  useComputed,
  enableLegendStateReact,
} from '@legendapp/state/react';
import { Observable, ObservableComputed } from '@legendapp/state';

enableLegendStateReact();

const AppState = createContext<{
  first: Observable<string>;
  last: Observable<string>;
  email: Observable<string>;
  all: ObservableComputed<string>;
} | null>(null);

export const useContact = () => useContext(AppState)!;

export const AppProvider = ({ children }: { children: any }) => {
  const first = useObservable('James');
  const last = useObservable('Walker');
  const email = useObservable('test@gmail.com');
  const all = useComputed(
    () => `${first.get()} ${last.get()} | ${email.get()}`
  );
  return (
    <AppState.Provider value={{ first, last, email, all }}>
      {children}
    </AppState.Provider>
  );
};
