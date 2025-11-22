import { useMediaQuery } from 'react-responsive';
import css from './TradersPage.module.css';

function TradersPage() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  function sendEmail(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');

    console.log('Email:', email);
  }
  return (
    <div className={css.container}>
      <div className={css.tradersMainDiv}>
        <picture>
          <source srcSet="/img/numbersImg-PC.png" media="(min-width: 1440px)" />
          <img src="/img/numbersImg-mob.png" alt="mainPhoto" />
        </picture>
        <div className={css.formDiv}>
          <h1 className={css.h1}>моментально Копируй сделки профи трейдеров</h1>
          <p className={css.p1}>
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>

          <form className={css.form} onSubmit={sendEmail}>
            <div className={css.inputDiv}>
              <input
                className={css.emailInput}
                type="email"
                name="email"
                placeholder="Ваш e–mail"
              />
              <button className={css.startBtn} type="submit">
                начать
              </button>
            </div>
          </form>
          <p className={css.p2}>5 дней бесплатного пользования</p>
        </div>

        {isDesktop && <div className={css.whiteDiv}></div>}

        {!isDesktop && (
          <div className={css.whiteDiv}>
            <h2 className={css.h2}>Цифры</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default TradersPage;
