import React from 'react';
import s from './Experience.module.css'


export const Experience = () => {

	return (
		<div className={`${s.expBox} `}>
			<div className={s.expBoxTitle}>
				<h3 className={s.expTitle}>Education</h3>
			</div>
			<ul className={s.expList}>
				<li  className={s.expItem}>
					<p className={s.expHeading}>Title</p>
					<a className={s.expLink} href={'#'} target="_blank">Description</a>
				</li>
				<li  className={s.expItem}>
					<p className={s.expHeading}>Title</p>
					<a className={s.expLink} href={'#'} target="_blank">Description</a>
				</li>
				<li  className={s.expItem}>
					<p className={s.expHeading}>Title</p>
					<a className={s.expLink} href={'#'} target="_blank">Description</a>
				</li>
				<li  className={s.expItem}>
					<p className={s.expHeading}>Title</p>
					<a className={s.expLink} href={'#'} target="_blank">Description</a>
				</li>
				<li  className={s.expItem}>
					<p className={s.expHeading}>Title</p>
					<a className={s.expLink} href={'#'} target="_blank">Description</a>
				</li>
			</ul>
		</div>
	)
}
