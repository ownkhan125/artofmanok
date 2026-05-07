import { ANNOUNCEMENT } from '@/constants/site'

const AnnouncementBar = () => {
  return (
    <div className="overflow-hidden bg-ink text-white animate-fade-in">
      <div className="mx-auto flex h-9 w-full max-w-[1500px] items-center justify-between gap-3 px-4 text-[11px] uppercase tracking-[0.18em] sm:h-10 sm:px-8">
        <a
          href={`mailto:${ANNOUNCEMENT.email}`}
          className="hidden shrink-0 font-medium tracking-[0.18em] opacity-80 transition-opacity hover:opacity-100 lg:inline-block"
        >
          {ANNOUNCEMENT.email}
        </a>
        <p className="mx-auto flex min-w-0 flex-1 items-center justify-center gap-3 truncate text-center tracking-[0.2em]">
          <span aria-hidden className="hidden h-px w-6 shrink-0 bg-white/40 sm:inline-block" />
          <span className="truncate font-medium">{ANNOUNCEMENT.message}</span>
          <span aria-hidden className="hidden h-px w-6 shrink-0 bg-white/40 sm:inline-block" />
        </p>
        <span className="hidden shrink-0 font-medium tracking-[0.24em] opacity-70 lg:inline-block">
          EN · USD
        </span>
      </div>
    </div>
  )
}

export default AnnouncementBar
