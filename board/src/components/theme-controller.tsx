import React from 'react'
import {ThemeProvider} from 'styled-components'
import {useAppSelector} from '../lib/hooks'
import {themes} from '../theme/theme'

type Props = {}

export const ThemeSwitcher: React.FC<Props> = ({children}) => {
  const theme = useAppSelector((state) => state.theme)

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
}
