import { AlertTriangle, Calendar, Smartphone, Activity, TestTube, Bell } from "lucide-react";

const Limitations = () => {
  const limitations = [
    "Diagnose or replace doctors",
    "Compare past and current tests", 
    "Give medication advice",
    "Precisely calculate calories from photos"
  ];

  const plannedFeatures = [
    {
      icon: TestTube,
      feature: "Support for multiple tests with history"
    },
    {
      icon: Activity,
      feature: "Tracking weight, height, and activity"
    },
    {
      icon: Calendar,
      feature: "Recipe-based food evaluation"
    },
    {
      icon: Bell,
      feature: "Blood test reminders"
    },
    {
      icon: Smartphone,
      feature: "Mobile app"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary-soft/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Current Limitations & Future Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparency about what we can and can't do, plus what's coming next
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Current Limitations */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-warning/10 to-warning/5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-warning" />
                <h3 className="text-xl font-semibold text-foreground">What It Can't Do Yet</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-warning/10 rounded-lg border border-warning/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-warning">Important:</strong> Dr.Holesto is an AI assistant, not a medical professional. 
                  Always consult with healthcare providers for medical decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Planned Features */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Planned Features</h3>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {plannedFeatures.map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Coming Soon:</strong> We're constantly improving Dr.Holesto 
                  based on user feedback and advancing AI capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limitations;