// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// function ContactHero() {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop')"
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
//             Get in <span className="text-gold">Touch</span>
//           </h1>
//           <p className="text-xl text-white/80">
//             Have questions? We're here to help you start your fitness journey
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactForm() {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: "Message Sent!",
//       description: "We'll get back to you within 24 hours.",
//     });
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <div>
//             <h2 className="text-3xl font-heading font-bold mb-6">
//               Let's Start Your Transformation
//             </h2>
//             <p className="text-muted-foreground mb-8">
//               Ready to take the first step? Fill out the form and our team will reach out 
//               to discuss the best program for your goals.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-bold mb-1">Email Us</h3>
//                   <p className="text-muted-foreground">hello@dottfit.com</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-bold mb-1">Call Us</h3>
//                   <p className="text-muted-foreground">+91 98765 43210</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
//                   <MessageCircle className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-bold mb-1">WhatsApp</h3>
//                   <p className="text-muted-foreground">Click the green button below!</p>
//                 </div>
//               </div>
              
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-bold mb-1">Location</h3>
//                   <p className="text-muted-foreground">Mumbai, India (Online coaching available worldwide)</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Form */}
//           <div className="bg-card rounded-2xl p-8 shadow-card">
//             <div onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Full Name</label>
//                 <Input
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-2">Email</label>
//                 <Input
//                   type="email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-2">Phone (WhatsApp)</label>
//                 <Input
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   placeholder="+91 98765 43210"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium mb-2">Message</label>
//                 <Textarea
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   placeholder="Tell us about your fitness goals..."
//                   rows={4}
//                   required
//                 />
//               </div>
              
//               <Button 
//                 variant="gold" 
//                 size="lg" 
//                 className="w-full"
//                 onClick={handleSubmit}
//               >
//                 Send Message
//                 <Send className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function ContactPage() {
//   return (
//     <>
//       <ContactHero />
//       <ContactForm />
//     </>
//   );
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "react-i18next";
import contactPageTranslations from "@/translations/contactPageTranslations";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BASE_URL } from "@/Config";

/* ---------------- HERO (UNCHANGED) ---------------- */
function ContactHero() {
    
  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";
  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
             {contactPageTranslations.hero.title[lang]}
            {/* Get in <span className="text-gold">Touch</span> */}
          </h1>
          <p className="text-xl text-white/80">
           {contactPageTranslations.hero.subtitle[lang]}
            {/* Have questions? We're here to help you start your fitness journey */}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FORM ---------------- */
function ContactForm() {
  
  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setIsOverlayVisible(true);

      // toast({
      //   title: "Message Sent!",
      //   description: "We'll get back to you within 24 hours.",
      // });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* LEFT INFO — UNCHANGED */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                 {contactPageTranslations.leftSection.heading[lang]}
                {/* Let's Start Your Transformation */}
              </h2>
              <p className="text-muted-foreground mb-8">
                  {contactPageTranslations.leftSection.description[lang]}
                {/* Ready to take the first step? Fill out the form and our team will
                reach out to discuss the best program for your goals. */}
              </p>

              <div className="space-y-6">
                <Info icon={<Mail />} 
                // title="Email Us"
                title={contactPageTranslations.leftSection.email[lang]} 
                 value="hello@dottfit.com" />
                <Info icon={<Phone />} 
                   title={contactPageTranslations.leftSection.call[lang]} 
                // title="Call Us" 
                value="+91 98765 43210" />
                <Info
                  icon={<MessageCircle />}
                  title="WhatsApp"
                  value={contactPageTranslations.leftSection.whatsapp[lang]} 
                  // value="Click the green button below!"
                />
                <Info
                  icon={<MapPin />}
                  title="Location"
                    value={contactPageTranslations.leftSection.location[lang]} 
                  // value="Mumbai, India (Online coaching available worldwide)"
                />
              </div>
            </div>

            {/* FORM — SAME UI */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputBlock label={contactPageTranslations.form.fullName[lang]}>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </InputBlock>

                <InputBlock label={contactPageTranslations.form.email[lang]}>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </InputBlock>

                <InputBlock label={contactPageTranslations.form.phone[lang]}>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                  />
                </InputBlock>

                <InputBlock label={contactPageTranslations.form.message[lang]}>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </InputBlock>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? contactPageTranslations.form.sending[lang]
    : contactPageTranslations.form.send[lang]}
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ SUCCESS OVERLAY */}
      {isOverlayVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col items-center max-w-sm text-center">
            <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2"> {contactPageTranslations.success.title[lang]}</h2>
            <p className="text-gray-600">
               {contactPageTranslations.success.message[lang]}
              {/* Your message has been successfully submitted, We'll get back to you within 24 hours. */}
            </p>
            <Button
              className="mt-6"
              onClick={() => setIsOverlayVisible(false)}
            >
              {contactPageTranslations.success.button[lang]}
              {/* Continue */}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- HELPERS ---------------- */
const Info = ({ icon, title, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-heading font-bold">{title}</h3>
      <p className="text-muted-foreground">{value}</p>
    </div>
  </div>
);

const InputBlock = ({ label, children }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    {children}
  </div>
);

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}

