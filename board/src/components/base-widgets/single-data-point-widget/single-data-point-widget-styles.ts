import styled from 'styled-components'
import {Theme} from '../../../theme/theme'

export const SingleDataPointWidgetContainer = styled.div`
  display: grid;
  grid-template-areas:
    'datapoint'
    'title'
    'subtitle';
  grid-template-rows: 1fr auto auto;
  height: 100%;
`

export const SingleDataPointWidgetDataPoint = styled.div<{
  overrideTheme?: keyof Theme['widgets']
}>`
  grid-area: datapoint;
  justify-content: center;
  align-items: center;
  display: flex;

  font-size: 44px;
  font-weight: bold;
  color: ${(props) =>
    props.overrideTheme &&
    props.theme.widgets[props.overrideTheme]?.singleDataPointWidgetTheme
      ? props.theme.widgets[props.overrideTheme].singleDataPointWidgetTheme
          ?.dataPointColor
      : props.theme.baseWidgets.singleDataPointWidget.dataPointColor};
`

export const SingleDataPointWidgetTitle = styled.div<{
  overrideTheme?: keyof Theme['widgets']
}>`
  text-align: center;
  font-size: 20px;
  color: ${(props) =>
    props.overrideTheme &&
    props.theme.widgets[props.overrideTheme]?.singleDataPointWidgetTheme
      ? props.theme.widgets[props.overrideTheme].singleDataPointWidgetTheme
          ?.title
      : props.theme.baseWidgets.singleDataPointWidget.title};
`

export const SingleDataPointWidgetSubtitle = styled.div<{
  overrideTheme?: keyof Theme['widgets']
}>`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: ${(props) =>
    props.overrideTheme &&
    props.theme.widgets[props.overrideTheme]?.singleDataPointWidgetTheme
      ? props.theme.widgets[props.overrideTheme].singleDataPointWidgetTheme
          ?.subtitle
      : props.theme.baseWidgets.singleDataPointWidget.subtitle};
`
