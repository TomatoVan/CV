import React from 'react';
import s from './AboutMe.module.scss'
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import {NavLink} from "react-router-dom";
import app from "../../../App.module.scss";
import {Title} from "../../5-common/Title/Title";
import {Resume} from "./Resume/Resume";
import close from '../../../assets/images/close-button.png'
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
	return (
		<div className={`${s.aboutBox}`}>
			<div className={s.aboutWrapper}>
				<div className={`${s.aboutInner} ${app.container}`}>
					<Title title='about' accentTitle='me' icon={faIdCard}/>
					<PersonalInfo/>
					<Resume/>
				</div>
			</div>
			<NavLink to={'/CV'}  className={app.linkBack}><img src={close}/></NavLink>
		</div>
	);
};

export default AboutMe;
