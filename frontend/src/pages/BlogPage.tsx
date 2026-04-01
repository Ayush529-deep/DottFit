
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Clock, User } from "lucide-react";
// import { useState, useEffect } from "react";
// import BannerImg from "@/assets/blog-fitness.jpg"
// import CTAImg from "@/assets/,,,.jpg"

// import { BASE_URL } from "@/Config";

// function BlogHero() {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <img 
//         src={BannerImg}
//         alt="DottFit Blog"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/40"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
//             DottFit <span className="text-gold">Blog</span>
//           </h1>
//           <p className="text-xl text-white/80">
//             Expert tips, insights, and guides for your fitness journey
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BlogGrid() {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const fetchBlogs = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/blogs`);
//       if (!response.ok) throw new Error('Failed to fetch blogs');
//       const data = await response.json();
//       setBlogPosts(data);
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching blogs:', err);
//       setError('Failed to load blogs');
//       setLoading(false);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center text-muted-foreground">
//             Loading blogs...
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center text-red-500">
//             {error}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <article 
//               key={post.blog_id}
//               className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all group"
//             >
//               <div 
//                 className="h-48 bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
//                 style={{
//                   backgroundImage: `url('${post.cover_image || BannerImg}')`
//                 }}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                
//                 <span className="px-4 py-2 rounded-full bg-black/40 text-white text-sm font-medium relative z-10 backdrop-blur-sm">
//                   {post.category}
//                 </span>
//               </div>
              
//               <div className="p-6">
//                 <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
//                   {post.title}
//                 </h2>
//                 <p className="text-muted-foreground mb-4 line-clamp-2">
//                   {post.content}
//                 </p>
                
//                 <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     <span>Coach Louis</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4" />
//                     <span>{post.reading_time} min read</span>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function BlogCTA() {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <img 
//         src={CTAImg}
//         alt="DottFit Blog"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="container mx-auto px-4 text-center relative z-10">
//         <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
//           Want Personalized Guidance?
//         </h2>
//         <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
//           Join DottFit and get direct access to Coach Louis and personalized fitness plans
//         </p>
//         <Button variant="gold" size="lg" asChild>
//           <Link to="/programs">
//             Explore Programs
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </Button>
//       </div>
//     </section>
//   );
// }

// export default function BlogPage() {
//   return (
//     <>
//       <BlogHero />
//       <BlogGrid />
//       <BlogCTA />
//     </>
//   );
// }































import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import BannerImg from "@/assets/blog-fitness.jpg";
import CTAImg from "@/assets/,,,.jpg";
import { BASE_URL } from "@/Config";
import blogPageTranslations from "@/translations/blogPageTranslations";

function BlogHero() {
  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";

  return (
    <section className="py-20 relative overflow-hidden">
      <img
        src={BannerImg}
        alt="DottFit Blog"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {blogPageTranslations.hero.title[lang]}
          </h1>

          <p className="text-xl text-white/80">
            {blogPageTranslations.hero.subtitle[lang]}
          </p>
        </div>
      </div>
    </section>
  );
}

function BlogGrid() {
  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";

  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/blogs`)
      .then(res => res.json())
      .then(data => setBlogPosts(data));
  }, []);

  return (
    <>
      {/* BLOG LIST */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div
                key={post.blog_id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={post.cover_image || BannerImg}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <span className="text-sm text-gold font-semibold">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold mt-2 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-3">
                    {post.content}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="mt-4 inline-block text-primary font-semibold hover:underline"
                  >
                    {blogPageTranslations.grid.readMore[lang]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedPost && (
        <div
          className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center px-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>

            <img
              src={selectedPost.cover_image || BannerImg}
              alt={selectedPost.title}
              className="w-full h-[300px] md:h-[380px] object-cover rounded-t-2xl"
            />

            <div className="p-6 md:p-8">
              <span className="text-sm text-gold font-semibold">
                {selectedPost.category}
              </span>

              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                {selectedPost.title}
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedPost.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function BlogCTA() {
  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "hi" | "te";

  return (
    <section className="py-20 relative overflow-hidden">
      <img
        src={CTAImg}
        alt="DottFit CTA"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
          {blogPageTranslations.cta.title[lang]}
        </h2>

        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          {blogPageTranslations.cta.subtitle[lang]}
        </p>

        <Button variant="gold" size="lg" asChild>
          <Link to="/programs">
            {blogPageTranslations.cta.button[lang]}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
      <BlogCTA />
    </>
  );
}















































































































// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Clock, User } from "lucide-react";
// import { useState, useEffect } from "react";
// import BannerImg from "@/assets/blog-fitness.jpg"
// import CTAImg from "@/assets/,,,.jpg"

// import { BASE_URL } from "@/Config";

// function BlogHero() {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <img 
//         src={BannerImg}
//         alt="DottFit Blog"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/40"></div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
//             DottFit <span className="text-gold">Blog</span>
//           </h1>
//           <p className="text-xl text-white/80">
//             Expert tips, insights, and guides for your fitness journey
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function BlogGrid() {
//   const [blogPosts, setBlogPosts] = useState<any[]>([]);
//   const [selectedPost, setSelectedPost] = useState<any | null>(null);

//   useEffect(() => {
//     fetch(`${BASE_URL}/blogs`)
//       .then(res => res.json())
//       .then(data => setBlogPosts(data));
//   }, []);

//   return (
//     <>
//       {/* BLOG LIST */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogPosts.map(post => (
//               <div
//                 key={post.blog_id}
//                 className="bg-white rounded-2xl overflow-hidden shadow-lg"
//               >
//                 {/* IMAGE */}
//                 <img
//                   src={post.cover_image || BannerImg}
//                   alt={post.title}
//                   className="w-full h-56 object-cover"
//                 />

//                 {/* CONTENT */}
//                 <div className="p-6">
//                   <span className="text-sm text-gold font-semibold">
//                     {post.category}
//                   </span>

//                   <h3 className="text-xl font-bold mt-2 mb-3">
//                     {post.title}
//                   </h3>

//                   <p className="text-gray-600 line-clamp-3">
//                     {post.content}
//                   </p>

//                   {/* READ MORE BUTTON */}
//                   <button
//                     onClick={() => setSelectedPost(post)}
//                     className="mt-4 inline-block text-primary font-semibold hover:underline"
//                   >
//                     Read More →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* MODAL */}
//       {selectedPost && (
//         <div
//           className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center px-4"
//           onClick={() => setSelectedPost(null)}
//         >
//           <div
//             className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
//             onClick={e => e.stopPropagation()}
//           >
//             {/* CLOSE */}
//             <button
//               className="absolute top-4 right-4 text-gray-500 hover:text-black"
//               onClick={() => setSelectedPost(null)}
//             >
//               ✕
//             </button>

//             {/* FULL IMAGE */}
//             <img
//               src={selectedPost.cover_image || BannerImg}
//               alt={selectedPost.title}
//               className="w-full h-[300px] md:h-[380px] object-cover rounded-t-2xl"
//             />

//             {/* FULL CONTENT */}
//             <div className="p-6 md:p-8">
//               <span className="text-sm text-gold font-semibold">
//                 {selectedPost.category}
//               </span>

//               <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
//                 {selectedPost.title}
//               </h2>

//               <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                 {selectedPost.content}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// function BlogCTA() {
//   return (
//     <section className="py-20 relative overflow-hidden">
//       <img 
//         src={CTAImg}
//         alt="DottFit Blog"
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       <div className="container mx-auto px-4 text-center relative z-10">
//         <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
//           Want Personalized Guidance?
//         </h2>
//         <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
//           Join DottFit and get direct access to Coach Louis and personalized fitness plans
//         </p>
//         <Button variant="gold" size="lg" asChild>
//           <Link to="/programs">
//             Explore Programs
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </Button>
//       </div>
//     </section>
//   );
// }

// export default function BlogPage() {
//   return (
//     <>
//       <BlogHero />
//       <BlogGrid />
//       <BlogCTA />
//     </>
//   );
// }