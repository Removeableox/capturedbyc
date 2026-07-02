import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-text/10 bg-surface px-4 py-12 pb-24 sm:px-6 md:pb-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-text">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-secondary-tier">{siteConfig.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-tertiary-tier">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-secondary-tier">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.serviceAreas}</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-tertiary-tier">
              Connect
            </p>
            <ul className="mt-4 space-y-2 text-sm text-secondary-tier">
              <li>
                <Link
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="transition-colors hover:text-accent">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#faq" className="transition-colors hover:text-accent">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-text/10 pt-8 text-center text-xs text-tertiary-tier">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
