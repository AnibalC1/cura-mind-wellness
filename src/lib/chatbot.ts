export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  location?: string;
  step: "idle" | "collecting_name" | "collecting_email" | "collecting_phone" | "collecting_service" | "collecting_location" | "complete";
}

export const SERVICES_LIST = [
  "Medication Management",
  "Psychiatric Diagnosis",
  "Psychotherapy & Counseling",
  "TMS Therapy (TX only)",
  "Telepsychiatry",
  "IV Ketamine Therapy",
  "Medical Weight Loss",
  "ADHD Assessment",
  "Pharmacogenomic Gene Testing",
];

export const LOCATIONS_LIST = [
  "Quincy, MA — (617) 777-7982",
  "Richmond, TX — (281) 939-9566",
  "Riverside, CA — (951) 519-2175",
  "Portland, OR — (503) 793-2229",
  "Telehealth (All States)",
];

const PATTERNS = {
  services: /\b(service|offer|treat|help|speciali|therapy|therapies|medication|ketamine|tms|adhd|weight|genetic|telepsychiatry|counseling|psychotherapy|diagnosis)\b/i,
  location: /\b(location|address|office|where|city|state|near|texas|massachusetts|california|oregon|tx|ma|ca|or|quincy|richmond|riverside|portland)\b/i,
  insurance: /\b(insurance|coverage|cover|accept|copay|cost|price|pay|billing|medicaid|medicare|aetna|bcbs|blue cross|cigna|united)\b/i,
  appointment: /\b(appointment|schedule|book|availability|available|when|slot|session|visit|see)\b/i,
  hours: /\b(hour|open|close|time|when|day|monday|saturday|weekend|weekday)\b/i,
  provider: /\b(doctor|dr|provider|nurse|practitioner|vivian|emuobe|credential|qualif|experience|background)\b/i,
  greeting: /^(hi|hello|hey|good morning|good afternoon|good evening|howdy|sup|yo)\b/i,
  crisis: /\b(suicide|suicidal|kill myself|end my life|harm myself|crisis|emergency|urgent|danger)\b/i,
  telehealth: /\b(telehealth|virtual|online|remote|video|zoom|phone)\b/i,
  affirm: /^(yes|yeah|yep|sure|ok|okay|sounds good|please|let's do it|that works|correct|right|affirmative)\b/i,
  deny: /^(no|nope|not now|maybe later|skip|no thanks|nah)\b/i,
};

function detectIntent(message: string): string {
  const lower = message.toLowerCase().trim();

  if (PATTERNS.crisis.test(lower)) return "crisis";
  if (PATTERNS.greeting.test(lower) && lower.split(" ").length <= 3) return "greeting";
  if (PATTERNS.appointment.test(lower)) return "appointment";
  if (PATTERNS.insurance.test(lower)) return "insurance";
  if (PATTERNS.hours.test(lower)) return "hours";
  if (PATTERNS.location.test(lower)) return "location";
  if (PATTERNS.telehealth.test(lower)) return "telehealth";
  if (PATTERNS.services.test(lower)) return "services";
  if (PATTERNS.provider.test(lower)) return "provider";
  return "general";
}

function getServiceResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("tms") || lower.includes("transcranial")) {
    return "TMS (Transcranial Magnetic Stimulation) Therapy is an FDA-cleared, non-invasive treatment for depression. It uses magnetic pulses to stimulate mood-regulating areas of the brain — no medication, no anesthesia, no systemic side effects. TMS is currently available at our **Richmond, TX** location for patients with treatment-resistant depression. Would you like to learn more or schedule a consultation?";
  }
  if (lower.includes("ketamine")) {
    return "IV Ketamine Therapy offers rapid relief for treatment-resistant depression, severe PTSD, and other conditions that haven't responded to conventional treatments. Sessions are conducted in a calm, monitored clinical environment. This service is available at our **Richmond, TX** location. Would you like to schedule a consultation?";
  }
  if (lower.includes("adhd")) {
    return "Our ADHD Assessment is a comprehensive evaluation using validated tools and clinical interviews. Dr. Emuobe has particular expertise in adult ADHD presentations — especially in women, who are frequently under-diagnosed. Available via telehealth in all our licensed states. Shall I help you get started?";
  }
  if (lower.includes("medication") || lower.includes("prescription")) {
    return "Medication Management at Cura Mind & Wellness involves careful evaluation of your unique neurobiological profile, history, and goals. Dr. Emuobe creates individualized medication plans with ongoing monitoring. This is available via telehealth across MA, TX, CA, OR, and NY. Would you like to schedule an evaluation?";
  }
  if (lower.includes("weight")) {
    return "Our Medical Weight Loss program integrates psychiatric and metabolic perspectives, recognizing the deep connection between mental health and weight. Programs are individualized and compassionate — never judgmental. Available in MA, TX, CA, and OR. Interested in learning more?";
  }
  if (lower.includes("genetic") || lower.includes("pharmacogenomic") || lower.includes("gene")) {
    return "Pharmacogenomic Gene Testing analyzes your genetics to predict how you'll respond to specific psychiatric medications — eliminating the trial-and-error process. A simple cheek swab generates a report that guides precision medication selection. Available in all our licensed states. Would you like to explore this?";
  }
  if (lower.includes("therapy") || lower.includes("counseling") || lower.includes("psychotherapy")) {
    return "Our Psychotherapy & Counseling integrates evidence-based approaches including CBT, trauma-focused therapies, and mindfulness practices. Dr. Emuobe creates a genuine therapeutic relationship built on trust and understanding. Available via telehealth and in-person at all locations. Would you like to schedule a session?";
  }

  return `At Cura Mind & Wellness, we offer a comprehensive range of psychiatric services:\n\n• Medication Management\n• Psychiatric Diagnosis\n• Psychotherapy & Counseling\n• TMS Therapy *(TX only)*\n• Telepsychiatry\n• IV Ketamine Therapy\n• Medical Weight Loss\n• ADHD Assessment\n• Pharmacogenomic Gene Testing\n\nWhich service would you like to know more about?`;
}

function getLocationResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("texas") || lower.includes("tx") || lower.includes("richmond")) {
    return "Our Texas location:\n\n**20711 Bellaire Blvd, Suite B\nRichmond, TX**\n\n📞 (281) 939-9566\n\nThis location offers our full range of services including TMS Therapy and IV Ketamine. We also see telehealth patients from anywhere in Texas.";
  }
  if (lower.includes("massachusetts") || lower.includes("ma") || lower.includes("boston") || lower.includes("quincy")) {
    return "Our Massachusetts location:\n\n**859 Willard St, Suite 400\nQuincy, MA**\n\n📞 (617) 777-7982\n\nWe also serve patients throughout Massachusetts via telehealth.";
  }
  if (lower.includes("california") || lower.includes("ca") || lower.includes("riverside")) {
    return "Our California location:\n\n**3742 Tibbetts St, Suite 10\nRiverside, CA**\n\n📞 (951) 519-2175\n\nWe also serve patients throughout California via telehealth.";
  }
  if (lower.includes("oregon") || lower.includes("or") || lower.includes("portland")) {
    return "Our Oregon location:\n\n**555 SE MLK Jr. Blvd, Suite 105\nPortland, OR**\n\n📞 (503) 793-2229\n\nWe also serve patients throughout Oregon via telehealth.";
  }

  return "We have locations in four states:\n\n• **Quincy, MA** — (617) 777-7982\n• **Richmond, TX** — (281) 939-9566\n• **Riverside, CA** — (951) 519-2175\n• **Portland, OR** — (503) 793-2229\n\nWe also offer **telehealth** for patients in MA, TX, CA, OR, and NY. Which location are you nearest to?";
}

export interface BotResponse {
  message: string;
  showAppointmentCTA?: boolean;
  startLeadCapture?: boolean;
}

