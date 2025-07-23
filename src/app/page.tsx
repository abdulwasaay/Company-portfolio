import AboutBanner from "./flavors/HomeFlavors/ABoutBanner";
import HomeBanner from "./flavors/HomeFlavors/HomeBanner";
import StrengthBanner from "./flavors/HomeFlavors/StrengthBanner";
import TrustedPartners from "./flavors/HomeFlavors/trustedPartners";

export default function Home() {

  return (
    <div className=" w-full overflow-x-hidden">
      <HomeBanner />
      <TrustedPartners />
      <AboutBanner />
      <StrengthBanner />
    </div >
  );
}
