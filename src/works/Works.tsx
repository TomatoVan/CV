import React from 'react';
import style from './Works.module.css'
import c from "../common/Container.module.css";
const Works = () => {
	return (
		<div className={style.works}>
			<div className={c.container}>
				<div className={style.wrapper}>
					<h1> My works</h1>
					<div className={style.worksWrapper}>
						<div className={style.project}>
							<div className={style.projectBlock}>
								<button className={style.projectBtn}>Смотреть</button>
							</div>
							<div className={style.descWrapper}>
								<div className={style.title}>Название проекта</div>
								<div className={style.about}>Краткое описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea error excepturi minima quae temporibus vitae. Dignissimos earum libero sed.</div>
							</div>
						</div>
						<div className={style.project}>
							<div className={style.projectBlock}>
								<button className={style.projectBtn}>Смотреть</button>
							</div>
							<div className={style.descWrapper}>
								<div className={style.title}>Название проекта</div>
								<div className={style.about}>Краткое описание Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea error excepturi minima quae temporibus vitae. Dignissimos earum libero sed.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
