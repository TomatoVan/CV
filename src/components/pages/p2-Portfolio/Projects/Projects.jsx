import React from 'react';
import s from './Projects.module.css';
import js from '../../../../assets/images/js.svg'

export const Projects = () => {

	return (
		<div className={s.projectBox}>
			 <div className={s.tiles} >
				<div className={s.tile} >
					<img src={js} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>title</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Demo</a>
							</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
			</div>
			<div className={s.tiles} >
				<div className={s.tile} >
					<img src={js} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>title</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Demo</a>
							</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
			</div>
			<div className={s.tiles} >
				<div className={s.tile} >
					<img src={js} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>title</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Demo</a>
							</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
			</div>
			<div className={s.tiles} >
				<div className={s.tile} >
					<img src={js} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>title</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Demo</a>
							</span>
						<span className={s.info}>
								<a href={'#'} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
			</div>
		</div>
	)
}
