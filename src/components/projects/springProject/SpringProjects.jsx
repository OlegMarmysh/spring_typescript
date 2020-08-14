import React from 'react'
import style from './SpringProject.module.scss'

const SpringProject = (props) => (
  <div className={style.springProject}>
    <div>
      <img src={props.img} alt="project_logo" />
    </div>
    <div>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  </div>
)

export default SpringProject
