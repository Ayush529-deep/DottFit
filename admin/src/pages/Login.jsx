// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Eye, EyeOff, X } from "lucide-react";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import Pic from "../assets/Pic.png";

// const Login = () => {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       remember: false,
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email").required("Email is required"),
//       password: Yup.string()
//         .min(6, "Minimum 6 characters")
//         .required("Password is required"),
//     }),
//     onSubmit: async (values) => {
//       setLoading(true);
//       setError("");

//       try {
//         const { success, error, user } = await login({
//           email: values.email,
//           password: values.password,
//         });

//         if (!success) {
//           setError(error || "Invalid credentials");
//           return;
//         }

//         // ROLE BASED REDIRECT
//         const dashboardPaths = {
//           admin: "/admin/",
//           staff: "/staff/",
//           viewer: "/viewer/",
//         };

//         navigate(dashboardPaths[user?.role] || "/");
//       } catch (err) {
//         console.error("LOGIN ERROR:", err);
//         setError("Connection error, please try again.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="flex h-screen w-screen overflow-hidden text-slate-800">
      
//       {/* LEFT SECTION */}
//       <div className="flex w-full flex-col md:w-1/2 h-full">
        
//         <div className="flex justify-center pt-6 md:justify-start md:pl-12">
//           <span className="text-2xl font-bold text-blue-600">
//             Dottfit Women Shopping Store
//           </span>
//         </div>

//         <div className="my-auto mx-auto flex flex-col justify-center px-4 md:justify-start lg:w-[28rem]">

//           <p className="text-center text-2xl font-bold md:text-left md:text-4xl">
//             Welcome to <br />
//             <span className="text-blue-600">Dottfit Admin Portal</span>
//           </p>

//           <p className="mt-6 text-center font-medium md:text-left">
//             Sign in to manage products, orders & store settings.
//           </p>

//           {error && (
//             <div className="mt-4 bg-red-100 p-3 rounded-md text-sm text-red-700 flex justify-between items-center">
//               {error}
//               <button onClick={() => setError("")}>
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           )}

//           {/* FORM */}
//           <form onSubmit={formik.handleSubmit} className="flex flex-col pt-3 md:pt-8">

//             {/* EMAIL FIELD */}
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 Admin Email
//               </label>
//               <div className="relative">
//                 <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

//                 <input
//                   type="email"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   placeholder="Enter admin email"
//                   className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition ${
//                     formik.touched.email && formik.errors.email
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//               </div>

//               {formik.touched.email && formik.errors.email && (
//                 <p className="text-sm text-red-600 mt-1">
//                   {formik.errors.email}
//                 </p>
//               )}
//             </div>

//             {/* PASSWORD FIELD */}
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium text-gray-700">
//                 Password
//               </label>

//               <div className="relative">
//                 <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   placeholder="Enter password"
//                   className={`pl-10 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 transition ${
//                     formik.touched.password && formik.errors.password
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />

//                 {/* SHOW/HIDE PASSWORD */}
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="text-gray-400" />
//                   ) : (
//                     <Eye className="text-gray-400" />
//                   )}
//                 </button>
//               </div>

//               {formik.touched.password && formik.errors.password && (
//                 <p className="text-sm text-red-600 mt-1">
//                   {formik.errors.password}
//                 </p>
//               )}
//             </div>

//             {/* REMEMBER ME */}
//             <div className="flex items-center mb-6">
//               <input
//                 type="checkbox"
//                 name="remember"
//                 checked={formik.values.remember}
//                 onChange={formik.handleChange}
//                 className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
//               />
//               <label className="ml-2 text-sm text-gray-700">Remember me</label>
//             </div>

//             {/* SUBMIT BUTTON */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>

//           </form>
//         </div>
//       </div>

//       {/* RIGHT SIDE IMAGE SECTION */}
//       <div className="hidden md:flex md:w-1/2 h-full flex-col bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        
//         <div className="flex flex-col justify-center px-8 py-12 xl:px-16 w-full flex-1">
//           <span className="mb-4 bg-white text-blue-600 font-medium px-3 py-1 rounded-full w-fit">
//             Dottfit Fashion
//           </span>

//           <p className="mb-4 text-3xl font-semibold leading-10">
//             Empowering <span className="text-yellow-200">Modern Women</span> With Style
//           </p>

//           <p className="mb-6">
//             Dottfit brings premium women’s wear, modern fashion, and stylish essentials for every occasion.
//           </p>
//         </div>

//         <div className="flex-1 w-full">
//           <img
//             src={Pic}
//             alt="Dottfit Fashion"
//             className="h-1/2 w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff, X } from "lucide-react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Pic from "../assets/pic.png";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string().required("Password required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      const result = await login(values);

      if (!result.success) {
        setError(result.error);
        setLoading(false);
        return;
      }

      const roleRoutes = {
        admin: "/admin",
        staff: "/staff",
        viewer: "/viewer",
      };

      navigate(roleRoutes[result.user.role] || "/");
      setLoading(false);
    },
  });

  return (
    <div className="flex h-screen w-screen overflow-hidden text-slate-800">

      {/* LEFT */}
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-6 md:justify-start md:pl-12">
          <span className="text-2xl font-bold text-blue-600">
            Dottfit Fitness
          </span>
        </div>

        <div className="my-auto mx-auto px-6 lg:w-[28rem]">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to <br />
            <span className="text-blue-600">Dottfit Admin Portal</span>
          </h1>

          <p className="mb-6">
            Manage members, programs & transformations.
          </p>

          {error && (
            <div className="mb-4 bg-red-100 p-3 rounded-md text-red-700 flex justify-between">
              {error}
              <button onClick={() => setError("")}>
                <X size={16} />
              </button>
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium">Admin Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="pl-10 w-full border p-2 rounded-lg"
                  placeholder="Enter admin email"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  className="pl-10 w-full border p-2 rounded-lg"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex-col">
        <div className="flex-1 flex flex-col justify-center px-12">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full w-fit mb-4">
            Dottfit Fitness
          </span>
          <h2 className="text-3xl font-semibold mb-3">
            Fitness for Modern Life <br /> After 30 & 40
          </h2>
          <p>
            Simple workouts. Indian diet. Sustainable results.
          </p>
        </div>

        <img src={Pic} alt="Dottfit Fitness" className="h-1/2 object-cover" />
      </div>
    </div>
  );
};

export default Login;
