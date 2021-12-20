import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Players from './features/players/Players.view';
import './App.scss';

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <h1>The Card Game</h1>
    <Players />
  </div>
);

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default AppWrapper;
