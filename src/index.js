import React from 'react';
import { createRoot } from 'react-dom/client';
import { RootStoreContext, rootStore } from './store/rootStore';
import App from './App';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <RootStoreContext.Provider value={rootStore}>
    <App />
  </RootStoreContext.Provider>,
);
