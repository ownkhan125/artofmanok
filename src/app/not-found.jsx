import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="max-w-md text-center space-y-4">
        <p className="text-sm font-mono text-muted-foreground">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
