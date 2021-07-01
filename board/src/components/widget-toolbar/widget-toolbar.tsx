import React from 'react'
import Form from 'react-bootstrap/Form'
import {
  Widget,
  WidgetSizeType,
  widgetsSlice,
} from '../../lib/features/widgets/widgets-slice'
import {useAppDispatch, useAppSelector} from '../../lib/hooks'
import {updateBoard} from '../../lib/thunk/rebuild-grid'
import {
  WidgetToolbarContainer,
  WidgetToolbarSizeSelectorContainer,
} from './widget-toolbar-styles'

type Props = {
  widget: Widget
}

export const WidgetToolbar: React.FC<Props> = ({widget}) => {
  const configMode = useAppSelector((state) => state.configMode)
  const dispatch = useAppDispatch()

  const onSizeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as WidgetSizeType
    dispatch(
      widgetsSlice.actions.changeWidgetSize({
        id: widget.id,
        size: value,
      }),
    )
    dispatch(updateBoard())
  }

  if (!configMode) {
    return null
  }

  return (
    <WidgetToolbarContainer>
      <WidgetToolbarSizeSelectorContainer>
        <Form.Control
          as='select'
          value={widget.sizeType}
          onChange={onSizeSelect}
          size='sm'
        >
          {widget.availableSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Form.Control>
      </WidgetToolbarSizeSelectorContainer>
    </WidgetToolbarContainer>
  )
}
