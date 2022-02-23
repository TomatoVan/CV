import React from 'react';
import s from './AboutMe.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import {NavLink} from "react-router-dom";
import app from "../../../App.module.css";
import {Title} from "../../5-common/Title/Title";
import {Resume} from "./Resume/Resume";

const AboutMe = () => {
	return (
		<div className={`${s.aboutBox}`}>
			<div className={s.aboutWrapper}>
				<div className={`${s.aboutInner} ${app.container}`}>
					<Title title='about' accentTitle='me'/>
					<PersonalInfo/>
					<Resume/>
				</div>
			</div>
			<NavLink to={'/CV'}  className={app.linkBack}><img src={''}/>X</NavLink>
		</div>
	);
};

export default AboutMe;
