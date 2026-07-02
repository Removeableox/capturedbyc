export const siteConfig = {
  name: "Celina Da Silva",
  tagline: "Elite Sports Photography",
  email: "hello@capturedbyc.com",
  instagram: "https://instagram.com/capturedbyc",
  serviceAreas: "Greater Metro Area & travel nationwide",
};

export const heroContent = {
  eyebrow: "Solo Sports Photographer",
  headline: "The Moment Everyone Misses",
  subheadline:
    "Elite sports photography for game-day coverage, athlete portraits, and team brands.",
  stats: ["500+ games photographed", "24–72hr delivery", "D1 recruitment ready"],
};

export const reviews = [
  {
    quote: "Best sports photographer we've ever worked with.",
    author: "Varsity Head Coach",
    rating: 5,
  },
  {
    quote: "Our social engagement doubled after every game gallery.",
    author: "Athletic Director",
    rating: 5,
  },
  {
    quote:
      "These photos completely elevated our recruitment package. We booked again immediately.",
    author: "High School Coach",
    rating: 5,
  },
  {
    quote:
      "Captured every critical moment of our championship run. The turnaround was incredible.",
    author: "Event Organizer",
    rating: 5,
  },
  {
    quote:
      "My athlete portraits got more D1 interest than anything we'd done before. Worth every penny.",
    author: "Parent of D1 Recruit",
    rating: 5,
  },
];

const photoBase = "/photos/favourite-sports";

export const heroImage = {
  src: `${photoBase}/DS1_6610.jpg`,
  alt: "Youth hockey players collide in a dramatic on-ice moment",
};

export const aboutImage = {
  src: `${photoBase}/DS1_6724.jpg`,
  alt: "Close-up portrait of a hockey player in full gear",
};

export const aboutPullQuote =
  "Sports photography isn't a side gig for me. It's the only thing I do.";

export const portfolioItems = [
  {
    src: `${photoBase}/05.jpg`,
    alt: "Hockey player celebrating on the ice after a big moment",
    caption: "Pure emotion after the buzzer",
  },
  {
    src: `${photoBase}/DS1_6610.jpg`,
    alt: "Two hockey players colliding during intense game action",
    caption: "Peak action, split-second timing",
  },
  {
    src: `${photoBase}/DS1_0549.jpg`,
    alt: "Two players battling for the puck at a face-off",
    caption: "Every puck battle matters",
  },
  {
    src: `${photoBase}/IMG-20260628-WA0007.jpg`,
    alt: "Body check sending ice shavings flying across the rink",
    caption: "Physical play, frozen in time",
  },
  {
    src: `${photoBase}/01.jpg`,
    alt: "Goalie in butterfly save with selective color editing",
    caption: "Creative editing, dramatic focus",
  },
  {
    src: `${photoBase}/DS1_9255.jpg`,
    alt: "Goalie making a butterfly save in front of the net",
    caption: "Between the pipes",
  },
  {
    src: `${photoBase}/IMG-20260628-WA0006.jpg`,
    alt: "Puck airborne as goalie and skaters converge on the crease",
    caption: "Chaos at the crease",
  },
  {
    src: `${photoBase}/DS1_9196.jpg`,
    alt: "Two hockey players battling for position along the boards",
    caption: "Battling along the boards",
  },
  {
    src: `${photoBase}/02.jpg`,
    alt: "Toronto Aeros player locked in during game action",
    caption: "Game face, full focus",
  },
  {
    src: `${photoBase}/04.jpg`,
    alt: "Female hockey player handling the puck in a low stance",
    caption: "Power and precision on the ice",
  },
  {
    src: `${photoBase}/DS1_8014.jpg`,
    alt: "Female hockey player celebrating a goal on one knee",
    caption: "Victory moment",
  },
  {
    src: `${photoBase}/IMG-20260318-WA0038.jpg`,
    alt: "Team captain smiling during a post-game celebration",
    caption: "Captain's pride",
  },
  {
    src: `${photoBase}/DS1_7708.jpg`,
    alt: "Goalie and teammate celebrating in front of the net",
    caption: "Celebrating the shutout",
  },
  {
    src: `${photoBase}/DS1_6724.jpg`,
    alt: "Close-up portrait of a young hockey player in a Bauer helmet",
    caption: "Athlete portrait session",
  },
  {
    src: `${photoBase}/DS1_7749.jpg`,
    alt: "Hockey player skating with the puck at full speed",
    caption: "Speed on the breakaway",
  },
  {
    src: `${photoBase}/DS1_9285.jpg`,
    alt: "Ice Ray Hockey Academy player skating with stick ready",
    caption: "Ready for the rush",
  },
  {
    src: `${photoBase}/DS1_0683.jpg`,
    alt: "Black and white portrait of an Ice Ray Hockey Academy goalie",
    caption: "Classic goalie portrait",
  },
  {
    src: `${photoBase}/O3.jpg`,
    alt: "Youth goalie standing beside the net in full gear",
    caption: "Standing tall in the crease",
  },
  {
    src: `${photoBase}/06.jpg`,
    alt: "Young goalie receiving a medal on the ice",
    caption: "Medal ceremony moment",
  },
  {
    src: `${photoBase}/IMG-20260628-WA0009.jpg`,
    alt: "Players battling for the puck during a physical play",
    caption: "Never giving up the puck",
  },
];

