import { useTranslation } from 'react-i18next'
import { Box, Button } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

export interface ErrorHandlerProps {
  error: Error
  reset: () => void
}

const ErrorHandler = ({ error, reset }: ErrorHandlerProps) => {
  const { t } = useTranslation()
  return (
    <Box padding={4}>
      <Alert
        severity="error"
        action={
          <Button color="inherit" size="small" onClick={reset}>
            {t('common.error.reset')}
          </Button>
        }
      >
        <AlertTitle>{t('common.error.title')}</AlertTitle>
        {error.message}
      </Alert>
    </Box>
  )
}

export default ErrorHandler
