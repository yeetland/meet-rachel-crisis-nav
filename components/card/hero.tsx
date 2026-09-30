export function Hero() {
  return (
    <section aria-labelledby="name" className="py-20 md:py-28">
      <h1
        id="name"
        className="font-mono text-sm uppercase tracking-[0.3em] text-accent"
      >
        Rachel Ellis
      </h1>
      <p className="mt-8 max-w-4xl text-balance text-4xl leading-[1.08] font-light tracking-tight md:text-6xl lg:text-7xl">
        I find the story in{' '}
        <span className="italic [font-variation-settings:'WONK'_1,'SOFT'_100]">
          complicated things
        </span>
        , then figure out how to make people{' '}
        <span className="relative inline-block whitespace-nowrap">
          care.
          <svg
            aria-hidden="true"
            viewBox="0 0 200 24"
            preserveAspectRatio="none"
            className="scribble absolute -bottom-2 left-0 h-3 w-full text-accent md:-bottom-3 md:h-4"
          >
            <path
              d="M3 15 C 40 5, 80 21, 120 11 S 180 7, 197 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength={1}
            />
          </svg>
        </span>
      </p>
    </section>
  )
}