export const featuredHeroShots = portfolioItems.slice(0, 3);

/** Grid shows items 4–10; strip above covers the first 3 (no duplication). */
export const gridPortfolio = portfolioItems.slice(3, 10);

/** All curated shots for lightbox navigation (strip + grid). */
export const portfolioLightboxItems = portfolioItems.slice(0, 10);

export const services = [
  {
    title: "Game Day Coverage",
    description:
      "Full match and event coverage with fast turnaround highlight images ready for social and press.",
    image: `${photoBase}/DS1_6610.jpg`,
  },
  {
    title: "Athlete Portraits",
    description:
      "Studio or on-location sessions producing recruitment-ready imagery that stands out.",
    image: `${photoBase}/DS1_6724.jpg`,
  },
  {
    title: "Team Packages",
    description:
      "Season coverage options with media day shoots included for your entire roster.",
    image: `${photoBase}/DS1_7708.jpg`,
  },
  {
    title: "Brand / Sponsorship Content",
    description:
      "Product and athlete integration plus social media content built for engagement.",
    image: `${photoBase}/02.jpg`,
  },
];

export const pricingTiers = [
  {
    name: "Game Day",
    price: "$350",
    description: "Single event coverage with highlight delivery.",
    features: [
      "Full game coverage",
      "24–72hr highlight delivery",
      "Web-optimized social files",
      "Online gallery access",
    ],
    highlighted: false,
  },
  {
    name: "Season Package",
    price: "Custom",
    description: "Multi-game coverage for teams and leagues.",
    features: [
      "Multiple events per season",
      "Media day session included",
      "Priority turnaround",
      "Team roster portraits",
      "Dedicated shot list planning",
    ],
    highlighted: true,
  },
  {
    name: "Portrait Session",
    price: "Custom",
    description: "Recruitment-ready athlete imagery.",
    features: [
      "On-location or studio session",
      "Multiple looks and setups",
      "Professional retouching",
      "Print + digital files",
    ],
    highlighted: false,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Inquiry",
    description: "Tell me about your event or athlete goals",
  },
  {
    step: "02",
    title: "Plan",
    description: "We choose coverage style and timing together",
  },
  {
    step: "03",
    title: "Shoot Day",
    description: "I capture the action while you focus on performance",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Edited gallery delivered fast, ready to share",
  },
];

export const faqs = [
  {
    question: "How fast is delivery?",
    answer:
      "Highlight images are typically delivered within 24–72 hours after the event. Full galleries follow within 5–7 business days depending on coverage scope.",
  },
  {
    question: "Do you travel?",
    answer:
      "Yes. I cover events locally and travel nationwide for tournaments, championships, and special sessions. Travel fees are quoted upfront.",
  },
  {
    question: "What sports do you cover?",
    answer:
      "Football, basketball, soccer, baseball, track, tennis, volleyball, and more. If there's action and emotion, I can capture it.",
  },
  {
    question: "Can I request specific shots?",
    answer:
      "Absolutely. Share your shot list before the event and I'll prioritize those moments alongside candid action coverage.",
  },
  {
    question: "Do you offer editing for social media?",
    answer:
      "Yes. Every package includes web-optimized files sized for Instagram, Twitter/X, and team websites. Custom crops available on request.",
  },
];

export const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];
