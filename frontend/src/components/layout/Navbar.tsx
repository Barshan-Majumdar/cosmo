import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Rocket } from 'lucide-react';
import { cn } from '../../lib/utils';
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFeaturesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('features');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('features');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-full px-6 h-14 flex items-center shadow-2xl w-full max-w-4xl justify-between">
        
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-white text-black p-1 rounded-full group-hover:scale-110 transition-transform">
             <Rocket className="w-4 h-4 fill-current" />
          </div>
          <span className="font-bold text-sm tracking-wide text-brand-text">Learn-Flow</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <SignedOut>
             <Link 
               to="/" 
               className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             >
               Home
             </Link>
             <a 
               href="#features" 
               className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
               onClick={handleFeaturesClick}
             >
               Features
             </a>
          </SignedOut>

          <SignedIn>
            {[
              { name: 'Dashboard', path: '/dashboard' },
              { name: 'Planner', path: '/planner' },
              { name: 'AI Tutor', path: '/tutor' },
            ].map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "text-xs font-medium transition-colors hover:text-white",
                  location.pathname === link.path ? "text-white" : "text-gray-400"
                )}
              >
                {link.name}
              </Link>
            ))}
          </SignedIn>
        </div>

        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm" className="h-8 text-xs rounded-full px-4 bg-white text-black border-none hover:bg-gray-200 hover:text-black font-semibold">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" appearance={{
              elements: {
                avatarBox: "w-8 h-8 ring-2 ring-white/20"
              }
            }}/>
          </SignedIn>
        </div>

      </nav>
    </div>
  );
}
