import { createElement, FC, ReactElement } from 'react';

import { Provider } from 'react-redux';

import { useDI } from 'di';

interface Props {
  children: ReactElement;
}
export const StoreProvider: FC<Props> = ({ children }) => {
  const store = useDI('store');

  // eslint-disable-next-line react/no-children-prop
  return createElement(Provider, { store, children });
};
