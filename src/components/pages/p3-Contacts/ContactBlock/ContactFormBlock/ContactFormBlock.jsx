import React, {FC, useState} from 'react';
import s from './ContactFormBlock.module.scss';




export const ContactFormBlock = () => {

	return (
		<div className={s.contactBox}>
			<div>
				<h3 className={s.formTitle}>FEEL FREE TO DROP ME A LINE</h3>
				<p className={s.formText}>If you have any suggestion, project or even you want to say Hello.. Please fill out
					the form below and I will
					reply you shortly.</p>
			</div>
			<div className={s.formBox}>
					<form className={s.group}>
						<input className={s.input} placeholder="Your name" type="text"/>
						<input className={s.input} placeholder="Your email" type="email"/>
						<input className={s.input} placeholder="Your message" type="text"/>
						<button type="submit" className={s.formBtn} >Send Message</button>
					</form>
			</div>
		</div>
	)
}
