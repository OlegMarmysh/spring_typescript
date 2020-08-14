import React from 'react'
import style from './Footer.module.scss'
import FooterLeft from './footerLeft/FooterLeft'
import FooterRight from './footerRight/FooterRight'

const Footer = () => (
  <div className={style.wrapperBlock}>
    <div className={style.springFooter}>
      <FooterLeft />
      <FooterRight />
    </div>
  </div>
)

export default Footer
