import { Button } from "@/components/ui/button";
import { Mail, Globe, Shield, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your personalized nutrition journey with Dr.Holesto today
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start in Telegram
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="soft" size="lg">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Website</h3>
                  <a 
                    href="https://holesto.sportomatics.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-glow transition-colors"
                  >
                    holesto.sportomatics.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border/50 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a 
                    href="mailto:admin@sportomatics.com"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    admin@sportomatics.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-secondary" />
              Your data is encrypted and never shared with third parties
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;