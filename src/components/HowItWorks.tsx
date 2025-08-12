import { Upload, Brain, Target, UtensilsCrossed, Camera, TrendingUp, MessageCircle, Smartphone, Globe } from "lucide-react";

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
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-px bg-gradient-to-r from-primary/50 to-transparent z-0 overflow-hidden" 
                       style={{
                         transform: index % 3 === 2 ? 'translateY(100px) rotate(90deg)' : 'none',
                         width: index % 3 === 2 ? '100px' : '32px',
                         maxWidth: '100px'
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

        {/* Why Telegram Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border/50 p-8 lg:p-12">
            <div className="text-center space-y-6 mb-8">
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-primary to-primary-glow rounded-full">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Telegram
              </h3>
            </div>
            
            <div className="space-y-6 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built Dr.Holesto in Telegram for a reason.
              </p>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Most people install dozens of apps they rarely open — but a messenger is something you use every day. 
                That means no extra downloads, no updates, no learning curve. Just open the chat and start.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Smartphone className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-1">Always accessible</h4>
                    <p className="text-sm text-muted-foreground">No extra downloads or updates needed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-secondary/5 rounded-lg">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground mb-1">Simple interface</h4>
                    <p className="text-sm text-muted-foreground">Familiar chat experience everyone knows</p>
                  </div>
                </div>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed">
                Yes, a messenger interface is simpler than a custom app, but it's always at your fingertips — 
                and that makes it far more accessible.
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-6 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                <Globe className="w-5 h-5 text-secondary" />
                <p className="text-sm font-medium text-foreground">
                  In the future, we'll also bring Dr.Holesto to WhatsApp, so you can choose the platform you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;