export function getBotResponse(
  message: string,
  leadInfo: LeadInfo,
  conversationHistory: ChatMessage[]
): BotResponse {
  const lower = message.toLowerCase().trim();
  const intent = detectIntent(message);

  // Handle crisis immediately
  if (intent === "crisis") {
    return {
      message: "I hear you, and I want you to know that support is available right now.\n\n**Please reach out immediately:**\n• **988 Suicide & Crisis Lifeline** — call or text 988\n• **Crisis Text Line** — text HOME to 741741\n• **Emergency** — call 911\n\nCura Mind & Wellness is here for ongoing psychiatric care. Please reach out to us once you're safe: (617) 777-7982.",
    };
  }

  // Handle lead capture flow
  if (leadInfo.step === "collecting_name") {
    const name = message.trim();
    if (name.length > 1 && name.length < 60) {
      return {
        message: `Thank you, ${name}. What's the best email address for us to reach you?`,
        startLeadCapture: false,
      };
    }
    return { message: "Could you share your full name so we can personalize your care?" };
  }

  if (leadInfo.step === "collecting_email") {
    if (message.includes("@") && message.includes(".")) {
      return {
        message: "Got it. And your phone number, in case we need to reach you quickly?",
      };
    }
    return { message: "Could you double-check that email address? It doesn't look quite right." };
  }

  if (leadInfo.step === "collecting_phone") {
    if (message.replace(/\D/g, "").length >= 10) {
      return {
        message: `Perfect. Which service are you most interested in?\n\n${SERVICES_LIST.map((s, i) => `${i + 1}. ${s}`).join("\n")}`,
      };
    }
    return { message: "Please enter a valid 10-digit phone number." };
  }

  if (leadInfo.step === "collecting_service") {
    return {
      message: `Great choice. Last question — which location is most convenient for you?\n\n${LOCATIONS_LIST.map((l, i) => `${i + 1}. ${l}`).join("\n")}`,
    };
  }

  if (leadInfo.step === "collecting_location") {
    return {
      message: `Wonderful — we have everything we need to reach out to you. A member of the Cura Mind & Wellness team will be in touch within one business day to schedule your appointment.\n\nIs there anything else I can help you with today?`,
      showAppointmentCTA: true,
    };
  }

  // Regular intent handling
  switch (intent) {
    case "greeting":
      return {
        message: "Hello, and welcome to Cura Mind & Wellness. I'm here to help you explore our services, answer questions, or get you started with an appointment.\n\nWhat brings you here today?",
      };

    case "appointment":
      return {
        message: "I'd love to help you get started with an appointment. You can reach us directly by phone, or I can collect a few details and have our team reach out to you.\n\nWould you like to share your information so we can contact you?",
        startLeadCapture: true,
      };

    case "insurance":
      return {
        message: "We accept most major insurance plans. The best way to confirm your specific coverage is to call the location nearest to you:\n\n• MA: (617) 777-7982\n• TX: (281) 939-9566\n• CA: (951) 519-2175\n• OR: (503) 793-2229\n\nOur team will verify your benefits before your first appointment.",
      };

    case "hours":
      return {
        message: "Our current hours are:\n\n• **Monday:** 9:00 AM – 8:00 PM\n• **Saturday:** 8:00 AM – 6:00 PM\n\nHours may vary by location and provider availability. We recommend calling your preferred location to confirm.",
      };

    case "location":
      return { message: getLocationResponse(message) };

    case "services":
      return { message: getServiceResponse(message) };

    case "telehealth":
      return {
        message: "Yes — we offer secure, HIPAA-compliant telehealth for patients in **Massachusetts, Texas, California, Oregon, and New York**.\n\nTelehealth allows you to access the full scope of our psychiatric services from the privacy and comfort of your home — with the same quality of care as an in-person visit.\n\nWould you like to schedule a telehealth appointment?",
        startLeadCapture: true,
      };

    case "provider":
      return {
        message: "Dr. Vivian Emuobe is a board-certified Psychiatric Mental Health Nurse Practitioner (PMHNP-BC) with a Doctor of Nursing Practice degree. She is licensed in TX, MA, CA, OR, and NY.\n\nDr. Emuobe formerly served as **Psychiatric Programs Director at HRI Hospital** in Brookline, MA. She specializes in trauma-informed care, women's mental health, crisis stabilization, and culturally responsive psychiatry.\n\nWould you like to schedule a consultation with Dr. Emuobe?",
        startLeadCapture: true,
      };

    default:
      return {
        message: "I'm here to help with questions about our services, locations, scheduling, insurance, and more. You can also ask me about Dr. Emuobe or our telehealth options.\n\nWhat would you like to know?",
      };
  }
}
