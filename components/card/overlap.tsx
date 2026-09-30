const circles = [
  { label: 'Research', position: 'left-0 top-0', text: 'items-start justify-start' },
  { label: 'Writing', position: 'right-0 top-0', text: 'items-start justify-end' },
  { label: 'People', position: 'left-0 bottom-0', text: 'items-end justify-start' },
  { label: 'Creative problem-solving', position: 'right-0 bottom-0', text: 'items-end justify-end' },
]

export function Overlap() {
  return (
    <section aria-labelledby="overlap-heading" className="md:pt-1">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">Fig. 1</p>
      <h2 id="overlap-heading" className="mt-4 text-2xl leading-snug text-pretty md:text-3xl">
        {"Where I'm at my best"}
      </h2>

      <figure className="mt-10">
        <div
          role="img"
          aria-label="Four overlapping circles labeled research, writing, people, and creative problem-solving. Rachel sits where all four meet."
          className="relative mx-auto aspect-square w-full max-w-80"
        >
          {circles.map((c) => (
            <div
              key={c.label}
              className={`absolute flex size-[62%] rounded-full border border-foreground/40 p-[11%] ${c.position} ${c.text}`}
            >
              <span className="max-w-[7rem] font-mono text-[0.7rem] uppercase leading-tight tracking-wider text-muted-foreground">
                {c.label}
              </span>
            </div>
          ))}
          <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
            <span className="text-lg italic">me</span>
          </div>
        </div>
        <figcaption className="mt-6 text-center font-mono text-xs text-muted-foreground">
          {'not to scale. results may vary (in a good way).'}
        </figcaption>
      </figure>
    </section>
  )
}
