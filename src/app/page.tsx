import {
  AboutBanner,
  HomeBanner,
  InsightsSection,
  StrengthBanner,
  StudiesSection,
  TeamBanner,
  TestimonialSection,
  TrustedPartners
} from "./flavors/HomeFlavors";

export default function Home() {

  return (
    <div className=" w-full overflow-hidden">
      <HomeBanner />
      <TrustedPartners />
      <AboutBanner />
      <StrengthBanner />
      <StudiesSection />
      <TeamBanner />
      <TestimonialSection />
      <InsightsSection />
    </div >
  );
}
