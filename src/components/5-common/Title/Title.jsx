import React from 'react';
import s from './Title.module.css'


export const Title = ({title, accentTitle}) => {
	return (
		<>
			<h2 className={s.aboutTitle}>
				<span className={s.aboutTitle_white}>{title}</span>
				<span className={s.aboutTitle_yellow}>{accentTitle}</span>
			</h2>
			<div className={s.aboutWrapperIcon}>
				<span className={s.outerLine}/>
				<span className={s.aboutIcon}>*icon*</span>
				<span className={s.outerLine}/>
			</div>
		</>
	)
}