import { useState } from 'react';
import AssetsList from './components/assetsList/AssetsList';

import Header from './components/header/Header';
import useWebSocket from './hooks/useWebSocket';
import AddAssetForm from './components/addAssetForm/AddAssetForm';
import Modal from './components/modal/Modal';

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useWebSocket();

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <Header openModal={openModal} />
      <main>
        <div className="container">
          <AssetsList />
        </div>
      </main>

      <Modal visible={isModalVisible} onClose={closeModal}>
        <AddAssetForm onClose={closeModal}/>
      </Modal>
    </>
  );
};

export default App;

<input type='button' />