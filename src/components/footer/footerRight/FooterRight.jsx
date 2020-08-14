import React from 'react'
import style from './FooterRight.module.scss'

const FooterRight = () => (
  <div className={style.springFooterRight}>
    <h3>Get the Spring newsletter</h3>
    <form>
      <div className={style.sendingData}>
        <input type="text" placeholder="Email Address" />
        <button type="submit">Subscribe</button>
      </div>
      <div>
        <input id="footer-checkbox" type="checkbox" />
        <label htmlFor="footer-checkbox">
          Yes, I would like to be contacted by The Spring Team and Pivotal for
          newsletters, promotions and events per the terms of Pivotal’s
        </label>
      </div>
    </form>
  </div>
)

export default FooterRight
