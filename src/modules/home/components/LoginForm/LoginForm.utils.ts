import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { FormProps } from 'shared/components/Form'
import { useAuth } from 'shared/hooks'
import { object, string, SchemaOf } from 'yup'

export enum LoginFormFields {
  Email = 'email',
  Password = 'password',
}

export interface LoginFormValues {
  [LoginFormFields.Email]: string
  [LoginFormFields.Password]: string
}

export const defaultValues: LoginFormValues = {
  [LoginFormFields.Email]: '',
  [LoginFormFields.Password]: '',
}

export const useValidationSchema = (): SchemaOf<LoginFormValues> => {
  const { t } = useTranslation()
  return object().shape({
    [LoginFormFields.Email]: string()
      .required(t('validation.required'))
      .email(t('validation.email')),
    [LoginFormFields.Password]: string().required(t('validation.required')),
  })
}

export const useOnSubmit = () => {
  const { signIn } = useAuth()
  return (values: LoginFormValues) => signIn(values)
}

export const useFormProps = (): FormProps<LoginFormValues> => {
  const schema = useValidationSchema()
  const onSubmit = useOnSubmit()
  const methods = useForm<LoginFormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  })
  return { ...methods, onSubmit }
}
