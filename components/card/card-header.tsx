export function CardHeader() {
  return (
    <header className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-full border border-accent font-serif text-sm normal-case italic tracking-normal text-accent"
        >
          re
        </span>
        <span>Calling card</span>
      </span>
      <a
        href="#contact"
        className="rounded-full border border-border px-3 py-1.5 transition-colors hover:border-accent hover:text-accent"
      >
        Say hello
      </a>
    </header>
  )
}
