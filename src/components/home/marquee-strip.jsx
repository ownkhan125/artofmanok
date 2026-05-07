import { MARQUEE_ITEMS } from '@/constants/site'

const Dot = () => (
  <span
    aria-hidden
    className="mx-8 inline-block size-1 shrink-0 rounded-full bg-foreground/40"
  />
)

const MarqueeStrip = () => {
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="overflow-hidden border-y border-border bg-paper text-foreground">
      <div className="flex w-max animate-marquee whitespace-nowrap py-3 will-change-transform">
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center">
            <Dot />
            <span className="text-[11px] font-medium uppercase tracking-[0.34em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip
