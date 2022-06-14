import {Experience} from './Experience/Experience';
import {Skills} from './Skills/Skills';
import React, {useState} from 'react';
import s from './Resume.module.scss';


export const Resume = () => {
	const [activeComponent, setActiveComponent] = useState(true)

	const experienceClickHandler = () => setActiveComponent(true)

	const skillsClickHandler = () => setActiveComponent(false)

	const experienceBtnClass = `${activeComponent ? s.active : ''} ${s.resumeBtn}`;
	const skillsBtnClass = `${!activeComponent ? s.active : ''} ${s.resumeBtn}`;

	return (
		<div className={s.resumeBox}>
			<div className={s.resumeBtnBox}>
				<button onClick={experienceClickHandler} className={experienceBtnClass}>education</button>
				<button onClick={skillsClickHandler} className={skillsBtnClass}>skills</button>
			</div>
			<div className={s.resumeComponentBox}>
				{activeComponent ? <Experience/> : <Skills/>}
			</div>
		</div>
	)
}
