import { styled } from '@material-ui/core'

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  minHeight: '100vh',
}))

export const Content = styled('main')({
  flexGrow: 1,
  minHeight: '100%',
})
