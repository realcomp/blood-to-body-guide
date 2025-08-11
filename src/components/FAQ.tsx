import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is this a real doctor?",
      answer: "No — it's an AI-powered assistant. Always consult a physician for medical decisions."
    },
    {
      question: "Can I use it without a blood test?",
      answer: "Yes, but recommendations will be general rather than personalized to your specific health needs."
    },
    {
      question: "Why can't I send food photos?",
      answer: "Food photo analysis works only after uploading a blood test, as it needs your health data to provide relevant recommendations."
    },
    {
      question: "How to replace my blood test?",
      answer: "Use /blood delete command and upload a new test. Your recommendations will update based on the new results."
    },
    {
      question: "My photo wasn't recognized",
      answer: "For best results, send a PDF or a clear, well-lit scan. Ensure all text is readable and the image isn't blurry."
    },
    {
      question: "Can I use it for someone else?",
      answer: "Not recommended — results are personalized based on individual health data and should not be shared."
    },
    {
      question: "What languages are supported?",
      answer: "Over 20 languages — the bot detects them automatically and responds in your preferred language."
    },
    {
      question: "Can I upload multiple tests?",
      answer: "Not yet — currently one active test per user. Multiple test tracking is planned for future updates."
    },
    {
      question: "Is my data secure?",
      answer: "Yes — all data is encrypted and never shared with third parties. Your privacy and security are our top priorities."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Dr.Holesto
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;