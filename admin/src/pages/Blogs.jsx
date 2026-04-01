
// import React, { useEffect, useState, useMemo } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import {
//   Edit,
//   Trash2,
//   CalendarDays,
//   ArrowRight,
//   Plus,
//   X,
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { BASE_URL } from "../config";

// /* ---------------- CATEGORY COLORS ---------------- */
// const categoryColors = {
//   Fitness: "bg-red-100 text-red-800",
//   Nutrition: "bg-green-100 text-green-800",
//   Workout: "bg-blue-100 text-blue-800",
//   Lifestyle: "bg-purple-100 text-purple-800",
// };

// /* ---------------- VALIDATION ---------------- */
// const BlogSchema = Yup.object({
//   title: Yup.string().required("Title is required"),

//   category: Yup.string()
//     .min(3, "Category must be at least 3 characters")
//     .required("Category is required"),

//   content: Yup.string()
//     .min(30, "Description must be at least 30 characters")
//     .required("Description is required"),

//   reading_time: Yup.number()
//     .typeError("Reading time must be a number")
//     .positive("Must be positive")
//     .required("Reading time is required"),

//   cover_image: Yup.mixed().test(
//     "imageRequired",
//     "Cover image is required",
//     function (value) {
//       if (!this.parent.blog_id && !value) return false;
//       return true;
//     }
//   ),
// });


// /* ---------------- COMPONENT ---------------- */
// const Blogs = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showForm, setShowForm] = useState(false);
//   const [editBlog, setEditBlog] = useState(null);
//   const [viewBlog, setViewBlog] = useState(null);
//   const [deleteBlog, setDeleteBlog] = useState(null);
//   const [deleteSuccess, setDeleteSuccess] = useState(false);


//   /* SEARCH + PAGINATION */
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const ITEMS_PER_PAGE = 6;

//   /* ---------------- FETCH ---------------- */
//   const loadBlogs = async () => {
//     const res = await fetch(`${BASE_URL}/blogs`);
//     const data = await res.json();
//     setBlogs(data || []);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadBlogs();
//   }, []);

//   /* ---------------- FILTER ---------------- */
//   const filteredBlogs = useMemo(() => {
//     return blogs.filter((b) =>
//       b.title.toLowerCase().includes(search.toLowerCase()) ||
//       b.category.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [blogs, search]);

//   /* ---------------- PAGINATION ---------------- */
//   const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
//   const paginatedBlogs = filteredBlogs.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   /* ---------------- SUBMIT ---------------- */
//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     const fd = new FormData();
//     Object.entries(values).forEach(([k, v]) => v && fd.append(k, v));

//     const url = editBlog
//       ? `${BASE_URL}/blogs/${editBlog.blog_id}`
//       : `${BASE_URL}/blogs`;

//     const method = editBlog ? "PUT" : "POST";
//     await fetch(url, { method, body: fd });

//     resetForm();
//     setSubmitting(false);
//     setShowForm(false);
//     setEditBlog(null);
//     loadBlogs();
//   };

//   /* ---------------- DELETE ---------------- */
// const confirmDelete = async () => {
//   try {
//     const res = await fetch(
//       `${BASE_URL}/blogs/${deleteBlog.blog_id}`,
//       { method: "DELETE" }
//     );

//     if (!res.ok) throw new Error("Delete failed");

//     setDeleteBlog(null);
//     setDeleteSuccess(true);   // ✅ show success overlay
//     loadBlogs();

//     // auto hide after 2 seconds
//     setTimeout(() => setDeleteSuccess(false), 2000);
//   } catch (err) {
//     alert("Failed to delete blog");
//   }
// };




//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-8">

//       {/* HEADER */}
//       <h1 className="text-3xl font-bold mb-6">DotFit Admin Management</h1>

//       <div className="flex justify-between mb-6">
//         <input
//           placeholder="Search..."
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//           className="border p-2 rounded w-1/3"
//         />
//         <button
//           onClick={() => {
//             setEditBlog(null);
//             setShowForm(true);
//           }}
//           className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
//         >
//           <Plus size={16} /> Add Blog
//         </button>
//       </div>

