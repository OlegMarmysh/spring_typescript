import React from 'react'
import style from './Menu.module.scss'

const Menu = (props) => (
  <div className={props.menu}>
    <ul>
      <li>
        <div>
          <span>Why Spring</span>
          <div className={style.navArrow} />
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Microservices</a></li>
          <li><a href="#">Reactive</a></li>
          <li><a href="#">Event Driven</a></li>
          <li><a href="#">Cloud</a></li>
        </ul>
      </li>
      <li>
        <div>
          <span>Learn</span>
          <div className={style.navArrow} />
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Quickstart</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </li>
      <li>
        <div>
          <span>Projects</span>
          <div className={style.navArrow} />
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Spring Boot</a></li>
          <li><a href="#">Spring Framework</a></li>
          <li><a href="#">Spring Cloud</a></li>
          <li><a href="#">Spring Data</a></li>
        </ul>
      </li>
      <li>
        <a href="#"><span>Training</span></a>
      </li>
      <li>
        <a href="#"><span>Support</span></a>
      </li>
      <li>
        <div>
          <span>Community</span>
          <div className={style.navArrow} />
        </div>
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Store</a></li>
        </ul>
      </li>
    </ul>
  </div>
)

export default Menu
