"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Phone, MessageSquare, AlertCircle } from "lucide-react";
import { ApertureLoader } from "./loader";

export function FreeTrialForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setErrorMessage("Add your name, email, and a cloud link to the two RAW files.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
    }, 700);
  }

  if (isSubmitted) {
    return (
      <div className="trial-feedback-card" role="status" aria-live="polite">
        <div className="feedback-icon-box">
          <CheckCircle2 size={28} />
        </div>
        <h3>Trial requested.</h3>
        <p className="feedback-lead">
          Send the two RAW files to the studio directly and we&apos;ll return finished frames within 12 hours — no card, no commitment.
        </p>
        <div className="feedback-quick-actions">
          <a href="https://wa.me/916383750315" target="_blank" rel="noreferrer" className="button button-accent">
            <MessageSquare size={14} /> Send Files via WhatsApp
          </a>
          <a href="tel:+916383750315" className="button button-secondary">
            <Phone size={14} /> Call +91 63837 50315
          </a>
        </div>
        <button type="button" className="button button-tertiary" onClick={() => setIsSubmitted(false)}>
          Request another trial
        </button>
      </div>
    );
  }

  return (
    <form className="trial-form-panel" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="form-alert-banner" role="alert">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="trial-fields-grid">
        <div className="input-field-group">
          <label htmlFor="trialName">Your name</label>
          <input
            id="trialName"
            name="trialName"
            type="text"
            placeholder="Sarah Jenkins"
            required
            autoComplete="name"
          />
        </div>

        <div className="input-field-group">
          <label htmlFor="trialEmail">Work email</label>
          <input
            id="trialEmail"
            name="trialEmail"
            type="email"
            placeholder="you@studio.com"
            required
            autoComplete="email"
          />
        </div>

        <div className="input-field-group">
          <label htmlFor="trialCraft">Pick the craft to try</label>
          <select id="trialCraft" name="trialCraft" required defaultValue="">
            <option value="" disabled>Choose one — on the house</option>
            <option value="hdr-photo-editing">HDR blending</option>
            <option value="day-to-night">Day-to-dusk conversion</option>
            <option value="virtual-staging">Virtual staging</option>
            <option value="item-removal">Item removal</option>
            <option value="aerial-drone">Drone finishing</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div className="input-field-group">
          <label htmlFor="trialVolume">Weekly listing volume</label>
          <select id="trialVolume" name="trialVolume" required defaultValue="">
            <option value="" disabled>Rough weekly folders</option>
            <option value="1-3">1 to 3 listings / week</option>
            <option value="4-10">4 to 10 listings / week</option>
            <option value="10-plus">10+ listings / week</option>
            <option value="agency">Agency / brokerage</option>
          </select>
        </div>

        <div className="input-field-group span-full">
          <label htmlFor="trialLink">Cloud link to 2 RAW files</label>
          <input
            id="trialLink"
            name="trialLink"
            type="text"
            placeholder="Drive, Dropbox, WeTransfer — paste the link"
            required
          />
        </div>
      </div>

      <div className="form-consent-box">
        <label className="checkbox-label">
          <input type="checkbox" required />
          <span>Send me the finished frames and a one-line price for my usual folder size.</span>
        </label>
      </div>

      <button type="submit" className="button button-accent submit-btn trial-submit-btn" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <ApertureLoader size={14} label="Requesting trial" />
            Requesting…
          </>
        ) : (
          <>
            Claim Two Free Edits
            <ArrowRight size={14} />
          </>
        )}
      </button>

      <p className="trial-micro-note">
        No card. No subscription. Finished frames back in 12 hours — judge the work before you commission.
      </p>
    </form>
  );
}
