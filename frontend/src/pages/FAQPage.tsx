import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import faqTranslations from "@/translations/faqTranslations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import BannerImg from "@/assets/cover page.jpg";

const faqs = [
  
  {
    question: "What is DottFit?",
    answer: "DottFit is a digital-first fitness and wellness platform that blends technology, personal coaching, and science-based training. We offer custom workout plans, nutrition guidance, progress tracking, and lifestyle coaching — all in one place.",
  },
  {
    question: "How does DottFit work?",
    answer: "Once you sign up, you receive: A personalized fitness plan, Goal-based nutrition guidance, Progress tracking tools, Access to trainers and wellness experts, and Daily reminders, challenges & habit building support. Everything is accessible through your mobile and website.",
  },
  {
    question: "Who can join DottFit?",
    answer: "DottFit is suitable for: Beginners, Intermediate and advanced lifters, Weight-loss and fat-loss clients, Muscle-building clients, People with knee, back, shoulder issues (specialized programs), and Busy professionals needing quick and efficient home workouts.",
  },
  {
    question: "Do I need equipment?",
    answer: "No. We offer: Bodyweight home programs, Minimal equipment programs, and Full gym programs. You can choose based on your needs.",
  },
  {
    question: "Are the workout plans customized?",
    answer: "Yes. Every plan is customized based on: Age, Fitness level, Body goals, Existing injuries, Lifestyle (work schedule, sleep, stress), and Food preferences (veg, vegan, lactose-free, South Indian, etc.).",
  },
  {
    question: "Do you provide nutrition or diet plans?",
    answer: "Yes. You get personalized nutrition guidance: South Indian & Indian veg options, High-protein meal suggestions, Lactose-free meal options, Portion control tools, and Daily protein requirement guidance.",
  },
  {
    question: "Do you offer live sessions?",
    answer: "Yes, based on your subscription. We provide: One-on-one coaching, Form-correction sessions, and Live weekly guidance.",
  },
  {
    question: "What is 'Wellness & Techno Fitness'?",
    answer: "This is our signature approach: Techno = smart tracking, analytics, progress monitoring. Wellness = complete health including fitness, nutrition, sleep, lifestyle. Together, it gives you sustainable long-term results.",
  },
  {
    question: "How do I track my progress?",
    answer: "You can track: Body weight, Inch loss, Strength improvements, Cardio endurance, Daily activity, and Before/after transformation photos. Your coach reviews your progress regularly and adjusts your plan.",
  },
  {
    question: "Can I cancel or change my plan anytime?",
    answer: "Yes. You can upgrade, pause, or modify your plan, depending on your subscription type.",
  },
  {
    question: "What makes DottFit different from other fitness apps?",
    answer: "Personalized coaching (not generic plans), Technology-based tracking, Indian-friendly nutrition, Injury-friendly workouts, Faster, sustainable results, and 24/7 support.",
  },
  {
    question: "Is DottFit suitable for people with medical conditions?",
    answer: "Yes, as long as conditions are disclosed. We create safe programs for: Back pain, Knee pain, Shoulder issues, Obesity, Pre-diabetes / lifestyle issues. (We do not replace a doctor's advice.)",
  },
  {
    question: "How fast will I see results?",
    answer: "Most clients see changes in: 2–3 weeks – energy, sleep, small inch loss, 4–6 weeks – visible physical changes, 8–12 weeks – major transformation. Consistency = Results.",
  },
  {
    question: "How do I get started?",
    answer: "Click Join Now or Start Your Plan, fill your details, and our system will immediately guide you through onboarding.",
  },
];

function FAQHero() {
    const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";



  return (
    <section className="py-20 relative overflow-hidden">
      <img 
        src={BannerImg}
        alt="DottFit FAQ"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {faqTranslations.hero.titlePart1[lang]}
            {/* DottFit –  */}
            <span className="text-gold">
                {faqTranslations.hero.titlePart2[lang]}
              {/* FAQ */}
              </span>
          </h1>
          <p className="text-xl text-white/80">
          {faqTranslations.hero.subtitle[lang]}
            {/* Frequently Asked Questions */}
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
   const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqTranslations.faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-card rounded-2xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-6">
                   {faq.question[lang]}

                  {/* {faq.question} */}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer[lang]}

                  {/* {faq.answer} */}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FAQCTA() {

  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
           {faqTranslations.cta.title[lang]}
          {/* Still Have Questions? */}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {faqTranslations.cta.description[lang]}
          {/* Our team is here to help. Reach out and we'll get back to you within 24 hours. */}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
            {faqTranslations.cta.contactButton[lang]}
              {/* Contact Us */}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/programs">
            {faqTranslations.cta.programsButton[lang]}
            {/* View Programs */}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQSection />
      <FAQCTA />
    </>
  );
}