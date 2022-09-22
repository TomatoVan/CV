import React from 'react'

import { v1 } from 'uuid'

import cards from '../../../../assets/images/ProjectCover/cards.jpg'
import counter from '../../../../assets/images/ProjectCover/counter.jpg'
import SN from '../../../../assets/images/ProjectCover/SN.jpg'
import cover from '../../../../assets/images/ProjectCover/social.jpg'
import things from '../../../../assets/images/ProjectCover/things.jpg'
import todo from '../../../../assets/images/ProjectCover/todo.jpg'

import s from './Projects.module.scss'

const projects = [
  {
    id: v1(),
    heading: 'Todolist',
    demo: 'https://tomatovan.github.io/To-Do-List/',
    github: 'https://github.com/TomatoVan/To-Do-List',
    image: todo,
  },
  {
    id: v1(),
    heading: 'Social Network',
    demo: ' https://tomatovan.github.io/Social-Network/',
    github: 'https://github.com/TomatoVan/Social-Network',
    image: SN,
  },
  {
    id: v1(),
    heading: 'Cards',
    demo: 'https://tomatovan.github.io/cards-slip/',
    github: 'https://github.com/TomatoVan/cards-slip',
    image: cards,
  },
  {
    id: v1(),
    heading: 'Interesting things',
    demo: 'https://tomatovan.github.io/Homeworks/',
    github: 'https://github.com/TomatoVan/Homeworks',
    image: things,
  },
  {
    id: v1(),
    heading: 'Counter',
    demo: 'https://tomatovan.github.io/Counter_React/',
    github: 'https://github.com/TomatoVan/Counter_React',
    image: counter,
  },
]

export const Projects = () => {
  let projectsList = projects.map(proj => {
    return (
      <div className={s.tiles} key={proj.id}>
        <div className={s.tile}>
          <img src={proj.image} className={s.projectImage} alt={cover} />
          <div className={s.details}>
            <span className={s.title}>{proj.heading}</span>
            <span className={s.info}>
              <a href={proj.demo} className={s.link} target="_blank" rel="noreferrer">
                Demo
              </a>
            </span>
            <span className={s.info}>
              <a href={proj.github} className={s.link} target="_blank" rel="noreferrer">
                Github
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  })

  return <div className={s.projectBox}>{projectsList}</div>
}
