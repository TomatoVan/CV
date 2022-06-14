import React from 'react';
import s from './PersonalInfo.module.scss'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const personalInfo = [
	{title: 'First Name: ', content: 'Leonid'},
	{title: 'Last Name: ', content: 'Kovzel'},
	{title: 'Date of birth: ', content: '13 June 2001'},
	{title: 'English: ', content: 'Intermediate (in progress)'},
	{title: 'Address: ', content: 'Yaroslavl, Russia'},
	{title: 'Email: ', content: 'kovzel.leo@gmail.com'},
	{title: 'Phone: ', content: '+7(980)-707-20-83'},
	{title: 'Telegram: ', content: '@LeonKovz'},
]


const PersonalInfo = () => {

	let info = personalInfo.map((elem, index) => {
		return (
		<li className={s.personalInfoItem} key={index} >
			<span className={s.title}>{elem.title}</span>
			<span className={s.content}>{elem.content}</span>
		</li>)
	})

	return (
		<div className={s.personalBox}>
			<div className={s.personalInfo}>
				<div className={s.personalInfoTitle}>
					<span className={s.personalIcon}><FontAwesomeIcon icon={faUser}/></span>
					<h4 className={s.personalInfoHeading}>Personal Info</h4>
				</div>
				<div className={s.personalDesc}>
					I'm a frontend developer who has a results-focused attitude to creating SPA, using React(JS/TS), Redux.
					I spend my free time in Codewars and programming tutorials because in the future I see myself as a Senior FrontEnd developer.
					<p className={s.subPersonalDesc}>Ready to consider project work and full-time employment. </p>
				</div>
				<div className={s.personalInfoInner}>
					<ul className={s.personalInfoList}>
						{info}
					</ul>
				</div>
			</div>
			<div className={s.resume}>
				<a className={s.resumeLink}
				   href={''} download={''}
				   target="_blank" rel="noopener noreferrer">Download CV</a>
			</div>
		</div>
	)
};

export default PersonalInfo;
