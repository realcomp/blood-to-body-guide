import { Heart, Brain, Shield, TrendingUp } from "lucide-react";

const WhyItMatters = () => {
  const insights = [
    {
      icon: Heart,
      text: "Food affects everything: hormones, mood, metabolism, immunity, even sleep."
    },
    {
      icon: Brain,
      text: "Poor nutrition is the leading cause of chronic illness in the 21st century."
    },
    {
      icon: Shield,
      text: "Personalized, conscious nutrition is the best prevention."
    },
    {
      icon: TrendingUp,
      text: "Dr.Holesto gives you the answer — based on your own medical data."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary-soft/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              You are what you eat.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Food is not just fuel — it's information for your body.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl border border-border/50 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <insight.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {insight.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground">
              But how do you know what your body truly needs?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;