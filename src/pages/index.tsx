import '@/assets/css/global.less';

import styles from './index.less';

import footerLogo from '@/assets/images/bottom_logo@3x.png';
import logo from '@/assets/images/nav_logo@3x.png';
import telegram from '@/assets/images/telegram.svg';
import menus from '@/assets/images/menu-s.svg';

import { useState } from 'react';

export default function IndexPage() {
  const [hide, setHide] = useState(false);

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      <header>
        <div className={styles.main + ' ' + styles.flex_between}>
          <div className={styles.logo}>
            <img src={logo} width="56" />
          </div>
          <div className={styles.nav}>
            <div className={styles.menus} onClick={toggleHide}>
              <img src={menus} width="26" />
            </div>
            <div
              className={
                hide ? styles.navlist + ' ' + styles.navshow : styles.navlist
              }
            >
              <a href="" target="_blank">
                Docs
              </a>
              {/* <a href="" target="_blank" >Whitepaper</a> */}
            </div>
          </div>
          <div className={styles.concact}>
            <a href="https://t.me/heizuan_cn" target="_blank">
              <img src={telegram} width="26" />
            </a>
          </div>
        </div>
      </header>

      <article>
        <div className={styles.main}>
          <div className={styles.banner1}>
            Stablecoin and Synthetic Assets protocol
          </div>
          <div className={styles.banner2}>
            Unlimited liquidity, trading any asset anytime, anywhere
          </div>
        </div>
      </article>

      <footer>
        <div className={styles.main}>
          <div className={styles.flex_center}>
            <div className={styles.footer_logo}>
              <img src={footerLogo} width="38" />
            </div>
            {/* <div>
              <a href="" target="_blank" ></a>
            </div> */}
            <div className={styles.foot_concact}>
              <a href="https://t.me/heizuan_cn" target="_blank">
                <img src={telegram} width="26" />
              </a>
            </div>
          </div>
          <div className={styles.copyright}>Loft © 2021</div>
        </div>
      </footer>
    </>
  );
}
