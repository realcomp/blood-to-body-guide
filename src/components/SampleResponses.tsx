import { TestTube, UtensilsCrossed, AlertTriangle, CheckCircle } from "lucide-react";

const SampleResponses = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Sample Responses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Dr.Holesto analyzes your data and provides actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Blood Test Analysis */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg">
            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <TestTube className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Blood Test Analysis</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Detected abnormalities:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Total cholesterol: <span className="font-medium text-warning">232 mg/dL</span> (normal: 120–200)</li>
                      <li>• ALT: <span className="font-medium text-warning">58 U/L</span> (normal: 0–40)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Goals:</h4>
                    <p className="text-sm text-muted-foreground">Lower cholesterol, reduce liver strain</p>
                  </div>
                </div>

                <div className="bg-secondary-soft rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Recommendations:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reduce fatty meats, sausages, and fried foods</li>
                    <li>• Add oatmeal, buckwheat, and vegetables to every meal</li>
                    <li>• Eat fish, nuts, and olive oil weekly</li>
                    <li>• Avoid alcohol for at least 2 weeks</li>
                    <li>• Drink 2+ liters of water daily</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Food Photo Analysis */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg">
            <div className="p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-semibold text-foreground">Food Photo Analysis</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-secondary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Detected:</h4>
                    <p className="text-sm text-muted-foreground">Pita with lamb</p>
                  </div>
                </div>

                <div className="bg-warning/10 rounded-lg p-4 border border-warning/20">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                    Recommendation:
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-medium text-warning">Eat with caution</span> — high in calories and fat. 
                    Reduce portion, avoid added oils, and add a fresh salad.
                  </p>
                </div>

                <div className="bg-secondary-soft rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Better alternatives:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Replace with whole grain pita</li>
                    <li>• Add cucumber and tomato salad</li>
                    <li>• Use lean protein like grilled chicken</li>
                    <li>• Include yogurt-based sauce instead of oil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleResponses;