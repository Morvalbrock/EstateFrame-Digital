export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "AI tools were fast but my folders drifted — frame 1 and frame 40 looked like different shoots. The style preset lock here is the fix. Fourteen weeks in, every folder reads like my work.",
    name: "Marcus Vance",
    role: "Real estate photographer",
    location: "Pacific Northwest, USA",
  },
  {
    quote:
      "We tried four AI-only editors last year. Two folders got agents into MLS trouble over sky swaps and a removed ceiling fan. The human QC pass is why we switched here. Zero MLS complaints since.",
    name: "Elena Rostova",
    role: "Marketing director",
    location: "Prestige property agency, Toronto",
  },
  {
    quote:
      "From AI virtual staging to drone finishing, one editor owns the folder end-to-end. The 12-hour SLA is honoured, and twice when they missed it we got the credit without asking.",
    name: "David Chen",
    role: "Development partner",
    location: "Urban developments, Sydney",
  },
];
