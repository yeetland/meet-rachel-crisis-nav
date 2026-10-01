import { ArrowUpRight } from 'lucide-react'

const circlePositions = ['left-0 top-0', 'right-0 top-0', 'left-0 bottom-0', 'right-0 bottom-0']

const labelClass =
  'absolute w-max -translate-x-1/2 text-center font-mono text-[0.7rem] uppercase leading-tight tracking-wider text-muted-foreground'

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
          className="mx-auto w-full max-w-80"
        >
          <div aria-hidden="true" className="relative h-8">
            <span className={`${labelClass} bottom-2 left-[31%]`}>Research</span>
            <span className={`${labelClass} bottom-2 left-[69%]`}>Writing</span>
          </div>

          <div className="relative aspect-square w-full">
            {circlePositions.map((position) => (
              <div
                key={position}
                className={`absolute size-[62%] rounded-full border border-foreground/40 ${position}`}
              />
            ))}
            <div className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
              <span className="text-lg italic">me</span>
            </div>
          </div>

          <div aria-hidden="true" className="relative h-10">
            <span className={`${labelClass} top-2 left-[31%]`}>People</span>
            <span className={`${labelClass} top-2 left-[69%]`}>
              Creative
              <br />
              problem-solving
            </span>
          </div>
        </div>
        <figcaption className="mt-4 text-center font-mono text-xs text-muted-foreground">
          {'not to scale. results may vary (in a good way).'}
        </figcaption>
      </figure>

      <p className="mt-8 text-center">
        <a
          href="https://rachelelliswrites.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            See it in action
          </span>
          <span className="inline-flex items-center gap-1.5 border-b border-accent/50 pb-0.5 text-base italic text-accent transition-colors group-hover:border-accent">
            rachelelliswrites.wordpress.com
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 transition-transform group-hover:rotate-45" />
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </p>
    </section>
  )
}
