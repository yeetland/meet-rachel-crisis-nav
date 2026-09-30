import { ArrowUpRight } from 'lucide-react'

const links = [
  {
    label: 'Portfolio',
    value: 'Read my work',
    href: 'https://rachelelliswrites.wordpress.com',
    external: true,
    primary: true,
  },
  {
    label: 'Email',
    value: 'rachelellis139@gmail.com',
    href: 'mailto:rachelellis139@gmail.com',
    external: false,
    primary: false,
  },
  {
    label: 'LinkedIn',
    value: 'in/ellisrach',
    href: 'https://www.linkedin.com/in/ellisrach',
    external: true,
    primary: false,
  },
]

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
        <span className="italic [font-variation-settings:'WONK'_1,'SOFT'_100]">complicated</span>
        {" (or on fire)? Let's talk."}
      </h2>

      <ul className="mt-10 grid gap-3 md:grid-cols-[1fr_1.4fr_1fr] md:gap-4">
        {links.map((link) => (
          <li key={link.label} className="min-w-0">
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={
                link.primary
                  ? 'group flex h-full items-center justify-between gap-4 rounded-2xl bg-background px-5 py-4 text-foreground transition-transform hover:-translate-y-0.5'
                  : 'group flex h-full items-center justify-between gap-4 rounded-2xl border border-accent-foreground/30 px-5 py-4 transition-colors hover:border-accent-foreground'
              }
            >
              <span className="flex min-w-0 flex-col">
                <span
                  className={`font-mono text-[0.65rem] uppercase tracking-widest ${
                    link.primary ? 'text-accent' : 'opacity-80'
                  }`}
                >
                  {link.label}
                </span>
                <span className="break-all text-base md:text-lg">{link.value}</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 transition-transform group-hover:rotate-45" />
              {link.external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
