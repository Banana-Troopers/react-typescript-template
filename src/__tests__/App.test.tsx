import React from 'react';

import { render } from '@testing-library/react';

import { DIProvider } from 'di';
import { createTestContainer } from 'di/__tests__/test.container';
import { StoreProvider } from 'store';

import App from '../App';

test('renders learn react link', () => {
  const testContainer = createTestContainer();

  const view = render(
    <DIProvider container={testContainer}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </DIProvider>,
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(view.getByText(/learn/i)).toBeInTheDocument();
});
