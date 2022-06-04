import React from 'react';
import s from './Projects.module.css';
import {v1} from "uuid";
import cover from "../Projects/ProjectCover/social.jpg"

const projects = [
	{id: v1(), heading: 'Todolist', demo: 'https://tomatovan.github.io/Todolist/', github: 'https://github.com/TomatoVan/Todolist', image: cover},
	{id: v1(), heading: 'Social NetWork', demo: ' https://tomatovan.github.io/Social-Network/', github: 'https://github.com/TomatoVan/Social-Network', image: cover},
	{id: v1(), heading: 'Interesting things', demo: 'https://tomatovan.github.io/Homeworks/', github: 'https://github.com/TomatoVan/Homeworks', image: cover},
	{id: v1(), heading: 'Counter', demo: 'https://tomatovan.github.io/Counter_React/', github: 'https://github.com/TomatoVan/Counter_React', image: cover}
]

export const Projects = () => {

	let projectsList = projects.map(proj => {
		return (
				<div className={s.tiles} key={proj.id} >
					<div className={s.tile} >
						<img src={proj.image} className={s.projectImage} alt={cover}/>
						<div className={s.details}>
							<span className={s.title}>{proj.heading}</span>
							<span className={s.info}>
								<a href={proj.demo} className={s.link} target="_blank">Demo</a>
							</span>
							<span className={s.info}>
								<a href={proj.github} className={s.link} target="_blank">Github</a></span>
						</div>
					</div>
				</div>
		)
	})

	return (
		<div className={s.projectBox}>
			{projectsList}
		</div>
	)
}
