import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

import useLocalStorage from "./hooks/useLocalStorage";
import defaultLinks from "./data/defaultLinks";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [links, setLinks] = useLocalStorage("links", defaultLinks);
  const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              theme={theme}
              setTheme={setTheme}
              links={links}
              isAdmin={isAdmin}
              setIsAdmin={setIsAdmin}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute isAdmin={isAdmin}>
              <Admin
                links={links}
                setLinks={setLinks}
                setIsAdmin={setIsAdmin}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}