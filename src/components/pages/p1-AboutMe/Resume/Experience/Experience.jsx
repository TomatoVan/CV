import React from 'react';
import s from './Experience.module.css'
import {v1} from "uuid";

const experience = [
	{
		id: v1(),
		company: 'http://ivt.uniyar.ac.ru/',
		title: 'Bachelor degree in computer engineering',
		description: 'Russian State University, Yaroslavl State University of P.G. Demidov, 2023'
	},
	{
		id: v1(),
		company: 'https://it-incubator.by/React-online.html',
		title: 'Front-end (React/Redux/Typescript)',
		description: 'IT-incubator, 2022'
	},
	{
		id: v1(),
		company: 'https://www.freecodecamp.org/',
		title: 'JavaScript / Front-end',
		description: 'Freecodecamp, 2022'
	},
	{
		id: v1(),
		company: 'https://itgid.info/',
		title: 'Alexander Lushchenko JavaScript Course',
		description: 'ITgid, 2022'
	},
	{
		id: v1(),
		company: 'https://htmlacademy.ru/',
		title: 'Professional HTML &CSS. Responsive layout and automation',
		description: 'HTML Academy, 2021'
	},
]


export const Experience = () => {

	let personalExperience = experience.map(exp => {
		return (
				<li  className={s.expItem} key={exp.id}>
					<p className={s.expHeading}>{exp.title}</p>
					<a className={s.expLink} href={exp.company} target="_blank" rel="noreferrer">{exp.description}</a>
				</li>
		)
	})

	return (
		<div className={`${s.expBox} `}>
			<div className={s.expBoxTitle}>
				<h3 className={s.expTitle}>Education</h3>
			</div>
			<ul className={s.expList}>
				{personalExperience}
			</ul>
		</div>
	)
}
