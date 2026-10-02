import type { LucideIcon } from "lucide-react";
import { Building2, Handshake, MessagesSquare, Search, Sprout, UserRound, Users } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Faq, type FaqItem } from "@/components/ui/Faq";
import { Photo } from "@/components/ui/Photo";
import { ProgressionSection } from "@/components/sections/ProgressionSection";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/primitives";
import { jsonLd } from "@/lib/utils";

interface Step {
  icon: LucideIcon;
  title: string;
  body: string;
}

const engineerSteps: Step[] = [
  {
    icon: MessagesSquare,
    title: "Get in touch",
    body: "Send us a short note about your background, the work you enjoy and what you're looking for — or use the contact page.",
  },
  {
    icon: UserRound,
    title: "Share your goals",
    body: "We learn about your skills, experience, income goals and how you want to work: full-time, contract, part-time, remote or on-site.",
  },
  {
    icon: Search,
    title: "Find the right opportunities",
    body: "We help you identify and pursue roles and projects that fit your skills and pay fairly for your level.",
  },
  {
    icon: Sprout,
    title: "Keep leveling up",
    body: "As your skills grow, we help you aim for the next step — more responsibility, new specialisms and better-paid work.",
  },
];

const companySteps: Step[] = [
  { icon: Building2, title: "Describe the work", body: "Share the role, the level, the stack and what success looks like — including compensation and growth." },
  { icon: Users, title: "Meet engineers who fit", body: "We introduce engineers whose skills, experience and availability match, for contract or full-time work." },
  { icon: Handshake, title: "Build the relationship", body: "Hire for today's project and stay connected for what comes next." },
];

const faqs: FaqItem[] = [
  {
    question: "Who is Lunava for?",
    answer:
      "Software engineers at every stage — students and new graduates, junior and mid-level engineers, senior specialists, and staff, principal and engineering leaders. It covers backend, frontend, full-stack, data, ML and AI, cloud and DevOps, platform, QA and other technology roles.",
  },
  {
    question: "Do I need a lot of experience?",
    answer:
      "No. We work with engineers at every level, including those looking for internships or a first paid role. Bootcamp graduates, self-taught engineers and career switchers are welcome.",
  },
  {
    question: "How can Lunava help me earn more?",
    answer:
      "By helping you find work that values your skills: full-time roles, well-paid contracts and flexible part-time work. Over time, we help you choose opportunities that build the skills and experience behind higher-paid roles.",
  },
  {
    question: "Does Lunava guarantee a job or income?",
    answer:
      "No. We help you discover and pursue opportunities that fit your skills and goals, but hiring and pay decisions are made by the companies offering the work. We'll always be clear about what we can and can't do.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. There's nothing to sign up for on this website. To start a conversation, just contact us by email or through the contact page.",
  },
  {
    question: "What kinds of opportunities are there?",
    answer:
      "Full-time, contract, part-time and internship roles across remote, hybrid and on-site work, in every major engineering discipline.",
  },
  {
    question: "I'm hiring. Can my company work with Lunava?",
    answer:
      "Yes. Tell us about the engineers you need through the contact page or at companies@lunava.tech, and we'll talk about how we can help.",
  },
];

function StepList({ steps, tone = "light" }: { steps: Step[]; tone?: "light" | "dark" }) {
  const cols = steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4";
  const dark = tone === "dark";
  return (
    <ol className={`relative grid grid-cols-1 gap-5 md:grid-cols-2 ${cols}`}>
      {steps.map(({ icon: Icon, title, body }, i) => (
        <Reveal as="li" key={title} delay={i * 90} className="relative">
          <div
            className={
              dark
                ? "glass h-full rounded-[var(--radius-card)] p-6 lg:p-7"
                : "h-full rounded-[var(--radius-card)] glass p-6 shadow-soft lg:p-7"
            }
          >
            <div className="flex items-center justify-between">
              <span
                className={
                  dark
                    ? "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lunar-500/20 text-lunar-200 ring-1 ring-white/10"
                    : "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-lunar-500 to-glow-400 text-white"
                }
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className={dark ? "font-mono text-sm text-slate-500" : "font-mono text-sm text-slate-400"}>
                Step {i + 1}
              </span>
            </div>
            <h3 className={dark ? "mt-6 text-lg font-semibold text-white" : "mt-6 text-lg font-semibold text-ink"}>{title}</h3>
            <p className={dark ? "mt-2.5 leading-relaxed text-slate-300" : "mt-2.5 leading-relaxed text-muted"}>{body}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export function HowItWorksSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <Section id="how-it-works" labelledBy="how-heading">
        <Container>
          <Reveal>
            <SectionHeading
              id="how-heading"
              eyebrow="How it works"
              title={
                <>
                  Simple to start. <span className="text-gradient-ink">Built to last.</span>
                </>
              }
              description="No accounts and no sign-ups — just a conversation. From there, we help you find opportunities that pay for your skills and keep you moving forward."
            />
          </Reveal>
          <div className="mt-14">
            <StepList steps={engineerSteps} />
          </div>

          <div id="companies" className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
                <Photo name="conversation" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Eyebrow>For companies</Eyebrow>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">Hiring engineers who fit the work</h3>
              <ol className="mt-8 space-y-4">
                {companySteps.map(({ icon: Icon, title, body }, i) => (
                  <li key={title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-lunar-500 to-glow-400 text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">
                        <span className="mr-2 font-mono text-sm text-slate-400">0{i + 1}</span>
                        {title}
                      </p>
                      <p className="mt-1 leading-relaxed text-muted">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </Container>
      </Section>

      <ProgressionSection />

      <Section id="faq" tone="white" labelledBy="faq-heading">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                id="faq-heading"
                eyebrow="FAQ"
                title="Questions, answered honestly"
                description="Can't find what you're looking for? Get in touch — we read every message."
              />
            </Reveal>
            <Reveal delay={100}>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
