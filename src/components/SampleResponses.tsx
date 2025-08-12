import { TestTube, UtensilsCrossed, AlertTriangle, CheckCircle, Calendar, ShoppingCart, ExternalLink } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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

          {/* Weekly Menu */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg">
            <div className="p-6 bg-gradient-to-r from-accent/10 to-accent/5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">7-Day Personalized Menu</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Optimized for your goals:</h4>
                    <p className="text-sm text-muted-foreground">Lower cholesterol, support liver health</p>
                  </div>
                </div>

                <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                  <h4 className="font-semibold text-foreground mb-3">Sample day (Day 1):</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Breakfast:</span>
                      <p className="text-muted-foreground">Oatmeal with apple and cinnamon</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Lunch:</span>
                      <p className="text-muted-foreground">Lentil soup + grilled chicken with quinoa</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Snack:</span>
                      <p className="text-muted-foreground">Carrot sticks with hummus</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Dinner:</span>
                      <p className="text-muted-foreground">Baked salmon with Brussels sprouts</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-soft rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Weekly features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Complete 7-day meal plan with calorie breakdown</li>
                    <li>• Balanced macronutrients for optimal health</li>
                    <li>• Recipe numbers for easy cooking instructions</li>
                    <li>• Daily nutritional targets achieved</li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="/lovable-uploads/842bfbf5-749e-4671-91f3-a953901bdb36.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg border border-emerald-500/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-600">See printed example</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Shopping List */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg">
            <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-semibold text-foreground">Smart Shopping List</h3>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Organized by store sections:</h4>
                    <p className="text-sm text-muted-foreground">Produce, Proteins, Pantry, Dairy, Grains & more</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                    <h5 className="font-medium text-foreground mb-2">Produce</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Carrots - 1 kg</li>
                      <li>• Lemons - 4 pieces</li>
                      <li>• Broccoli - 1 kg</li>
                      <li>• Bell peppers - 6 pieces</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary-soft rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-2">Proteins</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Salmon fillets - 2 pieces</li>
                      <li>• Chicken thighs - 1 kg</li>
                      <li>• Lentils - 500g</li>
                      <li>• Firm tofu - 2 packs</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-3">Smart features:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Exact quantities calculated for 7 days</li>
                    <li>• Categorized by supermarket layout</li>
                    <li>• Checkboxes for easy shopping</li>
                    <li>• Optimized to minimize food waste</li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="/lovable-uploads/bb94867b-dd68-480d-8bac-86c0d1547cc2.png" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg border border-emerald-500/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-600">See printed example</span>
                  </a>
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