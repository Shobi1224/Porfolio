// ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("");
    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      _honeypot: form._honeypot?.value || "",
    };

    if (!data.email || !data.message) {
      setStatus("Please provide email and a message.");
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(data.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (res.ok) {
        setStatus(body.message || "Thanks — your message was sent.");
        form.reset();
      } else {
        setStatus(body.message || "Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Contact Me</h2>

        <div className="max-600">
          <form className="contact-form" onSubmit={onSubmit} autoComplete="on">
            <div className="row">
              <div className="field">
                <label htmlFor="name">Your name (optional)</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name (optional)"
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me how I can help..."
                required
              />
            </div>

            {/* honeypot */}
            <label className="hp" style={{ display: "none" }}>
              Do not fill
              <input name="_honeypot" tabIndex="-1" autoComplete="off" />
            </label>

            <div className="actions">
              <button className="btn primary" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              <p className="form-status" aria-live="polite">
                {status}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
