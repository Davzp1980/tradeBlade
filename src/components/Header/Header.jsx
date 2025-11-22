import { useMediaQuery } from 'react-responsive';
import css from './Header.module.css';

function Header({ setIsModalOpen }) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  function openModal() {
    setIsModalOpen(true);
  }
  return (
    <div className={css.container}>
      <div className={css.logoDiv}>
        <svg className={css.logoSvg}>
          <use href="/logo-mob.svg"></use>
        </svg>
        <svg className={css.logoTextSvg}>
          <use href="/logo-text-mob.svg"></use>
        </svg>
      </div>
      {isDesktop && (
        <div className={css.desktopDiv}>
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

          <div className={css.regBtnDiv}>
            <button className={css.enterBtn} type="button">
              вход
            </button>
            <button className={css.regBtn} type="button">
              регистрация
            </button>
          </div>
        </div>
      )}

      {!isDesktop && (
        <button className={css.burgerBtn} type="button" onClick={openModal}>
          <svg className={css.burgerSvg}>
            <use href="/burger.svg"></use>
          </svg>
        </button>
      )}
    </div>
  );
}

export default Header;
