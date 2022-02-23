import React from 'react';
import s from './ContactBlock.module.css';
import {ContactFormBlock} from "./ContactFormBlock/ContactFormBlock";


export const ContactBlock = () => {

	return (
		<div className={s.contactBox}>
			<ul className={s.contactList}>
				 <li  className={s.contactItem}>
				<h3 className={s.contactTitle}>title</h3>
				<span className={s.contactIcon}>*icon*</span>
					<span className={s.contactText}>description</span>
				</li>
				<li  className={s.contactItem}>
					<h3 className={s.contactTitle}>title</h3>
					<span className={s.contactIcon}>*icon*</span>
					<span className={s.contactText}>description</span>
				</li>
				<li  className={s.contactItem}>
					<h3 className={s.contactTitle}>title</h3>
					<span className={s.contactIcon}>*icon*</span>
					<span className={s.contactText}>description</span>
				</li>
				<li  className={s.contactItem}>
					<h3 className={s.contactTitle}>title</h3>
					<span className={s.contactIcon}>*icon*</span>
					<span className={s.contactText}>description</span>
				</li>
			</ul>

			<ContactFormBlock />
		</div>
	)
}