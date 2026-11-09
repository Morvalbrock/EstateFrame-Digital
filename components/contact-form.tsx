"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, UploadCloud, CheckCircle2, Phone, MessageSquare, AlertCircle } from "lucide-react";
import { ApertureLoader } from "./loader";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setErrorMessage("Please complete the required fields before sending.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      setSelectedFileName(null);
    }, 700);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0].name);
    }
  }

  return (
    <div className="contact-form-wrapper">
      {isSubmitted ? (
        <div className="form-feedback-card" role="status" aria-live="polite">
          <div className="feedback-icon-box">
            <CheckCircle2 size={32} />
          </div>
          <h3>A design prototype.</h3>
          <p className="feedback-lead">
            Thank you for exploring the EstateFrame Digital studio brief.
          </p>
          <div className="feedback-disclaimer-box">
            <p>
              <strong>Notice —</strong> this form is an interactive prototype. No backend or inbox is wired yet,
              so this message has not been stored or sent.
            </p>
          </div>
          <p className="feedback-direct-prompt">
            To commission the studio, reach EstateFrame Digital directly through any of the lines below.
          </p>
          <div className="feedback-quick-actions">
            <a href="tel:+910000000000" className="button button-primary">
              <Phone size={14} /> Call +91 00000 00000
            </a>
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              <MessageSquare size={14} /> WhatsApp the Studio
            </a>
          </div>
          <button
            type="button"
            className="button button-tertiary"
            onClick={() => setIsSubmitted(false)}
          >
            Reset Demo
          </button>
        </div>
      ) : (
        <form className="quote-form-panel" onSubmit={handleSubmit} noValidate={false}>
          <div className="form-header-area">
            <span className="eyebrow">The brief</span>
            <h2>Begin a commission.</h2>
            <p>
              Share the frame the studio needs to answer — property, craft, folder size, and when you need it back.
            </p>
          </div>

          {errorMessage && (
            <div className="form-alert-banner" role="alert">
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="form-fields-grid">
            <div className="input-field-group">
              <label htmlFor="fullName">Your name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Sarah Jenkins"
                required
                autoComplete="name"
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="businessName">Studio or agency (optional)</label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                placeholder="Coastal Sotheby's, Studio Media…"
                autoComplete="organization"
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="emailAddress">Email</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="you@studio.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="contactPhone">Direct line</label>
              <input
                id="contactPhone"
                name="contactPhone"
                type="tel"
                placeholder="+1 555 019 2834"
                required
                autoComplete="tel"
              />
            </div>

            <div className="input-field-group span-full">
              <label htmlFor="serviceCategory">The craft</label>
              <select id="serviceCategory" name="serviceCategory" required defaultValue="">
                <option value="" disabled>Select the discipline the frame needs</option>
                <option value="single-image">Single frame composition</option>
                <option value="hdr-photo-editing">HDR blending</option>
                <option value="day-to-night">Day-to-night conversion</option>
                <option value="twilight">Twilight finishing</option>
                <option value="virtual-staging">Virtual staging</option>
                <option value="video-editing">Property film</option>
                <option value="item-removal">Item removal</option>
                <option value="aerial-drone">Aerial &amp; drone finishing</option>
                <option value="multiple-services">Several disciplines — full folder</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="input-field-group">
              <label htmlFor="projectVolume">Volume</label>
              <select id="projectVolume" name="projectVolume" required defaultValue="">
                <option value="" disabled>Approximate frame count</option>
                <option value="1-10">1 to 10 frames</option>
                <option value="11-30">11 to 30 frames</option>
                <option value="31-60">31 to 60 frames</option>
                <option value="60-plus">60+ frames (volume)</option>
                <option value="video-project">Property film</option>
                <option value="floorplan-project">Floor plan</option>
              </select>
            </div>

            <div className="input-field-group">
              <label htmlFor="timeline">Delivery window</label>
              <select id="timeline" name="timeline" required defaultValue="">
                <option value="" disabled>When do you need it back?</option>
                <option value="urgent-2hr">Rush — under 2 hours</option>
                <option value="free-test">Complimentary test frame</option>
                <option value="standard-12-24hr">Standard — 12 to 24 hours</option>
                <option value="scheduled">Recurring pipeline</option>
              </select>
            </div>

            <div className="input-field-group span-full">
              <label htmlFor="projectDescription">The brief</label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={4}
                placeholder="Describe the property, the mood of the frame, items to remove, the cloud link to RAW files (Drive, Dropbox, WeTransfer)…"
                required
              />
            </div>

            <div className="input-field-group span-full">
              <label>Reference frames (prototype only)</label>
              <div className="upload-dropzone-box">
                <input
                  type="file"
                  id="sampleUpload"
                  className="upload-native-input"
                  onChange={handleFileChange}
                  aria-label="Upload reference files"
                />
                <label htmlFor="sampleUpload" className="upload-visual-label">
                  <UploadCloud size={22} />
                  <span>
                    {selectedFileName ? (
                      <strong>Selected: {selectedFileName}</strong>
                    ) : (
                      <>
                        <strong>Choose a sample</strong> or drop it here
                      </>
                    )}
                  </span>
                  <small>JPG · PNG · RAW · MP4 · PDF (demo only)</small>
                </label>
              </div>
            </div>
          </div>

          <div className="form-consent-box">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>
                EstateFrame Digital may use these details to prepare and send a commission brief.
              </span>
            </label>
          </div>

          <div className="form-footer-actions">
            <button
              type="submit"
              className="button button-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <ApertureLoader size={14} label="Sending the brief" />
                  Sending…
                </>
              ) : (
                <>
                  Send the Brief
                  <ArrowRight size={14} />
                </>
              )}
            </button>
            <p className="form-disclaimer-note">
              Prototype form. For live commissions, call +91 00000 00000 or write hello@estateframe.digital.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
