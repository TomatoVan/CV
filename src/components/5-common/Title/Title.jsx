import React from 'react';
import s from './Title.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const Title = ({title, accentTitle, icon}) => {
	return (
		<>
			<h2 className={s.aboutTitle}>
				<span className={s.aboutTitle_white}>{title}</span>
				<span className={s.aboutTitle_yellow}>{accentTitle}</span>
			</h2>
			<div className={s.aboutWrapperIcon}>
				<span className={s.outerLine}/>
				<span className={s.aboutIcon}><FontAwesomeIcon icon={icon}/></span>
				<span className={s.outerLine}/>
			</div>
		</>
	)
}