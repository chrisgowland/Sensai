const PptxGenJS = require("pptxgenjs");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Sensai";
pptx.company = "Sensai";
pptx.subject = "Marketing Deck";
pptx.title = "Sensai Deck Draft";

const C = {
  navy: "17324D",
  teal: "0B5F71",
  orange: "D67C2F",
  light: "F3F6F8",
  dark: "1C2A39",
  white: "FFFFFF",
  muted: "4A5A68",
};

function addHeader(slide, title, subtitle = "") {
  slide.background = { color: C.white };
  slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 0.7, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText("Sensai", { x: 0.4, y: 0.14, w: 2.5, h: 0.4, color: C.white, bold: true, fontSize: 18 });
  slide.addText(title, { x: 0.6, y: 0.95, w: 12.2, h: 0.6, color: C.dark, bold: true, fontSize: 27 });
  if (subtitle) {
    slide.addText(subtitle, { x: 0.6, y: 1.55, w: 12.2, h: 0.4, color: C.muted, fontSize: 15 });
  }
}

function addBullets(slide, bullets, startY = 2.05) {
  const lines = bullets.map((b) => ({ text: b, options: { bullet: { indent: 18 } } }));
  slide.addText(lines, { x: 0.85, y: startY, w: 11.9, h: 4.6, color: C.dark, fontSize: 18, breakLine: true });
}

function addTitleSlide() {
  const s = pptx.addSlide();
  s.background = { color: C.light };
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 13.33, h: 7.5, fill: { color: C.navy }, line: { color: C.navy } });
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 5.7, w: 13.33, h: 1.8, fill: { color: C.teal }, line: { color: C.teal } });
  s.addText("Sensai", { x: 0.9, y: 2.2, w: 8.5, h: 0.9, color: C.white, bold: true, fontSize: 54 });
  s.addText("AI-powered market and competitor intelligence", { x: 0.9, y: 3.2, w: 10.8, h: 0.6, color: C.white, fontSize: 23 });
  s.addText("for faster commercial decisions", { x: 0.9, y: 3.8, w: 10.8, h: 0.6, color: C.white, fontSize: 23 });
  s.addText("Confidential | March 2026", { x: 0.9, y: 6.25, w: 5, h: 0.3, color: C.white, fontSize: 13 });
}

function addSlide(title, subtitle, bullets) {
  const s = pptx.addSlide();
  addHeader(s, title, subtitle);
  addBullets(s, bullets);
}

addTitleSlide();
addSlide("The Problem", "Companies are data-rich but insight-poor", [
  "Critical market signals are public, but fragmented and underused",
  "Strategy and marketing teams are stretched",
  "Traditional research is expensive and slow for fast-moving markets",
  "Decisions are delayed or made with partial evidence",
]);
addSlide("Why Now", "Market speed has increased. Decision cycles have not.", [
  "Competitor moves are faster and more frequent",
  "Leadership expects evidence-backed decisions in real time",
  "AI now makes large-scale signal processing practical and affordable",
  "Firms need strategic insight without building full in-house capability",
]);
addSlide("Our Solution", "Sensai turns public data into decision-ready intelligence", [
  "AI-powered signal collection and synthesis",
  "Advanced analytics to find what matters",
  "Visual, executive-ready outputs",
  "Clear commercial recommendations, not raw data summaries",
]);
addSlide("What You Get", "Outputs designed for action", [
  "Market and competitor landscape snapshots",
  "Threat and opportunity alerts",
  "Strategic implications by customer segment or market",
  "Recommendation pack: what this means and what to do next",
]);
addSlide("How We Work", "Human + AI model for speed and trust", [
  "Define decision question and scope",
  "Collect and structure relevant public signals",
  "Analyze trends, moves, and implications",
  "Apply analyst quality review",
  "Deliver action plan and leadership-ready narrative",
]);
addSlide("Key Benefits", "Better decisions, lower cost, faster turnaround", [
  "Faster: days to insight, not weeks",
  "Leaner: lower cost than analyst-heavy alternatives",
  "Practical: recommendations tied to business decisions",
  "Scalable: one-off projects or continuous intelligence",
]);
addSlide("Use Cases Snapshot", "Commercial outcomes, not just analysis outputs", [
  "Price optimization from competitor price scraping",
  "Higher engagement from proposition and website reviews",
  "Lower research spend through competitor intelligence automation",
  "Faster action on competitor/regulatory changes with so-what alerts",
  "Better conversion through online journey clarity reviews",
  "Sharper differentiation from automated feature/proposition tracking",
]);
addSlide("Use Case Deep Dive A", "Competitor pricing intelligence", [
  "Track competitor pricing, promotions, and timing by region/product",
  "Identify price corridors, discount pressure, and response windows",
  "Recommend where to hold, raise, or adjust pricing",
  "Commercial impact: improve margin protection and targeted win-rate",
]);
addSlide("Use Case Deep Dive B", "Engagement + conversion optimization", [
  "Review competitor and client digital journeys step-by-step",
  "Identify friction, message gaps, and trust blockers",
  "Prioritize changes to copy, structure, and visual quality",
  "Commercial impact: increase qualified enquiries and conversion rates",
]);
addSlide("Use Case Deep Dive C", "Automated competitor/regulatory monitoring", [
  "Automate tracking of competitor moves and regulator actions",
  "Convert events into plain-language so-what implications",
  "Deliver recurring insight updates with recommended actions",
  "Commercial impact: reduce research cost and accelerate response cycles",
]);
addSlide("Commercial Model", "Flexible engagement options", [
  "Insight Sprint (one-off): focused strategic question, 2-4 weeks",
  "Always-On Intelligence: monthly insight cadence + quarterly deep dives",
  "Strategic Partner: bespoke programs, workshops, executive support",
]);
addSlide("Competitive Review", "Most direct competitors", [
  "Inference Group (services model): https://inference-group.com/",
  "Similarweb: https://www.similarweb.com/",
  "Crayon: https://www.crayon.co/",
  "Klue: https://klue.com/",
  "Brand24: https://brand24.com/",
]);
addSlide("Competitive Pricing Snapshot", "Public pricing where available (Mar 1, 2026)", [
  "Inference Group: no public list pricing visible",
  "Similarweb: from $125/month (annual billing) or $199 monthly",
  "Crayon: tailored pricing via estimate request",
  "Klue: no public list pricing visible",
  "Brand24: from $149/month annual billing ($199 monthly)",
]);
addSlide("Why Sensai Wins", "Positioning advantage", [
  "Faster than traditional bespoke research cycles",
  "More commercially actionable than raw monitoring tools",
  "More flexible than software-only subscriptions",
  "Clear outputs tied to pricing, growth, and competitive response decisions",
]);
addSlide("Founding Team Credentials", "", [
  "Chris Gowland, Co-Founder: senior business leader (profile lists Black Horse Finance)",
  "Paul Speight, Co-Founder: channel strategy and cost optimization leader (profile lists Lloyds Banking Group)",
  "Combined strength: commercial judgment + practical execution",
]);
addSlide("Call To Action", "Start with a focused Insight Sprint", [
  "Co-define your highest-priority commercial question",
  "Deliver decision-ready evidence and recommendations in weeks",
  "Convert to ongoing intelligence if value is proven",
  "Book a 45-minute discovery session",
]);

pptx.writeFile({ fileName: "docs/publish/sensai-deck-draft.pptx" });

