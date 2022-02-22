import React from 'react';
import style from "./Footer.module.css";
import c from "../common/Container.module.css";

const Footer = () => {
	return (
		<div className={style.footer}>
			<div className={c.container}>
				<div className={style.wrapper}>
					<h3> Leonid Kovzel</h3>
					<div className={style.linksWrapper}>
						<div className={style.link}>ВК</div>
						<div className={style.link}>Тг</div>
						<div className={style.link}>Гит</div>
						<div className={style.link}>Почта</div>
					</div>
					<span className={style.rights}>2022 All rights reserved</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
