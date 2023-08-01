'use client';

import { createContext, useContext } from 'react';
import {
  useObservable,
  useComputed,
  enableLegendStateReact,
} from '@legendapp/state/react';
import { Observable, ObservableComputed } from '@legendapp/state';

enableLegendStateReact();

const UserState = createContext<{
  first: Observable<string>;
  last: Observable<string>;
  email: Observable<string>;
  all: ObservableComputed<string>;
} | null>(null);

const GameState = createContext<{
  userName: Observable<string>;
  faction: Observable<string>;
  classType: Observable<string>;
  expPoints: Observable<number>;
  inGameTime: Observable<number>;
  learningSpeed: ObservableComputed<number>;
} | null>(null);

export const useContact = () => useContext(UserState)!;
export const useGameState = () => useContext(GameState)!;

export const AppProvider = ({ children }: { children: any }) => {
  const first = useObservable('James');
  const last = useObservable('Walker');
  const email = useObservable('test@gmail.com');

  const userName = useObservable('Xan4du');
  const faction = useObservable('Engineering');
  const classType = useObservable('Civil Engineer');
  const expPoints = useObservable(1000);
  const inGameTime = useObservable(10);

  const all = useComputed(
    () => `${first.get()} ${last.get()} | ${email.get()}`
  );
  const learningSpeed = useComputed(() => expPoints.get() / inGameTime.get());

  return (
    <UserState.Provider value={{ first, last, email, all }}>
      <GameState.Provider
        value={{
          userName,
          faction,
          classType,
          expPoints,
          inGameTime,
          learningSpeed,
        }}
      >
        {children}
      </GameState.Provider>
    </UserState.Provider>
  );
};
