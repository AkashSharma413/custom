import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          Something went wrong.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
