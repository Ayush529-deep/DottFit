import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config";

const AssessmentCheckDetails = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 5;

  /* ---------- FETCH USERS ---------- */
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/assessments/users`);
      setUsers(res.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* ---------- DELETE ---------- */
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this assessment?")) return;

    try {
      await axios.delete(`${BASE_URL}/assessments/${id}`);
      fetchUsers();
    } catch (err) {
      alert("Delete failed");
    }
  };

  /* ---------- SEARCH ---------- */
  const filtered = users.filter((u) => {
    const term = search.toLowerCase();
    return (
      u?.full_name?.toLowerCase().includes(term) ||
      u?.email?.toLowerCase().includes(term) ||
      u?.contact_number?.includes(search)
    );
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Assessment Check – User Details
      </h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="border p-2 rounded mb-4 w-1/3"
      />

      <div className="bg-white shadow rounded">
        <table className="w-full text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">BMI</th>
              <th className="p-3">BMR</th>
              <th className="p-3">Created</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.full_name}</td>
                <td className="p-3">{u.age}</td>
                <td className="p-3">{u.gender}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.contact_number}</td>
                <td className="p-3">{u.bmi ?? "-"}</td>
                <td className="p-3">{u.bmr ?? "-"}</td>
                <td className="p-3">
                  {new Date(u.created_at).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => deleteUser(u.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="10" className="p-4 text-center text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssessmentCheckDetails;

