import { Upload, Zap, Target, Camera, Calendar, ShoppingCart, TrendingUp, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Fast Blood Test Upload",
      description: "Send a photo or PDF (JPG, PNG, PDF up to 3 MB) directly to the bot"
    },
    {
      icon: Zap,
      title: "Instant Result Analysis",
      description: "Automatically recognizes key metrics, determines if they're normal, and highlights abnormalities"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Explains what your results mean and offers clear, actionable tips"
    },
    {
      icon: Camera,
      title: "Daily Food Assessment",
      description: "Send a food photo; the bot checks if it suits your health and suggests improvements"
    },
    {
      icon: Calendar,
      title: "7-Day Meal Plans",
      description: "Generates menus tailored to your needs with exact calories, proteins, fats, and carbs"
    },
    {
      icon: ShoppingCart,
      title: "Smart Shopping Lists",
      description: "Automatic shopping list creation optimized for quantity and timing"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Stores your history to monitor changes and adjust recommendations"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "20+ languages supported with automatic detection"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Key Features & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to understand your body and eat in alignment with your health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;