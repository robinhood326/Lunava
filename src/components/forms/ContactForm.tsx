"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Field, Select, TextArea, TextInput, describedBy } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { contactTopics } from "@/lib/data/content";
import { siteConfig } from "@/lib/site";

const expertiseHint = "For example: backend engineering, oncology, contract law, Spanish linguistics.";

type Errors = Partial<Record<"name" | "message", string>>;

/**
 * The site has no backend or accounts, so this form composes an email in the
 * visitor's own mail app (mailto:) instead of submitting to a server.
 */
export function ContactForm({ defaultTopic = "expert" }: { defaultTopic?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const topicValue = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (message.length < 10) next.message = "Please add a little more detail (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    const topic = contactTopics.find((t) => t.value === topicValue);
    const expertise = String(data.get("expertise") ?? "").trim();
    const to = siteConfig.email.hello;
    const subject = `${topic?.label ?? "Hello"} — ${name}`;
    const body = `${message}${expertise ? `\n\nArea of expertise: ${expertise}` : ""}\n\n— ${name}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form noValidate onSubmit={onSubmit} className="glass space-y-6 rounded-[var(--radius-card)] p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="name" label="Name" error={errors.name}>
          <TextInput
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name", { error: errors.name })}
          />
        </Field>
        <Field id="topic" label="What's this about?">
          <Select id="topic" name="topic" defaultValue={defaultTopic}>
            {contactTopics.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <Field id="expertise" label="Your area of expertise" optional hint={expertiseHint}>
        <TextInput id="expertise" name="expertise" autoComplete="off" aria-describedby={describedBy("expertise", { hint: expertiseHint })} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <TextArea
          id="message"
          name="message"
          required
          placeholder="Tell us about your background, availability and what you're hoping to do — or what your team needs."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message", { error: errors.message })}
        />
      </Field>
      {opened && (
        <p role="status" className="rounded-xl bg-lunar-500/15 px-4 py-3 text-sm text-lunar-200 ring-1 ring-lunar-400/30">
          Your email app should open with the message ready to send. If it doesn&apos;t, email us directly at{" "}
          <a href={`mailto:${siteConfig.email.hello}`} className="font-semibold underline underline-offset-2">
            {siteConfig.email.hello}
          </a>
          .
        </p>
      )}
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-dim">This opens your email app — nothing is stored on this website.</p>
        <Button type="submit" size="lg">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Write email
        </Button>
      </div>
    </form>
  );
}
