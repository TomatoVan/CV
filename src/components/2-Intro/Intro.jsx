import React from 'react';
import s from './Intro.module.scss'
import {TypingEffect} from "./TypingEffect/TypingEffect";

const Intro = () => {
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a className={`${s.intro}`}>
			<span className={s.textIntro}>Hi There! I'm</span>
			<span className={s.textIntroName}>Leonid Kovzel</span>
			<TypingEffect/>
		</a>


	)


};

export default Intro;
