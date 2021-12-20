import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from './core/store';

test('renders h1 tag with text The Card Game', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const headingText = screen.getByText(/The Card Game/i);
  expect(headingText).toBeInTheDocument();
});
