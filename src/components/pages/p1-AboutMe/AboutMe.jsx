import React from 'react'

import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import app from '../../../App.module.scss'
import close from '../../../assets/images/close-button.png'
import { Title } from '../../5-common/Title/Title'

import s from './AboutMe.module.scss'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import { Resume } from './Resume/Resume'

const AboutMe = () => {
  return (
    <div className={`${s.aboutBox}`}>
      <div className={s.aboutWrapper}>
        <div className={`${s.aboutInner} ${app.container}`}>
          <Title title="about" accentTitle="me" icon={faIdCard} />
          <PersonalInfo />
          <Resume />
        </div>
      </div>
      <NavLink to={'/CV'} className={app.linkBack}>
        <img src={close} alt={'close'} />
      </NavLink>
    </div>
  )
}

export default AboutMe
