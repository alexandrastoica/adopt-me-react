// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component, ErrorInfo } from 'react';
import { Link, Redirect } from '@reach/router';


class ErrorBoundary extends Component {
  state = {
    redirect: "",
    hasError: false
  };

  static getDerivedStateFromError() {
    return { redirect: false, hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // eslint-disable-next-line
    console.error('ErrorBoundary caught an error', error, info);
  }

  componentDidUpdate(): void {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" noThrow />;
    }

    if (this.state.hasError) {
      return (
        <p>
          There was an error with this listing. 
          <Link to="/">Click here</Link>{' '}
          to back to the home page or wait five seconds
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
