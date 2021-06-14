import React from 'react'
import {Theme} from '../../../theme/theme'
import {
  SingleDataPointWidgetContainer,
  SingleDataPointWidgetDataPoint,
  SingleDataPointWidgetTitle,
  SingleDataPointWidgetSubtitle,
} from './single-data-point-widget-styles'

type Props = {
  data: string
  title: string
  subtitle?: string
  theme?: keyof Theme['widgets']
}

export const SingleDataPointWidget: React.FC<Props> = ({
  data,
  title,
  subtitle,
  theme,
}) => {
  return (
    <SingleDataPointWidgetContainer>
      <SingleDataPointWidgetDataPoint overrideTheme={theme}>
        {data}
      </SingleDataPointWidgetDataPoint>
      <SingleDataPointWidgetTitle overrideTheme={theme}>
        {title}
      </SingleDataPointWidgetTitle>

      {subtitle && (
        <SingleDataPointWidgetSubtitle overrideTheme={theme}>
          {subtitle}
        </SingleDataPointWidgetSubtitle>
      )}
    </SingleDataPointWidgetContainer>
  )
}
