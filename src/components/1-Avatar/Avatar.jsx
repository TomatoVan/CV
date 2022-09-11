import React from 'react'

import { Particle } from '../5-common/Particle/Particle'

import s from './Avatar.module.scss'

const Avatar = () => {
  return (
    <div className={s.avatar}>
      <div className={s.container}>
        <Particle />
      </div>
    </div>
  )
}

export default Avatar
