import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Features } from "./Features";

export function LandingPage() {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-text pt-24 font-inter">
      
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 text-center max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gray/20 via-brand-black to-brand-black -z-10 blur-3xl opacity-50" />
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          The Smarter Way <br />
          <span className="text-brand-text-muted">to Master Learning</span>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
          Learn-Flow helps modern students streamline their education with a powerful, AI-driven platform that adapts to you.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link to="/dashboard">
            <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-sm tracking-wide transition-all transform hover:scale-105">
              Start for free
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="ghost" 
            className="h-12 px-8 rounded-full border border-brand-gray text-brand-text hover:bg-brand-gray/50 text-sm font-semibold"
            onClick={scrollToFeatures}
          >
            Explore Features
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 pb-32 max-w-7xl mx-auto">
        <Features />
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-gray py-12 text-center text-brand-text-muted text-sm">
        <p>&copy; 2025 Learn-Flow. All rights reserved.</p>
      </footer>

    </div>
  );
}
