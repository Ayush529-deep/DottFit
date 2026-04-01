import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "../config";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 5;

  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [message, setMessage] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      setUsers(res.data);
    } catch (err) {
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      status: true
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email().required("Required"),
      password: Yup.string().when([], {
        is: () => !editMode,
        then: (s) => s.required("Required")
      }),
      role: Yup.string().required("Required")
    }),
    onSubmit: async (values) => {
      try {
        if (editMode) {
          await axios.put(`${BASE_URL}/users/${selectedId}`, values);
          setMessage("Admin updated successfully");
        } else {
          await axios.post(`${BASE_URL}/users`, values);
          setMessage("Admin created successfully");
        }

        fetchUsers();
        setModalOpen(false);
        setSuccessOpen(true);
      } catch {
        setMessage("Operation failed");
        setSuccessOpen(true);
      }
    }
  });

  const openAdd = () => {
    setEditMode(false);
    formik.resetForm();
    setModalOpen(true);
  };

  const openEdit = (u) => {
    setEditMode(true);
    setSelectedId(u.admin_id);
    formik.setValues({
      name: u.name,
      email: u.email,
      password: "",
      role: u.role,
      status: u.status
    });
    setModalOpen(true);
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`${BASE_URL}/users/${confirmDelete}`);
      setMessage("Admin deleted");
      fetchUsers();
    } catch {
      setMessage("Delete failed");
    } finally {
      setConfirmDelete(null);
      setSuccessOpen(true);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">DotFit Admin Management</h1>

      <div className="flex justify-between mb-4">
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Admin
        </button>
      </div>

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Admin ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Created</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u) => (
              <tr key={u.admin_id} className="border-t">
                <td className="p-3">{u.admin_id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">
                  {u.status ? "Active" : "Inactive"}
                </td>
                <td className="p-3">
                  {new Date(u.created_at).toLocaleDateString()}
                </td>
                <td className="p-3 text-center space-x-2">
                  <button
                    onClick={() => openEdit(u)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setConfirmDelete(u.admin_id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No admins found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div className="fixed inset-0 bg-black/40 flex items-center justify-center">
            <motion.div className="bg-white p-6 rounded w-96">
              <h2 className="text-xl font-semibold mb-4">
                {editMode ? "Edit Admin" : "Add Admin"}
              </h2>

              <form onSubmit={formik.handleSubmit} className="space-y-3">
                <input
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="border p-2 w-full rounded"
                />
                <input
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="border p-2 w-full rounded"
                />
                {!editMode && (
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="border p-2 w-full rounded"
                  />
                )}
                <select
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                  className="border p-2 w-full rounded"
                >
                  <option value="">Select role</option>
                  <option value="admin">Admin</option>
                  <option value="content_manager">Content Manager</option>
                  <option value="viewer">Viewer</option>
                </select>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    {editMode ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirm */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded text-center">
            <p className="mb-4">Delete this admin?</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={deleteUser}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success */}
      {successOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded text-center">
            <p className="text-green-600 mb-4">{message}</p>
            <button
              onClick={() => setSuccessOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
