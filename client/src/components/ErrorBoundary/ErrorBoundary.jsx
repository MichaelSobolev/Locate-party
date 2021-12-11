import React from 'react';

import { Title } from '../Title/Title';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch() {
      console.log('error')
    }
  
    render() {  
      if (this.state.hasError) {
        return <Title>Что-то пошло не так.</Title>;
      }

      return this.props.children; 
    }
  }
