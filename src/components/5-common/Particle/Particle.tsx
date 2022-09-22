import React from 'react'

import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import type { Engine } from 'tsparticles-engine'

export const Particle = () => {
  // this customizes the component tsParticles installation
  const customInit = async (engine: Engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine)
  }

  const options = {
    fpsLimit: 120,
    particles: {
      links: {
        enable: true,
        distance: 70,
      },
      move: {
        enable: true,
        speed: 4,
        outModes: {
          default: 'bounce',
        },
      },
      size: {
        value: 1,
      },
    },
    fullScreen: { enable: false },
    style: {
      position: 'absolute',
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onDiv: {
          enable: false,
          type: 'circle',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: true,
      },
    },
  }

  // @ts-ignore
  return <Particles init={customInit} options={options} />
}
