import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

export default function Home({ theme, setTheme, links, isAdmin }) {
  const nav = useNavigate();

  return (
    <div className="page">
      <ProfileCard
        theme={theme}
        setTheme={setTheme}
        links={links}
        isAdmin={isAdmin}
        goAdmin={() => nav("/admin")}
      />
    </div>
  );
}