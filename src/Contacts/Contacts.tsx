import React from 'react';
import style from "./Contacts.module.css";
import c from "../common/Container.module.css";

const Contacts = () => {
	return (
		<div className={style.contacts}>
			<div className={c.container}>
				<div className={style.wrapper}>
					<h1>Contacts</h1>
					<form className={style.form}>
						<input className={style.input} placeholder="Your name" type="text"/>
						<input className={style.input} placeholder="Your email" type="email"/>
						<input className={style.input} placeholder="Your message" type="text"/>
					</form>
					<div>
						<button className={style.sendBtn}>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
