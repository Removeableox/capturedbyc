"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="border-t border-text/10">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking."
      />

      <div className="mx-auto max-w-3xl divide-y divide-text/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-button-${index}`;
          const panelId = `faq-panel-${index}`;

          return (
            <div key={faq.question}>
              <button
                type="button"
                id={buttonId}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="pr-4 text-base font-semibold text-primary-tier sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={isOpen ? "pb-5" : ""}
              >
                {isOpen && (
                  <p className="text-sm leading-relaxed text-secondary-tier sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
