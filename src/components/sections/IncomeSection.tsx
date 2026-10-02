import { CheckCircle2, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Photo } from "@/components/ui/Photo";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { incomePaths } from "@/lib/data/income";

export function IncomeSection() {
  return (
    <Section id="income" tone="white" labelledBy="income-heading" className="overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-xl pb-10 pr-6 sm:pr-14">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                <Photo name="remoteIncome" />
              </div>
              <div className="absolute bottom-0 right-0 aspect-square w-[38%] overflow-hidden rounded-3xl shadow-lift ring-4 ring-white">
                <Photo name="workFromHome" sizes="240px" />
              </div>
              <div aria-hidden="true" className="absolute -left-3 top-6 rounded-2xl bg-white p-4 shadow-lift ring-1 ring-line sm:-left-8">
                <p className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Invoice paid · Remote contract
                </p>
                <p className="mt-1.5 font-mono text-xl font-semibold text-ink">$4,800</p>
              </div>
              <div aria-hidden="true" className="absolute bottom-[30%] left-4 flex items-center gap-2 rounded-full bg-emerald-50 py-2 pl-2 pr-4 text-sm font-semibold text-emerald-800 shadow-lift ring-1 ring-emerald-200">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <TrendingUp className="h-4 w-4" />
                </span>
                Earning from skills
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHeading
              id="income-heading"
              eyebrow="Income"
              title={
                <>
                  Turn your skills into <span className="text-gradient-ink">income.</span>
                </>
              }
              description="Engineering skills are valuable. Lunava helps engineers connect them with paid work — a first salary, a contract that pays for specialist skills, or flexible work that adds to what you already earn."
            />
            <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {incomePaths.map(({ icon: Icon, title, description, pay }) => (
                <li key={title} className="rounded-2xl glass p-4 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-semibold text-ink">{title}</h3>
                      <p className="font-mono text-[0.7rem] uppercase tracking-wider text-emerald-700">{pay}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-500">
              We help you find and pursue paid opportunities — pay and hiring decisions always rest with the companies
              offering the work.
            </p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
