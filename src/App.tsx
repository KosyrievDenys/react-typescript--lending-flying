import React from 'react';

//libs
import cn from 'classnames';

//assets
import styles from './App.module.scss';
import burger from './assets/images/icons/burger.svg';
import company from './assets/images/icons/company.svg';
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
              <h1>Fly to the Urals in November and get up to 5,000 miles</h1>
              <p>
                after the first flight with Utair in addition to the miles due for the flight according to the rules of
                Status Use miles
                until December 31 1 mile = 1 ₽
              </p>
              <button>Flew</button>
            </div>
          </div>
        </section>
        <section className={styles.profit}>
          <div className='container'>
            <div className={styles.content}>
              <div className={styles.left}>
                <img src={profit} alt='' />
              </div>
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
            <ul>
              <li>
                1
                <div><h3><a href='#'>Activate promo code</a></h3>
                  After purchasing a ticket, activate the promotional code in your account on page
                  <a href='#' className={styles.myMiles}>«My miles»</a>
                  <a href='#'>
                    <img src={company} alt='' />
                    UTAIRURAL2021
                  </a></div>
              </li>
              <li>
                2
                <div>
                  <h3><a href='#'>Check that the flight is linked to the Status card</a></h3>
                  <p>
                    On page <a href='#'>«My flights»</a> you will see the purchased ticket
                  </p>
                </div>
              </li>
              <li>
                3
                <div>
                  <h3><a href='#'>If not, bind</a></h3>
                  Add flight (booking number) on page
                  <a href='#' className={styles.myMiles}>«My flights»</a>
                </div>
              </li>
              <li>
                4
                <div>
                  <h3><a href='#'>Earn Miles</a></h3>
                  Up to 5,000 miles will be credited by December 10, 2021
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.directions}>
          <div className={cn('container', styles.container)}>
            <h2>Where can you fly?</h2>
            <ul>
              {vouchers.map((voucher, index) => (
                <li className={styles.voucher} key={index}>
                  <img src={voucher.photo} alt='' />
                  <div>
                    <p>от {voucher.withDiscount} $ <span>{voucher.price} $</span></p>
                  </div>
                  Lorem ipsum dolor sit amet, consectetur.
                  <button>Fly!</button>
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
                        <img src={fly} alt='' />
                        from {voucher.from}
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h3>от {voucher.withDiscount} $</h3>
                      <h3>от {voucher.price} $</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={styles.questions}>
          <div className='container'>
            <h2>Frequently asked questions</h2>
            <select name='question1' id='question1'>
              I did not provide a loyalty card number when purchasing. How to account for a flight as part of a
              promotion?
              <option value=''>
                Restore the flight made under the conditions of the promotion before May 31, 2021. To do this, write to
                Feedback
              </option>
            </select>
            <select name='question2' id='question2'>
              I have a promo code from a partner, how do I use it?
            </select>
          </div>
        </section>
      </main>
    </div>
  );
}

