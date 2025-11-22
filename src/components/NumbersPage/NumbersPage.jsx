import clsx from 'clsx';
import css from './NumbersPage.module.css';
import { useMediaQuery } from 'react-responsive';

function NumbersPage() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <div className={css.container}>
      {isDesktop && (
        <div className={css.numberTextDiv}>
          <h2 className={css.h2Numbers}>Цифры</h2>
          <p className={css.pMonth}>Cентябрь 2022</p>
        </div>
      )}

      {!isDesktop && <p className={css.pMonth}>Cентябрь 2022</p>}

      <div className={css.tradeSpotDiv}>
        <div className={css.tradeDiv}>
          <p className={clsx(css.pText, css.pText1)}>Торговой прибыли</p>
          <p className={css.pNumber}>2756%</p>
        </div>

        <div className={css.spotDiv}>
          <p className={css.pText}>фьючерсных и спотовых сделок</p>
          <p className={css.pNumber}>67</p>
        </div>
      </div>

      <div className={css.profitDiv}>
        <p className={clsx(css.pText, css.pText1)}>прибыль подписчиков</p>
        <p className={css.pNumber}>375000</p>
      </div>
    </div>
  );
}

export default NumbersPage;
