import { ArrowLeftIcon, ArrowRightIcon } from '@/components/ui/icons'

const Pagination = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null

  const pages = []
  for (let i = 1; i <= totalPages; i++) pages.push(i)

  return (
    <nav
      aria-label="Catalog pagination"
      className="mt-10 flex items-center justify-center gap-2 md:mt-14"
    >
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ArrowLeftIcon className="size-4" />
      </button>
      {pages.map((p) => {
        const isActive = p === page
        return (
          <button
            key={p}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onChange(p)}
            className={
              isActive
                ? 'inline-flex size-9 items-center justify-center rounded-full bg-foreground text-[12px] font-medium tracking-[0.04em] text-background'
                : 'inline-flex size-9 items-center justify-center rounded-full text-[12px] font-medium tracking-[0.04em] text-muted-foreground transition-colors duration-300 hover:bg-muted hover:text-foreground'
            }
          >
            {p}
          </button>
        )
      })}
      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ArrowRightIcon className="size-4" />
      </button>
    </nav>
  )
}

export default Pagination
