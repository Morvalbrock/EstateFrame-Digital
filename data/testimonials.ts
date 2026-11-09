export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The studio reads like a quiet collaborator — not a vendor. Our folders ship with a consistency we couldn't hold in-house, and the window pulls feel composed, never over-finished.",
    name: "Marcus Vance",
    role: "Lead real-estate photographer",
    location: "Residential & editorial",
  },
  {
    quote:
      "Twilight work and virtual staging shifted enquiry rates on our luxury listings within a month. What I value most is restraint — they never push a frame past where the room can carry it.",
    name: "Elena Rostova",
    role: "Marketing director",
    location: "Prestige property agency",
  },
  {
    quote:
      "From floor plans to walkthrough film, having one hand on the full folder keeps the identity of each listing intact. The studio holds the voice from frame one to frame hundred.",
    name: "David Chen",
    role: "Development partner",
    location: "Urban living developments",
  },
];
