import { User, Heart, Activity, Clock, Target } from "lucide-react";

export interface MultiLangText {
  en: string;
  hi: string;
  te: string;
}

export interface FitnessPageTranslations {
  hero: {
    badge: MultiLangText;
    title: MultiLangText;
    subtitle: MultiLangText;
  };

  common:{
    yes:MultiLangText;
    no:MultiLangText;
  };

  sections: {
  personalInfo: {
    title: MultiLangText;
    subtitle: MultiLangText;
  };
  medicalHistory: {
    title: MultiLangText;
    subtitle: MultiLangText;
  };
  lifestyle: {
    title: MultiLangText;
    subtitle: MultiLangText;
  };
  currentActivity: {
    title: MultiLangText;
    subtitle: MultiLangText;
  };
  fitnessGoals: {
    title: MultiLangText;
    subtitle: MultiLangText;
  };
};

  form: {
    fullName: { label: MultiLangText; placeholder: MultiLangText };
    age: { label: MultiLangText; placeholder: MultiLangText };
    gender: { label: MultiLangText; placeholder: MultiLangText; options: MultiLangText[] };
    height: { label: MultiLangText; placeholder: MultiLangText };
    weight: { label: MultiLangText; placeholder: MultiLangText };
    occupation: { label: MultiLangText; placeholder: MultiLangText };
    email: { label: MultiLangText; placeholder: MultiLangText };
    contact: { label: MultiLangText; placeholder: MultiLangText };
    submitButton: MultiLangText;
  };

medicalHistory: {

  hasMedicalConditions: {
    label: MultiLangText;
    placeholder: MultiLangText;
    describe: {
      label: MultiLangText;
      placeholder: MultiLangText;
    };
  };

  hasMedications: {
    label: MultiLangText;
    placeholder: MultiLangText;
    describe: {
      label: MultiLangText;
      placeholder: MultiLangText;
    };
  };

  hasInjuries: {
    label: MultiLangText;
    placeholder: MultiLangText;
    describe: {
      label: MultiLangText;
      placeholder: MultiLangText;
    };
  };

  hasJointPain: {
    label: MultiLangText;
    placeholder: MultiLangText;
    describe: {
      label: MultiLangText;
      placeholder: MultiLangText;
    };
  };

  hasDoctorAdvice: {
    label: MultiLangText;
    placeholder: MultiLangText;
    describe: {
      label: MultiLangText;
      placeholder: MultiLangText;
    };
  };

};

lifestyle: {

  sleepHours: {
    label: MultiLangText;
    placeholder: MultiLangText;
    options: MultiLangText[];
  };

  smoking: {
    label: MultiLangText;
    placeholder: MultiLangText;
    options: MultiLangText[];
  };

  alcohol: {
    label: MultiLangText;
    placeholder: MultiLangText;
    options: MultiLangText[];
  };

  alcoholFrequency: {
    label: MultiLangText;
    placeholder: MultiLangText;
    options: MultiLangText[];
  };

  activityLevel: {
    label: MultiLangText;
    placeholder: MultiLangText;
    options: MultiLangText[];
  };

};


exerciseRoutine: {
  label: MultiLangText;
  placeholder: MultiLangText;
};

fitnessGoalsSection: {
  primaryGoalsLabel: MultiLangText;
  goals: MultiLangText[];
  timeline: {
    label: MultiLangText;
    placeholder: MultiLangText;
    options: MultiLangText[];
  };
};

navigation: {
  back: MultiLangText;
  submit: MultiLangText;
  submitting: MultiLangText;
};

scoreModal: {
  healthScore: {
    en: "Health Score",
    hi: "स्वास्थ्य स्कोर",
    te: "ఆరోగ్య స్కోర్"
  },
  title: {
    en: "Assessment Complete 🎉",
    hi: "मूल्यांकन पूर्ण हुआ 🎉",
    te: "మూల్యాంకనం పూర్తైంది 🎉"
  },
  description: {
    en: "Based on your responses, this is your overall health score. Our experts will tailor a plan just for you.",
    hi: "आपके उत्तरों के आधार पर यह आपका समग्र स्वास्थ्य स्कोर है। हमारे विशेषज्ञ आपके लिए एक विशेष योजना तैयार करेंगे।",
    te: "మీ సమాధానాల ఆధారంగా ఇది మీ మొత్తం ఆరోగ్య స్కోర్. మా నిపుణులు మీ కోసం ప్రత్యేక ప్రణాళికను రూపొందిస్తారు."
  },
  close: {
    en: "Close",
    hi: "बंद करें",
    te: "మూసివేయండి"
  }
}



