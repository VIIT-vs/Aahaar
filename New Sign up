import React, { useState } from "react";


function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "", // donor or receiver
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup">
      <h2 className="signup-title">Signup</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <fieldset className="signup-fieldset">
          <legend className="signup-legend">User Information</legend>

          <label className="signup-label">
            Full Name
            <input
              type="text"
              name="name"
              className="signup-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="signup-label">
            Email
            <input
              type="email"
              name="email"
              className="signup-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="signup-label">
            Password
            <input
              type="password"
              name="password"
              className="signup-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <label className="signup-label">
            I am a:
            <select
              name="role"
              className="signup-select"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="donor">Donor</option>
              <option value="receiver">Receiver</option>
            </select>
          </label>

          <button type="submit" className="signup-button">
            Signup
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
