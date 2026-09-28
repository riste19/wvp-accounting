"use client";

import { Send } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import type { SiteText } from "@/data/content/text";
import type { Locale } from "@/i18n/locales";
import { cn } from "@/lib";

import { submitContactForm, type ContactPayload } from "./submitContactForm";
import { Toast, type ToastMessage } from "./Toast";
import {
  TurnstileWidget,
  turnstileEnabled,
  type TurnstileHandle,
} from "./TurnstileWidget";

type FormCopy = SiteText["contact"]["form"];
type Field = keyof ContactPayload;
type Errors = Partial<Record<Field, string>>;

const EMPTY: ContactPayload = { name: "", email: "", phone: "", message: "" };
const FIELDS: Field[] = ["name", "email", "phone", "message"];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** The approved site's rules, in its order. Every field is required. */
function check(field: Field, value: string, errors: FormCopy["errors"]) {
  const trimmed = value.trim();
  switch (field) {
    case "name":
      return trimmed.length < 2 ? errors.name : undefined;
    case "email":
      return EMAIL_PATTERN.test(trimmed) ? undefined : errors.email;
    case "phone":
      return trimmed.length < 6 ? errors.phone : undefined;
    case "message":
      return trimmed.length < 10 ? errors.message : undefined;
  }
}

const LABEL =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

/** The shadcn input, with the form's `bg-background` merged over `bg-card/50`. */
const INPUT =
  "flex h-12 w-full rounded-lg border px-4 py-2 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 bg-background";

const TEXTAREA =
  "flex w-full rounded-lg border px-4 py-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[150px] bg-background";

/** What an invalid field swaps in for its border and focus ring. */
const tone = (invalid: boolean) =>
  invalid
    ? "border-destructive focus-visible:ring-destructive"
    : "border-border focus-visible:ring-primary";

const SUBMIT =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] bg-primary text-primary-foreground shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 h-14 px-8 w-full text-base font-semibold mt-2 shadow-md";

type ContactFormProps = {
  copy: FormCopy;
  /** Sent with the submission so the server answers in the same language. */
  locale: Locale;
};

/**
 * The approved site's form — same four fields, same layout, same messages
 * under the fields and the same toast afterwards.
 *
 * The difference is that this one sends. The approved site waits a second,
 * shows "sent" and throws the message away; this posts to /api/contact,
 * which emails the office, so it can also fail, and says so.
 */
export function ContactForm({ copy, locale }: ContactFormProps) {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  /** After the first attempt, fields re-check as they are edited. */
  const [attempted, setAttempted] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  /** Honeypot. Hidden from people and assistive tech; bots fill it in. */
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<TurnstileHandle>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const show = (message: Omit<ToastMessage, "id">) =>
    setToast({ ...message, id: Date.now() });

  const update = (field: Field, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    if (attempted) {
      setErrors((previous) => ({
        ...previous,
        [field]: check(field, value, copy.errors),
      }));
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);

    const found: Errors = {};
    for (const field of FIELDS) {
      const error = check(field, values[field], copy.errors);
      if (error) found[field] = error;
    }
    setErrors(found);

    const first = FIELDS.find((field) => found[field]);
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }

    setSending(true);
    const result = await submitContactForm(
      values,
      { honeypot, turnstileToken: turnstileEnabled ? turnstileToken : "" },
      { locale, fallbackError: copy.failedDescription },
    );
    // The token is spent whatever the outcome; a retry needs a fresh one.
    turnstileRef.current?.reset();
    setSending(false);

    if (result.ok) {
      show({
        title: copy.successTitle,
        description: copy.successDescription,
        variant: "default",
      });
      setValues(EMPTY);
      setErrors({});
      setAttempted(false);
    } else {
      show({
        title: copy.failedTitle,
        description: result.error,
        variant: "destructive",
      });
    }
  };

  const errorFor = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="text-sm text-destructive mt-1">
        {errors[field]}
      </p>
    ) : null;

  const describedBy = (field: Field) =>
    errors[field] ? `${field}-error` : undefined;

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="space-y-2">
          <label className={LABEL} htmlFor="name">
            {copy.name}
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder={copy.namePlaceholder}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={cn(INPUT, tone(Boolean(errors.name)))}
          />
          {errorFor("name")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={LABEL} htmlFor="email">
              {copy.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={copy.emailPlaceholder}
              value={values.email}
              onChange={(event) => update("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              className={cn(INPUT, tone(Boolean(errors.email)))}
            />
            {errorFor("email")}
          </div>
          <div className="space-y-2">
            <label className={LABEL} htmlFor="phone">
              {copy.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={copy.phonePlaceholder}
              value={values.phone}
              onChange={(event) => update("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy("phone")}
              className={cn(INPUT, tone(Boolean(errors.phone)))}
            />
            {errorFor("phone")}
          </div>
        </div>

        <div className="space-y-2">
          <label className={LABEL} htmlFor="message">
            {copy.message}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={copy.messagePlaceholder}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message")}
            className={cn(TEXTAREA, tone(Boolean(errors.message)))}
          />
          {errorFor("message")}
        </div>

        {/*
          Honeypot: off-screen rather than display:none, which simpler bots
          know to skip. aria-hidden and tabIndex keep it from everyone else.
        */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <input
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        {/* Renders nothing unless NEXT_PUBLIC_TURNSTILE_SITE_KEY was set at build. */}
        <TurnstileWidget
          ref={turnstileRef}
          onToken={(token) => setTurnstileToken(token ?? "")}
        />

        <button type="submit" disabled={sending} className={SUBMIT}>
          {sending ? (
            copy.submitting
          ) : (
            <>
              {copy.submit} <Send aria-hidden className="ml-2 w-5 h-5" />
            </>
          )}
        </button>
      </form>

      <Toast toast={toast} closeLabel={copy.close} onClose={closeToast} />
    </>
  );
}
