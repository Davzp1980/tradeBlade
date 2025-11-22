import clsx from 'clsx';
import css from './OftenQuestions.module.css';

function OftenQuestions() {
  return (
    <div className={css.container}>
      <h2 className={css.h2Faq}>часто задаваемые вопросы</h2>

      <div className={css.whatIsTradeBlateDiv}>
        <div className={css.whatIsTradeBlateBtn}>
          <p className={css.whatIsTradeBlateP}>Что такое TradeBlade</p>
          <svg className={css.chevronSvg}>
            <use href="/chevronDown.svg"></use>
          </svg>
        </div>
        <p className={clsx(css.textP, css.textPMargin)}>
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
        </p>
        <p className={css.textP}>
          Он представляет пользователям множество преимуществ, таких как более
          високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>

      <div className={css.questionsMainDiv}>
        <div className={css.questionDiv}>
          <p className={css.questionP}>Что TradeBlade предлагает инвесторам</p>
          <svg className={css.chevronDownSvg}>
            <use href="/chevronDownGray.svg"></use>
          </svg>
        </div>

        <div className={css.questionDiv}>
          <p className={css.questionP}>
            Должен ли я перевести свои средства на TradeBlade
          </p>
          <svg className={css.chevronDownSvg}>
            <use href="/chevronDownGray.svg"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default OftenQuestions;
