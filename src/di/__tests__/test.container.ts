import { asClass, asFunction, asValue, createContainer, InjectionMode } from 'awilix';
import { identity } from 'ramda';

import { API } from 'services';
import { createStore } from 'store/store';

import type { DiContainer } from 'di';

export const createTestContainer: () => DiContainer = () => {
  const container = createContainer({
    injectionMode: InjectionMode.PROXY,
  });

  container.register({
    answer: asValue(42),
    api: asClass(API).singleton(),
    store: asFunction(createStore).inject(identity).singleton(),
  });

  return container;
};

it('test container factory and output container with deps should be defined', () => {
  const container = createTestContainer();

  expect(container).toBeDefined();

  const answer = container.resolve('answer');
  expect(answer).toBeDefined();

  const api = container.resolve('api');
  expect(api).toBeDefined();

  const store = container.resolve('store');
  expect(store).toBeDefined();
});
