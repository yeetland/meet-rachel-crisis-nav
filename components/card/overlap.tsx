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
        <a
          href="https://rachelelliswrites.wordpress.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto block w-full max-w-80 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
        >
          <span className="sr-only">
            Four overlapping circles labeled research, writing, people, and creative problem-solving. Rachel sits
            where all four meet. Opens Rachel&apos;s writing portfolio in a new tab.
          </span>

          <div aria-hidden="true">
            <div className="relative h-8">
              <span className={`${labelClass} bottom-2 left-[31%]`}>Research</span>
              <span className={`${labelClass} bottom-2 left-[69%]`}>Writing</span>
            </div>

            <div className="relative aspect-square w-full">
              {circlePositions.map((position) => (
                <div
                  key={position}
                  className={`absolute size-[62%] rounded-full border border-foreground/40 transition-colors duration-500 group-hover:border-accent/70 group-focus-visible:border-accent/70 ${position}`}
                />
              ))}
              <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
                <span className="col-start-1 row-start-1 text-lg italic transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
                  me
                </span>
                <ArrowUpRight className="col-start-1 row-start-1 size-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
              </div>
              <span className="pointer-events-none absolute left-1/2 top-[calc(50%+3rem)] -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full bg-background px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-accent opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                {'psst — read my work'}
              </span>
            </div>

            <div className="relative h-10">
              <span className={`${labelClass} top-2 left-[31%]`}>People</span>
              <span className={`${labelClass} top-2 left-[69%]`}>
                Creative
                <br />
                problem-solving
              </span>
            </div>
          </div>
        </a>
        <figcaption className="mt-4 text-center font-mono text-xs text-muted-foreground">
          {'not to scale. results may vary (in a good way).'}
        </figcaption>
      </figure>

    </section>
  )
}
