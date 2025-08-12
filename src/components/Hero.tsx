import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Activity } from "lucide-react";
const heroImage = "/lovable-uploads/8ce8187a-c7a4-4cde-a105-5410dc846377.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary-soft to-accent/20 py-20 lg:py-28 min-h-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                <Bot className="w-5 h-5" />
                AI-Powered Health Assistant
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Dr.Holesto —{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Your Personal Nutrition Assistant
                </span>{" "}
                Based on Blood Analysis
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                AI-powered Telegram bot that decodes your lab results and creates a personalized nutrition plan tailored to your body's unique needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://t.me/holesto_bot" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="group">
                  Start in Telegram
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">AI</div>
                <div className="text-sm text-muted-foreground">Powered</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Secure</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative overflow-hidden">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Dr.Holesto - AI nutrition assistant analyzing blood test results"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl -translate-x-3 -translate-y-3"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl translate-x-3 translate-y-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;