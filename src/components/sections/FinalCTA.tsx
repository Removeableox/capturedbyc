"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { heroImage } from "@/lib/data";

function encodeFormData(form: HTMLFormElement) {
  const data = new FormData(form);
  return new URLSearchParams(
    Array.from(data.entries()).map(([key, value]) => [key, String(value)]),
  ).toString();
}

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(event.currentTarget),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Section id="contact" fullBleed className="relative overflow-hidden !py-0">
      <div className="relative min-h-[520px]">
        <Image
          src={heroImage.src}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative z-10 flex min-h-[520px] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Let&apos;s Work Together
              </p>
              <h2 className="font-display mt-4 text-4xl font-bold leading-tight text-text sm:text-5xl">
                Ready to Capture Your Next Big Moment?
              </h2>
              <p className="mt-4 text-base text-secondary-tier">
                Limited weekly event slots available. Tell me about your event and
                I&apos;ll respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-text/10 bg-surface p-8 text-center">
                <p className="font-display text-2xl text-text">Message sent!</p>
                <p className="mt-3 text-secondary-tier">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                className="rounded-2xl border border-text/10 bg-surface p-6 sm:p-8"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                {error && (
                  <p className="mb-4 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-primary-tier">
                    Something went wrong. Please try again in a moment.
                  </p>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-primary-tier">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-lg border border-text/15 bg-background px-4 py-3 text-sm text-text placeholder:text-secondary-tier"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-date" className="mb-2 block text-sm font-medium text-primary-tier">
                      Event date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      name="event-date"
                      required
                      className="w-full rounded-lg border border-text/15 bg-background px-4 py-3 text-sm text-text"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-sport" className="mb-2 block text-sm font-medium text-primary-tier">
                      Sport
                    </label>
                    <input
                      id="contact-sport"
                      type="text"
                      name="sport"
                      required
                      className="w-full rounded-lg border border-text/15 bg-background px-4 py-3 text-sm text-text placeholder:text-secondary-tier"
                      placeholder="Hockey, basketball, soccer..."
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button type="submit" className="w-full">
                    {submitting ? "Sending..." : "Book a Shoot"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
