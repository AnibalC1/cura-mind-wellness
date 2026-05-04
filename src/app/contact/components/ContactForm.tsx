"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, LOCATIONS } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  location: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-luxury p-12 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={36} className="text-gold" />
        </div>
        <h2 className="font-cormorant text-3xl text-ivory mb-4">
          Thank You, {form.name.split(" ")[0]}
        </h2>
        <div className="gold-divider mx-auto mb-6" />
        <p className="text-ivory/50 leading-relaxed font-light">
          We've received your message and will be in touch within one business day. Your journey toward healing has begun.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(INITIAL_FORM); }}
          className="mt-8 text-gold/60 hover:text-gold text-sm tracking-widest uppercase transition-colors"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-10">
        <span className="label-eyebrow mb-3 inline-block">Intake Form</span>
        <h2 className="font-cormorant text-display-md font-light text-ivory mb-4">
          Request an Appointment
        </h2>
        <p className="text-ivory/40 text-sm font-light leading-relaxed">
          Fill out this form and our team will contact you within one business day to confirm your appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label="Full Name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Field
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="(555) 000-0000"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <Field
          label="Email Address"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <SelectField
          label="Service of Interest"
          name="service"
          value={form.service}
          onChange={handleChange}
          options={SERVICES.map((s) => ({
            value: s.id,
            label: s.name + (s.note ? ` — ${s.note}` : ""),
          }))}
          placeholder="Select a service..."
        />

        <SelectField
          label="Preferred Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          options={[
            ...LOCATIONS.map((l) => ({
              value: l.id,
              label: `${l.state} — ${l.city} (${l.phone})`,
            })),
            { value: "telehealth", label: "Telehealth (All States)" },
          ]}
          placeholder="Select a location..."
        />

        <div>
          <label className="block label-eyebrow mb-2.5">
            Message <span className="text-ivory/20 normal-case text-xs tracking-normal">(optional)</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us a bit about what brings you here, or any questions you have..."
            className={cn(
              "w-full bg-bg-elevated border border-ivory/10 rounded-xl px-5 py-4",
              "text-ivory/70 placeholder:text-ivory/20 text-sm",
              "focus:outline-none focus:border-gold/40 focus:bg-bg-elevated/80",
              "transition-all duration-300 resize-none"
            )}
          />
        </div>

        {/* Privacy note */}
        <p className="text-ivory/20 text-xs leading-relaxed">
          Your information is protected under HIPAA. We will never share your personal health information without your consent.
        </p>

        <button
          type="submit"
          disabled={loading}
          className={cn(
            "btn-primary w-full justify-center",
            loading && "opacity-70 cursor-not-allowed"
          )}
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border border-bg/30 border-t-bg rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Request
              <Send size={14} />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block label-eyebrow mb-2.5">
        {label} {required && <span className="text-gold/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          "w-full bg-bg-elevated border border-ivory/10 rounded-xl px-5 py-4",
          "text-ivory/70 placeholder:text-ivory/20 text-sm",
          "focus:outline-none focus:border-gold/40 focus:bg-bg-elevated/80",
          "transition-all duration-300"
        )}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block label-eyebrow mb-2.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full bg-bg-elevated border border-ivory/10 rounded-xl px-5 py-4",
          "text-sm transition-all duration-300",
          "focus:outline-none focus:border-gold/40",
          value ? "text-ivory/70" : "text-ivory/20",
          "appearance-none cursor-pointer"
        )}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235DA9A7' opacity='0.4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          backgroundSize: "1.2rem",
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-bg-elevated text-ivory/70">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
