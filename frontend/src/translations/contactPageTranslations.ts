export interface MultiLangText {
  en: string;
  hi: string;
  te: string;
}

export interface ContactPageTranslations {
  hero: {
    title: MultiLangText;
    subtitle: MultiLangText;
  };
  leftSection: {
    heading: MultiLangText;
    description: MultiLangText;
    email: MultiLangText;
    call: MultiLangText;
    whatsapp: MultiLangText;
    location: MultiLangText;
  };
  form: {
    fullName: MultiLangText;
    email: MultiLangText;
    phone: MultiLangText;
    message: MultiLangText;
    send: MultiLangText;
    sending: MultiLangText;
  };
  success: {
    title: MultiLangText;
    message: MultiLangText;
    button: MultiLangText;
  };
}

const contactPageTranslations: ContactPageTranslations = {
  hero: {
    title: {
      en: "Get in Touch",
      hi: "संपर्क करें",
      te: "సంప్రదించండి",
    },
    subtitle: {
      en: "Have questions? We're here to help you start your fitness journey",
      hi: "कोई सवाल है? हम आपकी फिटनेस यात्रा शुरू करने में मदद करेंगे।",
      te: "ఏమైనా ప్రశ్నలున్నాయా? మీ ఫిట్‌నెస్ ప్రయాణం ప్రారంభించడానికి మేము సహాయం చేస్తాము.",
    },
  },

  leftSection: {
    heading: {
      en: "Let's Start Your Transformation",
      hi: "आइए आपकी ट्रांसफॉर्मेशन शुरू करें",
      te: "మీ మార్పును ప్రారంభిద్దాం",
    },
    description: {
      en: "Fill out the form and our team will reach out to discuss the best program for your goals.",
      hi: "फॉर्म भरें और हमारी टीम आपके लक्ष्यों के लिए सही प्रोग्राम बताएगी।",
      te: "ఫారమ్ నింపండి, మా టీమ్ మీ లక్ష్యాలకు సరైన ప్రోగ్రామ్ గురించి చర్చిస్తుంది.",
    },
    email: { en: "Email Us", hi: "ईमेल करें", te: "ఇమెయిల్ చేయండి" },
    call: { en: "Call Us", hi: "कॉल करें", te: "కాల్ చేయండి" },
    whatsapp: {
      en: "Click the green button below!",
      hi: "नीचे दिए गए हरे बटन पर क्लिक करें!",
      te: "కింద ఉన్న గ్రీన్ బటన్‌ను క్లిక్ చేయండి!",
    },
    location: {
      en: "Mumbai, India (Online coaching available worldwide)",
      hi: "मुंबई, भारत (ऑनलाइन कोचिंग विश्वभर में उपलब्ध)",
      te: "ముంబై, భారత్ (ప్రపంచవ్యాప్తంగా ఆన్‌లైన్ కోచింగ్ అందుబాటులో ఉంది)",
    },
  },

  form: {
    fullName: { en: "Full Name", hi: "पूरा नाम", te: "పూర్తి పేరు" },
    email: { en: "Email", hi: "ईमेल", te: "ఇమెయిల్" },
    phone: { en: "Phone (WhatsApp)", hi: "फोन (व्हाट्सएप)", te: "ఫోన్ (వాట్సాప్)" },
    message: { en: "Message", hi: "संदेश", te: "సందేశం" },
    send: { en: "Send Message", hi: "संदेश भेजें", te: "సందేశం పంపండి" },
    sending: { en: "Sending...", hi: "भेजा जा रहा है...", te: "పంపుతోంది..." },
  },

  success: {
    title: { en: "Success!", hi: "सफल!", te: "విజయం!" },
    message: {
      en: "Your message has been successfully submitted. We'll get back to you within 24 hours.",
      hi: "आपका संदेश सफलतापूर्वक भेज दिया गया है। हम 24 घंटे में संपर्क करेंगे।",
      te: "మీ సందేశం విజయవంతంగా పంపబడింది. 24 గంటల్లో మేము సంప్రదిస్తాము.",
    },
    button: { en: "Continue", hi: "जारी रखें", te: "కొనసాగించండి" },
  },
};

export default contactPageTranslations;
