
import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Predictive Pulse AI</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Real-time equipment monitoring and predictive maintenance</p>
        </header>
        
        <Dashboard />

        {/* Floating Chat Button */}
        <Button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary/90 hover:bg-primary"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>

        {/* Chat Modal */}
        {isChatOpen && (
          <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-in fade-in slide-in-from-bottom-5">
            <Chatbot onClose={() => setIsChatOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
