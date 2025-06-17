import Loading from "../components/ui/Loading";
import { useGetUser } from "../features/Auth/useLogin";
import FeaturesSection from "../features/HomeLayOut/FeaturesSection";
import HeroSection from "../features/HomeLayOut/HeroSection";

export default function Home() {
  const { isPending } = useGetUser();

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <>
          <HeroSection />

          <FeaturesSection />
        </>
      )}
    </>
  );
}
