export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What does EstateFrame Digital do?",
    answer:
      "EstateFrame Digital is a real estate photo and video editing studio based in India, serving real estate photographers and agencies across the United States, Canada, Australia, the UK, New Zealand, and worldwide. Eight disciplines: single image editing, HDR blending, day-to-night conversion, twilight enhancement, virtual staging, real estate video editing, item and object removal, and aerial drone photo editing.",
  },
  {
    question: "Do you work with US real estate photographers?",
    answer:
      "Yes. We edit for US real estate photographers on MLS workflows — Compass, Coldwell Banker, Keller Williams, RE/MAX, Sotheby's International Realty, Berkshire Hathaway, Zillow Premier Agent, and independent brokerages. We deliver MLS-ready exports (typically 1920×1280 sRGB, under 500 KB) plus full-resolution print masters. US time-zone turnaround works in your favor: ship files at end-of-shoot Pacific or Eastern time, receive the folder before your next morning.",
  },
  {
    question: "Do you edit for Canadian real estate photographers (Realtor.ca)?",
    answer:
      "Yes. We work with Canadian photographers delivering to Realtor.ca and TRREB, serving Royal LePage, Century 21, Sutton, Re/Max Canada, Chestnut Park, and independent brokerages across Ontario, BC, Alberta, Quebec, and the Atlantic provinces. Exports match Realtor.ca upload specifications; metadata and file-naming conventions are matched to your pipeline on first project.",
  },
  {
    question: "Do you edit for Australian real estate photographers?",
    answer:
      "Yes. We edit for Australian real estate photographers delivering to realestate.com.au, Domain.com.au, and Rate My Agent, serving Ray White, LJ Hooker, Harcourts, Belle Property, McGrath Estate Agents, and independent photographers across Sydney, Melbourne, Brisbane, Perth, Adelaide, Gold Coast, and regional markets. Twilight conversions, virtual staging, and drone finishing are especially popular with AU listings.",
  },
  {
    question: "What time zone do you work in, and how fast is the turnaround from the US / Canada / Australia?",
    answer:
      "The studio operates on India Standard Time (UTC+5:30). Our work hours overlap with your overnight, which is the turnaround advantage: US Pacific photographers who ship files at 6pm PT see the folder back by their 7am next morning. US Eastern and Toronto-based photographers get it back by 9am. Australian Eastern photographers (Sydney, Melbourne, Brisbane) who ship at end of day can get the folder back in time for afternoon follow-ups. Rush folders ship in under 2 hours any time zone.",
  },
  {
    question: "How do payments work for US, Canadian, and Australian clients?",
    answer:
      "We accept USD, CAD, AUD, GBP, NZD, and INR via Stripe, Wise (formerly TransferWise), PayPal, and international bank transfer. Stripe handles most US/CA/AU card payments with low fees. Wise is the cheapest for international bank-to-bank. PayPal is available but has higher fees. Invoice terms are net 15 by default; monthly retainers for volume clients.",
  },
  {
    question: "Are you familiar with Compass, Ray White, Royal LePage, and other major brokerage workflows?",
    answer:
      "Yes. We maintain editing templates calibrated to the specific export requirements of major brokerages: Compass (US), Coldwell Banker, Keller Williams, RE/MAX, Sotheby's International Realty, Berkshire Hathaway HomeServices, Zillow Premier Agent, Royal LePage (Canada), Century 21 Canada, Sutton, Chestnut Park, Ray White (Australia), LJ Hooker, Harcourts, Belle Property, McGrath. Camera profiles, white balance targets, and MLS/listing-platform crop ratios are stored per client.",
  },
  {
    question: "How much does real estate photo editing cost?",
    answer:
      "Pricing depends on service and volume. Single image editing starts at a per-image rate; HDR blending is priced per bracketed set; virtual staging is priced per room; video editing is quoted per project. Agencies and photographers on recurring volume get discounted rates. Share your brief at agilansr222@gmail.com or +91 63837 50315 and we'll send a quote within the hour.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "For photo editing: RAW (CR2, CR3, NEF, ARW, RAF, DNG, ORF, PEF), JPG, TIFF, and PSD. For video editing: MP4, MOV, ProRes, and raw drone footage from DJI, Autel, and Skydio. For reference files: PDF, PNG, and JPG. Send anything — if we can't open it we'll tell you fast.",
  },
  {
    question: "How do I send you my files?",
    answer:
      "Share a cloud link in your brief — Google Drive, Dropbox, WeTransfer, OneDrive, pCloud, MASV, all work. We download, confirm receipt within the hour, and start editing. No upload portals, no login walls.",
  },
  {
    question: "What's your turnaround time?",
    answer:
      "Standard turnaround is 12 to 24 hours for single image and HDR editing. Day-to-night, twilight, virtual staging, and drone finishing are 24 to 48 hours. Video editing is 3 to 5 business days. Rush folders (any discipline) deliver in under 2 hours at no surcharge — flag the brief as urgent.",
  },
  {
    question: "What's your policy for revisions and feedback?",
    answer:
      "All revisions are free. Every note is returned within 60 minutes of receipt. Unlimited passes — we work the frame until it's right. No per-revision charge, no limits.",
  },
  {
    question: "Can I test your editing quality before committing?",
    answer:
      "Yes. We offer a complimentary test frame on every commission. Send a RAW file (or a bracketed set for HDR) and your preferred turnaround window. We deliver a resolved frame inside that window so you can judge the work on your own camera profile before placing a larger order.",
  },
  {
    question: "Do you work with high-volume agency pipelines?",
    answer:
      "Yes. We run continuous pipelines for real estate photographers and agencies shooting weekly volume. Camera profiles, white balance targets, crop ratios, and file naming conventions are stored per client so your tenth folder reads identically to your first. We scale from a single hero image up to several hundred frames per week.",
  },
  {
    question: "What's the difference between HDR and single image editing?",
    answer:
      "HDR editing uses 3 to 7 bracketed exposures blended into one frame — best when the room has bright windows and dark corners you need both to read. Single image editing uses one exposure per shot — faster, cheaper, works great for evenly-lit interiors, rentals, and high-volume listings. Not sure which fits? Send one RAW of each type and we'll recommend.",
  },
  {
    question: "Can you edit photos shot on iPhone or Android?",
    answer:
      "Yes. We edit smartphone captures using the same workflow. RAW (ProRAW on iPhone, Expert RAW on Samsung) delivers the best latitude for HDR and twilight; JPG also works for single-image editing. We tell agents using smartphones for listings how to shoot for the best editing result.",
  },
  {
    question: "How do you handle virtual staging?",
    answer:
      "Share the empty-room photograph and pick a style — Modern, Scandinavian, Coastal, Mid-Century, or Luxury Transitional. We composite photorealistic 3D furniture into the frame, drop accurate shadow against the real floor, and calibrate scale to the architecture. Living rooms, bedrooms, dining, home office, and outdoor patios are all supported. Standard turnaround is 24 to 48 hours per room.",
  },
  {
    question: "Do you provide MLS-ready and print-ready exports?",
    answer:
      "Yes. Every delivery includes an MLS/web-optimized version (typically 1920×1280, sRGB, under 500 KB) and a full-resolution print master (full sensor resolution, Adobe RGB or sRGB on request, 300 DPI). Named to your folder convention. We can add watermarked preview versions on request.",
  },
  {
    question: "Can you remove cars, wires, or people from real estate photos?",
    answer:
      "Yes — item and object removal is one of our eight disciplines. Cars in driveways, overhead power lines, trash bins, pool hoses, cords, personal items, and surface marks all get removed. The texture beneath is reconstructed so the removal is invisible. Typical interior shot has 2 to 5 removals; exteriors can have more. Priced per removal or bundled into a listing package.",
  },
  {
    question: "Do you edit drone photos?",
    answer:
      "Yes. We clear atmospheric haze, level the horizon, correct wide-angle lens distortion, and calibrate turf and water color on raw DJI, Autel, and Skydio captures. Property boundary overlays and locator pins for site-plan listings are available on request. Standard turnaround is 24 hours.",
  },
  {
    question: "Do you edit real estate videos?",
    answer:
      "Yes. We cut gimbal interior footage, drone exteriors, and agent on-camera intro into a cinematic walkthrough. Horizontal 4K for listing sites and vertical 9:16 for Instagram/TikTok/YouTube Shorts are delivered from the same brief. Licensed music, lower-thirds, property badges, and agency branding included. Standard turnaround is 3 to 5 business days.",
  },
  {
    question: "What's your payment model?",
    answer:
      "Per-image, per-folder, or monthly retainer — you pick what fits your flow. First-time clients usually start pay-as-you-go. Agencies and photographers on recurring volume often move to monthly retainers for predictable budget. We accept bank transfer, PayPal, Wise, and Stripe. Invoice terms: net 15 by default.",
  },
  {
    question: "What happens to my files after the project is delivered?",
    answer:
      "We store files encrypted on the studio drives and delete them on your request. Never republished, never cataloged, never reused for anything without your written permission. Standard retention is 90 days from delivery; longer retention available on request for pipeline clients.",
  },
  {
    question: "How quickly do you reply to a first enquiry?",
    answer:
      "Within the hour during studio hours (India IST, roughly 9am to 10pm, Monday to Saturday). For US and Canadian photographers this translates to roughly 10:30pm to 11:30am Eastern (prime overnight coverage); for Australian photographers (Sydney/Melbourne AEST), roughly 2:30pm to 3:30am local. Outside those hours, by the next morning. Fastest path: WhatsApp at +91 63837 50315. Email agilansr222@gmail.com also works.",
  },
];
