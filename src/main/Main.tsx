import React from 'react';
import style from './Main.module.css'
import c from '../common/Container.module.css'
import bg from '../App.module.css'

const Main = () => {


	return (
		<div className={style.main}>
		<div className={c.container}>
			<div className={style.wrapper}>
				<div className={style.textBlock}>
					<div className={style.text}>HI THERE! I'M
						LEONID KOVZEL</div>
					<div className={style.text}>*Frontend developer animation*</div>
				</div>
				<div className={style.photo}>*photo*</div>
			</div>
			</div>
		</div>

	);
};

export default Main;
