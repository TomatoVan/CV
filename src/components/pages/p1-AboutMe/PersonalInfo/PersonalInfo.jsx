import React from 'react';
import s from './PersonalInfo.module.css'


const PersonalInfo = () => {

	return (
		<div className={s.personalBox}>
			<div className={s.personalInfo}>
				<div className={s.personalInfoTitle}>
					<span className={s.personalIcon}>*Icon*</span>
					<h4 className={s.personalInfoHeading}>Personal Info</h4>
				</div>
				<div className={s.personalDesc}>
					I'm a frontend developer who has a results-focused attitude to creating SPA, using React(JS/TS), Redux.
					I spend my free time in Codewars and programming tutorials because in the future I see myself as a Senior FrontEnd developer.
					<p className={s.subPersonalDesc}>Ready to consider project work and full-time employment. </p>
				</div>
				<div className={s.personalInfoInner}>
					<ul className={s.personalInfoList}>
						<li className={s.personalInfoItem} >
							<span className={s.title}>title:</span>
							<span className={s.content}>content</span>
						</li>
						<li className={s.personalInfoItem} >
							<span className={s.title}>title:</span>
							<span className={s.content}>content</span>
						</li>
						<li className={s.personalInfoItem} >
							<span className={s.title}>title:</span>
							<span className={s.content}>content</span>
						</li>
						<li className={s.personalInfoItem} >
							<span className={s.title}>title:</span>
							<span className={s.content}>content</span>
						</li>
						<li className={s.personalInfoItem} >
							<span className={s.title}>title:</span>
							<span className={s.content}>content</span>
						</li>
						<li className={s.personalInfoItem} >
							<span className={s.title}>title:</span>
							<span className={s.content}>content</span>
						</li>
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
