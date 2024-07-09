import React from 'react';
import MainPage from './MainPage/MainPage'
import Modal from './Modal/Modal';
import MobileModal from './MobileModal/MobileModal';
import Spinner from './Spinner/Spinner';

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
