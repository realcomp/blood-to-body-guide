import { Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Bot className="w-8 h-8 text-primary-glow" />
            <span className="text-2xl font-bold">Dr.Holesto</span>
          </div>
          <p className="text-gray-300 max-w-md mx-auto">
            Your AI-powered personal nutrition assistant based on blood analysis
          </p>
          <div className="pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2024 Dr.Holesto by Sportomatics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;