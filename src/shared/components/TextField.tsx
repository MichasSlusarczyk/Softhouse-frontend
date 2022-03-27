import { useFormContext, useController } from 'react-hook-form'
import {
  TextField as BaseTextField,
  TextFieldProps as BaseTextFieldProps,
} from '@material-ui/core'

export type TextFieldProps = Partial<BaseTextFieldProps> & {
  name: string
  defaultValue?: string
}

const TextField = ({
  name,
  label,
  defaultValue = '',
  ...props
}: TextFieldProps) => {
  const { control } = useFormContext()
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({ control, name, defaultValue })
  return (
    <BaseTextField
      label={label}
      inputRef={ref}
      error={!!error}
      helperText={error?.message}
      {...inputProps}
      {...props}
    />
  )
}

export default TextField
