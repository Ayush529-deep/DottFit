/* ============================= */
/* TYPES */
/* ============================= */

export interface MultiLangText {
  en: string;
  hi: string;
  te: string;
}

export interface PricingHeroSection {
  title: MultiLangText;
  subtitle: MultiLangText;
  description: MultiLangText;
}

export interface BillingSection {
  monthly: MultiLangText;
  threeMonths: MultiLangText;
  sixMonths: MultiLangText;
  mostPopular: MultiLangText;
  bestFor: MultiLangText;
  included: MultiLangText;
  viewAll: MultiLangText;
  getStarted: MultiLangText;
}

export interface PlanFeatureTranslations {
  training: MultiLangText;
  nutrition: MultiLangText;
  checkin: MultiLangText;
  app: MultiLangText;
  chat: MultiLangText;
  goals: MultiLangText;
}

export interface PlanTranslations {
  bestFor: MultiLangText;
  description: MultiLangText;
  features: PlanFeatureTranslations;
  highlights: {
    en: string[];
    hi: string[];
    te: string[];
  };
}

export interface SpecialProgramSection {
  title: MultiLangText;
  description: MultiLangText;
}

export interface WhyChooseSection {
  title: MultiLangText;
   benefits: {
    en: string[];
    hi: string[];
    te: string[];
  };
}

export interface ConsultationCTASection {
  title: MultiLangText;
  subtitle: MultiLangText;
  button: MultiLangText;
}

export interface AddOnsSection {
  title: MultiLangText;
  items: MultiLangText[];
}

export interface PricingPageTranslations {
  hero: PricingHeroSection;
  billing: BillingSection;
  specialProgram: SpecialProgramSection;
  whyChoose: WhyChooseSection;
  consultation: ConsultationCTASection;
  addons: AddOnsSection;
  plansFull: {
    Basic: PlanTranslations;
    Advance: PlanTranslations;
    Elite: PlanTranslations;
  };
}

/* ============================= */
/* TRANSLATIONS */
/* ============================= */

