import React from 'react'

import { faGithub, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './ContactBlock.module.scss'
import { ContactFormBlock } from './ContactFormBlock/ContactFormBlock'

const contact = [
  { title: 'phone', text: '+7(980)-707-20-83', icon: faPhoneAlt },
  { title: 'telegram', text: '@LeonKovz', icon: faTelegramPlane },
  { title: 'github', text: 'To Github', icon: faGithub },
  { title: 'address', text: 'Yaroslavl, Russia', icon: faMapMarkedAlt },
]

export const ContactBlock = () => {
  let contactsBlock = contact.map((contact, index) => {
    return (
      <li className={s.contactItem} key={index}>
        <h3 className={s.contactTitle}>{contact.title}</h3>
        <span className={s.contactIcon}>
          <FontAwesomeIcon icon={contact.icon} />
        </span>
        {contact.text === 'To Github' ? (
          <a
            className={s.contactLink}
            target="_blank"
            href="https://github.com/TomatoVan"
            rel="noreferrer"
          >
            {contact.text}
          </a>
        ) : (
          <span className={s.contactText}>{contact.text}</span>
        )}
      </li>
    )
  })

  return (
    <div className={s.contactBox}>
      <ul className={s.contactList}>{contactsBlock}</ul>

      <ContactFormBlock />
    </div>
  )
}
