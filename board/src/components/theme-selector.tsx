import React from 'react'
import Form from 'react-bootstrap/Form'
import {appThemeSlice} from '../lib/features/app-theme/app-theme-slice'
import {useAppDispatch, useAppSelector} from '../lib/hooks'
import {AvailableThemes, themes} from '../theme/theme'

type Props = {}

export const ThemeSelector: React.FC<Props> = () => {
  const activeTheme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const onThemeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as AvailableThemes
    dispatch(appThemeSlice.actions.setTheme(value))
  }

  return (
    <Form.Control as='select' value={activeTheme} onChange={onThemeSelect}>
      {Object.keys(themes).map((key) => (
        <option value={key} key={key}>
          {key}
        </option>
      ))}
    </Form.Control>
  )
}
