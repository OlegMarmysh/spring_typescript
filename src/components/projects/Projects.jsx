import React, { useEffect, useState } from 'react'
import style from './Projects.module.scss'
import SpringProject from './springProject/SpringProjects'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects, searchProjects } from '../../redux/projectPageReducer'

const Projects = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProjects())
  }, [])
  const springProjects = useSelector(state => state.projectPage.springProjects)
  const springAtticProjects = useSelector(state => state.projectPage.springAtticProjects)
  const createSpringProject = springProjects.length
    ? springProjects.map((el) => (
      <SpringProject
        key={el.title}
        img={el.img}
        title={el.title}
        body={el.body}
      />
    ))
    : 'No results'
  const createSpringAtticProject = springAtticProjects.length
    ? springAtticProjects.map((el) => (
      <SpringProject
        key={el.title}
        img={el.img}
        title={el.title}
        body={el.body}
      />
    ))
    : 'No results'
  const onInputChange = (e) => {
    setInputValue(e.currentTarget.value)
  }
  const onSearchProjects = (e) => {
    dispatch(searchProjects(inputValue))
  }
  return (
    <section>
      <div className={style.wrapperBlock}>
        <div className={style.searchBlock}>
          <input
            className={style.placeForSearch}
            value={inputValue}
            onChange={onInputChange}
            onKeyUp={onSearchProjects}
            type="text"
            placeholder="Search..."
          />
          <button className={style.searchButton} onClick={onSearchProjects}/>
        </div>
        <div className={style.springProjects}>
          {createSpringProject}
        </div>
        <div className={style.springAtticProjects}>
          <h3>Projects in the Attic</h3>
          <div className={style.springProjects}>
            {createSpringAtticProject}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
