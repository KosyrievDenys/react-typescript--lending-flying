import React, { useState } from 'react';

//libs
import cn from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

//assets
import styles from './App.module.scss';
import burger from './assets/images/icons/burger.svg';
import company from './assets/images/icons/company.svg';
import fly from './assets/images/icons/fly.svg';
import roundTrip from './assets/images/icons/round-trip.svg';
import down from './assets/images/icons/down.svg';
import logo from './assets/images/logo.png';
import banner375 from './assets/images/banner375.png';
import banner from './assets/images/banner.png';
import profit from './assets/images/profit.jpg';
import berlin from './assets/images/Berlin.jpg';
import paris from './assets/images/Paris.jpg';
import prague from './assets/images/Prague.jpg';
import rome from './assets/images/Rome.jpg';

const vouchers = [
  { photo: berlin, withDiscount: '10 000', price: '20 000', from: 'Berlin', to: 'Kyiv', roundtrip: true },
  { photo: paris, withDiscount: '20 000', price: '30 000', from: 'Paris', to: 'Lviv', roundtrip: false },
  { photo: prague, withDiscount: '30 000', price: '15 000', from: 'Prague', to: 'Rome', roundtrip: true },
  {
    photo: rome,
    withDiscount: '540 000',
    price: '540 000',
    from: 'Rome RomeRomeRomeyy Rome Rome Rome Rome',
    to: 'New York Rome yyRomeRomeRome Rome Rome Rome Rome Rome',
    roundtrip: false
  },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York', roundtrip: false },
];


export const App = () => {

  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={cn('container', styles.container)}>
          <div className={styles.content}>
            <a href='#'>
              <img src={logo} alt='' className={cn(styles.logo, 'cover')} />
            </a>
            <div className={styles.right}>
              <p className={styles.language}>EN</p>
              <img src={burger} alt='' />
            </div>
            <h1>Utair</h1>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.mainPage}>
          <img className={cn(styles.banner375, 'cover')} src={banner375} alt='' />
          <div className='container'>
            <img className={cn(styles.banner, 'cover')} src={banner} alt='' />
            <div className={styles.content}>
              < h1> Fly to the Urals in November and get up to 5,000 miles</h1>
              <p>
                after the first flight with Utair in addition to the miles due for the flight according to the rules of
                Status Use miles
                until December 31 1 mile = 1 ₽
              </p>
              <a href='#' className={cn('btn', styles.btn)}>Flew!</a>
            </div>
          </div>
        </section>
        <section className={styles.profit}>
          <div className='container'>
            <div className={styles.content}>
              <img src={profit} alt='' className={cn(styles.left, 'cover')} />
              <div className={styles.right}>
                <h2>Who benefits?</h2>
                <ul>
                  <li>
                    <h3>Fly for the first time</h3>
                    <p>
                      Up to 5,000 miles are awarded to passengers who have not previously flown with a Status card
                    </p>
                  </li>
                  <li>
                    <h3>No registered flights</h3>
                    <p>
                      A passenger can be registered in the program before the start of the promotion, but the flights
                      are counted on the map
                      status no
                    </p>
                  </li>
                  <li>
                    <h3>Card holder</h3>
                    <p>
                      The passenger - the owner of the Status card who made the flight - is refunded up to 20% in miles
                      of the amount
                      booking spent on the ticket and additional services within the first booking,
                      issued during the promotion period, but not more than $5,000
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.extraMiles}>
          <div className='container'>
            <h2>Extra miles after ticket purchase</h2>
            <ul>
              <li>
                <p className={styles.num}>1</p>
                <div>
                  <h3><a href='#'>Activate promo code</a></h3>
                  <p>
                    After purchasing a ticket, activate the promotional code in your account on page
                    <a href='#' className={styles.myMiles}>«My miles»</a>
                  </p>
                  <a href='#' className={styles.company}>
                    <img src={company} alt='' />
                    UTAIRURAL2021
                  </a>
                </div>
              </li>
              <li>
                <p className={styles.num}>2</p>
                <div>
                  <h3><a href='#'>Check that the flight is linked to the Status card</a></h3>
                  <p>
                    On page <a href='#'>«My flights»</a> you will see the purchased ticket
                  </p>
                </div>
              </li>
              <li>
                <p className={styles.num}>3</p>
                <div>
                  <h3><a href='#'>If not, bind</a></h3>
                  <p>
                    Add flight (booking number) on page
                    <a href='#' className={styles.myMiles}>«My flights»</a>
                  </p>
                </div>
              </li>
              <li>
                <p className={styles.num}>4</p>
                <div>
                  <h3><a href='#'>Earn Miles</a></h3>
                  <p>
                    Up to 5,000 miles will be credited by December 10, 2021
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.directions}>
          <div className={cn('container', styles.container)}>
            <h2>Where can you fly?</h2>
            <div className={styles.wrapper}>
              <Swiper
                slidesPerView={'auto'}
                grabCursor={true}
                spaceBetween={15}
                breakpoints={{
                  567: {
                    spaceBetween: 26,
                  },
                }}
              >
                {vouchers.map((voucher, index) => (
                  <SwiperSlide key={index} className={styles.voucher}>
                    {/*<div className={styles.voucher} key={index}>*/}
                    <img src={voucher.photo} alt='' className='cover' />
                    <div className={styles.content}>
                      <div className={styles.price}>
                        <p>from {voucher.withDiscount} $ <span>{voucher.price} $</span></p>
                      </div>
                      See beautiful {voucher.to} from {voucher.from}
                      <span className={styles.roundtrip}>
            {voucher.roundtrip ? 'roundtrip' : `from ${voucher.from}`}
              </span>
                      <a href='#' className='btn'>Fly</a>
                    </div>
                    {/*</div>*/}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className={styles.directions2}>
          <div className='container'>
            <div className={styles.content}>
              <ul>
                {vouchers.map((voucher, index) => (
                  <li key={index}>
                    <a href='#'>
                      <div className={styles.town}>
                        <img src={roundTrip} alt='' />
                        <div>
                          <h3>{voucher.to}</h3>
                          <img src={fly} alt='' />
                          <p>from {voucher.from}</p>
                        </div>
                      </div>
                      <div className={styles.price}>
                        from {voucher.withDiscount} $
                        <h3>{voucher.price} $</h3>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className={styles.questions}>
          <div className='container'>
            <h2>Frequently asked questions</h2>
            <div className={styles.select} onClick={() => setSelect1(!select1)}>
              <div className={styles.question}>
                I did not provide a loyalty card number when purchasing. How to account for a flight as part of a
                promotion?
                <img src={down} alt='' className={cn(select1 && styles.open)} />
              </div>
              {select1 && <div className={styles.answer}>
                Restore the flight made under the conditions of the promotion before May 31, 2021. To do this, write to
                Feedback
              </div>}
            </div>
            <div className={styles.select} onClick={() => setSelect2(!select2)}>
              <div className={styles.question}>
                I have a promo code from a partner, how do I use it?
                <img src={down} alt='' className={cn(select2 && styles.open)} />
              </div>
              {select2 && <div className={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ducimus, sint?
              </div>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

