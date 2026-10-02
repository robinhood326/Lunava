import Link from "next/link";
import { ArrowUpRight, Infinity as InfinityIcon, Route, Search, Sprout, Users, Wallet } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureCard, type Feature } from "@/components/ui/FeatureCard";
import { Container, Section, SectionHeading } from "@/components/ui/primitives";

const features: Feature[] = [
  {
    icon: Search,
    title: "Find the right opportunities",
    description: "Discover engineering roles aligned with your skills, experience and interests — not just your last job title.",
  },
  {
    icon: Route,
    title: "Build your career",
    description: "Move from one opportunity to the next with a clear direction, so every step builds on the last.",
  },
  {
    icon: Wallet,
    title: "Earn from your skills",
    description: "Explore full-time, contract and part-time work, with compensation shown up front wherever it's available.",
  },
  {
    icon: Users,
    title: "Work with great teams",
    description: "Explore opportunities across companies, products and technology environments, from early-stage to established.",
  },
  {
    icon: Sprout,
    title: "Grow your skills",
    description: "See what each role can teach you, so you can choose work that develops the skills you want next.",
  },
  {
    icon: InfinityIcon,
    title: "Keep moving forward",
    description: "Careers last decades. We stay useful between job searches, as your skills, goals and options evolve.",
  },
];

export function ValuePropsSection() {
  return (
    <Section id="how-lunava-helps" tone="white" labelledBy="value-heading" className="overflow-hidden">
      <div aria-hidden="true" className="bg-grid-light mask-radial absolute inset-x-0 top-0 h-[32rem] opacity-60" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="value-heading"
            eyebrow="How Lunava helps"
            title={
              <>
                More Than a Job. <span className="text-gradient-ink">A Career Path.</span>
              </>
            }
            description="Most job boards stop at the application. Lunava is built around what comes after — the next role, the next skill, better pay and the career you're building over time."
            align="center"
          />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 90}>
              <FeatureCard feature={f} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <Link href="/how-it-works" className="inline-flex items-center gap-1.5 text-sm font-medium text-lunar-700 hover:text-lunar-600">
            See how Lunava works
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
