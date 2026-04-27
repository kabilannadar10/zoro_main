import React, { useState } from "react";
import axios from "axios";
import { saveTokens } from "./auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function BusinessLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("https://zoro-tech-website-backend.onrender.com/api/auth/token/", {
        username,
        password,
      });
      saveTokens(res.data);

      const me = await axios.get("https://zoro-tech-website-backend.onrender.com/api/me/", {
        headers: { Authorization: `Bearer ${res.data.access}` },
      });

      if (me.data.is_superuser) navigate("/superuser");
      else if (me.data.is_staff) navigate("/admin");
      else navigate("/user");
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-600 p-4">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20"
      >
        <h1 className="text-3xl font-extrabold mb-6 text-gray-900 text-center">
          Business Login
        </h1>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 mb-4 text-center font-medium"
          >
            {error}
          </motion.p>
        )}

        <div className="space-y-4">
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 w-full bg-emerald-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      </motion.form>
    </div>
  );
}