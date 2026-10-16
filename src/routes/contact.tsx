import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Clock3,
  Globe2,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Quorisx — Let’s Talk About Your Business" },
      {
        name: "description",
        content:
          "Contact Quorisx about offshore staffing, managed operations, software, IT, and digital solutions. Based in Canton, Georgia.",
      },
    ],
  }),
  component: ContactPage,
});

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@quorisx.com",
    href: "mailto:info@quorisx.com",
    action: "Send us an email",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "201-812-9584",
    href: "tel:+12018129584",
    action: "Call our team",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "225 Reformation Pkwy Ste 200, Canton, GA 30114",
    href: "https://www.google.com/maps/search/?api=1&query=225%20Reformation%20Pkwy%20Ste%20200%2C%20Canton%2C%20GA%2030114",
    action: "View directions",
  },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const busy = useRef(false);
  const pending = useRef<{ key: string; id: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || submitted) return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const fields = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      website: String(data.get("website") ?? ""),
    };
    if (!fields.name || !fields.email || !fields.message) {
      setError("Please complete your name, work email, and message.");
      return;
    }
    const key = JSON.stringify(fields);
    if (pending.current?.key !== key) pending.current = { key, id: crypto.randomUUID() };
    busy.current = true;
    setSubmitting(true);
    setError("");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 45000);
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxddV5XXdvEN0eEFzRX28cGdkV-lyPL4GVg2OiOaJS9AHAHZmMbmzCi6lIF3MrmB2as/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...fields, requestId: pending.current.id }),
        signal: controller.signal,
        credentials: "omit",
        redirect: "follow",
      });
      if (!response.ok) throw new Error("We could not confirm your submission. Please try again.");
      const result = await response.json();
      if (result.saved !== true) {
        throw new Error(result.code === "RATE_LIMIT"
          ? "You have submitted several enquiries recently. Please wait ten minutes before trying again."
          : result.code === "VALIDATION"
            ? "Please check your form details and try again."
            : "We could not confirm your submission. Please try again.");
      }
      const text = ["*New Website Enquiry — Quorisx*", "", `*Name:* ${fields.name}`, `*Work email:* ${fields.email}`, `*Company:* ${fields.company || "Not provided"}`, `*Interested in:* ${fields.service}`, "", "*Message:*", fields.message].join("\n");
      setWhatsappUrl(`https://wa.me/12402882006?text=${encodeURIComponent(text)}`);
      setSubmitted(true);
      setPopupOpen(true);
    } catch (err) {
      setError(err instanceof Error && err.name !== "AbortError" && err.name !== "TypeError"
        ? err.message
        : "We could not confirm your submission. Please check your connection and try again.");
    } finally {
      window.clearTimeout(timeout);
      busy.current = false;
      setSubmitting(false);
    }
  }

  function sendAnother() {
    setPopupOpen(false);
    setSubmitted(false);
    setError("");
    setWhatsappUrl("");
    pending.current = null;
    formRef.current?.reset();
    window.setTimeout(() => formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus(), 0);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto rounded-2xl border border-accent/25 bg-card p-7 text-foreground sm:max-w-md sm:p-9">
          <div
            aria-hidden="true"
            className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-2xl text-accent"
          >
            ✓
          </div>
          <DialogTitle className="font-display text-3xl">Thank you for reaching out.</DialogTitle>
          <DialogDescription className="text-base leading-relaxed text-muted-foreground">
            Your enquiry has been submitted successfully. Our team will get back to you.
          </DialogDescription>
          <div className="mt-3 rounded-xl border border-accent/20 bg-accent/5 p-5">
            <p className="font-semibold">Need an immediate response?</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Contact us on WhatsApp. Your enquiry will be ready to send.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 font-semibold text-accent-foreground hover:opacity-90"
            >
              <MessageCircle aria-hidden="true" className="h-5 w-5" />
              Open WhatsApp <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <p className="mt-2 text-center text-xs text-muted-foreground">+1 240-288-2006</p>
          </div>
          <button
            type="button"
            onClick={sendAnother}
            className="mt-2 text-sm font-semibold text-muted-foreground underline underline-offset-4"
          >
            Send another enquiry
          </button>
        </DialogContent>
      </Dialog>

      <main>
        <section className="relative isolate overflow-hidden bg-ink px-6 py-14 md:py-20">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full border border-ink-border"
          />
          <div
            aria-hidden="true"
            className="absolute -right-12 -top-28 -z-10 h-80 w-80 rounded-full border border-ink-border"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-36 left-[38%] -z-10 h-72 w-72 rounded-full bg-accent/[0.06] blur-3xl"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.65fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-5 inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
                Contact Quorisx
              </p>
              <h1 className="max-w-3xl font-display text-4xl leading-[1.04] text-ink-foreground md:text-6xl">
                Let’s make your next move <span className="text-accent">a smart one.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
                Tell us what your business needs. Whether you’re building a team, improving
                operations, or planning a digital project, we’ll help you explore the right next
                step.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  Start a conversation <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="mailto:info@quorisx.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-border px-5 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:border-accent/50 hover:bg-ink-foreground/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-accent" />
                  Email us
                </a>
              </div>
            </div>
            <div className="hidden justify-end lg:flex">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-ink-border bg-ink-foreground/[0.035] p-7 shadow-2xl shadow-black/10">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-14 h-44 w-44 rounded-full border border-accent/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-6 -top-8 h-32 w-32 rounded-full border border-accent/15"
                />
                <div className="relative flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg shadow-accent/20">
                    <Mail aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Let’s connect
                  </span>
                </div>
                <p className="relative mt-7 font-display text-3xl text-ink-foreground">
                  We’re ready to listen.
                </p>
                <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Share a little about your goals, timelines, and the kind of support you’re looking
                  for.
                </p>
                <div className="relative mt-7 grid gap-3 border-t border-ink-border pt-5 sm:grid-cols-2">
                  <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                    <MapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                    Canton, Georgia
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                    <Globe2 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                    Global capabilities
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-ink-muted sm:col-span-2">
                    <Clock3 aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                    Start a conversation with our team
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-details" className="scroll-mt-28 px-6 py-12 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-7 flex flex-col gap-2 sm:mb-9 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow mb-2">Get in touch</p>
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                  Choose how to reach us.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Reach out directly or use the inquiry form below—we’ll help you find the right next
                step.
              </p>
            </div>
            <div className="grid gap-3 lg:grid-cols-[0.85fr_0.85fr_1.3fr]">
              {contactDetails.map(({ icon: Icon, label, value, href, action }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Visit" ? "_blank" : undefined}
                  rel={label === "Visit" ? "noreferrer" : undefined}
                  className="group flex min-h-0 min-w-0 items-start gap-3 rounded-xl border bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-md sm:gap-3.5 sm:p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon aria-hidden="true" className="h-[1.125rem] w-[1.125rem]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="mt-1.5 block break-words text-sm font-semibold leading-snug text-foreground sm:text-base">
                      {value}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent sm:text-sm">
                      {action}{" "}
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <aside className="relative isolate overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-ink to-ink p-7 text-ink-foreground md:p-9">
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-12 -z-10 h-64 w-64 rounded-full border border-ink-border"
              />
              <p className="eyebrow mb-3">A good place to start</p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                A little context goes a long way.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Let us know what you’re trying to accomplish. We can discuss team extensions,
                managed business functions, software, IT, marketing, or a project tailored to your
                needs.
              </p>
              <div className="mt-8 space-y-4 border-t border-ink-border pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-foreground/10 text-accent">
                    <Building2 aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-ink-muted">
                    U.S. headquartered in Canton, Georgia
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-foreground/10 text-accent">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-ink-muted">
                    Offshore delivery centered in Bangkok, Thailand
                  </span>
                </div>
              </div>
              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-foreground transition-colors hover:text-accent"
              >
                Learn about our operating model{" "}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </aside>

            <div
              id="inquiry"
              className="scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm sm:p-8 md:p-10"
            >
              <div className="mb-7">
                <p className="eyebrow mb-2">Send an inquiry</p>
                <h2 className="font-display text-3xl">Tell us what you have in mind.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete the form and our team will get back to you.
                </p>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div aria-hidden="true" className="hidden">
                  <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
                </div>
                <label className="text-sm font-semibold">
                  Your name <span className="text-accent">*</span>
                  <input
                    required
                    autoComplete="name"
                    name="name"
                    maxLength={100}
                    readOnly={submitting || submitted}
                    type="text"
                    placeholder="Jane Smith"
                    className="mt-2 w-full rounded-lg border bg-background px-4 py-3 font-normal outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-accent/50"
                  />
                </label>
                <label className="text-sm font-semibold">
                  Work email <span className="text-accent">*</span>
                  <input
                    required
                    autoComplete="email"
                    name="email"
                    maxLength={254}
                    readOnly={submitting || submitted}
                    type="email"
                    placeholder="jane@company.com"
                    className="mt-2 w-full rounded-lg border bg-background px-4 py-3 font-normal outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-accent/50"
                  />
                </label>
                <label className="text-sm font-semibold">
                  Company
                  <input
                    autoComplete="organization"
                    name="company"
                    maxLength={200}
                    readOnly={submitting || submitted}
                    type="text"
                    placeholder="Your company"
                    className="mt-2 w-full rounded-lg border bg-background px-4 py-3 font-normal outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-accent/50"
                  />
                </label>
                <label className="text-sm font-semibold">
                  What can we help with?
                  <select
                    name="service"
                    disabled={submitting || submitted}
                    defaultValue="Team extension"
                    className="mt-2 w-full rounded-lg border bg-background px-4 py-3 font-normal outline-none transition-shadow focus:ring-2 focus:ring-accent/50"
                  >
                    <option>Team extension</option>
                    <option>Managed business function</option>
                    <option>Software or IT services</option>
                    <option>Website or digital marketing</option>
                    <option>Other project</option>
                  </select>
                </label>
                <label className="text-sm font-semibold sm:col-span-2">
                  How can we help? <span className="text-accent">*</span>
                  <textarea
                    required
                    name="message"
                    maxLength={5000}
                    readOnly={submitting || submitted}
                    rows={5}
                    placeholder="Tell us about your goals, timeline, or the kind of support you need..."
                    className="mt-2 w-full resize-y rounded-lg border bg-background px-4 py-3 font-normal outline-none transition-shadow placeholder:text-muted-foreground/70 focus:ring-2 focus:ring-accent/50"
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting || submitted}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:gap-3 hover:opacity-90 sm:col-span-2 sm:justify-self-start"
                >
                  {submitting ? "Submitting…" : submitted ? "Enquiry submitted" : "Send enquiry"} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
                <p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2">
                  Your details will be sent to our team to respond to your enquiry.
                </p>
                {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
                {submitted && <div role="status" className="space-y-3 text-sm sm:col-span-2">
                  <p>Your enquiry has been submitted successfully.</p>
                  <button type="button" onClick={() => setPopupOpen(true)} className="font-semibold text-accent underline">View confirmation / WhatsApp</button>
                  <button type="button" onClick={sendAnother} className="ml-4 underline">Send another enquiry</button>
                </div>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink-border bg-ink px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-ink-muted sm:flex-row sm:items-center">
          <a href="/" className="font-display text-2xl text-ink-foreground">
            Quorisx<span className="text-accent">.</span>
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a className="transition-colors hover:text-ink-foreground" href="/">
              Home
            </a>
            <a className="transition-colors hover:text-ink-foreground" href="/about">
              About
            </a>
            <a className="transition-colors hover:text-ink-foreground" href="/resources/faqs">
              FAQs
            </a>
          </div>
          <span>© {new Date().getFullYear()} Quorisx. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
