import React from 'react';
import s from './Portfolio.module.css'
import app from "../../../App.module.css";
import {NavLink} from "react-router-dom";
import {Title} from "../../5-common/Title/Title";
import {Projects} from "./Projects/Projects";

const Portfolio = () => {
	return (
		<div className={`${s.portfolio}`}>
			<div className={s.portfolioWrapper}>
				<div className={`${s.portfolioInner} ${app.container}`}>
					<Title title='my' accentTitle='portfolio' />
					<div className={s.portfolioProjects}>
						<Projects />
					</div>
				</div>
			</div>
			<NavLink to={'/'}  className={app.linkBack}><img src={''}/>X</NavLink>
		</div>
	);
};

export default Portfolio;
