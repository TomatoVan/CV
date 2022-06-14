import React from 'react';
import s from './Contacts.module.scss'
import {Title} from "../../5-common/Title/Title";
import app from "../../../App.module.scss";
import {NavLink} from "react-router-dom";
import {ContactBlock} from "./ContactBlock/ContactBlock";
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import close from "../../../assets/images/close-button.png";

const Contacts = () => {
	return (
		<div className={`${s.contacts} ${s.animation}`}>
			<div className={s.contactsWrapper}>
				<div className={`${s.contactsInner} ${app.container}`}>
					<Title title='my' accentTitle='contacts' icon={faPhoneAlt} />
				</div>
				<div>
					<ContactBlock />
				</div>

			</div>

			<NavLink to={'/CV'}  className={app.linkBack}><img src={close}/></NavLink>
		</div>
	);
};

export default Contacts;
