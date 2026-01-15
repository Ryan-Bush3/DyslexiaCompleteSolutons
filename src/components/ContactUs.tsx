import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

export default function ContactUs() {
  const [result, setResult] = useState("");
  const [reason, setReason] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bf57825c-c081-497c-ac7e-e2e64792a069");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setReason("");
    } else {
      setResult("Error");
    }
  };

  const remainingChars = 350 - reason.length;

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Contact Us</h1>
        <p className="contact-intro">
          We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>

        {result === "Form Submitted Successfully" ? (
          <div className="success-message">
            <h2>Thank you for contacting us!</h2>
            <p>We've received your message and will get back to you soon.</p>
            <Link to="/" className="back-home-button">Return to Home</Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">
                Reason for Contacting <span className="required">*</span>
              </label>
              <textarea
                id="reason"
                name="reason"
                value={reason}
                onChange={(e) => {
                  if (e.target.value.length <= 350) {
                    setReason(e.target.value);
                  }
                }}
                rows={6}
                placeholder="Please tell us how we can help you..."
                required
              />
              <div className="character-count">
                {remainingChars} characters remaining
              </div>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
            {result && result !== "Form Submitted Successfully" && (
              <span className="form-status">{result}</span>
            )}
          </form>
        )}
      </div>
    </div>
  );
}