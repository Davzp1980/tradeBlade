import css from './PastTransactions.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

function PastTransactions() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <div className={css.container}>
      <h2 className={css.h2}>Прошедшие сделки</h2>
      <div className={css.onlineDiv}>
        <div className={css.greenCircle}></div>
        <p className={css.greenText}>Онлайн</p>
      </div>
      <Swiper
        className={css.mySwiper}
        spaceBetween={isDesktop ? 20 : 8}
        slidesPerView={isDesktop ? 4.2 : 1.2}
        modules={[Navigation, Pagination, Scrollbar]}
        scrollbar={{ draggable: true, hide: false }}
      >
        <SwiperSlide>
          <img className={css.slide} src="/img/slide.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide.png" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/slide.png" alt="slide" />
        </SwiperSlide>
        ...
      </Swiper>
      {isDesktop && <div className={css.whiteDiv}></div>}
    </div>
  );
}

export default PastTransactions;
