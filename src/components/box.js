import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import MtSvgLines from 'react-mt-svg-lines'

import { Paragraph, Container } from '../styles'
import { rem, phone, mobile } from '../styles/utils'

const border = color => `1px solid ${color}`

const Wrapper = styled.div`
  width: 25%;
  min-height: ${rem(240)};
  display: flex;
  flex-direction: column;

  ${({ id, theme }) => id && css`
    border-bottom: ${id.toString().match(/(1|2|3|4)/) && border(theme.gray)};
    border-right: ${id.toString().match(/(1|2|3|5|6|7)/) && border(theme.gray)};
  `}

  ${mobile(css`
    width: 50%;
    border: none;

    ${({ id, theme }) => id && css`
      border-bottom: ${id.toString().match(/(1|2|3|4|5|6)/) && border(theme.gray)};
      border-right: ${id.toString().match(/(1|3|5|7)/) && border(theme.gray)};
    `}
  `)}

  ${phone(css`
    border: none;
    width: 100%;
    min-height: auto;
    height: ${rem(140)};
    padding: 10px 0;

    ${({ id, theme }) => id && css`
      border-bottom: ${id.toString().match(/(1|2|3|4|5|6|7)/) && border(theme.gray)};
    `}
  `)}
`

const Icon = ({ component }) => {
  const name = component.replace(/ /g, "")
  const Component = require('./SVG/icons')[name]

  if (!Component) {
    const { Placeholder } = require('./SVG/icons')
    return <Placeholder />
  }

  return <Component />
}

Icon.propTypes = {
  component: PropTypes.string.isRequired
}

const Box = ({ name, header, id, animate }) => (
  <Wrapper id={id}>
    <Container style={{ flex: 3 }} centrate>
      <MtSvgLines animate={ animate } duration={ 2000 }>
        <Icon component={name} />
      </MtSvgLines>
    </Container>
    <Container style={{ flex: 1 }} centrate>
      <Fade delay={300}>
        <Paragraph color='blue'>
          {header}
        </Paragraph>
      </Fade>
    </Container>
  </Wrapper>
)

Box.propTypes = {
  name: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired
}

export default Box
