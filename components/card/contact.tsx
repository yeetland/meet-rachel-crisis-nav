import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-8 rounded-[2rem] bg-accent px-6 py-12 text-accent-foreground md:px-12 md:py-16"
    >
      <p className="font-mono text-xs uppercase tracking-widest opacity-80">How to reach me</p>
      <h2 id="contact-heading" className="mt-4 max-w-2xl text-3xl leading-tight text-balance md:text-5xl">
        Got something{' '}
        <span className="italic [font-variation-settings:'WONK'_1,'SOFT'_100]">complicated</span>?
        {" Let's talk."}
      </h2>

      <ul className="mt-10 flex flex-col gap-3 md:flex-row md:gap-4">
        <li>
          <a
            href="mailto:rachelellis139@gmail.com"
            className="group inline-flex w-full items-center justify-between gap-6 rounded-full bg-background px-6 py-4 text-foreground transition-transform hover:-translate-y-0.5 md:w-auto"
          >
            <span className="flex flex-col">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent">Email</span>
              <span className="text-base md:text-lg">rachelellis139@gmail.com</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:rotate-45" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ellisrach"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-between gap-6 rounded-full border border-accent-foreground/30 px-6 py-4 transition-colors hover:border-accent-foreground md:w-auto"
          >
            <span className="flex flex-col">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest opacity-80">LinkedIn</span>
              <span className="text-base md:text-lg">in/ellisrach</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:rotate-45" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
