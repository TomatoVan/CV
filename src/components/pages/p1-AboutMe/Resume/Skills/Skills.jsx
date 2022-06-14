import React from 'react';
import s from './Skills.module.scss'
import {v1} from "uuid";
import css from './icons/css.svg'
import git from './icons/git.svg'
import html from './icons/html.svg'
import jest from './icons/jest.svg'
import JS from './icons/js.svg'
import react from './icons/react.svg'
import redux from './icons/redux.svg'
import rest from './icons/restApi.svg'
import type from './icons/typescriptlang-icon.svg'
import story from './icons/storybook.svg'

const skills = [
	{id: v1(), skill: 'React', icon: react},
	{id: v1(), skill: 'Redux', icon: redux},
	{id: v1(), skill: 'TypeScript', icon: type},
	{id: v1(), skill: 'JavaScript', icon: JS},
	{id: v1(), skill: 'REST API', icon: rest},
	{id: v1(), skill: 'HTML5', icon: html},
	{id: v1(), skill: 'CSS & preprocessing', icon: css},
	{id: v1(), skill: 'TDD - Jest', icon: jest},
	{id: v1(), skill: 'Storybook', icon: story},
	{id: v1(), skill: 'Github', icon: git},
]

export const Skills = () => {

	let skillsList = skills.map(skill => {
		return(
				<li  className={s.skillItem} key={skill.id}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={skill.icon} className={s.aboutIcon} />
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>{skill.skill}</p>
				</li>
		)
	})

	return (
		<div className={`${s.skillBox}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
			<ul className={s.skillList}>
				{skillsList}
			</ul>
		</div>
	)
}
