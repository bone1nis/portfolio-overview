import React from 'react';
import AssetsList from './components/assetsList/AssetsList';

import Header from './components/header/Header';
import useWebSocket from './hooks/useWebSocket';

const App: React.FC = () => {
  useWebSocket();
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <AssetsList />
        </div>
      </main>
    </>
  );
};

export default App;

<input type='button' />