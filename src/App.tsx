import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import AssetsList from './components/assetsList/AssetsList';
import Header from './components/header/Header';
import AddAssetForm from './components/addAssetForm/AddAssetForm';
import Modal from './components/modal/Modal';

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'socket/connect' });
  }, [dispatch]);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <Header openModal={openModal} />
      <main style={{ marginTop: "100px" }}>
        <div className="container">
          <AssetsList />
        </div>
      </main>

      <Modal visible={isModalVisible} onClose={closeModal}>
        <AddAssetForm onClose={closeModal} />
      </Modal>
    </>
  );
};

export default App;