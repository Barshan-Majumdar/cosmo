import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { Layout } from "./components/layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { Dashboard } from "./pages/Dashboard";
import { SyllabusUpload } from "./pages/SyllabusUpload";
import { StudyPlanner } from "./pages/StudyPlanner";
import { AITutor } from "./pages/AITutor";
import ScrollToTop from "./components/layout/ScrollToTop";

// Retrieve Clerk Publishable Key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.error("Missing Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your .env file.");
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut><RedirectToSignIn /></SignedOut>
    </>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            
            <Route path="dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            
            <Route path="upload" element={
              <ProtectedRoute>
                <SyllabusUpload />
              </ProtectedRoute>
            } />
            
            <Route path="planner" element={
              <ProtectedRoute>
                <StudyPlanner />
              </ProtectedRoute>
            } />
            
            <Route path="tutor" element={
              <ProtectedRoute>
                <AITutor />
              </ProtectedRoute>
            } />
            
            {/* Features is now embedded in Landing Page, redirecting strictly to ensure users don't get 404 if they try old link */}
            <Route path="features" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
