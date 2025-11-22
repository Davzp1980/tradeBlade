import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ModalWindow from './components/ModalWindow/ModalWindow';

import NumbersPage from './components/NumbersPage/NumbersPage';
import TradersPage from './components/TradersPage/TradersPage';
import PastTransactions from './components/PastTransactions/PastTransactions';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Tariffs from './components/Tariffs/Tariffs';
import OftenQuestions from './components/OftenQuestions/OftenQuestions';
import Footer from './components/Footer/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="main-container">
      <Header setIsModalOpen={setIsModalOpen} />
      <section id="traders">
        <TradersPage />
      </section>

      <section id="numbers">
        <NumbersPage />
      </section>

      <section id="PastTransactions">
        <PastTransactions />
      </section>

      <section id="about">
        <AboutCompany />
      </section>

      <section id="tariffs">
        <Tariffs />
      </section>

      <section id="oftenQuestions">
        <OftenQuestions />
      </section>

      <section id="footer">
        <Footer />
      </section>
      {isModalOpen && <ModalWindow setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
