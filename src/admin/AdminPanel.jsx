import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Fetch skills
  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error(err));
  }, []);

  // Add new skill
  const addSkill = async () => {
    if (!newSkill) return;
    const res = await fetch("/api/skills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newSkill }),
    });
    const data = await res.json();
    setSkills([...skills, data]);
    setNewSkill("");
  };

  // Update skill
  const updateSkill = async (id, newName) => {
    const res = await fetch(`/api/skills/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    const data = await res.json();
    setSkills(skills.map((s) => (s._id === id ? data : s)));
  };

  // Delete skill
  const deleteSkill = async (id) => {
    await fetch(`/api/skills/${id}`, { method: "DELETE" });
    setSkills(skills.filter((s) => s._id !== id));
  };

  return (
    <div className="container">
      <h1>Admin Panel</h1>

      {/* Add Skill */}
      <div>
        <input
          type="text"
          placeholder="New Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>

      {/* Skills List */}
      <ul>
        {skills.map((skill) => (
          <li key={skill._id}>
            <input
              type="text"
              defaultValue={skill.name}
              onBlur={(e) => updateSkill(skill._id, e.target.value)}
            />
            <button onClick={() => deleteSkill(skill._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
