import { AwilixContainer } from 'awilix';

import type { API } from 'services';
import type { AppStore } from 'store';

export interface DiDeps {
  answer: number;
  api: API;
  store: AppStore;
}
export type DiContainer = AwilixContainer<DiDeps>;
