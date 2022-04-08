import { Grid, Typography, Container, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Form, TextField } from 'shared/components'
import { MODULE_NAME } from '../../strings'
import { LoginFormFields, useFormProps } from './LoginForm.utils'

interface LoginProps {}

const LoginForm = ({ ...props }: LoginProps) => {
  const { t } = useTranslation(MODULE_NAME)
  const formProps = useFormProps()
  return (
    <Container maxWidth="xs">
      <Form {...formProps}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              {t('login.title')}
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name={LoginFormFields.Email}
                label={t('login.email')}
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name={LoginFormFields.Password}
                label={t('login.password')}
                type="password"
              />
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              {t('login.submit')}
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  )
}

export default LoginForm
