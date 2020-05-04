import React, { Component } from 'react'

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./error-boundary.styles";

export default class ErrorBoundary extends Component {
  constructor() {
    super()

    this.state = {
      hasErrored: false
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true }
  }
  render() {

    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png'/>
          <ErrorImageText>Esta pagina está quebrada ;-;</ErrorImageText>
        </ErrorImageOverlay>
      ) 
    }
    return this.props.children;
  }
}
