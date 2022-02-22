import React from 'react';
import style from './Nav.module.css'
import c from "../common/Container.module.css";

const Nav = () => {
	return (
		<div className={style.nav}>
			<a className={style.link} href="#">Main</a>
			<a className={style.link} href="#">Skills</a>
			<a className={style.link} href="#">Works</a>
			<a className={style.link} href="#">Contacts</a>
		</div> //сделать бургер
	);
};

export default Nav;
