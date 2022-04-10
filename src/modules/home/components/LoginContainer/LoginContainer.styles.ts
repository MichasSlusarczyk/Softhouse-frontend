import colors from 'config/palette'
import styled from 'styled-components'

export const Wrapper = styled.div`
  border: solid ${colors.primary} 1px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
  width: 40%;
`
