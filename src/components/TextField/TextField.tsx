import { FC, MouseEvent } from 'react'
import { TextField as MTextField } from '@material-ui/core'

import { STextField } from './STextField'

const TextField: FC<any> = (formProps) => {
  const {
    input,
    label,
    meta: { touched, error },
    type,
    isPassword = false,
    customChange,
    customValue,
    isPhone = false,
    id,
    ...props
  } = formProps

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    customChange(event)
    input.onChange(event)
  }

  console.log(id)

  return (
    <STextField className={id ? id : ''}>
      <MTextField
        error={!!(touched && error)}
        helperText={touched && error ? error : ''}
        label={label}
        type="text"
        {...input}
        variant="outlined"
        id={id || ''}
        onChange={customChange ? handleChange : input.onChange}
        value={typeof customValue === 'string' ? customValue : input?.value}
        {...props}
      />
    </STextField>
  )
}

export default TextField
