import React from "react";
// removed framer-motion to avoid extra dependency
import ProfileHeader from "./ProfileHeader";
import SocialIcons from "./SocialIcons";
import LinkList from "./LinkList";
import ThemeToggle from "./ThemeToggle";

export default function ProfileCard({ theme, setTheme, links, isAdmin, goAdmin }) {
  return (
    <div className="card">
      <div className="topBar">
        <ThemeToggle theme={theme} setTheme={setTheme} />

        {isAdmin ? (
          <button className="miniBtn" onClick={goAdmin} title="Admin Panel">
            ⚙️
          </button>
        ) : (
          <span className="hint">🔒</span>
        )}
      </div>

      <ProfileHeader />
      <SocialIcons />

      <LinkList links={links} />

      <p className="footer">© {new Date().getFullYear()} PALLE SAIRAM</p>
    </div>
  );
}