import { useState } from "react";
import { UpdatedNavigation } from "./components/UpdatedNavigation";
import { UpdatedFooter } from "./components/UpdatedFooter";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "how-it-works" | "pricing" | "about" | "contact">("home");

  const handleNavigate = (page: "home" | "how-it-works" | "pricing" | "about" | "contact") => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "how-it-works":
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case "pricing":
        return <PricingPage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <UpdatedNavigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <UpdatedFooter onNavigate={handleNavigate} />
    </div>
  );
}
