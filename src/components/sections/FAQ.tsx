"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container id="faq" className="border-t border-text/10 bg-primary/5 py-16 sm:py-24">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking."
      />

      <div className="mx-auto max-w-3xl divide-y divide-text/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="pr-4 text-base font-semibold text-text sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-primary transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 text-sm leading-relaxed text-text/60 sm:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
