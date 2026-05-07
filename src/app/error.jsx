'use client'

import { useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '@/components/ui/button'

const ErrorBoundary = ({ error, reset }) => {
  useEffect(() => {
    console.error('[RootError]:', error)
  }, [error])

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="max-w-md text-center space-y-4">
        <h2 className="text-2xl font-semibold">Something went wrong</h2>
        <p className="text-muted-foreground">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </div>
    </div>
  )
}

ErrorBoundary.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  reset: PropTypes.func.isRequired,
}

export default ErrorBoundary
