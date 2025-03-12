import React from 'react';
import AssetsList from './components/assetsList/AssetsList';

import Header from './components/header/Header';

const App: React.FC = () => {
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