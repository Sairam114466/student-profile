import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin({ links, setLinks, setIsAdmin }) {
  const nav = useNavigate();

  // admin auth is handled by ProtectedRoute; no local password needed
  const [form, setForm] = useState({ title: "", icon: "🔗", url: "" });
  const [editId, setEditId] = useState(null);

  const sortedLinks = useMemo(() => [...links], [links]);

  const addLink = () => {
    if (!form.title.trim() || !form.url.trim()) return alert("Title + URL required");
    const newLink = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      title: form.title.trim(),
      icon: form.icon.trim() || "🔗",
      url: form.url.trim(),
    };
    setLinks([newLink, ...links]);
    setForm({ title: "", icon: "🔗", url: "" });
  };

  const startEdit = (link) => {
    setEditId(link.id);
    setForm({ title: link.title, icon: link.icon, url: link.url });
  };

  const saveEdit = () => {
    if (!form.title.trim() || !form.url.trim()) return alert("Title + URL required");
    setLinks(
      links.map((l) =>
        l.id === editId ? { ...l, title: form.title, icon: form.icon, url: form.url } : l
      )
    );
    setEditId(null);
    setForm({ title: "", icon: "🔗", url: "" });
  };

  const removeLink = (id) => {
    if (!window.confirm("Delete this link?")) return;
    setLinks(links.filter((l) => l.id !== id));
  };

  const logout = () => {
    setIsAdmin(false);
    nav("/");
  };

  return (
    <div className="page">
      <div className="card adminCard">
        <div className="adminTop">
          <h2 className="adminTitle">Admin Panel</h2>
          <button className="miniBtn" onClick={() => nav("/")}>🏠</button>
        </div>

        <div className="adminForm">
          <input
            className="input"
            placeholder="Title (e.g., LinkedIn)"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            className="input"
            placeholder="Icon (e.g., in / 📸 / 🌐)"
            value={form.icon}
            onChange={(e) => setForm({ ...form, icon: e.target.value })}
          />
          <input
            className="input"
            placeholder="URL (https://...)"
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />

          {editId ? (
            <div className="row">
              <button className="btn" onClick={saveEdit}>Save</button>
              <button className="btn ghost" onClick={() => { setEditId(null); setForm({ title:"", icon:"🔗", url:"" }); }}>
                Cancel
              </button>
            </div>
          ) : (
            <button className="btn" onClick={addLink}>Add Link</button>
          )}
        </div>

        <div className="adminList">
          {sortedLinks.map((l) => (
            <div key={l.id} className="adminItem">
              <div className="adminItemLeft">
                <span className="icon">{l.icon}</span>
                <div>
                  <div className="adminItemTitle">{l.title}</div>
                  <div className="adminItemUrl">{l.url}</div>
                </div>
              </div>

              <div className="adminActions">
                <button className="miniBtn" onClick={() => startEdit(l)} title="Edit">✏️</button>
                <button className="miniBtn" onClick={() => removeLink(l.id)} title="Delete">🗑️</button>
              </div>
            </div>
          ))}
        </div>

        <button className="btn danger" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}