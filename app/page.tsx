import { CardHeader } from '@/components/card/card-header'
import { Hero } from '@/components/card/hero'
import { Trail } from '@/components/card/trail'
import { Overlap } from '@/components/card/overlap'
import { Contact } from '@/components/card/contact'

export default function Page() {
  return (
    <div className="paper-grain min-h-dvh">
      <div className="mx-auto flex max-w-5xl flex-col px-6 py-8 md:px-10 md:py-12">
        <CardHeader />
        <main>
          <Hero />
          <div className="grid gap-16 border-t border-border py-16 md:grid-cols-[1.35fr_1fr] md:gap-12 md:py-20">
            <Trail />
            <Overlap />
          </div>
          <Contact />
        </main>
      </div>
    </div>
  )
}
