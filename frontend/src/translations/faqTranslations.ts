export interface MultiLangText {
  en: string;
  hi: string;
  te: string;
}

export interface FAQItem {
  question: MultiLangText;
  answer: MultiLangText;
}

export interface FAQPageTranslations {
  hero: {
    titlePart1: MultiLangText;
    titlePart2: MultiLangText;
    subtitle: MultiLangText;
  };

  faqs: FAQItem[];

  cta: {
    title: MultiLangText;
    description: MultiLangText;
    contactButton: MultiLangText;
    programsButton: MultiLangText;
  };
}

const faqTranslations: FAQPageTranslations = {
  hero: {
    titlePart1: {
    en: "DottFit – ",
    hi: "DottFit – ",
    te: "DottFit – ",
  },
  titlePart2: {
    en: "FAQ",
    hi: "सामान्य प्रश्न",
    te: "తరచుగా అడిగే ప్రశ్నలు",
  },
    subtitle: {
      en: "Frequently Asked Questions",
      hi: "अक्सर पूछे जाने वाले प्रश्न",
      te: "తరచుగా అడిగే ప్రశ్నలు",
    },
  },

  faqs: [
    {
      question: {
        en: "What is DottFit?",
        hi: "DottFit क्या है?",
        te: "DottFit అంటే ఏమిటి?",
      },
      answer: {
        en: "DottFit is a digital-first fitness and wellness platform that blends technology, personal coaching, and science-based training. We offer custom workout plans, nutrition guidance, progress tracking, and lifestyle coaching — all in one place.",
        hi: "DottFit एक डिजिटल-फर्स्ट फिटनेस और वेलनेस प्लेटफॉर्म है जो तकनीक, पर्सनल कोचिंग और वैज्ञानिक प्रशिक्षण को जोड़ता है। हम कस्टम वर्कआउट प्लान, न्यूट्रिशन गाइडेंस, प्रोग्रेस ट्रैकिंग और लाइफस्टाइल कोचिंग — सब कुछ एक ही जगह प्रदान करते हैं।",
        te: "DottFit ఒక డిజిటల్ ఆధారిత ఫిట్‌నెస్ మరియు వెల్‌నెస్ ప్లాట్‌ఫామ్, ఇది టెక్నాలజీ, వ్యక్తిగత కోచింగ్ మరియు శాస్త్రీయ శిక్షణను కలిపి అందిస్తుంది. మేము వ్యక్తిగత వ్యాయామ ప్రణాళికలు, పోషకాహార మార్గదర్శకాలు, ప్రోగ్రెస్ ట్రాకింగ్ మరియు జీవనశైలి కోచింగ్‌ను ఒకే వేదికలో అందిస్తాము.",
      },
    },

    {
      question: {
        en: "How does DottFit work?",
        hi: "DottFit कैसे काम करता है?",
        te: "DottFit ఎలా పనిచేస్తుంది?",
      },
      answer: {
        en: "Once you sign up, you receive a personalized fitness plan, goal-based nutrition guidance, progress tracking tools, trainer access, and daily habit support. Everything is accessible via mobile and website.",
        hi: "साइन अप करने के बाद आपको व्यक्तिगत फिटनेस प्लान, लक्ष्य आधारित न्यूट्रिशन गाइडेंस, प्रोग्रेस ट्रैकिंग टूल्स, ट्रेनर एक्सेस और दैनिक हैबिट सपोर्ट मिलता है। सब कुछ मोबाइल और वेबसाइट से उपलब्ध है।",
        te: "సైన్ అప్ చేసిన తర్వాత మీరు వ్యక్తిగత ఫిట్‌నెస్ ప్రణాళిక, లక్ష్య ఆధారిత పోషకాహార మార్గదర్శకాలు, ప్రోగ్రెస్ ట్రాకింగ్ సాధనాలు, ట్రైనర్ యాక్సెస్ మరియు రోజువారీ అలవాటు మద్దతు పొందుతారు. ఇవన్నీ మొబైల్ మరియు వెబ్‌సైట్ ద్వారా అందుబాటులో ఉంటాయి.",
      },
    },

    {
      question: {
        en: "Who can join DottFit?",
        hi: "DottFit में कौन शामिल हो सकता है?",
        te: "DottFit లో ఎవరు చేరవచ్చు?",
      },
      answer: {
        en: "Beginners, advanced lifters, weight-loss clients, muscle builders, people with joint issues, and busy professionals.",
        hi: "शुरुआती, एडवांस लिफ्टर्स, वजन कम करने वाले, मसल बनाने वाले, जोड़ों की समस्या वाले लोग और व्यस्त प्रोफेशनल्स शामिल हो सकते हैं।",
        te: "ప్రారంభికులు, అడ్వాన్స్ లిఫ్టర్లు, బరువు తగ్గాలనుకునేవారు, మసిల్స్ పెంచుకోవాలనుకునేవారు, సంధి సమస్యలున్నవారు మరియు బిజీ ప్రొఫెషనల్స్ చేరవచ్చు.",
      },
    },

    {
      question: {
        en: "Do I need equipment?",
        hi: "क्या मुझे उपकरण की आवश्यकता है?",
        te: "నాకు పరికరాలు అవసరమా?",
      },
      answer: {
        en: "No. We offer bodyweight, minimal equipment, and full gym programs.",
        hi: "नहीं। हम बॉडीवेट, न्यूनतम उपकरण और फुल जिम प्रोग्राम प्रदान करते हैं।",
        te: "కాదు. మేము బాడీవెయిట్, కనీస పరికరాలు మరియు పూర్తి జిమ్ ప్రోగ్రామ్‌లు అందిస్తాము.",
      },
    },

    {
      question: {
        en: "Are the workout plans customized?",
        hi: "क्या वर्कआउट प्लान कस्टमाइज्ड होते हैं?",
        te: "వ్యాయామ ప్రణాళికలు వ్యక్తిగతీకరించబడుతాయా?",
      },
      answer: {
        en: "Yes. Plans are customized based on age, fitness level, goals, injuries, lifestyle, and food preferences.",
        hi: "हाँ। योजना आयु, फिटनेस स्तर, लक्ष्य, चोट, लाइफस्टाइल और भोजन पसंद के आधार पर बनाई जाती है।",
        te: "అవును. ప్రణాళికలు వయస్సు, ఫిట్‌నెస్ స్థాయి, లక్ష్యాలు, గాయాలు, జీవనశైలి మరియు ఆహార అభిరుచుల ఆధారంగా రూపొందిస్తాము.",
      },
    },

    {
      question: {
        en: "How fast will I see results?",
        hi: "परिणाम कितनी जल्दी दिखेंगे?",
        te: "ఫలితాలు ఎంత త్వరగా కనిపిస్తాయి?",
      },
      answer: {
        en: "2–3 weeks: improved energy. 4–6 weeks: visible changes. 8–12 weeks: major transformation.",
        hi: "2–3 सप्ताह: ऊर्जा में सुधार। 4–6 सप्ताह: दिखने योग्य बदलाव। 8–12 सप्ताह: बड़ा परिवर्तन।",
        te: "2–3 వారాలు: శక్తి మెరుగుదల. 4–6 వారాలు: కనిపించే మార్పులు. 8–12 వారాలు: ప్రధాన మార్పు.",
      },
    },

    {
      question: {
        en: "How do I get started?",
        hi: "मैं कैसे शुरू करूँ?",
        te: "ఎలా ప్రారంభించాలి?",
      },
      answer: {
        en: "Click Join Now or Start Your Plan and complete onboarding.",
        hi: "Join Now या Start Your Plan पर क्लिक करें और विवरण भरें।",
        te: "Join Now లేదా Start Your Plan పై క్లిక్ చేసి వివరాలు నమోదు చేయండి.",
      },
    },
  ],

  cta: {
    title: {
      en: "Still Have Questions?",
      hi: "अभी भी प्रश्न हैं?",
      te: "ఇంకా ప్రశ్నలున్నాయా?",
    },
    description: {
      en: "Our team is here to help. We'll respond within 24 hours.",
      hi: "हमारी टीम आपकी सहायता के लिए यहाँ है। हम 24 घंटे में जवाब देंगे।",
      te: "మా బృందం మీకు సహాయం చేయడానికి సిద్ధంగా ఉంది. 24 గంటల్లో స్పందిస్తాము.",
    },
    contactButton: {
      en: "Contact Us",
      hi: "हमसे संपर्क करें",
      te: "మమ్మల్ని సంప్రదించండి",
    },
    programsButton: {
      en: "View Programs",
      hi: "प्रोग्राम देखें",
      te: "ప్రోగ్రామ్‌లు చూడండి",
    },
  },
};

export default faqTranslations;
