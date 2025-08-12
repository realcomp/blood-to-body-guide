const AboutCreator = () => {
  return (
    <section className="py-20 bg-background min-h-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 text-foreground">
            About the Creator
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative overflow-hidden">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/lovable-uploads/79189360-0bd7-4e21-ad4b-42c60c56f102.png" 
                  alt="Dmitry Braverman at Olympic & 226 Sochi 2018 triathlon finish line"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl -translate-x-3 -translate-y-3"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl translate-x-3 translate-y-3"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm <a href="https://www.linkedin.com/in/realcomp/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors underline">Dmitry Braverman</a> - a product and project manager with over 20 years of experience building digital products. I've launched and scaled solutions across media, fintech, automation, e-commerce, and advertising. I've led cross-functional teams, overseen end-to-end development, managed budgets up to $300,000, and delivered products that combine strong UX with real-world impact.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In the past, I led digital transformation at Forbes Russia and Cosmopolitan, developed AI tools and no-code platforms, and built media ecosystems with millions of users. I know how to take a product from idea to release - and make it matter.
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xl font-semibold text-foreground mb-2">
                    But this bot wasn't made for the market.
                  </p>
                  <p className="text-lg text-secondary font-medium">
                    It started with a lab result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;