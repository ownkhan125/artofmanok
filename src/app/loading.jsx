const Loading = () => {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div
        className="size-10 rounded-full border-2 border-border border-t-foreground animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}

export default Loading
