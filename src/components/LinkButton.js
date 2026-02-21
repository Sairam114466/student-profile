import React from "react";
// removed framer-motion to avoid extra dependency

export default function LinkButton({ link }) {
  const openLink = () => window.open(link.url, "_blank", "noopener,noreferrer");

  return (
    <button className="linkBtn" onClick={openLink} type="button">
      <div className="left">
        <span className="icon">{link.icon}</span>
      </div>
      <div className="center">{link.title}</div>
      <div className="right">⋮</div>
    </button>
  );
}