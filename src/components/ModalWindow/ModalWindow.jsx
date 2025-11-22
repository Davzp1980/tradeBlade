import css from './ModalWindow.module.css';

function ModalWindow({ setIsModalOpen }) {
  return (
    <div className={css.container}>
      <nav>
        <ul className={css.linksContainer}>
          <li>
            <a className={css.links} href="numbers">
              Цифры
            </a>
          </li>
          <li>
            <a className={css.links} href="PastTransactions">
              Сделки онлайн
            </a>
          </li>
          <li>
            <a className={css.links} href="about">
              о компании
            </a>
          </li>
          <li>
            <a className={css.links} href="#">
              как начать
            </a>
          </li>
          <li>
            <a className={css.links} href="tariffs">
              тарифы
            </a>
          </li>
          <li>
            <a className={css.links} href="#">
              отзывы
            </a>
          </li>
          <li>
            <a className={css.links} href="oftenQuestions">
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div className={css.btnDiv}>
        <button className={css.btnReg} type="button">
          регистрация
        </button>
        <button className={css.btnEnter} type="button">
          Войти
        </button>
      </div>

      <button
        className={css.closeBtn}
        type="button"
        onClick={() => setIsModalOpen(false)}
      >
        <svg className={css.closeSvg}>
          <use href="/close.svg"></use>
        </svg>
      </button>
    </div>
  );
}

export default ModalWindow;
