import clsx from 'clsx';
import css from './Footer.module.css';

function Footer() {
  return (
    <div className={css.container}>
      <div className={css.mainFooterDiv}>
        <div className={css.FirstFooterDiv}>
          <p className={css.quickNav}>Быстрая навигация</p>
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
        </div>

        <div className={css.punktirDiv}></div>
        <div className={css.SecondFooterDiv}>
          <div className={clsx(css.logoDiv)}>
            <svg className={css.logoSvg}>
              <use href="/logo-footer.svg"></use>
            </svg>
            <svg className={css.logoTextSvg}>
              <use href="/logo-text-mob.svg"></use>
            </svg>
          </div>
          <p className={css.footerP}>© 2022 TradeBlade. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
