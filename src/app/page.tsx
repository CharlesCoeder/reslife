import WelcomeHero from "../components/welcome-hero";
import LoginButton from "@/components/login-button";
import LogoutButton from "@/components/logout-button";
import DetailsButtonServer from "@/components/details-button-server";

export default function Home() {
  return (
    <main className="flex flex-col">
      <WelcomeHero />
      <LoginButton />
      <LogoutButton />
      <DetailsButtonServer />
    </main>
  );
}