const pricingPageTranslations: PricingPageTranslations = {
  hero: {
    title: {
      en: "Plans",
      hi: "प्लान",
      te: "ప్లాన్లు"
    },
    subtitle: {
      en: "Fitness at Your Fingertips | Wellness Powered by Technology",
      hi: "आपकी उंगलियों पर फिटनेस | तकनीक से संचालित वेलनेस",
      te: "మీ వేలిముద్రల వద్ద ఫిట్‌నెస్ | సాంకేతికతతో నడిచే ఆరోగ్యం"
    },
    description: {
      en: "Choose a plan that fits your lifestyle, goals, and commitment level.",
      hi: "अपने जीवनशैली, लक्ष्यों और प्रतिबद्धता के अनुसार सही प्लान चुनें।",
      te: "మీ జీవనశైలి, లక్ష్యాలు మరియు నిబద్ధతకు సరిపోయే ప్లాన్‌ను ఎంచుకోండి."
    }
  },

  billing: {
    monthly: { en: "Monthly", hi: "मासिक", te: "నెలవారీ" },
    threeMonths: { en: "3 Months", hi: "3 महीने", te: "3 నెలలు" },
    sixMonths: { en: "6 Months", hi: "6 महीने", te: "6 నెలలు" },
    mostPopular: { en: "⭐ MOST POPULAR", hi: "⭐ सबसे लोकप्रिय", te: "⭐ అత్యంత ప్రజాదరణ" },
    bestFor: { en: "Best for", hi: "उपयुक्त", te: "ఉత్తమమైనది" },
    included: { en: "Included", hi: "शामिल", te: "చేర్చబడింది" },
    viewAll: { en: "View all features", hi: "सभी फीचर्स देखें", te: "అన్ని ఫీచర్లు చూడండి" },
    getStarted: { en: "Get Started", hi: "शुरू करें", te: "ప్రారంభించండి" }
  },

  specialProgram: {
    title: {
      en: "12 Weeks Transformation Program",
      hi: "12 सप्ताह ट्रांसफॉर्मेशन प्रोग्राम",
      te: "12 వారాల ట్రాన్స్‌ఫర్మేషన్ ప్రోగ్రామ్"
    },
    description: {
      en: "Ready for a complete transformation? Our intensive 12-week program combines the best of all our plans.",
      hi: "क्या आप पूरी तरह बदलने के लिए तैयार हैं? यह 12-सप्ताह का विशेष प्रोग्राम बेहतरीन परिणाम देता है।",
      te: "పూర్తి మార్పుకు సిద్ధమా? మా 12 వారాల ప్రత్యేక ప్రోగ్రామ్ గరిష్ట ఫలితాలు ఇస్తుంది."
    }
  },

  whyChoose: {
  title: {
    en: "Why Choose DottFit?",
    hi: "DottFit क्यों चुनें?",
    te: "ఎందుకు DottFit ఎంచుకోవాలి?"
  },
  benefits: {
    en: [
      "Personalized coaching, not generic plans",
      "Wellness + Technology approach",
      "Indian lifestyle & food friendly",
      "Injury-aware training",
      "Flexible home & gym workouts",
      "Sustainable, real results",
    ],
    hi: [
      "व्यक्तिगत कोचिंग, सामान्य प्लान नहीं",
      "वेलनेस + टेक्नोलॉजी आधारित दृष्टिकोण",
      "भारतीय जीवनशैली और भोजन के अनुकूल",
      "इंजरी को ध्यान में रखकर ट्रेनिंग",
      "घर और जिम दोनों के लिए वर्कआउट",
      "स्थायी और वास्तविक परिणाम",
    ],
    te: [
      "వ్యక్తిగత కోచింగ్, సాధారణ ప్లాన్లు కాదు",
      "వెల్‌నెస్ + టెక్నాలజీ విధానం",
      "భారతీయ జీవనశైలి & ఆహారానికి అనుకూలం",
      "గాయాలను పరిగణలోకి తీసుకున్న ట్రైనింగ్",
      "ఇంటి & జిమ్ వర్కౌట్లు",
      "దీర్ఘకాలిక మరియు నిజమైన ఫలితాలు",
    ],
  }
},


  consultation: {
    title: {
      en: "Not Sure Which Plan Is Right for You?",
      hi: "कौन सा प्लान सही है?",
      te: "ఏ ప్లాన్ మీకు సరైనది?"
    },
    subtitle: {
      en: "Book a FREE Fitness Consultation.",
      hi: "मुफ़्त फिटनेस कंसल्टेशन बुक करें।",
      te: "ఉచిత ఫిట్‌నెస్ కన్సల్టేషన్ బుక్ చేయండి."
    },
    button: {
      en: "Book Free Consultation",
      hi: "मुफ़्त परामर्श बुक करें",
      te: "ఉచిత కన్సల్టేషన్ బుక్ చేయండి"
    }
  },

  addons: {
  title: {
    en: "Optional Add-ons",
    hi: "अतिरिक्त सेवाएँ",
    te: "ఐచ్చిక అదనపు సేవలు",
  },
  items: [
    {
      en: "Transformation challenge programs",
      hi: "ट्रांसफॉर्मेशन चैलेंज प्रोग्राम",
      te: "ట్రాన్స్‌ఫార్మేషన్ ఛాలెంజ్ ప్రోగ్రామ్‌లు",
    },
    {
      en: "Corporate wellness packages",
      hi: "कॉर्पोरेट वेलनेस पैकेज",
      te: "కార్పొరేట్ వెల్‌నెస్ ప్యాకేజీలు",
    },
    {
      en: "Group fitness plans",
      hi: "ग्रुप फिटनेस प्लान",
      te: "గ్రూప్ ఫిట్‌నెస్ ప్లాన్‌లు",
    },
    {
      en: "Offline personal training (location-based)",
      hi: "ऑफलाइन पर्सनल ट्रेनिंग (स्थान आधारित)",
      te: "ఆఫ్‌లైన్ వ్యక్తిగత శిక్షణ (ప్రాంతం ఆధారంగా)",
    },
  ],
},



  /* ============================= */
  /* PLANS FULL TRANSLATION */
  /* ============================= */

  plansFull: {
    Basic: {
      bestFor: {
        en: "Beginners & Busy Professionals",
        hi: "शुरुआती और व्यस्त प्रोफेशनल्स",
        te: "ప్రారంభకులు & బిజీ ప్రొఫెషనల్స్"
      },
      description: {
        en: "Smart app-based training and habit tracking.",
        hi: "स्मार्ट ऐप आधारित ट्रेनिंग और हैबिट ट्रैकिंग।",
        te: "స్మార్ట్ యాప్ ఆధారిత ట్రైనింగ్ మరియు హ్యాబిట్ ట్రాకింగ్."
      },
      features: {
        training: { en: "General", hi: "जनरल", te: "సాధారణ" },
        nutrition: { en: "General guidance", hi: "सामान्य मार्गदर्शन", te: "సాధారణ మార్గదర్శనం" },
        checkin: { en: "Bi-monthly", hi: "दो बार मासिक", te: "నెలకు రెండుసార్లు" },
        app: { en: "Basic", hi: "बेसिक", te: "బేసిక్" },
        chat: { en: "Limited", hi: "सीमित", te: "పరిమిత" },
        goals: { en: "Monthly", hi: "मासिक", te: "నెలవారీ" }
      },
      highlights: {
        en: ["Personalized workout plan", "Weekly progress check"],
        hi: ["पर्सनलाइज़्ड वर्कआउट प्लान", "साप्ताहिक प्रोग्रेस चेक"],
        te: ["వ్యక్తిగత వర్కౌట్ ప్లాన్", "వారానికి ప్రోగ్రెస్ చెక్"]
      }
    },

    Advance: {
      bestFor: {
        en: "Fat loss & Muscle building",
        hi: "फैट लॉस और मसल बिल्डिंग",
        te: "కొవ్వు తగ్గింపు & కండరాల పెంపు"
      },
      description: {
        en: "Fully integrated nutrition & fitness strategy.",
        hi: "पूरा न्यूट्रिशन और फिटनेस प्लान।",
        te: "పూర్తి పోషకాహార & ఫిట్‌నెస్ వ్యూహం."
      },
      features: {
        training: { en: "Personalized", hi: "पर्सनलाइज़्ड", te: "వ్యక్తిగత" },
        nutrition: { en: "Included", hi: "शामिल", te: "చేర్చబడింది" },
        checkin: { en: "Weekly", hi: "साप्ताहिक", te: "వారానికి" },
        app: { en: "Full", hi: "फुल एक्सेस", te: "పూర్తి యాక్సెస్" },
        chat: { en: "Standard", hi: "स्टैंडर्ड", te: "స్టాండర్డ్" },
        goals: { en: "Weekly", hi: "साप्ताहिक", te: "వారానికి" }
      },
      highlights: {
        en: ["Fully customized plan", "Priority WhatsApp support"],
        hi: ["पूरी तरह कस्टमाइज्ड प्लान", "प्रायोरिटी सपोर्ट"],
        te: ["పూర్తిగా కస్టమైజ్డ్ ప్లాన్", "ప్రాధాన్యత సపోర్ట్"]
      }
    },

    Elite: {
      bestFor: {
        en: "Serious transformation & athletes",
        hi: "गंभीर ट्रांसफॉर्मेशन",
        te: "గంభీరమైన మార్పు"
      },
      description: {
        en: "Doctor-aware personalized coaching.",
        hi: "डॉक्टर गाइडेड पर्सनल कोचिंग।",
        te: "డాక్టర్ గైడ్ చేసిన కోచింగ్."
      },
      features: {
        training: { en: "Personalized", hi: "पर्सनलाइज़्ड", te: "వ్యక్తిగత" },
        nutrition: { en: "Included", hi: "शामिल", te: "చేర్చబడింది" },
        checkin: { en: "Bi-weekly", hi: "पखवाड़े में", te: "రెండు వారాలకు" },
        app: { en: "Full + Priority", hi: "फुल + प्रायोरिटी", te: "పూర్తి + ప్రాధాన్యత" },
        chat: { en: "Unlimited", hi: "अनलिमिटेड", te: "అపరిమిత" },
        goals: { en: "Real-time", hi: "रीयल टाइम", te: "రియల్ టైమ్" }
      },
      highlights: {
        en: ["1-on-1 coaching", "Unlimited WhatsApp support"],
        hi: ["1-1 कोचिंग", "अनलिमिटेड सपोर्ट"],
        te: ["1-1 కోచింగ్", "అపరిమిత సపోర్ట్"]
      }
    }
  }
};

export default pricingPageTranslations;
