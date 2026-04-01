import React, { useEffect, useMemo, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Edit,
  Trash2,
  ArrowRight,
  Plus,
  X,
  CheckCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "../config";

/* ---------------- VALIDATION ---------------- */
const TestimonialSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string()
    .min(10, "Minimum 10 characters")
    .required("Description is required"),
  media_type: Yup.string().required("Media type is required"),
});

/* ---------------- COMPONENT ---------------- */
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editTestimonial, setEditTestimonial] = useState(null);
  const [deleteTestimonial, setDeleteTestimonial] = useState(null);
  const [viewTestimonial, setViewTestimonial] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  /* SEARCH + PAGINATION */
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  /* ---------------- FETCH ---------------- */
  const loadTestimonials = async () => {
    setLoading(true);
    const res = await fetch(`${BASE_URL}/testimonials`);
    const data = await res.json();
    setTestimonials(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  /* ---------------- FILTER ---------------- */
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter((t) =>
      t.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [testimonials, search]);

  /* ---------------- PAGINATION ---------------- */
  const totalItems = filteredTestimonials.length;
  const totalPages = Math.max(
    1,
    Math.ceil(totalItems / ITEMS_PER_PAGE)
  );

  const paginatedTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const fd = new FormData();
    Object.entries(values).forEach(([k, v]) => v && fd.append(k, v));

    const url = editTestimonial
      ? `${BASE_URL}/testimonials/${editTestimonial.id}`
      : `${BASE_URL}/testimonials`;

    const method = editTestimonial ? "PUT" : "POST";

    await fetch(url, { method, body: fd });

    resetForm();
    setSubmitting(false);
    setShowForm(false);
    setEditTestimonial(null);
    setSuccessMsg(
      editTestimonial
        ? "Testimonial updated successfully!"
        : "Testimonial created successfully!"
    );
    loadTestimonials();
  };

  /* ---------------- DELETE ---------------- */
  const confirmDelete = async () => {
    await fetch(`${BASE_URL}/testimonials/${deleteTestimonial.id}`, {
      method: "DELETE",
    });
    setDeleteTestimonial(null);
    setSuccessMsg("Testimonial deleted successfully!");
    loadTestimonials();
  };

  /* ---------------- MEDIA ---------------- */
  const renderMedia = (t) => {
    if (t.media_type === "image") {
      return (
        <img
          src={t.media_url}
          className="h-40 sm:h-48 w-full object-cover rounded-t-xl"
          alt=""
        />
      );
    }
    if (t.media_type === "video") {
      return (
        <video
          controls
          className="h-40 sm:h-48 w-full object-cover rounded-t-xl"
        >
          <source src={t.media_url} />
        </video>
      );
    }
    if (t.media_type === "audio") {
      return (
        <div className="p-4">
          <audio controls className="w-full">
            <source src={t.media_url} />
          </audio>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">

      {/* HEADER */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        DotFit Admin Management
      </h1>

      {/* SEARCH + ADD */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between mb-6">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 rounded w-full sm:w-1/3"
        />

        <button
          onClick={() => {
            setEditTestimonial(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 justify-center"
        >
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      {/* GRID */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-600 rounded-full" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedTestimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-xl shadow relative">
                <div className="absolute top-3 right-3 flex gap-2 z-10">
                  <button
                    onClick={() => {
                      setEditTestimonial(t);
                      setShowForm(true);
                    }}
                    className="bg-white p-2 rounded-full shadow"
                  >
                    <Edit size={16} className="text-blue-600" />
                  </button>
                  <button
                    onClick={() => setDeleteTestimonial(t)}
                    className="bg-white p-2 rounded-full shadow"
                  >
                    <Trash2 size={16} className="text-red-600" />
                  </button>
                </div>

                {renderMedia(t)}

                <div className="p-4">
                  <h3 className="font-bold truncate">{t.name}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {t.description}
                  </p>

                  <button
                    onClick={() => setViewTestimonial(t)}
                    className="mt-4 text-blue-600 flex items-center text-sm"
                  >
                    View <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION (ALWAYS VISIBLE) */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((p) => Math.max(1, p - 1))
              }
              className="px-3 py-1 rounded bg-gray-200 text-sm disabled:opacity-40"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded text-sm min-w-[36px] ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(totalPages, p + 1)
                )
              }
              className="px-3 py-1 rounded bg-gray-200 text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* ADD / EDIT MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
            <motion.div className="bg-white rounded-lg w-full max-w-lg p-6">
              <div className="flex justify-between mb-4">
                <h2 className="font-bold">
                  {editTestimonial ? "Edit Testimonial" : "Add Testimonial"}
                </h2>
                <button onClick={() => setShowForm(false)}>
                  <X />
                </button>
              </div>

              <Formik
                enableReinitialize
                initialValues={{
                  name: editTestimonial?.name || "",
                  description: editTestimonial?.description || "",
                  media_type: editTestimonial?.media_type || "",
                  media: null,
                }}
                validationSchema={TestimonialSchema}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue, isSubmitting }) => (
                  <Form className="space-y-3">
                    <Field
                      name="name"
                      className="border p-2 w-full rounded"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <Field
                      as="textarea"
                      name="description"
                      className="border p-2 w-full rounded h-28"
                      placeholder="Description"
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      className="text-red-500 text-sm"
                    />

                    <Field
                      as="select"
                      name="media_type"
                      className="border p-2 w-full rounded"
                    >
                      <option value="">Select Media Type</option>
                      <option value="image">Image</option>
                      <option value="video">Video</option>
                      <option value="audio">Audio</option>
                    </Field>

                    <input
                      type="file"
                      onChange={(e) =>
                        setFieldValue("media", e.target.files[0])
                      }
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-white w-full py-2 rounded"
                    >
                      {isSubmitting ? "Saving..." : "Save Testimonial"}
                    </button>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS */}
      <AnimatePresence>
        {successMsg && (
          <motion.div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
            <motion.div className="bg-white p-6 rounded-lg text-center">
              <CheckCircle
                className="mx-auto text-green-600 mb-3"
                size={42}
              />
              <p className="font-semibold">{successMsg}</p>
              <button
                onClick={() => setSuccessMsg("")}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded"
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

export default Testimonials;
