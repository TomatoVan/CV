import React from 'react';
import s from './Contacts.module.css'
import {Title} from "../../5-common/Title/Title";
import app from "../../../App.module.css";
import {NavLink} from "react-router-dom";
import {ContactBlock} from "./ContactBlock/ContactBlock";

const Contacts = () => {
	return (
		<div className={`${s.contacts} ${s.animation}`}>
			<div className={s.contactsWrapper}>
				<div className={`${s.contactsInner} ${app.container}`}>
					<Title title='my' accentTitle='contacts' />
				</div>


				<div>
					<ContactBlock />
				</div>

			</div>

			<NavLink to={'/'}  className={app.linkBack}><img src={''}/>X</NavLink>
		</div>
	);
};

export default Contacts;
