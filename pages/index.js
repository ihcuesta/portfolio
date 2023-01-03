// @refresh reset
import { useEffect, useState } from 'react'
import { HeadMetas } from '../components/HeadMetas'
import { Title } from '../components/Title'
import { Container } from '../components/styled/Container'
import { Grid } from '../components/styled/Grid'
import { Card } from '../components/Card'
import { Wheel } from '../components/Wheel'
import { SocialNav } from '../components/SocialNav'
import { ToTop } from '../components/ToTop'
import { createGlobalStyle } from 'styled-components'
import bg from '../public/img/bg.jpg'
import drinkergame from '../public/img/drinker.jpg'
import qapter from '../public/img/qapter.jpeg'
import pikachu from '../public/img/pikachu.gif'
import hikeat from '../public/img/hikeat.gif'
import digidentity from '../public/img/digidentity.jpeg'
import blackmirror from '../public/img/blackmirror.jpeg'
import nature from '../public/img/nature.jpeg'
import valak from '../public/img/valak.jpeg'
import skyscanner from '../public/img/skyscanner.jpeg'
import olea from '../public/img/olea.jpeg'
import tuvidafacil from '../public/img/tuvidafacil.jpeg'
import yavoz from '../public/img/yavoz.jpeg'
import medcafe from '../public/img/medcafe.jpeg'
import mediterranea from '../public/img/mediterranea.jpeg'
import casanostre from '../public/img/casanostre.jpeg'
import eligetusuerte from '../public/img/eligetusuerte.jpeg'
import poquiz from '../public/img/poquiz.jpg'
import '@fontsource/lexend-mega'
import '@fontsource/lexend-mega/900.css'
import '@fontsource/lexend-mega/800.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transform-origin: top right 0px;
    font-family: "Lexend Mega";
  }

  body {
    height: 3900px;
    background: #000 url(${bg.src});
    background-attachment: fixed;
    @media (min-width: 500px) {
      height: 4900px;
    }
    @media (min-width: 715px) {
      height: 5700px;
    }
    @media (min-width: 1300px) {
      height: 1800px;
    }
  }
`

export default function Home() {
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const [rotation, setRotation] = useState(0)

  const handleToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const funcScroll = () => {
    setTranslateX(
      `${
        Math.floor(window.pageYOffset) * 0.515 +
        (window.innerWidth < 715 ? 0.4 : 0.6) * window.innerWidth
      }px`
    )
    setTranslateY(-Math.floor(window.pageYOffset))
    setRotation((window.pageYOffset / window.innerWidth) * 360)
  }

  useEffect(() => funcScroll(), [])

  useEffect(() => {
    window.addEventListener('scroll', () => funcScroll())
    return window.removeEventListener('scroll', () => funcScroll())
  }, [])

  useEffect(() => {
    addEventListener('resize', () => {
      funcScroll()
      return window.removeEventListener('resize', () => funcScroll())
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <HeadMetas />
      <SocialNav />
      <Title translateY={translateY} />
      <Container translateX={translateX} translateY={translateY}>
        <Grid>
          <Card image={poquiz.src} href="https://poquiz.vercel.app/#/" />
          <Card
            image={qapter.src}
            href="https://ihcuesta.github.io/qapter-landing"
          />
          <Card
            image={drinkergame.src}
            href="https://ihcuesta.github.io/drinker-game/"
          />
          <Card
            image={digidentity.src}
            href="https://ihcuesta.github.io/digidentity/"
          />
          {/* <Card image={hikeat.src} href="https://hikeat.herokuapp.com/" /> */}
          <Card
            image={pikachu.src}
            href="https://ihcuesta.github.io/pokemon_iron_edition/"
          />

          <Card
            image={blackmirror.src}
            href="https://ihcuesta.github.io/blackmirror/"
          />
          <Card image={nature.src} href="https://ihcuesta.github.io/nature/" />
          <Card image={valak.src} href="https://ihcuesta.github.io/valak/" />
          <Card
            image={skyscanner.src}
            href="https://ihcuesta.github.io/skyscanner/"
          />
          <Card
            image={medcafe.src}
            href="https://www.behance.net/gallery/71517811/Mediterranea-Food-Caf"
          />
          <Card image={olea.src} href="https://ihcuesta.github.io/olea/" />
          <Card
            image={tuvidafacil.src}
            href="https://www.behance.net/gallery/66874955/Tu-Vida-Facil"
          />
          <Card
            image={yavoz.src}
            href="https://www.behance.net/gallery/71563975/Yavoz"
          />
          <Card
            image={mediterranea.src}
            href="https://www.behance.net/gallery/71514253/Mediterranea-Foods"
          />
          <Card
            image={casanostre.src}
            href="https://www.behance.net/gallery/66897445/Casa-Nostre"
          />
          <Card image={eligetusuerte.src} href="https://eligetusuerte.es/" />
        </Grid>
      </Container>
      <Wheel rotation={rotation} translateY={translateY} />
      <ToTop handleToTop={handleToTop} />
    </>
  )
}
