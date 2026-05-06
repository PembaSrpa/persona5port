import { useState } from "react";
import { TitleScreen } from "@/components/p5/TitleScreen";
import { MainMenu, type MenuKey } from "@/components/p5/MainMenu";
import { ConfidantView } from "@/components/p5/ConfidantView";
import { PalacesView } from "@/components/p5/PalacesView";
import { BlogsView } from "@/components/p5/BlogsView";
import { ContactView } from "@/components/p5/ContactView";
import { MuteToggle } from "@/components/MuteToggle";
import { SlashTransition, useSlash } from "@/components/p5/SlashTransition";

type Screen = "title" | "menu" | "profile" | "palaces" | "portals" | "contact";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("title");
  const slash = useSlash();

  const goTo = (next: Screen) => {
    slash.trigger(() => setScreen(next));
  };

  return (
    <main className="min-h-screen bg-p5-black text-p5-bone">
      <h1 className="sr-only">Pemba — Persona 5 styled data analyst portfolio</h1>

      {screen === "title"   && <TitleScreen onStart={() => goTo("menu")} />}
      {screen === "menu"    && <MainMenu onSelect={(k: MenuKey) => goTo(k as Screen)} />}
      {screen === "profile" && <ConfidantView onBack={() => goTo("menu")} />}
      {screen === "palaces" && <PalacesView onBack={() => goTo("menu")} />}
      {screen === "portals" && <BlogsView onBack={() => goTo("menu")} />}
      {screen === "contact" && <ContactView onBack={() => goTo("menu")} />}

      {screen !== "title" && <MuteToggle />}
      <SlashTransition active={slash.active} onDone={() => {}} />
    </main>
  );
};

export default Index;
