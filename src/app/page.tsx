import AboutBanner from "./flavors/HomeFlavors/ABoutBanner";
import HomeBanner from "./flavors/HomeFlavors/HomeBanner";
import StrengthBanner from "./flavors/HomeFlavors/StrengthBanner";
import StudiesSection from "./flavors/HomeFlavors/StudiesBanner";
import TrustedPartners from "./flavors/HomeFlavors/trustedPartners";

export default function Home() {

  return (
    <div className=" w-full overflow-hidden">
      <HomeBanner />
      <TrustedPartners />
      <AboutBanner />
      <StrengthBanner />
      <StudiesSection />
    </div >
  );
}
