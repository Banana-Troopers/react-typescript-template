import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './app/store';

test('renders learn react link', () => {
  const view = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(view.getByText(/learn/i)).toBeInTheDocument();
});
