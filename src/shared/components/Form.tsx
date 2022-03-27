import { HTMLProps, PropsWithChildren } from 'react'
import { FormProvider, FormProviderProps, SubmitHandler } from 'react-hook-form'

export type FormProps<T> = Omit<
  FormProviderProps<T> &
    Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> & {
      onSubmit: SubmitHandler<T>
    },
  'children'
>

const Form = ({
  children,
  onSubmit,
  ...props
}: PropsWithChildren<FormProps<any>>) => (
  <form onSubmit={props.handleSubmit(onSubmit)}>
    <FormProvider {...props}>{children}</FormProvider>
  </form>
)

export default Form
