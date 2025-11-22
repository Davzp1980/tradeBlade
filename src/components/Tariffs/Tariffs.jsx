import clsx from 'clsx';
import css from './Tariffs.module.css';
import { useMediaQuery } from 'react-responsive';

function Tariffs() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <div className={css.container}>
      <h2 className={css.H2Tariffs}>Тарифы</h2>
      <div className={css.btnDiv}>
        <button className={css.SpotBtn} type="button">
          СПОТ
        </button>
        <button className={css.futuresBtn} type="button">
          фьючерс
        </button>
      </div>

      <div className={css.wrapper}>
        <div className={css.standardDiv}>
          <h2 className={css.H2standard}>STANDART</h2>
          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>Ручной трейдинг</p>
          </div>

          <div className={css.punktirDiv}></div>

          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>
              Автоматическое или полуавтоматическое копирование сделок
            </p>
          </div>

          <div className={css.punktirDiv}></div>

          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>Личный кабинет со статистикой</p>
          </div>

          <div className={css.punktirDiv}></div>

          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>
              Среднесрочные сделки с уровнями набора портфеля
            </p>
          </div>

          <div className={clsx(css.punktirDiv, css.punktirDivEnd)}></div>

          <div className={css.tariffMonthDiv}>
            <div className={css.tariffPriceDiv}>
              <p className={css.priceP}>$234</p>
              <p className={css.discountP}>-35%</p>
            </div>
            <button className={css.numberMonthsBtn} type="button">
              <p className={css.numberMonthsP}>12</p>
              <p className={css.numberMonthsP}>месяцев</p>
              <svg className={css.chevronSvg}>
                <use href="/chevronDown.svg"></use>
              </svg>
            </button>
          </div>

          <button className={css.tryBtn} type="button">
            <p className={css.tryP}>Попробовать</p>
            <p className={css.freeTimeP}>5 дней бесплатно</p>
          </button>
        </div>

        <div className={css.vipDiv}>
          <h2 className={css.h2Vip}>VIP</h2>
          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>Ручной трейдинг</p>
          </div>

          <div className={css.punktirDiv}></div>

          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>
              Автоматическое или полуавтоматическое копирование сделок
            </p>
          </div>

          <div className={css.punktirDiv}></div>

          <div className={css.listDiv}>
            <svg className={css.okSvg}>
              <use href="/ok.svg"></use>
            </svg>
            <p className={css.listP}>Личный кабинет со статистикой</p>
          </div>

          {!isDesktop && <div className={css.punktirDiv}></div>}

          {!isDesktop && (
            <div className={css.listDiv}>
              <svg className={css.okSvg}>
                <use href="/ok.svg"></use>
              </svg>
              <p className={css.listP}>
                Среднесрочные сделки с уровнями набора портфеля
              </p>
            </div>
          )}

          {isDesktop && (
            <div>
              <div className={css.punktirDiv}></div>
              <div className={css.listDiv}>
                <svg className={css.okSvg}>
                  <use href="/ok.svg"></use>
                </svg>
                <p className={css.listP}>
                  Краткосрочные, среднесрочные и инвест сделки
                </p>
              </div>
              <div className={css.punktirDiv}></div>
              <div className={css.listDiv}>
                <svg className={css.okSvg}>
                  <use href="/ok.svg"></use>
                </svg>
                <p className={css.listP}>Доступ в Vip чат с командой</p>
              </div>
              <div className={css.punktirDiv}></div>
              <div className={css.listDiv}>
                <svg className={css.okSvg}>
                  <use href="/ok.svg"></use>
                </svg>
                <p className={css.listP}>Наш авторский курс по трейдингу</p>
              </div>
            </div>
          )}

          <div className={clsx(css.punktirDiv, css.punktirDivEndVip)}></div>

          <div className={css.tariffMonthDiv}>
            <div className={css.tariffPriceDiv}>
              <p className={css.priceP}>$585</p>
              <p className={css.discountP}>-35%</p>
            </div>
            <button className={css.numberMonthsBtn} type="button">
              <p className={css.numberMonthsP}>12</p>
              <p className={css.numberMonthsP}>месяцев</p>
              <svg className={css.chevronSvg}>
                <use href="/chevronDown.svg"></use>
              </svg>
            </button>
          </div>

          <button className={css.tryBtn} type="button">
            <p className={css.tryP}>Попробовать</p>
            <p className={css.freeTimeP}>5 дней бесплатно</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tariffs;
