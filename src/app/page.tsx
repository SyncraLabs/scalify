import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";

// Lazy load below-the-fold sections — they don't block initial paint
const ServicesSection = dynamic(
  () =>
    import("@/components/ServicesSection").then((m) => ({
      default: m.ServicesSection,
    })),
  { ssr: true }
);
const ShowcaseSection = dynamic(
  () =>
    import("@/components/ShowcaseSection").then((m) => ({
      default: m.ShowcaseSection,
    })),
  { ssr: true }
);
const WhySection = dynamic(
  () =>
    import("@/components/WhySection").then((m) => ({ default: m.WhySection })),
  { ssr: true }
);
const ProcessSection = dynamic(
  () =>
    import("@/components/ProcessSection").then((m) => ({
      default: m.ProcessSection,
    })),
  { ssr: true }
);
const TechMarquee = dynamic(
  () =>
    import("@/components/TechMarquee").then((m) => ({
      default: m.TechMarquee,
    })),
  { ssr: true }
);
const StatsSection = dynamic(
  () =>
    import("@/components/StatsSection").then((m) => ({
      default: m.StatsSection,
    })),
  { ssr: true }
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/TestimonialsSection").then((m) => ({
      default: m.TestimonialsSection,
    })),
  { ssr: true }
);
const CTASection = dynamic(
  () =>
    import("@/components/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true }
);
const WhatsAppButton = dynamic(
  () =>
    import("@/components/WhatsAppButton").then((m) => ({
      default: m.WhatsAppButton,
    })),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ShowcaseSection />
      <WhySection />
      <ProcessSection />
      <TechMarquee />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <WhatsAppButton />
    </>
  );
}
