import { Compass, Mountain, Sprout, TrendingUp } from "lucide-react";
import { CareerStageCard } from "@/components/career/CareerStageCard";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { careerStages } from "@/lib/data/career";

const icons = [Sprout, TrendingUp, Mountain, Compass];

export function CareerStagesSection({ id = "career-stages", tone = "light" }: { id?: string; tone?: "light" | "white" }) {
  return (
    <Section id={id} tone={tone} labelledBy="stages-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="stages-heading"
            eyebrow="Every level"
            title="Opportunities for Every Stage of Your Career"
            description="Whether you're writing your first production code or setting technical direction for an organization, there's a next step worth finding."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {careerStages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 90} className="h-full">
              <CareerStageCard stage={stage} icon={icons[i]} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
