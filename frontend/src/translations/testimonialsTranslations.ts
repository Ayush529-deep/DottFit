export type SupportedLang = "en" | "hi" | "te";

interface TranslationGroup {
  en: string;
  hi: string;
  te: string;
}

interface TestimonialsTranslations {
  loading: TranslationGroup;
  community: TranslationGroup;
  heading: {
    part1: TranslationGroup;
    part2: TranslationGroup;
  };
  tabs: {
    all: TranslationGroup;
    image: TranslationGroup;
    video: TranslationGroup;
    audio: TranslationGroup;
  };
}

const testimonialsTranslations: TestimonialsTranslations = {
  loading: {
    en: "Loading testimonials...",
    hi: "प्रशंसापत्र लोड हो रहे हैं...",
    te: "సాక్ష్యాలు లోడ్ అవుతున్నాయి...",
  },

  community: {
    en: "Community",
    hi: "समुदाय",
    te: "సమాజం",
  },

  heading: {
    part1: {
      en: "What Our",
      hi: "हमारे",
      te: "మా",
    },
    part2: {
      en: "Clients Say",
      hi: "क्लाइंट्स क्या कहते हैं",
      te: "కస్టమర్లు ఏమంటున్నారు",
    },
  },

  tabs: {
    all: {
      en: "All",
      hi: "सभी",
      te: "అన్ని",
    },
    image: {
      en: "Images",
      hi: "तस्वीरें",
      te: "చిత్రాలు",
    },
    video: {
      en: "Videos",
      hi: "वीडियो",
      te: "వీడియోలు",
    },
    audio: {
      en: "Audio",
      hi: "ऑडियो",
      te: "ఆడియో",
    },
  },
};

export default testimonialsTranslations;
