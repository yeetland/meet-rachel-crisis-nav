const stops = [
  {
    label: 'Crisis & reputation',
    detail:
      'Monitoring news, assessing reputational risk, and advising Fortune 500 utility and logistics brands, including guiding one through a high-stakes communications crisis.',
  },
  {
    label: 'Trailheads',
    detail:
      'Conservation work and backcountry leadership: risk management in its most literal form, where the stakes are real and the plan changes daily.',
  },
  {
    label: 'A growing plant brand',
    detail: 'Building content, customer strategy, and digital growth for an emerging company from the ground up.',
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
