import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "./api";
import { isLoggedIn } from "./auth";

export default function ProtectedRoute({ children, requireRole = null }) {
  const [user, setUser] = useState(null);
  const [ok, setOk] = useState(null);

  useEffect(() => {
    async function check() {
      if (!isLoggedIn()) {
        setOk(false);
        return;
      }
      try {
        const me = await API.get("/me/");
        setUser(me.data);

        // role-based access check
        if (requireRole) {
          if (requireRole === "superuser" && !me.data.is_superuser) {
            setOk(false);
            return;
          }
          if (requireRole === "admin" && !me.data.is_staff) {
            setOk(false);
            return;
          }
          if (requireRole === "user" && (me.data.is_staff || me.data.is_superuser)) {
            setOk(false);
            return;
          }
        }
        setOk(true);
      } catch (e) {
        setOk(false);
      }
    }
    check();
  }, [requireRole]);

  if (ok === null) return null; // loading
  if (!ok) return <Navigate to="/login" replace />;

  return children;
}