//       {/* BLOG GRID */}
//       {loading ? (
//         <div className="flex justify-center py-20">
//           <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full" />
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {paginatedBlogs.map((b) => (
//               <div key={b.blog_id} className="bg-white rounded-xl shadow relative">
//                 <div className="absolute top-3 right-3 flex gap-2">
//                   <button
//                     onClick={() => {
//                       setEditBlog(b);
//                       setShowForm(true);
//                     }}
//                     className="bg-white p-2 rounded-full shadow"
//                   >
//                     <Edit size={16} className="text-blue-600" />
//                   </button>
//                   <button
//                     onClick={() => setDeleteBlog(b)}
//                     className="bg-white p-2 rounded-full shadow"
//                   >
//                     <Trash2 size={16} className="text-red-600" />
//                   </button>
//                 </div>

//                 <img
//                   src={b.cover_image}
//                   className="h-44 w-full object-cover rounded-t-xl"
//                   alt="cover"
//                 />

//                 <div className="p-4">
//                   <div className="flex justify-between text-xs text-gray-500 mb-2">
//                     <span className="flex items-center">
//                       <CalendarDays size={14} className="mr-1" />
//                       {new Date(b.published_at).toLocaleDateString()}
//                     </span>
//                     <span>{b.reading_time} min</span>
//                   </div>

//                   <h3 className="font-bold truncate">{b.title}</h3>

//                   <span
//                     className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${categoryColors[b.category]}`}
//                   >
//                     {b.category}
//                   </span>

//                   <button
//                     onClick={() => setViewBlog(b)}
//                     className="mt-4 text-blue-600 flex items-center text-sm"
//                   >
//                     Read More <ArrowRight size={14} className="ml-1" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* PAGINATION */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8 gap-2">
//               {Array.from({ length: totalPages }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i + 1)}
//                   className={`px-3 py-1 rounded ${
//                     currentPage === i + 1
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-200"
//                   }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </>
//       )}

//       {/* VIEW MODAL */}
//       <AnimatePresence>
//         {viewBlog && (
//           <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
//             <motion.div className="bg-white rounded-lg w-full max-w-2xl p-6">
//               <div className="flex justify-between mb-4">
//                 <h2 className="text-xl font-bold">{viewBlog.title}</h2>
//                 <button onClick={() => setViewBlog(null)}>
//                   <X />
//                 </button>
//               </div>
//               <img
//                 src={viewBlog.cover_image}
//                 className="h-56 w-full object-cover rounded mb-4"
//                 alt="cover"
//               />
//               <p className="text-gray-700 whitespace-pre-line">
//                 {viewBlog.content}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
// <AnimatePresence>
//   {deleteBlog && (
//     <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
//       <motion.div className="bg-white rounded-lg p-6 w-full max-w-sm">
//         <h3 className="font-bold text-lg mb-4">
//           Delete this blog?
//         </h3>
//         <p className="text-gray-600 mb-6">
//           This action cannot be undone.
//         </p>

//         <div className="flex justify-end gap-3">
//           <button
//             onClick={() => setDeleteBlog(null)}
//             className="px-4 py-2 bg-gray-200 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={confirmDelete}
//             className="px-4 py-2 bg-red-600 text-white rounded"
//           >
//             Delete
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>
// <AnimatePresence>
//   {deleteSuccess && (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       className="fixed bottom-6 right-6 z-[9999]"
//     >
//       <div className="bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
//         <span className="font-semibold">✅ Blog deleted successfully</span>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//       {/* ADD / EDIT MODAL */}
//       <AnimatePresence>
//         {showForm && (
//           <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
//             <motion.div className="bg-white rounded-lg w-full max-w-xl p-6 max-h-[90vh] overflow-y-auto">

//               <div className="flex justify-between mb-4">
//                 <h2 className="font-bold">
//                   {editBlog ? "Edit Blog" : "Add Blog"}
//                 </h2>
//                 <button onClick={() => setShowForm(false)}>
//                   <X />
//                 </button>
//               </div>

//              <Formik
//   enableReinitialize
//   initialValues={{
//     title: editBlog?.title || "",
//     category: editBlog?.category || "",
//     content: editBlog?.content || "",
//     reading_time: editBlog?.reading_time || "",
//     cover_image: null,
//     blog_id: editBlog?.blog_id || null,
//   }}
//   validationSchema={BlogSchema}
//   onSubmit={handleSubmit}
// >
//   {({ setFieldValue, isSubmitting }) => (
//     <Form className="space-y-4">

//       {/* Title */}
//       <div>
//         <label className="font-medium">Title</label>
//         <Field className="border p-2 w-full rounded" name="title" />
//         <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />
//       </div>

//       {/* Category (TEXT INPUT) */}
//       <div>
//         <label className="font-medium">Category</label>
//         <Field className="border p-2 w-full rounded" name="category" />
//         <ErrorMessage name="category" component="p" className="text-red-500 text-sm" />
//       </div>

//       {/* Description */}
//       <div>
//         <label className="font-medium">Description</label>
//         <Field
//           as="textarea"
//           name="content"
//           rows="5"
//           className="border p-2 w-full rounded"
//         />
//         <ErrorMessage name="content" component="p" className="text-red-500 text-sm" />
//       </div>

//       {/* Reading Time */}
//       <div>
//         <label className="font-medium">Reading Time (minutes)</label>
//         <Field
//           type="number"
//           name="reading_time"
//           className="border p-2 w-full rounded"
//         />
//         <ErrorMessage name="reading_time" component="p" className="text-red-500 text-sm" />
//       </div>

//       {/* Image */}
//       <div>
//         <label className="font-medium">Cover Image</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setFieldValue("cover_image", e.target.files[0])}
//         />
//         <ErrorMessage name="cover_image" component="p" className="text-red-500 text-sm" />

//         {editBlog?.cover_image && (
//           <img src={editBlog.cover_image} className="h-24 mt-2 rounded" />
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="bg-blue-600 text-white w-full py-2 rounded"
//       >
//         {editBlog ? "Update Blog" : "Create Blog"}
//       </button>

//     </Form>
//   )}
// </Formik>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Blogs;
import React, { useEffect, useMemo, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Edit, Trash2, CalendarDays, ArrowRight, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "../config";

/* ---------------- CATEGORY COLORS ---------------- */
const categoryColors = {
  Fitness: "bg-red-100 text-red-800",
  Nutrition: "bg-green-100 text-green-800",
  Workout: "bg-blue-100 text-blue-800",
  Lifestyle: "bg-purple-100 text-purple-800",
};

/* ---------------- VALIDATION ---------------- */
const BlogSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  category: Yup.string()
    .min(3, "Category must be at least 3 characters")
    .required("Category is required"),

  content: Yup.string()
    .min(30, "Description must be at least 30 characters")
    .required("Description is required"),

  reading_time: Yup.number()
    .typeError("Reading time must be a number")
    .positive("Must be positive")
    .required("Reading time is required"),

  cover_image: Yup.mixed().when("blog_id", {
    is: (val) => !val, // ADD MODE
    then: (schema) => schema.required("Cover image is required"),
    otherwise: (schema) => schema.notRequired(), // EDIT MODE
  }),
});

/* ---------------- COMPONENT ---------------- */
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [viewBlog, setViewBlog] = useState(null);
  const [deleteBlog, setDeleteBlog] = useState(null);

  /* SUCCESS OVERLAY */
  const [successOpen, setSuccessOpen] = useState(false);
  const [message, setMessage] = useState("");

  /* SEARCH + PAGINATION */
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  /* ---------------- FETCH BLOGS ---------------- */
  const loadBlogs = async () => {
    const res = await fetch(`${BASE_URL}/blogs`);
    const data = await res.json();
    setBlogs(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  /* ---------------- FILTER ---------------- */
  const filteredBlogs = useMemo(() => {
    return blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [blogs, search]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* ---------------- SUBMIT (ADD / EDIT) ---------------- */
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const fd = new FormData();
    fd.append("title", values.title);
    fd.append("category", values.category);
    fd.append("content", values.content);
    fd.append("reading_time", values.reading_time);

    if (values.cover_image) {
      fd.append("cover_image", values.cover_image);
    }

    const url = editBlog
      ? `${BASE_URL}/blogs/${editBlog.blog_id}`
      : `${BASE_URL}/blogs`;

    await fetch(url, {
      method: editBlog ? "PUT" : "POST",
      body: fd,
    });

    setMessage(editBlog ? "✅ Blog updated successfully" : "✅ Blog added successfully");
    setSuccessOpen(true);

    resetForm();
    setSubmitting(false);
    setShowForm(false);
    setEditBlog(null);
    loadBlogs();
  };

  /* ---------------- DELETE ---------------- */
  const confirmDelete = async () => {
    try {
      await fetch(`${BASE_URL}/blogs/${deleteBlog.blog_id}`, {
        method: "DELETE",
      });

      setDeleteBlog(null);
      setMessage("🗑️ Blog deleted successfully");
      setSuccessOpen(true);
      loadBlogs();
    } catch (err) {
      alert("Failed to delete blog");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">DotFit Admin Management</h1>

      {/* SEARCH + ADD */}
      <div className="flex justify-between mb-6">
        <input
          placeholder="Search by title or category..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={() => {
            setEditBlog(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} /> Add Blog
        </button>
      </div>

      {/* BLOG GRID */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedBlogs.map((b) => (
              <div key={b.blog_id} className="bg-white rounded-xl shadow relative">
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => {
                      setEditBlog(b);
                      setShowForm(true);
                    }}
                    className="bg-white p-2 rounded-full shadow"
                  >
                    <Edit size={16} className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => setDeleteBlog(b)}
                    className="bg-white p-2 rounded-full shadow"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>

                <img
                  src={b.cover_image}
                  className="h-44 w-full object-cover rounded-t-xl"
                  alt="cover"
                />

                <div className="p-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span className="flex items-center">
                      <CalendarDays size={14} className="mr-1" />
                      {new Date(b.published_at).toLocaleDateString()}
                    </span>
                    <span>{b.reading_time} min</span>
                  </div>

                  <h3 className="font-bold truncate">{b.title}</h3>

                  <span
                    className={`inline-block mt-2 text-xs px-3 py-1 rounded-full ${categoryColors[b.category]}`}
                  >
                    {b.category}
                  </span>

                  <button className="mt-4 text-blue-600 flex items-center text-sm">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      {/* ADD / EDIT MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
            <motion.div className="bg-white rounded-lg w-full max-w-xl p-6 max-h-[90vh] overflow-y-auto ">
              <div className="flex justify-between mb-4">
                <h2 className="font-bold">{editBlog ? "Edit Blog" : "Add Blog"}</h2>
                <button onClick={() => setShowForm(false)}>
                  <X />
                </button>
              </div>

              <Formik
                enableReinitialize
                initialValues={{
                  title: editBlog?.title || "",
                  category: editBlog?.category || "",
                  content: editBlog?.content || "",
                  reading_time: editBlog?.reading_time || "",
                  cover_image: null,
                  blog_id: editBlog?.blog_id || null,
                }}
                validationSchema={BlogSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue }) => (
                  <Form className="space-y-4">
                    <Field className="border p-2 w-full rounded" name="title" placeholder="Title" />
                    <ErrorMessage name="title" component="p" className="text-red-500 text-sm" />

                    <Field className="border p-2 w-full rounded" name="category" placeholder="Category" />
                    <ErrorMessage name="category" component="p" className="text-red-500 text-sm" />

                    <Field as="textarea" rows="5" name="content" className="border p-2 w-full rounded" />
                    <ErrorMessage name="content" component="p" className="text-red-500 text-sm" />

                    <Field type="number" name="reading_time" className="border p-2 w-full rounded" />
                    <ErrorMessage name="reading_time" component="p" className="text-red-500 text-sm" />

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFieldValue("cover_image", e.target.files[0])}
                    />
                    <ErrorMessage name="cover_image" component="p" className="text-red-500 text-sm" />

                    {editBlog?.cover_image && (
                      <img src={editBlog.cover_image} className="h-24 rounded" />
                    )}

                    <button className="bg-blue-600 text-white w-full py-2 rounded">
                      {editBlog ? "Update Blog" : "Create Blog"}
                    </button>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DELETE CONFIRM */}
      <AnimatePresence>
        {deleteBlog && (
          <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <motion.div className="bg-white p-6 rounded text-center">
              <p className="mb-4">Delete this blog?</p>
              <div className="flex gap-4 justify-center">
                <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded">
                  Delete
                </button>
                <button onClick={() => setDeleteBlog(null)} className="bg-gray-300 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {successOpen && (
          <motion.div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
            <motion.div className="bg-white p-6 rounded text-center">
              <p className="text-green-600 mb-4">{message}</p>
              <button
                onClick={() => setSuccessOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blogs;
