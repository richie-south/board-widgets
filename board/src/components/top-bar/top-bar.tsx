import React, {useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form'
import {configModeSlice} from '../../lib/features/config-mode/config-mode-slice'
import {useAppDispatch, useAppSelector} from '../../lib/hooks'
import {ThemeSelector} from '../theme-selector'
import {
  TopBarContainer,
  TopBarContainerCenter,
  TopBarContainerLeft,
  TopBarContainerRight,
  TopBarContainerSpacer,
} from './top-bar-styled'

type Props = {}

export const TopBar: React.FC<Props> = () => {
  const configMode = useAppSelector((state) => state.configMode)
  const dispatch = useAppDispatch()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (configMode) {
      return
    }

    let timeoutTime: NodeJS.Timeout
    const handleMousemove = () => {
      clearTimeout(timeoutTime)
      setShow(true)

      timeoutTime = setTimeout(() => {
        setShow(false)
      }, 2000)
    }

    window.addEventListener('mousemove', handleMousemove)

    return () => window.removeEventListener('mousemove', handleMousemove)
  }, [configMode])

  const toggleConfigMode = () => {
    dispatch(configModeSlice.actions.toggleConfigMode())
    setShow(true)
  }

  if (!show && !configMode) {
    return null
  }

  return (
    <>
      <TopBarContainer expanded={configMode}>
        <TopBarContainerLeft>
          <Form.Check
            type='switch'
            id='config-mode-switch'
            label='Toggle edit'
            checked={configMode}
            onChange={toggleConfigMode}
          />
        </TopBarContainerLeft>

        {configMode && <TopBarContainerCenter></TopBarContainerCenter>}
        {configMode && (
          <TopBarContainerRight>
            <ThemeSelector />
          </TopBarContainerRight>
        )}
      </TopBarContainer>
      {configMode && <TopBarContainerSpacer />}
    </>
  )
}
