import { useMediaQuery } from 'react-responsive';
import css from './AboutCompany.module.css';

function AboutCompany() {
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
      {!isDesktop && (
        <div>
          <div className={css.whiteDiv}>
            <h3 className={css.aboutCompany}>О компании</h3>
          </div>
          <p className={css.p}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
          </p>
          <p className={css.p}>
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
      )}

      {isDesktop && (
        <div className={css.aboutPcDiv}>
          <div>
            <h2 className={css.aboutCompany}>О компании</h2>
            <p className={css.p}>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance.
            </p>
            <p className={css.p}>
              Он представляет пользователям множество преимуществ, таких как
              более високая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>
          </div>

          <div className={css.try5FreeDaysDiv}>
            <p className={css.try5FreeDaysText}>
              Попробуйте сейчас и получите 5 дней бесплатного пользования
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
                  попробовать
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutCompany;
