import React from 'react'

type TopLevelErrorBoundaryProps = {}
type TopLevelErrorBoundaryState = {
  error: boolean
}

export class TopLevelErrorBoundary extends React.Component<
  TopLevelErrorBoundaryProps,
  TopLevelErrorBoundaryState
> {
  state = {
    error: false,
  }

  static getDerivedStateFromError() {
    return {error: true}
  }

  componentDidCatch(error: Error) {
    console.error(error)
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <h1>So sad!</h1>
          <p>{":'("}</p>
        </>
      )
    }

    return this.props.children
  }
}
