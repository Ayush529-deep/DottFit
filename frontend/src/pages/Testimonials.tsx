import { useEffect, useState } from "react";
import { BASE_URL } from "@/Config";
import { useTranslation } from "react-i18next";
import testimonialsTranslations from "@/translations/testimonialsTranslations";


interface Testimonial {
  id: string | number;
  name: string;
  description: string;
  media_type?: "image" | "video" | "audio" | null;
  media_url?: string;
}

type TabType = "all" | "image" | "video" | "audio";

export default function Testimonials() {
  const { i18n } = useTranslation();
const lang = i18n.language as "en" | "hi" | "te";

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabType>("all");

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${BASE_URL}/testimonials`);
        if (!res.ok) throw new Error("Failed to load testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Testimonials fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center text-gray-400">
        {testimonialsTranslations.loading[lang]}

        {/* Loading testimonials... */}
      </div>
    );
  }

  if (testimonials.length === 0) return null;

  // 🔹 Filter logic
  const filteredTestimonials =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) => t.media_type === activeTab);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1e33] via-[#14243d] to-[#0b1a2e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16">

        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-[#f5b940] uppercase tracking-wider text-sm mb-2">
            {testimonialsTranslations.community[lang]}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {testimonialsTranslations.heading.part1[lang]}{" "} <span className="text-[#f5b940]">{testimonialsTranslations.heading.part2[lang]}</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: "all", label:  testimonialsTranslations.tabs.all[lang] },
            { key: "image", label: testimonialsTranslations.tabs.image[lang] },
            { key: "video", label: testimonialsTranslations.tabs.video[lang]  },
            { key: "audio", label: testimonialsTranslations.tabs.audio[lang] },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as TabType)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === tab.key
                    ? "bg-[#f5b940] text-[#0b1a2e]"
                    : "bg-white/10 text-white hover:bg-white/20"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div
          className="
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {filteredTestimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Card Component ---------------- */

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="
        bg-[#1a2a44]/70 backdrop-blur-md
        border border-white/5
        rounded-2xl
        p-5 sm:p-6
        shadow-xl shadow-black/30
        transition-all duration-300
        hover:scale-[1.02]
        flex flex-col
      "
    >
      {/* Avatar + Name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f5b940]/30">
          {item.media_type === "image" && item.media_url ? (
            <img
              src={item.media_url}
              alt={item.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-[#f5b940]/20 flex items-center justify-center text-[#f5b940] font-bold text-lg">
              {item.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <h4 className="text-base sm:text-lg font-semibold text-white truncate">
          {item.name}
        </h4>
      </div>

      {/* Media */}
      {item.media_url && (
        <div className="mb-4 rounded-xl overflow-hidden">
          {item.media_type === "image" && (
            <img
              src={item.media_url}
              alt=""
              className="w-full h-[160px] object-cover"
              loading="lazy"
            />
          )}

          {item.media_type === "video" && (
            <video
              src={item.media_url}
              controls
              playsInline
              className="w-full h-[160px] object-cover"
            />
          )}

          {item.media_type === "audio" && (
            <div className="bg-[#0f1e33]/70 p-3 rounded-lg">
              <audio src={item.media_url} controls className="w-full" />
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-200 text-sm leading-relaxed mt-auto">
        {item.description}
      </p>
    </div>
  );
}

