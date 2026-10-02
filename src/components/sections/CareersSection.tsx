import { BookOpenCheck, Globe2, HeartHandshake, MessageSquareText } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureCard, type Feature } from "@/components/ui/FeatureCard";
import { Photo } from "@/components/ui/Photo";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

const howWeWork: Feature[] = [
  { icon: Globe2, title: "Remote-friendly", description: "We value skill and judgement over location. Clear writing keeps distributed work calm." },
  { icon: MessageSquareText, title: "Write it down", description: "Decisions, trade-offs and context live in documents anyone can read and question." },
  { icon: BookOpenCheck, title: "Always learning", description: "We help engineers grow their careers — and take our own growth just as seriously." },
  { icon: HeartHandshake, title: "Engineers first", description: "We listen to engineers and focus on what actually helps them, not what looks good in a pitch." },
];

export function CareersSection() {
  return (
    <Section id="careers" tone="dark" labelledBy="careers-heading" className="overflow-hidden">
      <div aria-hidden="true" className="bg-grid-dark mask-fade-y absolute inset-0 opacity-60" />
      <div aria-hidden="true" className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-lunar-200/40 blur-[120px]" />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              id="careers-heading"
              tone="dark"
              eyebrow="Careers at Lunava"
              title={
                <>
                  Help engineers build <span className="text-gradient">better careers.</span>
                </>
              }
              description="We're a small team that cares about how engineers grow — and we hold ourselves to the same standard. Here's how we work."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-lift ring-4 ring-white/80">
              <Photo name="teamLaughing" />
            </div>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {howWeWork.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 80}>
              <FeatureCard feature={f} tone="dark" />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
