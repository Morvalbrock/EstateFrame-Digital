export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What does EstateFrame Digital do?",
    answer:
      "EstateFrame Digital is an AI real estate photo editing service with human quality control, based in India and serving real estate photographers and agencies across the USA, Canada, UK, Australia, New Zealand, and worldwide. Eight services: single image editing, HDR blending, day-to-dusk conversion, twilight enhancement, AI virtual staging, real estate video editing, item and object removal, and aerial drone photo editing. AI handles the speed; a human editor locks consistency to your stored style preset and verifies every frame against the MLS compliance checklist before sign-off.",
  },
  {
    question: "How does your AI + human verification workflow actually work?",
    answer:
      "Three stages. (1) AI pre-pass: our AI handles HDR blending, sky swaps, virtual staging, item removal, and color correction at speed — minutes, not hours. (2) Style preset lock: your stored WB, contrast, sky, and sharpening preset are re-applied across the folder so every frame reads like your other work. (3) Human QC: a human editor straightens verticals, verifies no shadow or reflection mismatches, and runs every frame against the MLS compliance checklist. Nothing ships without the human sign-off. This is why AI-only editing fails on volume shoots and ours doesn't.",
  },
  {
    question: "Why not use a pure AI editing tool instead?",
    answer:
      "Pure AI tools are fast and cheap, but they drift across a 40-image shoot (frame 1 and frame 40 look like different photographers), flatten every photographer into the same generic 'Zillow look,' and will cheerfully remove permanent fixtures — ceiling fans, window grilles, built-in shelving — that MLS boards treat as misrepresentation. Agents get delisted for this. Our AI + human workflow gives you AI speed on the throughput and a human editor stopping the AI mistakes before they reach your client.",
  },
  {
    question: "What is 'style memory' and how do you store my look?",
    answer:
      "Style memory is a stored editing preset for your account. On onboarding we take 15 to 20 of your finished edits and extract your WB tendency, contrast curve, sky treatment, sharpening, highlight roll-off, shadow lift, and typical crop ratios. These are saved against your account and re-applied automatically on every folder we handle — the AI pre-pass respects them, the human editor verifies them. Means your tenth folder reads identically to your first, and your hundredth.",
  },
  {
    question: "What's on the MLS compliance checklist?",
    answer:
      "The published rules that local MLS boards enforce for photo editing — the ones that get agents delisted for misrepresentation. No removal of permanent fixtures (ceiling fans, window grilles, built-in shelving, fixed lighting, HVAC vents). No misleading sky manipulation beyond board-approved limits. Virtual staging disclosure note included on staged frames. No misrepresentation of the room's size, light, or finishes. We maintain per-market checklists for major US, Canadian, UK, and Australian boards and run every frame through the applicable one before delivery.",
  },
  {
    question: "What's the SLA and what happens if you miss it?",
    answer:
      "12 hours standard SLA for photo folders. 24 hours for AI virtual staging and twilight. 2 hours for rush hero frames. 3 to 5 business days for video edits. Miss the SLA and your next folder is credited — no dispute, no explanation required. Revisions are free and returned within 60 minutes any time of day, unlimited passes.",
  },
  {
    question: "Do you work with US real estate photographers?",
    answer:
      "Yes. We edit for US real estate photographers on MLS workflows — Compass, Coldwell Banker, Keller Williams, RE/MAX, Sotheby's International Realty, Berkshire Hathaway HomeServices, Zillow Premier Agent, and independent brokerages. MLS-ready exports (typically 1920×1280 sRGB, under 500 KB) plus full-resolution print masters delivered inside the 12-hour SLA. US time zones work in your favor: ship files at end-of-shoot Pacific or Eastern time, receive the folder before your next morning.",
  },
  {
    question: "Do you edit for Canadian real estate photographers (Realtor.ca)?",
    answer:
      "Yes. We work with Canadian photographers delivering to Realtor.ca and TRREB — Royal LePage, Century 21, Sutton, Re/Max Canada, Chestnut Park, and independent brokerages across Ontario, BC, Alberta, Quebec, and the Atlantic provinces. Exports match Realtor.ca upload specifications; metadata and file-naming conventions are matched to your pipeline on first project. Canadian MLS boards have their own fixture and disclosure rules — we maintain per-board checklists.",
  },
  {
    question: "Do you edit for Australian real estate photographers?",
    answer:
      "Yes. We edit for Australian real estate photographers delivering to realestate.com.au, Domain.com.au, and Rate My Agent — Ray White, LJ Hooker, Harcourts, Belle Property, McGrath Estate Agents, and independent photographers across Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, and regional markets. AI twilight conversion, AI virtual staging, and drone finishing are especially popular with AU listings. Our workday overlaps your evening — files shipped end-of-day come back for the next afternoon.",
  },
  {
    question: "Do you edit for UK real estate photographers?",
    answer:
      "Yes. We edit for UK estate agency photographers and independent listing photographers across London, the South East, the Midlands, and the North — Rightmove, Zoopla, and OnTheMarket upload specs supported. HDR blending, twilight, virtual staging, and item removal are our most-requested UK services.",
  },
  {
    question: "What time zone do you work in, and how fast is the turnaround from the US / Canada / UK / Australia?",
    answer:
      "The studio operates on India Standard Time (UTC+5:30). Our work hours overlap with your overnight, which is the turnaround advantage: US Pacific photographers who ship files at 6pm PT see the folder back by their 7am next morning. US Eastern and Toronto-based photographers get it back by 9am. UK photographers get folders back the same evening or next morning. Australian Eastern photographers (Sydney, Melbourne, Brisbane) who ship at end of day can get the folder back in time for afternoon follow-ups. Rush folders ship in under 2 hours regardless of time zone.",
  },
  {
    question: "How much does AI real estate photo editing cost?",
    answer:
      "Pricing depends on service and volume. Single image editing starts at a per-image rate; HDR blending is priced per bracketed set; AI virtual staging is priced per room; video editing is quoted per project. Agencies and photographers on recurring volume get discounted rates. Monthly subscription available for 500+ images per month. Share your brief at agilansr222@gmail.com or +91 63837 50315 and we'll send a quote within the hour. Two sample frames edited free, on the house.",
  },
  {
    question: "How do payments work for US, Canadian, UK, and Australian clients?",
    answer:
      "We accept USD, CAD, AUD, GBP, NZD, and INR via Stripe, Wise (formerly TransferWise), PayPal, and international bank transfer. Stripe handles most US/CA/UK/AU card payments with low fees. Wise is the cheapest for international bank-to-bank. PayPal is available but has higher fees. Invoice terms are net 15 by default; monthly retainers for volume clients.",
  },
  {
    question: "Are you familiar with Compass, Ray White, Royal LePage, and other major brokerage workflows?",
    answer:
      "Yes. We maintain editing templates calibrated to the specific export requirements of major brokerages: Compass (US), Coldwell Banker, Keller Williams, RE/MAX, Sotheby's International Realty, Berkshire Hathaway HomeServices, Zillow Premier Agent, Royal LePage (Canada), Century 21 Canada, Sutton, Chestnut Park, Ray White (Australia), LJ Hooker, Harcourts, Belle Property, McGrath. Camera profiles, white balance targets, and MLS / listing-platform crop ratios are stored per client as part of style memory.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "For photo editing: RAW (CR2, CR3, NEF, ARW, RAF, DNG, ORF, PEF), JPG, TIFF, and PSD. For video editing: MP4, MOV, ProRes, and raw drone footage from DJI, Autel, and Skydio. For reference files: PDF, PNG, and JPG. Send anything — if we can't open it we'll tell you fast.",
  },
  {
    question: "How do I send you my files?",
    answer:
      "Share a cloud link in your brief — Google Drive, Dropbox, WeTransfer, OneDrive, pCloud, MASV, all work. We download, confirm receipt within the hour, and start the AI pre-pass. No upload portals, no login walls, no new tool to learn.",
  },
  {
    question: "What's your policy for revisions and feedback?",
    answer:
      "All revisions are free. Every note is returned within 60 minutes of receipt. Unlimited passes — we work the frame until it's right. No per-revision charge, no limits.",
  },
  {
    question: "Can I test your editing quality before committing?",
    answer:
      "Yes. We offer two complimentary edited frames on every new photographer or agency account. Send two RAW files (or a bracketed set for HDR), your usual preset, and your preferred turnaround window. We deliver AI-accelerated and human-verified frames inside that window so you can judge the output on your own camera profile and style before placing a larger order. No card, no subscription.",
  },
  {
    question: "Do you work with high-volume agency pipelines?",
    answer:
      "Yes. We run continuous pipelines for real estate photographers and agencies shooting weekly volume. Style presets, camera profiles, white balance targets, crop ratios, and file naming conventions are stored per client so your tenth folder reads identically to your first. We scale from a single hero image up to several hundred frames per week, with a dedicated human editor assigned to volume accounts.",
  },
  {
    question: "What's the difference between HDR and single image editing?",
    answer:
      "HDR editing uses 3 to 7 bracketed exposures blended into one frame — best when the room has bright windows and dark corners you need both to read. Single image editing uses one exposure per shot — faster, cheaper, works great for evenly-lit interiors, rentals, and high-volume listings. Not sure which fits? Send one RAW of each type and we'll recommend based on the scene.",
  },
  {
    question: "Can you edit photos shot on iPhone or Android?",
    answer:
      "Yes. We edit smartphone captures using the same AI + human workflow. RAW (ProRAW on iPhone, Expert RAW on Samsung) delivers the best latitude for HDR and twilight; JPG also works for single-image editing. We tell agents using smartphones for listings how to shoot for the best editing result.",
  },
  {
    question: "How do you handle AI virtual staging?",
    answer:
      "Share the empty-room photograph and pick a style — Modern, Scandinavian, Coastal, Mid-Century, or Luxury Transitional. Our AI composites photorealistic 3D furniture into the frame, drops accurate shadow against the real floor, and calibrates scale to the architecture. A human editor then verifies shadow direction, furniture scale, and style match — and adds the MLS-required virtual-staging disclosure note on every staged frame. Living rooms, bedrooms, dining, home office, and outdoor patios supported. Standard turnaround: 24 to 48 hours per room.",
  },
  {
    question: "Do you provide MLS-ready and print-ready exports?",
    answer:
      "Yes. Every delivery includes an MLS/web-optimized version (typically 1920×1280, sRGB, under 500 KB) and a full-resolution print master (full sensor resolution, Adobe RGB or sRGB on request, 300 DPI). Named to your folder convention. Watermarked preview versions available on request.",
  },
  {
    question: "Can you remove cars, wires, or people from real estate photos?",
    answer:
      "Yes — AI item and object removal is one of our eight services. Cars in driveways, overhead power lines, trash bins, pool hoses, cords, personal items, and surface marks all get removed. The texture beneath is reconstructed so the removal is invisible. Critically, a human editor verifies no permanent fixture was removed — this is where AI-only editing gets photographers delisted; our human QC is the reason it won't happen to you. Typical interior shot has 2 to 5 removals; exteriors can have more.",
  },
  {
    question: "Do you edit drone photos?",
    answer:
      "Yes. AI clears atmospheric haze, levels the horizon, corrects wide-angle lens distortion, and calibrates turf and water color on raw DJI, Autel, and Skydio captures. A human editor verifies against your style preset. Property boundary overlays and locator pins for site-plan listings available on request. Standard turnaround: 24 hours.",
  },
  {
    question: "Do you edit real estate videos?",
    answer:
      "Yes. We cut gimbal interior footage, drone exteriors, and agent on-camera intro into a cinematic walkthrough. Horizontal 4K for listing sites and vertical 9:16 for Instagram/TikTok/YouTube Shorts delivered from the same brief. AI color grade matched to your still photography; human-verified pacing, cuts, and music sync. Licensed music, lower-thirds, property badges, and brokerage branding included. Standard turnaround: 3 to 5 business days.",
  },
  {
    question: "What's your payment model?",
    answer:
      "Per-image, per-folder, or monthly subscription — you pick what fits your flow. First-time photographers usually start pay-as-you-go. Agencies and high-volume photographers move to monthly subscription (500+ images/month, discounted rate, SLA locked). We accept bank transfer, PayPal, Wise, and Stripe. Invoice terms: net 15 by default.",
  },
  {
    question: "What happens to my files after the project is delivered?",
    answer:
      "We store files encrypted on the studio drives and delete them on your request. Never republished, never cataloged, never reused for anything without your written permission. Standard retention is 90 days from delivery; longer retention available on request for pipeline clients.",
  },
  {
    question: "How quickly do you reply to a first enquiry?",
    answer:
      "Within the hour during studio hours (India IST, roughly 9am to 10pm, Monday to Saturday). For US and Canadian photographers this translates to roughly 10:30pm to 11:30am Eastern (prime overnight coverage); for UK photographers, 3:30am to 4:30pm London time; for Australian photographers (Sydney/Melbourne AEST), roughly 2:30pm to 3:30am local. Outside those hours, by the next morning. Fastest path: WhatsApp at +91 63837 50315. Email agilansr222@gmail.com also works.",
  },
];
