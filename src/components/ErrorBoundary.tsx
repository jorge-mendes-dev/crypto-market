'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { AppConfig } from '@/config/AppConfig';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      `${AppConfig.error.title} - ${AppConfig.error.description}`,
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="container mx-auto mb-6 mt-6 rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="shrink-0">
                <ExclamationTriangleIcon
                  aria-hidden="true"
                  className="size-5 text-red-400"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  {AppConfig.error.title}
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{AppConfig.error.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
