import {
  Aperture,
  Camera,
  Clapperboard,
  Compass,
  Contrast,
  Eraser,
  Home,
  Sun,
  Sunset,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  iconName: string;
};

export const services: Service[] = [
  {
    id: "single-image",
    title: "Single Frame Composition",
    shortDescription:
      "The single resolved image — exposure composed, line held true, colour read honest.",
    fullDescription:
      "For single-exposure captures, the studio composes the frame rather than filters it. Dynamic range is widened by hand, room shadow lifted without noise, colour temperature neutralised, incandescent and fluorescent cast cleared. Built for high-volume listing flow, rental portfolios, and architectural studies that need to read the first time.",
    benefits: [
      "White balance read honest, tone calibrated",
      "Shadow recovery without grain or halo",
      "Line pulled true — keystone, barrel, crop",
      "Delivered print-ready and web-ready, same folder",
    ],
    image: "/images/single-image/single-sample-1-after.jpg",
    imageAlt: "Composed single-exposure interior with honest daylight and resolved tone",
    iconName: "Sun",
  },
  {
    id: "hdr-photo-editing",
    title: "HDR Blending",
    shortDescription:
      "Window, room, architecture — held in a single breath.",
    fullDescription:
      "The studio composes multi-exposure brackets (three to seven stops) into a frame that keeps the outside view honest and the inside room alive. No halo, no false saturation, no auto-tonemap signature. The composition is architectural — the kind of HDR that doesn't announce itself as HDR.",
    benefits: [
      "Window views pulled through — pool, garden, sky",
      "Shadow recovered without the automated halo",
      "True vertical line and barrel distortion resolved",
      "Ambient and flash integrated in one honest tone",
    ],
    image: "/images/hdr/hdr-sample-1-after.jpg",
    imageAlt: "Luxury interior composed through multi-bracket HDR with honest window view",
    iconName: "Aperture",
  },
  {
    id: "day-to-night",
    title: "Day-to-Night Conversion",
    shortDescription:
      "The daytime capture, reread at dusk — composed, not stickered.",
    fullDescription:
      "Twilight carries a weight a daytime frame can't. When the shoot window closes before the hero can be captured in real light, the studio reads the daytime frame as a twilight composition — sky replaced in gradient, windows illuminated to the room behind them, warm architectural light introduced across facade and landscape. The result is a dusk image, not a daytime image with a sky swap.",
    benefits: [
      "Cobalt-to-amber sky gradient, composed by hand",
      "Window glow, keyed to the architecture",
      "Landscape and walkway light, honest and warm",
      "Hero frames that hold a listing page or a magazine",
    ],
    image: "/images/day-to-twilight/twilight-sample-1-after.jpg",
    imageAlt: "Residence composed in dusk conversion with architectural illumination and twilight sky",
    iconName: "Contrast",
  },
  {
    id: "twilight",
    title: "Twilight Finishing",
    shortDescription:
      "The real dusk capture — enriched, never over-sold.",
    fullDescription:
      "Actual twilight shoots lose light quickly and arrive at the studio with grain, mixed ambient, and uneven sky. The studio enriches the gradient, balances facade to sky, softens harsh glare, and brings quiet warmth back into patio and porch — without pushing the image into fantasy.",
    benefits: [
      "Golden-hour warmth, violet transition, honest",
      "Facade and sky in deliberate balance",
      "Patio and landscape light, enriched not invented",
      "Low-light noise resolved, grain held down",
    ],
    image: "/images/day-to-twilight/twilight-sample-2-after.jpg",
    imageAlt: "Residential exterior in composed twilight with glowing landscape light",
    iconName: "Sunset",
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    shortDescription:
      "The empty room, furnished in the style the buyer imagines.",
    fullDescription:
      "Empty rooms read as stripped — proportion becomes hard to decode. The studio composes 3D furniture into the frame with the discipline of an interior shoot: shadow dropped against the real floor, scale calibrated to the architecture, style chosen to the market. Modern, Scandinavian, coastal, or luxury transitional — each kit read as photographed, not rendered.",
    benefits: [
      "3D kits chosen to the room's architecture",
      "Shadow and floor reflection composed by hand",
      "Multiple style voices: modern, coastal, luxury",
      "The cost of a frame, not a staging truck",
    ],
    image: "/images/virtual-staging/staging-sample-1-after.jpg",
    imageAlt: "Living room composed with virtual furniture that reads as photographed",
    iconName: "Home",
  },
  {
    id: "video-editing",
    title: "Property Film",
    shortDescription:
      "The walkthrough that outlasts a scroll.",
    fullDescription:
      "Gimbal interior, drone exterior, agent on camera — composed into a cinematic walkthrough that reads with the discipline of editorial film. Pacing, grade, music, lower-thirds — each element answered to the room it moves through. Shipped in horizontal 4K for the listing site and vertical 9:16 for the feed.",
    benefits: [
      "Pacing composed to the architecture, not the template",
      "Grade matched to the still photography",
      "Lower-thirds, badges, and titles in brand voice",
      "Horizontal 4K and vertical 9:16, same brief",
    ],
    image: "/images/hdr/hdr-sample-1-after.jpg",
    imageAlt: "Composed interior frame referencing the tonal palette of the property film",
    iconName: "Clapperboard",
  },
  {
    id: "item-removal",
    title: "Item Removal",
    shortDescription:
      "The frame, cleared of everything that isn't the property.",
    fullDescription:
      "The studio removes power lines, parked cars, bins, pool hose, cords, and surface marks — with the texture beneath reconstructed to match wood grain, turf, concrete, or tile. The architecture reads first. Nothing announces the removal.",
    benefits: [
      "Vehicles, signage, and overhead line, cleared",
      "Driveway marks and stains, repaired",
      "Interior cords and clutter, resolved",
      "Texture cloned honest — wood, turf, tile",
    ],
    image: "/images/object-removal/removal-sample-1-after.jpg",
    imageAlt: "Composed property frame with distractions cleared and texture reconstructed",
    iconName: "Eraser",
  },
  {
    id: "aerial-drone",
    title: "Aerial & Drone Finishing",
    shortDescription:
      "The aerial, composed — not just colour-boosted.",
    fullDescription:
      "Drone frames arrive hazy, tilted, and tonally uneven. The studio clears atmospheric haze, levels the horizon, calibrates turf and water tone, corrects wide-angle distortion, and — on request — composes boundary overlays and locator marks. The property reads from altitude the way it reads from the ground.",
    benefits: [
      "Haze cleared, dynamic range composed",
      "Horizon pulled level, drone lens corrected",
      "Boundary outline and locator mark overlays",
      "Turf and water tone enriched, held honest",
    ],
    image: "/images/aerial/aerial-sample-1-after.jpg",
    imageAlt: "Aerial drone frame composed with level horizon and honest landscape tone",
    iconName: "Compass",
  },
];
