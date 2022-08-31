import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from 'features/counter/counterSlice';

import type { DiContainer } from 'di';

export const createStore = (di: DiContainer) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: di,
        },
      }),
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  DiContainer,
  Action<string>
>;
