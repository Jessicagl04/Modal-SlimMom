import React from 'react';
import MainPage from './components/MainPage/MainPage';
import Modal from './components/Modal/Modal';
import MobileModal from './components/MobileModal/MobileModal';
import Spinner from './components/Spinner/Spinner';

const App = () => {
  return (
    <div className="App">
      <MainPage />
      <Modal>
        <div>Contenido del Modal</div>
      </Modal>
      <MobileModal>
        <div>Contenido del MobileModal</div>
      </MobileModal>
      <Spinner />
    </div>
  );
};

export default App;
