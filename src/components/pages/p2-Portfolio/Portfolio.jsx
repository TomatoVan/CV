import React from 'react';
import s from './Portfolio.module.scss'
import app from "../../../App.module.scss";
import {NavLink} from "react-router-dom";
import {Title} from "../../5-common/Title/Title";
import {Projects} from "./Projects/Projects";
import close from '../../../assets/images/close-button.png'
import {faSuitcase} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
	return (
		<div className={`${s.portfolio}`}>
			<div className={s.portfolioWrapper}>
				<div className={`${s.portfolioInner} ${app.container}`}>
					<Title title='my' accentTitle='portfolio' icon={faSuitcase} />
					<div className={s.portfolioProjects}>
						<Projects />
					</div>
				</div>
			</div>
			<NavLink to={'/CV'}  className={app.linkBack}><img src={close}/></NavLink>
		</div>
	);
};

export default Portfolio;
