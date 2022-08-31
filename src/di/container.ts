import { asClass, asFunction, asValue, createContainer, InjectionMode } from 'awilix';
import { identity } from 'ramda';

import { API } from 'services';
import { createStore } from 'store';

import { DiContainer } from './types';

export const container: DiContainer = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  answer: asValue(42),
  api: asClass(API).singleton(),
  store: asFunction(createStore).inject(identity).singleton(),
});
