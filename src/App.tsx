import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import VisitCard from "@/components/VisitCard";

const App = () => (
  <TooltipProvider>
    <div className="dark">
      <Toaster />
      <Sonner />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-black p-4">
        <VisitCard />
      </div>
    </div>
  </TooltipProvider>
);

export default App;
