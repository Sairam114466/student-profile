import React from "react";
import LinkButton from "./LinkButton";

export default function LinkList({ links }) {
  return (
    <div className="links">
      {links.map((link) => (
        <LinkButton key={link.id} link={link} />
      ))}
    </div>
  );
}