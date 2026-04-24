export const FRAMES_PATH = "/frames";
export const FRAME_COUNT = 120;
export const FRAME_EXT   = "jpg" as const;

export const NAV_ITEMS = [
  { label: "Services",  href: "#services" },
  { label: "About",     href: "#about" },
  { label: "Rituals",   href: "#rituals" },
  { label: "Booking",   href: "#booking" },
] as const;

export const PARTNERS = [
  "Body Sculpting",
  "Lymphatic Drainage",
  "Cedar Barrel",
  "Deep Tissue",
  "Pressotherapy",
  "Infrared Sauna",
];

export const SERVICES = [
  {
    icon: "Fingerprint",
    title: "Body Sculpting",
    body: "Targeted manual sculpting that reshapes contours and defines your natural silhouette through expert deep-tissue bodywork. Visible results from the first session.",
  },
  {
    icon: "Waves",
    title: "Lymphatic Drainage",
    body: "Specialized manual therapy to reduce puffiness, stimulate circulation and restore natural fluid balance. Relief from chronic swelling and fatigue.",
  },
  {
    icon: "Flame",
    title: "Cedar Barrel Ritual",
    body: "An immersive Russian cedar steam ritual that detoxifies, relaxes deep muscle tension and awakens the skin. Your body, renewed in 30 minutes.",
  },
  {
    icon: "Layers",
    title: "Deep Tissue Bodywork",
    body: "Precision pressure targeting fascia and chronic tension patterns for lasting structural release. Not just relaxation — real, lasting change.",
  },
  {
    icon: "Wind",
    title: "Pressotherapy",
    body: "Medical-grade compression therapy to accelerate lymph flow, reduce swelling and visibly improve leg contour. Worn, not worked — deeply restorative.",
  },
  {
    icon: "Sparkles",
    title: "Signature Rituals",
    body: "Curated 90–120 min rituals combining sauna, body wraps, massage and sensory care. A complete transformation in a single session.",
  },
] as const;

export const REASONS = [
  {
    icon: "Award",
    title: "9 Years of Mastery",
    body: "Nine years of dedicated bodywork expertise — from clinical lymphatic technique to luxury wellness ritual. Every method is earned, not learned overnight.",
  },
  {
    icon: "UserCheck",
    title: "Truly Personal",
    body: "Every session is designed around your body. No templates, no shortcuts. We assess, we adapt, we deliver exactly what your body needs.",
  },
  {
    icon: "Eye",
    title: "Visible Results",
    body: "Clients see and feel the difference from session one — reduced puffiness, refined contours, a lighter body. This is bodywork that works.",
  },
  {
    icon: "Heart",
    title: "Premium Experience",
    body: "The Body is a sanctuary, not a clinic. Every detail — light, scent, touch — is curated for your transformation. You deserve more than routine.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Consultation",
    body: "We begin with a personal consultation to understand your goals, assess your body and design your custom treatment protocol.",
  },
  {
    n: "02",
    title: "Your Ritual",
    body: "Each session unfolds as a carefully sequenced ritual — never rushed, always intentional. 60 to 120 minutes of pure focus on your body.",
  },
  {
    n: "03",
    title: "Visible Change",
    body: "Immediate lightness. Visible change. Long-term transformation through consistent programs designed around your lifestyle and goals.",
  },
  {
    n: "04",
    title: "Your Program",
    body: "We build your personal maintenance plan — the right treatments, the right rhythm — for results that last well beyond the studio.",
  },
] as const;

export const STATS = [
  { value: "9+",   label: "Years of Expertise" },
  { value: "500+", label: "Sessions Delivered" },
  { value: "98%",  label: "Client Retention" },
  { value: "16+",  label: "Treatment Modalities" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "I've tried countless studios in Charlotte. Nothing compares. After three body sculpting sessions I could see the difference in my posture, my silhouette, and how I feel in my own skin.",
    name: "Sarah M.",
    role: "Body Sculpting Client",
  },
  {
    quote: "The cedar barrel ritual was unlike anything I've experienced before. I walked out feeling completely renewed — lighter, warmer, and deeply calm. I come back every month.",
    name: "Jennifer K.",
    role: "Ritual Member",
  },
  {
    quote: "Her lymphatic drainage technique is exceptional. My chronic puffiness was gone after the second session. I'm now on a monthly program and I'll never go back to anything else.",
    name: "Amanda R.",
    role: "Wellness Program",
  },
  {
    quote: "This is not a regular massage studio. It's a transformation space. Every detail from the atmosphere to the technique feels premium and deeply intentional.",
    name: "Diana L.",
    role: "Premium Client",
  },
  {
    quote: "The body sculpting gave me results I didn't think were possible without surgery. Visible contouring, no downtime. Absolutely worth every session.",
    name: "Michelle T.",
    role: "Sculpting Program",
  },
  {
    quote: "I was skeptical at first. After my first 90-minute wellness ritual I was completely converted. It's now my monthly non-negotiable. Nothing else comes close.",
    name: "Lauren S.",
    role: "Ritual Client",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What exactly is body sculpting?",
    a: "Body sculpting at The Body is a hands-on, non-invasive technique using targeted manual pressure, sculpting movements and lymphatic stimulation to reshape contours, reduce puffiness and improve the overall quality and appearance of your body. No machines. No surgery. Just expert hands and visible results.",
  },
  {
    q: "How many sessions do I need to see results?",
    a: "Most clients notice a visible difference after just 1–2 sessions. For structural change and lasting results, we recommend a program of 6–10 sessions over 4–6 weeks, combined with ongoing monthly maintenance.",
  },
  {
    q: "What is lymphatic drainage and who is it for?",
    a: "Lymphatic drainage is a gentle, rhythmic manual technique that stimulates the lymphatic system to reduce fluid retention, puffiness and toxin build-up. It's ideal for chronic swelling, post-procedure recovery, fatigue, heavy legs, or anyone looking to restore lightness to the body.",
  },
  {
    q: "What should I expect on my first visit?",
    a: "Your first appointment begins with a personal consultation to understand your goals and assess your body. The treatment itself is a focused, professional experience in a calm, private studio environment. You'll leave feeling noticeably lighter — and you'll know exactly what your next steps are.",
  },
  {
    q: "What is the cedar barrel ritual?",
    a: "The cedar barrel is a traditional Russian steam vessel that envelops your body in aromatic cedar heat while your head remains cool and comfortable. It deeply relaxes muscles, opens pores, stimulates circulation and creates a profound detox effect — all in 20–30 minutes. Transformative.",
  },
  {
    q: "Do you offer packages or programs?",
    a: "Yes — and this is where real results happen. Our signature programs are designed for maximum transformation and better value than single sessions. We'll recommend the right program during your consultation based on your goals, body and lifestyle.",
  },
] as const;
