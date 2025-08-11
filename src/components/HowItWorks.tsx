import { Upload, Brain, Target, UtensilsCrossed, Camera, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload your blood test",
      description: "Send a photo or PDF to the bot"
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI analyzes your results",
      description: "The bot identifies any issues automatically"
    },
    {
      number: "03",
      icon: Target,
      title: "Get tailored recommendations",
      description: "Receive personalized nutrition and lifestyle advice"
    },
    {
      number: "04",
      icon: UtensilsCrossed,
      title: "Complete menu & shopping list",
      description: "Get recipes and organized shopping lists"
    },
    {
      number: "05",
      icon: Camera,
      title: "Food photo analysis",
      description: "Send food photos for instant feedback"
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Track your progress",
      description: "Monitor changes and refine your goals"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary-soft/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to transform your health with personalized nutrition
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-primary/50 to-transparent z-0" 
                       style={{
                         transform: index % 3 === 2 ? 'translateY(100px) rotate(90deg)' : 'none',
                         width: index % 3 === 2 ? '100px' : '32px'
                       }}
                  />
                )}
                
                <div className="relative z-10 p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group-hover:scale-105">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                      <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-secondary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;