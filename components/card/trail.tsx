const stops = [
  {
    label: 'Crisis & reputation',
    detail:
      'Tracking news and reputational risk for Fortune 500 utility and logistics brands. When a client landed in an AP or Reuters headline (it happened more than once), I dug into what was driving the coverage, wrote up what to watch, and recommended what to do next. That was my favorite part.',
  },
  {
    label: 'Trailheads',
    detail:
      'Conservation work and backcountry leadership. I built trails, led crews, and practiced risk management in its most literal form, keeping people safe, fed, and motivated in a very dynamic environment.',
  },
  {
    label: 'A growing plant brand',
    detail:
      'Writing the content, getting to know the customers, and building digital growth for an emerging company from the dirt up.',
  },
]

export function Trail() {
  return (
    <section aria-labelledby="trail-heading">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        A little more
      </p>
      <h2 id="trail-heading" className="mt-4 text-2xl leading-snug text-pretty md:text-3xl">
        My work has wandered, on purpose.
      </h2>

      <ol className="mt-10 flex flex-col">
        {stops.map((stop, i) => (
          <li key={stop.label} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span className="flex size-10 items-center justify-center rounded-full border border-accent font-mono text-xs text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              {i < stops.length - 1 && (
                <span aria-hidden="true" className="w-px flex-1 border-l border-dashed border-accent/50" />
              )}
            </div>
            <div className="pb-10 pt-1.5">
              <h3 className="text-lg italic">{stop.label}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{stop.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
