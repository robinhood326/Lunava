import { Reveal } from "@/components/motion/Reveal";
import { Faq } from "@/components/ui/Faq";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { faqs } from "@/lib/data/content";

export function FaqSection() {
  return (
    <Section id="faq" labelledBy="faq-heading">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions, answered." description="Straight answers on how AI training work, and Lunava, actually operate." />
          </Reveal>
          <Reveal delay={100}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
