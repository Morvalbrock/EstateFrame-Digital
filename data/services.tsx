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
      "AI single-image real estate photo editing with human QC — exposure, white balance, perspective, and MLS-safe clean-up on every frame.",
    fullDescription:
      "AI-powered single image editing for real estate photographers in the USA, Canada, UK, and Australia. Our AI handles white balance correction, shadow recovery, color cast neutralization on halogen and fluorescent spill, vertical line correction, and MLS-ratio cropping on single exposures. A human editor then locks your stored style preset over the folder and checks every frame against the MLS compliance checklist before sign-off. Best for rental listings, high-volume shoots, and jobs where HDR brackets weren't captured. Standard turnaround: 12 hours. Rush folders: under 2 hours. SLA-backed with credits if we miss.",
    benefits: [
      "Accurate white balance, locked to your stored style preset",
      "Noise-free shadow recovery and clean highlight roll-off",
      "Vertical, keystone, and barrel distortion corrected to true 90°",
      "MLS-ready crops + full-res print masters named to your convention",
    ],
    image: "/images/single-image/single-sample-1-after.jpg",
    imageAlt: "AI single-image real estate photo editing output with human-verified white balance and architectural tone",
    iconName: "Sun",
  },
  {
    id: "hdr-photo-editing",
    title: "HDR Photo Editing",
    shortDescription:
      "AI + human HDR real estate photo editing — 3 to 7 bracketed exposures blended at AI speed, locked to your style preset, MLS-safe.",
    fullDescription:
      "AI HDR photo editing for real estate: our AI blends 3 to 7 bracketed exposures into a balanced frame that holds the window view and the interior room. A human editor then verifies no haloing, no auto-tonemapped cartoon look, correct window reflections, straight verticals, and your stored style preset applied across the folder — then signs off against the MLS compliance checklist. Works with brackets from Canon, Nikon, Sony, Fuji, and Pentax real estate rigs. Serves photographers across the USA (Compass, Coldwell Banker, Keller Williams, RE/MAX), Canada (Royal LePage, Century 21, Sutton on Realtor.ca), UK, and Australia (Ray White, LJ Hooker, Harcourts on realestate.com.au). Standard turnaround: 12 hours. Rush: under 2 hours.",
    benefits: [
      "AI-blended window pulls — human-verified, no halo, no muddy masking",
      "Honest exterior color — pool blue, sky blue, garden green locked to reality",
      "Flambient capture support — AI blends ambient + speedlight when both are shot",
      "Style preset re-applied across the folder — no AI drift mid-shoot",
    ],
    image: "/images/hdr/hdr-sample-1-after.jpg",
    imageAlt: "AI HDR real estate photo editing output with balanced window pull and human-verified MLS-safe composition",
    iconName: "Aperture",
  },
  {
    id: "day-to-night",
    title: "Day-to-Dusk Conversion",
    shortDescription:
      "AI day-to-dusk conversion for real estate exteriors — daytime captures turned into believable twilight hero frames, human-verified for MLS compliance.",
    fullDescription:
      "AI day-to-dusk (day-to-night) photo editing for real estate exteriors. When the shoot window closed before you could capture the hero at real twilight, our AI pre-pass generates a graded cobalt-to-amber sky, illuminates interior and exterior windows to match the room behind them, and adds warm facade, porch, and landscape lighting. A human editor then verifies that reflections match the new sky, shadows align with the new light direction, and the frame reads as a real dusk capture — not a daytime photo with a sky slapped on. MLS compliance checked per-market: some US and Canadian MLS boards treat sky manipulation differently; we match your board's rules. Hero-grade output for luxury listings, brochures, and magazine spreads. Standard turnaround: 24 hours.",
    benefits: [
      "AI-generated cobalt-to-amber sky — human-verified against real dusk references",
      "Interior window glow keyed to the room, not pasted onto glass",
      "Warm facade, porch, and landscape light added so reflections and shadows resolve",
      "Per-market MLS sky-manipulation rules checked before sign-off",
    ],
    image: "/images/day-to-twilight/twilight-sample-1-after.jpg",
    imageAlt: "AI day-to-dusk real estate photo editing output with human-verified twilight lighting and architectural glow",
    iconName: "Contrast",
  },
  {
    id: "twilight",
    title: "Twilight Enhancement",
    shortDescription:
      "AI twilight real estate photo editing — enriches the dusk capture you already have, human-verified against your style preset, no fantasy drift.",
    fullDescription:
      "AI twilight photo editing for real estate: if you captured the property at real dusk, our AI balances facade luminance against the sky, enriches the gradient from cobalt through violet to amber, softens harsh glare from porch and landscape fixtures, and brings quiet warmth back into patios, pool decks, and architectural lighting. Low-light noise is suppressed for clean 300 DPI print delivery. A human editor then verifies your stored style preset is held across the folder — so twilight frames read alongside your daytime frames as one shoot, not two. Standard turnaround: 24 hours.",
    benefits: [
      "AI-enriched sky gradient — human-verified for natural cobalt-to-amber transition",
      "Facade and sky luminance held in deliberate balance across the folder",
      "Patio and landscape lights enriched honestly — no blown highlights",
      "Low-light noise suppressed, 300 DPI print and MLS exports delivered",
    ],
    image: "/images/day-to-twilight/twilight-sample-2-after.jpg",
    imageAlt: "AI twilight real estate photo editing output with human-verified sky gradient and architectural glow",
    iconName: "Sunset",
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    shortDescription:
      "AI virtual staging for real estate — empty rooms furnished with photorealistic 3D furniture, human-verified for scale, shadow, and MLS disclosure.",
    fullDescription:
      "AI virtual staging for real estate photographers and agencies in the USA, Canada, UK, and Australia. Our AI composites photorealistic 3D furniture into empty rooms, drops accurate floor shadows, and matches scale to the architecture. A human editor then verifies: shadow direction matches the room's actual light source, furniture scale is correct (no sofas floating above the floor, no beds swallowing the bedroom), and the style matches what the room's architecture supports. You pick the style — Modern, Scandinavian, Coastal, Mid-Century, Luxury Transitional. Living rooms, bedrooms, dining rooms, offices, and outdoor patios all supported. Every staged frame includes the disclosure note required by your MLS board. Standard turnaround: 24 to 48 hours per room.",
    benefits: [
      "AI photorealistic furniture, floor shadows, and reflection — human-verified",
      "Multiple style voices: Modern, Scandinavian, Coastal, Mid-Century, Luxury Transitional",
      "Living, bedrooms, dining, office, outdoor patios supported",
      "MLS virtual-staging disclosure note included on every frame",
    ],
    image: "/images/virtual-staging/staging-sample-1-after.jpg",
    imageAlt: "AI virtual staging for real estate with human-verified furniture scale, shadow, and style",
    iconName: "Home",
  },
  {
    id: "video-editing",
    title: "Real Estate Video Editing",
    shortDescription:
      "Real estate video editing — gimbal interiors, drone exteriors, agent intro cut into cinematic walkthroughs with AI-assisted color grading, human-verified pacing.",
    fullDescription:
      "Real estate video editing for property marketing: we take your raw gimbal interior footage, drone exterior clips, and agent on-camera intro and cut them into a cinematic property walkthrough. AI handles color grading matched to your still photography so the whole listing reads as one brand; a human editor verifies pacing, cuts, music sync, and brand-safe placement of lower-thirds, property badges, and agency branding. Licensed music included. We deliver two aspect ratios from one brief: horizontal 4K for the listing site and vertical 9:16 for Instagram Reels, TikTok, and YouTube Shorts. Standard turnaround: 3 to 5 business days.",
    benefits: [
      "Horizontal 4K + vertical 9:16 delivered from one brief",
      "AI color grade matched to your still photography, human-verified",
      "Licensed music, lower-thirds, brokerage branding included",
      "Gimbal, drone, and agent footage cut into one coherent story",
    ],
    image: "/images/hdr/hdr-sample-1-after.jpg",
    imageAlt: "Real estate video editing output — still frame representing color grade and pacing",
    iconName: "Clapperboard",
  },
  {
    id: "item-removal",
    title: "Item & Object Removal",
    shortDescription:
      "AI item and object removal for real estate photos — wires, cars, bins, cords, and marks removed with AI, human-verified for MLS compliance.",
    fullDescription:
      "AI item and object removal for real estate photos: our AI removes overhead power lines and street wires, cars parked in driveways, trash bins, pool hoses, electrical cords, personal items, and surface marks — and reconstructs the wood grain, turf, tile, concrete, or painted texture underneath. A human editor then verifies: nothing removed is a permanent fixture (MLS boards list these — ceiling fans, window grilles, built-in shelving, fixed lighting), no shadows or reflections betray the removal, and the reconstruction reads as original. This is where AI-only editing gets photographers delisted; our human QC is the reason it won't happen to you. Priced per removal; typical interior shot has 2 to 5 removals, exterior can have more.",
    benefits: [
      "AI removal of vehicles, signage, overhead wires, bins, cords, personal items",
      "Wood grain, turf, tile, and painted surface textures reconstructed invisibly",
      "Human QC against MLS permanent-fixture rules — no delisting risk",
      "Shadow and reflection continuity verified before sign-off",
    ],
    image: "/images/object-removal/removal-sample-1-after.jpg",
    imageAlt: "AI item removal for real estate photo with human-verified MLS-compliant reconstruction",
    iconName: "Eraser",
  },
  {
    id: "aerial-drone",
    title: "Aerial & Drone Photo Editing",
    shortDescription:
      "AI drone photo editing for real estate — haze cleared, horizon levelled, color corrected, property boundaries overlaid on request.",
    fullDescription:
      "AI aerial and drone photo editing for real estate: AI clears atmospheric haze, levels the horizon, corrects wide-angle lens barrel distortion, and calibrates turf and water color on raw DJI, Autel, and Skydio captures. A human editor verifies the result matches your stored style preset and, on request, adds property boundary overlay lines and compass-rose locator pins for site-plan listings. Dynamic range is expanded so the shadow under the roof reads at the same time as the sky above it. Works on single aerial captures and on bracketed aerial HDR sets. Standard turnaround: 24 hours.",
    benefits: [
      "AI haze removal, dynamic range expansion, horizon leveling",
      "Wide-angle lens distortion corrected to natural proportion",
      "Turf, water, and foliage tone enriched and locked to honest color",
      "Optional property boundary overlays and locator pins for site plans",
    ],
    image: "/images/aerial/aerial-sample-1-after.jpg",
    imageAlt: "AI drone real estate photo editing output with human-verified horizon, haze, and landscape color",
    iconName: "Compass",
  },
];
