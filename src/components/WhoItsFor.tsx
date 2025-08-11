import { FileText, Stethoscope, Heart } from "lucide-react";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: FileText,
      title: "Lab Result Owners",
      description: "People who have lab results but don't know how to interpret them"
    },
    {
      icon: Stethoscope,
      title: "Treatment Patients",
      description: "Those undergoing treatment who want to align diet with therapy"
    },
    {
      icon: Heart,
      title: "Health Conscious",
      description: "Healthy individuals who want to maintain optimal health"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary-soft/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Who It's For
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dr.Holesto is designed for anyone who wants to make informed nutrition choices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="space-y-6">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <audience.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
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

export default WhoItsFor;