import React from 'react'
import style from './FooterLeft.module.scss'

const FooterLeft = () => (
  <div className={style.springFooterLeft}>
    <div>
      <p><a href="#">Why spring</a></p>
      <ul>
        <li><a href="#">Microservices</a></li>
        <li><a href="#">Reactive</a></li>
        <li><a href="#">Event Driven</a></li>
        <li><a href="#">Cloud</a></li>
        <li><a href="#">Web Applications</a></li>
        <li><a href="#">Serverless</a></li>
        <li><a href="#">Batch</a></li>
      </ul>
    </div>
    <div>
      <p><a href="#">Learn</a></p>
      <ul>
        <li><a href="#">Quickstart</a></li>
        <li><a href="#">Guides</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div>
      <p><a href="#">Community</a></p>
      <ul>
        <li><a href="#">Events</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Store</a></li>
      </ul>
    </div>
    <div>
      <p><a href="#">Projects</a></p>
      <p><a href="#">Training</a></p>
      <p><a href="#">Support</a></p>
      <p><a href="#">Thank you</a></p>
    </div>
  </div>
)

export default FooterLeft
