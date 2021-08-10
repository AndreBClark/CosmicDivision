import React from 'react'
import 'twin.macro'

import { BtnOutline, Btn } from 'components/button'
import Hero from 'components/Hero'
import { HeadingOne, Subtitle } from 'components/Hero'
import TransitionLink from 'components/Links'
import { PageView, View } from 'components/Views'

const indexContent = {
  heading: 'Cosmic Division',
  subtitle: 'Chronicling my Journey developing with jamstack',
  buttons: {
    primary: {
      link: '/blog/',
      text: 'Begin Reading',
    },
    secondary: {
      link: '/contact/',
      text: 'Get in Touch',
    },
  },
}

const IndexPage = ({ location }) => {
  const { heading, subtitle, buttons } = indexContent
  return (
    <PageView fullScreen location={location} title={'Home'}>
      <Hero>
        <HeadingOne>{heading}</HeadingOne>
        <Subtitle>{subtitle}</Subtitle>
        <View tw="md:(flex-row justify-around)">
          <Btn as={TransitionLink} to={buttons.primary.link}>
            {buttons.primary.text}
          </Btn>
          <BtnOutline as={TransitionLink} to={buttons.secondary.link}>
            {buttons.secondary.text}
          </BtnOutline>
        </View>
      </Hero>
    </PageView>
  )
}

export default IndexPage
