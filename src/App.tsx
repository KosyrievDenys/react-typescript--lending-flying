import React from 'react';

//libs
import cn from 'classnames';

//assets
import styles from './App.module.scss';
import burger from './assets/images/icons/burger.svg';
import company from './assets/images/icons/company.svg';
import down from './assets/images/icons/down.svg';
import fly from './assets/images/icons/fly.svg';
import roundTrip from './assets/images/icons/round-trip.svg';
import logo from './assets/images/logo.jpg';
import banner from './assets/images/banner.jpg';
import profit from './assets/images/profit.jpg';
import berlin from './assets/images/Berlin.jpg';
import paris from './assets/images/Paris.jpg';
import prague from './assets/images/Prague.jpg';
import rome from './assets/images/Rome.jpg';

const vouchers = [
  { photo: berlin, withDiscount: '10 000', price: '20 000', from: 'Berlin', to: 'Kyiv' },
  { photo: paris, withDiscount: '20 000', price: '30 000', from: 'Paris', to: 'Lviv' },
  { photo: prague, withDiscount: '30 000', price: '15 000', from: 'Prague', to: 'Rome' },
  { photo: rome, withDiscount: '40 000', price: '540 000', from: 'Rome', to: 'New York' },
];


export const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className='container'>
          <div className={styles.content}>
            <div className={styles.left}>
              <img src={logo} alt='' />
            </div>
            <div className={styles.right}>
              <p className={styles.language}>EN</p>
              <img src={burger} alt='' />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.main}>
          <div className='container'>
            <img className={styles.banner} src={banner} alt='' />
            <div>
              <h1>Слетайте в ноябре на Урал получите до 5 000 миль</h1>
              <p>
                after the first flight with Utair in addition to the miles due for the flight according to the rules of
                Status Use miles
                until December 31 1 mile = 1 ₽
              </p>
              <button>Полетели</button>
            </div>
          </div>
        </section>
        <section className={styles.profit}>
          <div className='container'>
            <h2>Кому выгодно?</h2>
            <ul>
              <li>
                <h3>Первый раз летите</h3>
                <p>
                  До 5000 миль получают пассажиры, ранее не совершавшие полет с картой Status
                </p>
              </li>
              <li>
                <h3>Нет учтеных полетов</h3>
                <p>
                  Пассажир может быть зарегистрирован в программе до начала акции, но учтенных полетов на карте Status
                  нет
                </p>
              </li>
              <li>
                <h3>Владелецу карты</h3>
                <p>
                  Пассажиру — владельцу карты Status, совершившему полет — возвращается до 20% милями от суммы
                  бронирования, потраченной на билет и дополнительные услуги в рамках первого бронирования, оформленного
                  в
                  период акции, но не более 5000 ₽
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.extraMiles}>
          <div className='container'>
            <ul>
              <li>
                1
                <div><h3><a href='#'>Активируйте промокод</a></h3>
                  После покупки билета активируйте промокод в личном кабинете на стр.
                  <a href='#' className={styles.myMiles}>«Мои мили»</a>
                  <a href='#'>
                    <img src={company} alt='' />
                    UTAIRURAL2021
                  </a></div>
              </li>
              <li>
                2
                <div>
                  <h3><a href='#'>Проверьте, что полет привязан к карте Status</a></h3>
                  <p>
                    На стр. <a href='#'>«Мои полёты»</a> вы увидите купленый билет
                  </p>
                </div>
              </li>
              <li>
                3
                <div>
                  <h3><a href='#'>Если нет — привяжите</a></h3>
                  Добавьте полет (номер бронирования) на стр.
                  <a href='#' className={styles.myMiles}>«Мои полеты»</a>
                </div>
              </li>
              <li>
                4
                <div>
                  <h3><a href='#'>Получите мили</a></h3>
                  До 5 000 миль будет начислено до 10 декабря 2021 года
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.directions}>
          <div className={cn('container', styles.container)}>
            <h2>Куда можно полететь?</h2>
            <ul>
              {vouchers.map((voucher, index) => (
                <li className={styles.voucher} key={index}>
                  <img src={voucher.photo} alt='' />
                  <div>
                    <p>от {voucher.withDiscount} ₽ <span>{voucher.price} ₽</span></p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='container'>
            <ul>
              {vouchers.map((voucher, index) => (
                <li key={index}>
                  <a href='#'>
                    <div className={styles.town}>
                      <img src={roundTrip} alt='' />
                      <div>
                        <h3>{voucher.to}</h3>
                        from {voucher.from}
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h3>от {voucher.withDiscount} ₽</h3>
                      <h3>от {voucher.price} ₽</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

