import { createElement, FC, ReactElement } from 'react';

import { container as di } from './container';
import { DIContext } from './context';

import type { DiContainer } from './types';

interface Props {
  container?: DiContainer;
  children: ReactElement;
}
export const DIProvider: FC<Props> = ({ children, container = di }) =>
  createElement(DIContext.Provider, { value: container }, children);
