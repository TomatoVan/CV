import React from 'react';
import s from './Skills.module.css'
import js from '../../../../../assets/images/js.svg'

export const Skills = () => {

	return (
		<div className={`${s.skillBox}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
			<ul className={s.skillList}>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
				<li  className={s.skillItem}>
					{/*<span className={s.aboutIcon}>*/}
					<img src={js} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
					<p className={s.skillTitle}>skill</p>
				</li>
			</ul>

		</div>
	)
}
