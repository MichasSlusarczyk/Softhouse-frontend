import styled from 'styled-components'
import backgroundImg from '../../assets/loginBackground.png'

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    background: url(${backgroundImg}) #6ac3cc;
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
    filter: blur(4px);
    transform: scale(1.1);
  }
`
