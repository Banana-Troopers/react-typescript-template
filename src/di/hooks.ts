import { useContext } from 'react';

import { DIContext } from './context';

import type { DiContainer, DiDeps } from './types';

export function useDI(): DiContainer;
// eslint-disable-next-line no-redeclare
export function useDI<K extends keyof DiDeps>(key: K): DiDeps[K];
// eslint-disable-next-line no-redeclare
export function useDI<K extends keyof DiDeps>(key?: K) {
  const di = useContext(DIContext);

  if (key) {
    return di.resolve(key);
  }

  return di;
}