  stats: {
    bmi: MultiLangText;
    bmr: MultiLangText;
    bodyFat: MultiLangText;
    calculate: MultiLangText;
    calPerDay: MultiLangText;
    auto: MultiLangText;
  };
  button: {
    continue: MultiLangText;
  };
  footer: {
  healthJourney: MultiLangText;
};
}

const fitnessPageTranslations: FitnessPageTranslations = {
  hero: {
    badge: {
      en: "FITNESS ASSESSMENT",
      hi: "फिटनेस मूल्यांकन",
      te: "ఫిట్‌నెస్ అంచనా",
    },
    title: {
      en: "Complete Your Fitness Profile",
      hi: "अपनी फिटनेस प्रोफ़ाइल पूरी करें",
      te: "మీ ఫిట్‌నెస్ ప్రొఫైల్ పూర్తి చేయండి",
    },
    subtitle: {
      en: "Help us create your personalized fitness plan",
      hi: "हमारी मदद करें आपकी व्यक्तिगत फिटनेस योजना बनाने में",
      te: "మీ వ్యక్తిగత ఫిట్‌నెస్ ప్రణాళిక రూపొందించడానికి మాకు సహాయం చేయండి",
    },
  },

  common: {
  yes: {
    en: "Yes",
    hi: "हाँ",
    te: "అవును"
  },
  no: {
    en: "No",
    hi: "नहीं",
    te: "కాదు"
  }
},


  sections: {
  personalInfo: {
    title: {
      en: "Personal Information",
      hi: "व्यक्तिगत जानकारी",
      te: "వ్యక్తిగత సమాచారం",
    },
    subtitle: {
      en: "Basic details about yourself",
      hi: "अपने बारे में बुनियादी विवरण",
      te: "మీ గురించి ప్రాథమిక వివరాలు",
    },
  },

  medicalHistory: {
    title: {
      en: "Medical History",
      hi: "चिकित्सीय इतिहास",
      te: "వైద్య చరిత్ర",
    },
    subtitle: {
      en: "Your health background",
      hi: "आपका स्वास्थ्य विवरण",
      te: "మీ ఆరోగ్య నేపథ్యం",
    },
  },

  lifestyle: {
    title: {
      en: "Lifestyle",
      hi: "जीवनशैली",
      te: "జీవనశైలి",
    },
    subtitle: {
      en: "Daily habits and routine",
      hi: "दैनिक आदतें और दिनचर्या",
      te: "రోజువారీ అలవాట్లు మరియు రొటీన్",
    },
  },

  currentActivity: {
    title: {
      en: "Current Activity",
      hi: "वर्तमान गतिविधि",
      te: "ప్రస్తుత కార్యకలాపం",
    },
    subtitle: {
      en: "Your exercise routine",
      hi: "आपकी व्यायाम दिनचर्या",
      te: "మీ వ్యాయామ రొటీన్",
    },
  },

  fitnessGoals: {
    title: {
      en: "Fitness Goals",
      hi: "फिटनेस लक्ष्य",
      te: "ఫిట్‌నెస్ లక్ష్యాలు",
    },
    subtitle: {
      en: "What you want to achieve",
      hi: "आप क्या हासिल करना चाहते हैं",
      te: "మీరు ఏం సాధించాలనుకుంటున్నారు",
    },
  },
},


  form: {
    fullName: {
      label: { en: "Full Name", hi: "पूरा नाम", te: "పూర్తి పేరు" },
      placeholder: { en: "Your name", hi: "आपका नाम", te: "మీ పేరు" },
    },
    age: {
      label: { en: "Age", hi: "उम्र", te: "వయసు" },
      placeholder: { en: "Your age", hi: "आपकी उम्र", te: "మీ వయసు" },
    },
    gender: {
      label: { en: "Gender", hi: "लिंग", te: "లింగం" },
      placeholder: { en: "Select gender", hi: "लिंग चुनें", te: "లింగం ఎంచుకోండి" },
      options: [
        { en: "Male", hi: "पुरुष", te: "పురుషుడు" },
        { en: "Female", hi: "महिला", te: "మహిళ" },
        { en: "Other", hi: "अन्य", te: "ఇతర" },
      ],
    },
    height: {
      label: { en: "Height", hi: "ऊंचाई", te: "ఎత్తు" },
      placeholder: { en: "e.g., 5'8 or 172cm", hi: "उदा., 5'8 या 172cm", te: "ఉదా., 5'8 లేదా 172cm" },
    },
    weight: {
      label: { en: "Weight", hi: "वज़न", te: "బరువు" },
      placeholder: { en: "e.g., 150 lbs or 68kg", hi: "उदा., 150 lbs या 68kg", te: "ఉదా., 150 lbs లేదా 68kg" },
    },
    occupation: {
      label: { en: "Occupation", hi: "पेशा", te: "వృత్తి" },
      placeholder: { en: "Your occupation", hi: "आपका पेशा", te: "మీ వృత్తి" },
    },
    email: {
      label: { en: "Email", hi: "ईमेल", te: "ఇమెయిల్" },
      placeholder: { en: "your@email.com", hi: "आपका@email.com", te: "మీ@email.com" },
    },
    contact: {
      label: { en: "Contact", hi: "संपर्क नंबर", te: "కాంటాక్ట్ నంబర్" },
      placeholder: { en: "+91 98765 43210", hi: "+91 98765 43210", te: "+91 98765 43210" },
    },
    submitButton: {
      en: "Submit",
      hi: "सबमिट करें",
      te: "సబ్మిట్ చేయండి",
    },
  },

  stats: {
    bmi: { en: "BMI", hi: "बीएमआई", te: "బిఎమ్‌ఐ" },
    bmr: { en: "BMR", hi: "बीएमआर", te: "బిఎంఆర్" },
    bodyFat: { en: "Body Fat %", hi: "शरीर की चर्बी %", te: "శరీరపు కొవ్వు %" },
    calculate: { en: "Calculate", hi: "गणना करें", te: "లెక్కించండి" },
    calPerDay: { en: "cal/day", hi: "कैल/दिन", te: "క్యాల/రోజు" },
    auto: { en: "Auto", hi: "स्वतः", te: "ఆటో" },
  },

  medicalHistory: {

  hasMedicalConditions: {
    label: {
      en: "Do you have medical conditions?",
      hi: "क्या आपको कोई चिकित्सीय समस्या है?",
      te: "మీకు ఎలాంటి వైద్య సమస్యలు ఉన్నాయా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    describe: {
      label: {
        en: "Describe conditions",
        hi: "समस्याओं का विवरण दें",
        te: "సమస్యలను వివరించండి"
      },
      placeholder: {
        en: "List conditions...",
        hi: "समस्याएँ लिखें...",
        te: "సమస్యలను నమోదు చేయండి..."
      }
    }
  },

  hasMedications: {
    label: {
      en: "Are you taking medications?",
      hi: "क्या आप दवाइयाँ ले रहे हैं?",
      te: "మీరు ఏవైనా మందులు తీసుకుంటున్నారా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    describe: {
      label: {
        en: "List medications",
        hi: "दवाइयों की सूची दें",
        te: "మందుల జాబితా ఇవ్వండి"
      },
      placeholder: {
        en: "With dosages...",
        hi: "खुराक सहित...",
        te: "మోతాదుతో పాటు..."
      }
    }
  },

  hasInjuries: {
    label: {
      en: "Any injuries or surgeries?",
      hi: "क्या कोई चोट या सर्जरी हुई है?",
      te: "ఏవైనా గాయాలు లేదా శస్త్రచికిత్సలు జరిగాయా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    describe: {
      label: {
        en: "Describe injuries",
        hi: "चोट का विवरण दें",
        te: "గాయాలను వివరించండి"
      },
      placeholder: {
        en: "Include recovery status...",
        hi: "रिकवरी स्थिति सहित...",
        te: "పునరుద్ధరణ స్థితి సహా..."
      }
    }
  },

  hasJointPain: {
    label: {
      en: "Do you have joint pain?",
      hi: "क्या आपको जोड़ों में दर्द है?",
      te: "మీకు సంధుల నొప్పి ఉందా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    describe: {
      label: {
        en: "Describe pain",
        hi: "दर्द का विवरण दें",
        te: "నొప్పిని వివరించండి"
      },
      placeholder: {
        en: "Affected areas...",
        hi: "प्रभावित क्षेत्र...",
        te: "ప్రభావిత ప్రాంతాలు..."
      }
    }
  },

  hasDoctorAdvice: {
    label: {
      en: "Doctor advised against exercise?",
      hi: "क्या डॉक्टर ने व्यायाम से मना किया है?",
      te: "డాక్టర్ వ్యాయామం చేయవద్దని సూచించారా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    describe: {
      label: {
        en: "Doctor's advice",
        hi: "डॉक्टर की सलाह",
        te: "డాక్టర్ సలహా"
      },
      placeholder: {
        en: "Restrictions...",
        hi: "प्रतिबंध...",
        te: "పరిమితులు..."
      }
    }
  }

},

lifestyle: {

  sleepHours: {
    label: {
      en: "Sleep hours per night",
      hi: "प्रति रात नींद के घंटे",
      te: "ప్రతి రాత్రి నిద్ర గంటలు"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    options: [
      {
        en: "Less than 5 hours",
        hi: "5 घंटे से कम",
        te: "5 గంటల కంటే తక్కువ"
      },
      {
        en: "5-6 hours",
        hi: "5-6 घंटे",
        te: "5-6 గంటలు"
      },
      {
        en: "7-8 hours",
        hi: "7-8 घंटे",
        te: "7-8 గంటలు"
      },
      {
        en: "More than 8 hours",
        hi: "8 घंटे से अधिक",
        te: "8 గంటల కంటే ఎక్కువ"
      }
    ]
  },

  smoking: {
    label: {
      en: "Do you smoke?",
      hi: "क्या आप धूम्रपान करते हैं?",
      te: "మీరు పొగ త్రాగుతారా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    options: [
      { en: "No", hi: "नहीं", te: "కాదు" },
      { en: "Occasionally", hi: "कभी-कभी", te: "అప్పుడప్పుడు" },
      { en: "Regularly", hi: "नियमित रूप से", te: "నియమితంగా" },
      { en: "Former smoker", hi: "पूर्व धूम्रपान करने वाले", te: "మునుపటి పొగ త్రాగేవారు" }
    ]
  },

  alcohol: {
    label: {
      en: "Do you drink alcohol?",
      hi: "क्या आप शराब पीते हैं?",
      te: "మీరు మద్యం సేవిస్తారా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    options: [
      { en: "No", hi: "नहीं", te: "కాదు" },
      { en: "Yes", hi: "हाँ", te: "అవును" }
    ]
  },

  alcoholFrequency: {
    label: {
      en: "How often?",
      hi: "कितनी बार?",
      te: "ఎంత తరచుగా?"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    options: [
      { en: "Rarely", hi: "कभी-कभार", te: "అరుదుగా" },
      { en: "1-2 times/week", hi: "सप्ताह में 1-2 बार", te: "వారానికి 1-2 సార్లు" },
      { en: "3-4 times/week", hi: "सप्ताह में 3-4 बार", te: "వారానికి 3-4 సార్లు" },
      { en: "Daily", hi: "रोज़ाना", te: "ప్రతిరోజూ" }
    ]
  },

  activityLevel: {
    label: {
      en: "Activity Level",
      hi: "गतिविधि स्तर",
      te: "చర్యల స్థాయి"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    options: [
    {
      en: "Sedentary (desk job, minimal physical activity)",
      hi: "बैठे रहने वाला (डेस्क जॉब, न्यूनतम शारीरिक गतिविधि)",
      te: "నిశ్చల జీవనశైలి (డెస్క్ ఉద్యోగం, తక్కువ శారీరక చురుకుదనం)"
    },
    {
      en: "Lightly active (light exercise 1-3 days/week)",
      hi: "हल्का सक्रिय (सप्ताह में 1-3 दिन हल्का व्यायाम)",
      te: "తేలికగా చురుకుగా (వారానికి 1-3 రోజులు తేలికపాటి వ్యాయామం)"
    },
    {
      en: "Moderately active (regular walking/standing, some exercise)",
      hi: "मध्यम सक्रिय (नियमित चलना/खड़ा रहना, कुछ व्यायाम)",
      te: "మధ్యస్థ చురుకుదనం (నిత్యం నడక/నిలబడటం, కొంత వ్యాయామం)"
    },
    {
      en: "Very active (hard exercise 4-5 days/week)",
      hi: "बहुत सक्रिय (सप्ताह में 4-5 दिन कठिन व्यायाम)",
      te: "చాలా చురుకుగా (వారానికి 4-5 రోజులు కఠినమైన వ్యాయామం)"
    },
    {
      en: "Extremely active (hard exercise daily)",
      hi: "अत्यधिक सक्रिय (प्रतिदिन कठिन व्यायाम)",
      te: "అత్యంత చురుకుగా (ప్రతిరోజూ కఠినమైన వ్యాయామం)"
    }
  ]
  }

},

exerciseRoutine: {
  label: {
    en: "Current exercise routine",
    hi: "वर्तमान व्यायाम दिनचर्या",
    te: "ప్రస్తుత వ్యాయామ నియమం"
  },
  placeholder: {
    en: "Describe routine or write 'No'",
    hi: "दिनचर्या का वर्णन करें या 'नहीं' लिखें",
    te: "మీ వ్యాయామ నియమాన్ని వివరించండి లేదా 'కాదు' అని రాయండి"
  }
},


fitnessGoalsSection: {

  primaryGoalsLabel: {
    en: "What are your primary goals?",
    hi: "आपके मुख्य लक्ष्य क्या हैं?",
    te: "మీ ప్రధాన లక్ష్యాలు ఏమిటి?"
  },

  goals: [
    {
      en: "Weight loss",
      hi: "वजन कम करना",
      te: "బరువు తగ్గించడం"
    },
    {
      en: "Muscle gain",
      hi: "मांसपेशियाँ बढ़ाना",
      te: "మసిల్స్ పెంచడం"
    },
    {
      en: "Improve stamina/endurance",
      hi: "सहनशक्ति बढ़ाना",
      te: "స్టామినా / సహనశక్తి మెరుగుపరచడం"
    },
    {
      en: "Increase strength",
      hi: "ताकत बढ़ाना",
      te: "బలం పెంచడం"
    },
    {
      en: "Improve flexibility/mobility",
      hi: "लचीलापन / गतिशीलता सुधारना",
      te: "వొంపుతనం / కదలిక మెరుగుపరచడం"
    },
    {
      en: "General health & wellness",
      hi: "सामान्य स्वास्थ्य और तंदुरुस्ती",
      te: "సాధారణ ఆరోగ్యం & వెల్‌నెస్"
    },
    {
      en: "Sports-specific performance",
      hi: "खेल प्रदर्शन सुधारना",
      te: "క్రీడల ప్రదర్శన మెరుగుపరచడం"
    }
  ],

  timeline: {
    label: {
      en: "Timeline",
      hi: "समय सीमा",
      te: "కాల వ్యవధి"
    },
    placeholder: {
      en: "Select",
      hi: "चुनें",
      te: "ఎంచుకోండి"
    },
    options: [
      {
        en: "1-3 months",
        hi: "1-3 महीने",
        te: "1-3 నెలలు"
      },
      {
        en: "3-6 months",
        hi: "3-6 महीने",
        te: "3-6 నెలలు"
      },
      {
        en: "6-12 months",
        hi: "6-12 महीने",
        te: "6-12 నెలలు"
      },
      {
        en: "More than 1 year",
        hi: "1 वर्ष से अधिक",
        te: "1 సంవత్సరానికి పైగా"
      }
    ]
  }

},


navigation: {
  back: {
    en: "Back",
    hi: "वापस",
    te: "వెనక్కి"
  },
  submit: {
    en: "Submit",
    hi: "जमा करें",
    te: "సమర్పించండి"
  },
  submitting: {
    en: "Submitting...",
    hi: "जमा किया जा रहा है...",
    te: "సమర్పిస్తున్నారు..."
  }
},

scoreModal: {
  healthScore: {
    en: "Health Score",
    hi: "स्वास्थ्य स्कोर",
    te: "ఆరోగ్య స్కోర్"
  },
  title: {
    en: "Assessment Complete 🎉",
    hi: "मूल्यांकन पूर्ण हुआ 🎉",
    te: "మూల్యాంకనం పూర్తైంది 🎉"
  },
  description: {
    en: "Based on your responses, this is your overall health score. Our experts will tailor a plan just for you.",
    hi: "आपके उत्तरों के आधार पर यह आपका समग्र स्वास्थ्य स्कोर है। हमारे विशेषज्ञ आपके लिए एक विशेष योजना तैयार करेंगे।",
    te: "మీ సమాధానాల ఆధారంగా ఇది మీ మొత్తం ఆరోగ్య స్కోర్. మా నిపుణులు మీ కోసం ప్రత్యేక ప్రణాళికను రూపొందిస్తారు."
  },
  close: {
    en: "Close",
    hi: "बंद करें",
    te: "మూసివేయండి"
  }
},


  button: {
    continue: {
      en: "Click continue to know more details",
      hi: "और विवरण जानने के लिए जारी रखें पर क्लिक करें",
      te: "మరిన్ని వివరాలు తెలుసుకోవడానికి కొనసాగించడానికి క్లిక్ చేయండి",
    },
  },

  footer: {
  healthJourney: {
    en: "Your journey to better health starts here 💪",
    hi: "बेहतर स्वास्थ्य की आपकी यात्रा यहाँ से शुरू होती है 💪",
    te: "మెరుగైన ఆరోగ్యానికి మీ ప్రయాణం ఇక్కడ ప్రారంభమవుతుంది 💪"
  }
},

};

export default fitnessPageTranslations;
