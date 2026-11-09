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
    title: "Single Image Editing",
    shortDescription:
      "Single-exposure real estate photo editing — exposure, white balance, perspective, and clean tone on every frame.",
    fullDescription:
      "Single image editing for real estate photographers: we take one exposure per shot and deliver a listing-ready frame. We correct white balance, lift interior shadows without introducing noise, neutralize yellow halogen and cool fluorescent color casts, fix vertical line and lens distortion, and crop for MLS ratios. Great for rental listings, high-volume shoots, and jobs where the budget doesn't support HDR brackets. Standard turnaround: 12 to 24 hours. Rush folders: under 2 hours.",
    benefits: [
      "Accurate white balance and natural interior tone",
      "Noise-free shadow recovery",
      "Vertical line, keystone, and lens distortion correction",
      "MLS-ready crops + full-res print masters in the same folder",
    ],
    image: "/images/single-image/single-sample-1-after.jpg",
    imageAlt: "Single-exposure real estate interior with natural daylight and clean architectural tone",
    iconName: "Sun",
  },
  {
    id: "hdr-photo-editing",
    title: "HDR Photo Editing",
    shortDescription:
      "HDR blending for real estate — 3 to 7 bracketed exposures composed by hand into one balanced, honest frame.",
    fullDescription:
      "HDR photo editing for real estate properties: we manually blend 3 to 7 bracketed exposures into a single frame that holds both the window view and the interior room at the right brightness. Windows read bright and sharp — pool, garden, and sky stay true in color. Interior shadows stay lifted without noise. White balance is calibrated to your specific camera profile. No haloing around windows. No auto-tonemapped cartoon look. Standard turnaround: 12 to 24 hours. Rush folders: under 2 hours. Works with brackets from Canon, Nikon, Sony, Fuji, and Pentax real estate rigs.",
    benefits: [
      "Clean window pulls — no halo, no muddy masking",
      "Honest exterior color (pool blue, sky blue, garden green read true)",
      "True 90° verticals with lens distortion corrected",
      "Ambient and speedlight exposures integrated when both are captured",
    ],
    image: "/images/hdr/hdr-sample-1-after.jpg",
    imageAlt: "HDR edited real estate interior with balanced window view and lifted shadow detail",
    iconName: "Aperture",
  },
  {
    id: "day-to-night",
    title: "Day-to-Night Conversion",
    shortDescription:
      "Day-to-night (dusk) conversion for real estate exteriors — daytime captures turned into warm twilight hero frames.",
    fullDescription:
      "Day-to-night photo editing for real estate exteriors: when the shoot window closed before you could capture the hero in real twilight, we convert the daytime frame into a believable dusk image. The sky is replaced with a graded cobalt-to-amber gradient. Interior and exterior windows are illuminated to match the room behind them. Warm architectural lighting is added to facade, porch, and landscape. The result reads as a real dusk capture — not a daytime photo with a sky swap. Ideal for luxury listings, hero marketing images, and brochure covers. Standard turnaround: 24 hours.",
    benefits: [
      "Realistic cobalt-to-amber sky gradient composed by hand",
      "Interior window glow keyed to the architecture, not pasted on",
      "Warm facade, porch, and landscape lighting added honestly",
      "Hero-quality output for listings, brochures, and magazine spreads",
    ],
    image: "/images/day-to-twilight/twilight-sample-1-after.jpg",
    imageAlt: "Residential exterior converted from daytime to twilight with warm architectural lighting",
    iconName: "Contrast",
  },
  {
    id: "twilight",
    title: "Twilight Enhancement",
    shortDescription:
      "Real twilight photo editing — enriches the dusk capture you already have, without pushing it into fantasy.",
    fullDescription:
      "Twilight photo editing for real estate: if you captured the property at real dusk, we enrich the frame without over-selling it. We balance facade luminance against the sky, enrich the sky gradient from cobalt through violet to amber, soften harsh glare from porch and landscape fixtures, and bring quiet warmth back into patios, pool decks, and architectural lighting. Low-light noise is suppressed so the image prints cleanly at 300 DPI. Standard turnaround: 24 hours.",
    benefits: [
      "Golden-hour warmth and rich violet sky transitions",
      "Facade and sky luminance held in deliberate balance",
      "Patio and landscape lights enriched honestly — not blown out",
      "Low-light noise suppressed for 300 DPI print delivery",
    ],
    image: "/images/day-to-twilight/twilight-sample-2-after.jpg",
    imageAlt: "Real twilight real estate exterior with glowing architectural lighting and rich dusk sky",
    iconName: "Sunset",
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    shortDescription:
      "Virtual staging for real estate — empty rooms furnished with photorealistic 3D furniture in the style your market expects.",
    fullDescription:
      "Virtual staging for real estate: we furnish empty rooms with photorealistic 3D furniture that reads as if it were there when the photographer shot the property. Shadow is dropped against the real floor. Scale is calibrated to the architecture. You pick the style — Modern, Scandinavian, Coastal, Mid-Century, or Luxury Transitional — and we stage living rooms, bedrooms, dining rooms, offices, and patios. Costs a fraction of physical staging. Buyer engagement on vacant listings is measurably higher with virtual staging than without. Standard turnaround: 24 to 48 hours per room.",
    benefits: [
      "Photorealistic furniture, shadows, and floor reflection",
      "Multiple style voices: Modern, Scandinavian, Coastal, Mid-Century, Luxury",
      "Living rooms, bedrooms, dining, office, outdoor patios supported",
      "Fraction of the cost of physical staging — same listing uplift",
    ],
    image: "/images/virtual-staging/staging-sample-1-after.jpg",
    imageAlt: "Virtually staged living room with modern furniture and realistic floor shadows",
    iconName: "Home",
  },
  {
    id: "video-editing",
    title: "Real Estate Video Editing",
    shortDescription:
      "Property videos edited — gimbal interiors, drone exteriors, agent intro cut into cinematic walkthroughs for listing sites and social.",
    fullDescription:
      "Real estate video editing: we take your raw gimbal interior footage, drone exterior clips, and agent on-camera intro and cut them into a cinematic property walkthrough. Pacing is composed to the architecture, not a template. Color grade matches your still photography so the whole listing reads as one brand. Music is licensed and synced. Lower-thirds, property badges, and your agency branding are added. We deliver two aspect ratios from the same brief: horizontal 4K for the listing site and vertical 9:16 for Instagram, TikTok, and YouTube Shorts. Standard turnaround: 3 to 5 business days.",
    benefits: [
      "Horizontal 4K + vertical 9:16 delivered from the same cut",
      "Color grade matched to your still photography",
      "Licensed music, lower-thirds, agency branding included",
      "Gimbal, drone, and agent footage edited into one coherent story",
    ],
    image: "/images/hdr/hdr-sample-1-after.jpg",
    imageAlt: "Real estate interior still representing the tonal palette of the property video edit",
    iconName: "Clapperboard",
  },
  {
    id: "item-removal",
    title: "Item & Object Removal",
    shortDescription:
      "Photo retouching for real estate — power lines, cars, bins, cords, and marks removed with the texture beneath reconstructed.",
    fullDescription:
      "Item and object removal for real estate photos: we remove overhead power lines and street wires, cars parked in driveways, trash bins, pool hoses, electrical cords, personal items, and surface marks. The texture underneath is reconstructed to match — wood grain, turf, tile, concrete, painted wall. The architecture reads first and the removal is invisible. Useful for exterior listings where cables clutter the sky, for driveways where the owner forgot to move the car, and for interiors where small personal items leaked into the frame. Priced per removal; typical interior shot has 2 to 5 removals.",
    benefits: [
      "Vehicles, signage, overhead wires, and bins cleared from exteriors",
      "Driveway marks, oil stains, and concrete cracks repaired",
      "Interior cords, pet items, and personal clutter removed",
      "Wood grain, turf, tile, and painted surface textures reconstructed invisibly",
    ],
    image: "/images/object-removal/removal-sample-1-after.jpg",
    imageAlt: "Real estate exterior with cars, bins, and overhead wires removed and textures reconstructed",
    iconName: "Eraser",
  },
  {
    id: "aerial-drone",
    title: "Aerial & Drone Photo Editing",
    shortDescription:
      "Drone photo editing for real estate — haze cleared, horizon levelled, color corrected, property boundaries highlighted on request.",
    fullDescription:
      "Aerial and drone photo editing for real estate: we take your raw DJI, Autel, or Skydio captures and clear atmospheric haze, level the horizon, correct wide-angle lens barrel distortion, and calibrate turf and water color. On request we add property boundary overlay lines and compass-rose locator marks for site-plan listings. Dynamic range is expanded so the shadow under the roof reads at the same time as the sky above it. Works on single aerial captures and on bracketed aerial HDR sets. Standard turnaround: 24 hours.",
    benefits: [
      "Atmospheric haze cleared; dynamic range expanded",
      "Horizon levelled; wide-angle lens distortion corrected",
      "Turf and water tone enriched, kept honest",
      "Optional: property boundary overlays and locator pins for site plans",
    ],
    image: "/images/aerial/aerial-sample-1-after.jpg",
    imageAlt: "Aerial drone real estate photo with level horizon, clear haze, and vivid landscape color",
    iconName: "Compass",
  },
];
