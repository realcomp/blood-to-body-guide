const StoryBehindIt = () => {
  return (
    <section className="py-20 bg-secondary-soft/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-foreground">
            The Story Behind It
          </h2>
          
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                One day I received routine bloodwork - and was shocked to see dangerously high cholesterol.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I felt fine. I work out. I've completed multiple Ironman races. And yet, something was clearly off.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I began researching, trying to make sense of what those numbers meant, and what I could — or couldn't — eat. It was harder than it should be.
              </p>
              
              <div className="py-8">
                <p className="text-2xl font-bold text-primary mb-4">
                  So I built a tool.
                </p>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">First, just for myself.</p>
                  <p className="text-lg text-muted-foreground">Then for my wife.</p>
                  <p className="text-lg text-muted-foreground">And finally, for anyone who wants to understand their health and eat accordingly.</p>
                </div>
              </div>
              
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                <p className="text-xl font-semibold text-foreground mb-4">
                  Dr.Holesto is simple, smart, and personal — a Telegram bot that speaks your language and helps you take control of your well-being.
                </p>
                <p className="text-lg text-secondary font-medium">
                  No app. No login. Just insight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryBehindIt;