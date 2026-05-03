export const PRACTICE_NAME = "Cura Mind & Wellness";
export const TAGLINE = "Healing begins with understanding. Transformation happens when you are truly seen, supported, and believed in.";

export const PROVIDER = {
  name: "Dr. Vivian Emuobe",
  credentials: "DNP, APRN, PMHNP-BC",
  title: "Psychiatric Mental Health Nurse Practitioner",
  education: [
    {
      degree: "Doctor of Nursing Practice (DNP)",
      school: "Advanced Graduate Studies",
      year: "Doctoral Level",
    },
    {
      degree: "Master's in Psychiatry & Mental Health",
      school: "Walden University",
      year: "Graduate",
    },
    {
      degree: "Bachelor of Science in Nursing (BSN)",
      school: "UMass Boston",
      year: "Undergraduate",
    },
  ],
  licenses: ["Texas", "Massachusetts", "California", "Oregon", "New York"],
  formerRole: "Psychiatric Programs Director, HRI Hospital — Brookline, MA",
  specialties: [
    "Trauma-Informed Care",
    "Women's Mental Health",
    "Crisis Stabilization",
    "Culturally Responsive Care",
    "Medication Management",
    "Evidence-Based Psychotherapy",
  ],
  bio: `Dr. Vivian Emuobe is a board-certified Psychiatric Mental Health Nurse Practitioner with advanced doctoral training and extensive clinical experience across multiple states. Her approach is rooted in the belief that healing is possible when patients feel genuinely seen, heard, and understood.

With a distinguished background as former Psychiatric Programs Director at HRI Hospital in Brookline, Massachusetts, Dr. Emuobe brings both institutional leadership and deeply personal clinical care to every patient relationship. She is licensed in Texas, Massachusetts, California, Oregon, and New York — enabling her to serve patients across the country through telehealth.

Dr. Emuobe specializes in trauma-informed psychiatric care, women's mental health across the lifespan, and culturally responsive treatment that honors the full complexity of each person's identity and experience.`,
};

export const SERVICES = [
  {
    id: "medication-management",
    name: "Medication Management",
    icon: "Pill",
    shortDescription: "Precision psychiatric medication evaluation, initiation, and ongoing optimization.",
    description: "Comprehensive psychiatric medication evaluation and management. Dr. Emuobe carefully assesses each patient's unique neurobiological profile, medical history, and treatment goals to create individualized medication plans. Ongoing monitoring ensures optimal therapeutic response with minimal side effects.",
    whoFor: "Adults experiencing depression, anxiety, bipolar disorder, ADHD, PTSD, or other psychiatric conditions who may benefit from medication support.",
    whatToExpect: "Initial comprehensive evaluation, tailored medication plan, regular follow-up sessions, and ongoing adjustments as needed.",
    states: ["MA", "TX", "CA", "OR", "NY"],
    telehealth: true,
  },
  {
    id: "diagnosis",
    name: "Psychiatric Diagnosis",
    icon: "ClipboardList",
    shortDescription: "Thorough, compassionate psychiatric evaluation and evidence-based diagnosis.",
    description: "A thorough diagnostic evaluation is the foundation of effective care. Dr. Emuobe conducts comprehensive psychiatric assessments that explore symptoms, history, cultural context, and life circumstances to arrive at accurate diagnoses that guide truly personalized treatment.",
    whoFor: "Individuals seeking clarity about their mental health, those who have received conflicting diagnoses, or those who have struggled without finding answers.",
    whatToExpect: "In-depth intake interview, symptom assessment, review of history, and a clear diagnostic formulation with treatment recommendations.",
    states: ["MA", "TX", "CA", "OR", "NY"],
    telehealth: true,
  },
  {
    id: "psychotherapy",
    name: "Psychotherapy & Counseling",
    icon: "Heart",
    shortDescription: "Evidence-based therapy integrating mind, body, and lived experience.",
    description: "Integrative psychotherapy combining evidence-based modalities including CBT, trauma-focused therapies, and mindfulness-based approaches. Sessions provide a sanctuary for processing, healing, and growth — guided by clinical expertise and genuine human connection.",
    whoFor: "Adults navigating trauma, anxiety, depression, relationship difficulties, grief, life transitions, or seeking deeper self-understanding.",
    whatToExpect: "Collaborative exploration of your concerns, evidence-based interventions, and a consistent therapeutic relationship built on trust.",
    states: ["MA", "TX", "CA", "OR", "NY"],
    telehealth: true,
  },
  {
    id: "tms",
    name: "TMS Therapy",
    icon: "Zap",
    shortDescription: "FDA-cleared Transcranial Magnetic Stimulation — a breakthrough for treatment-resistant depression.",
    description: "Transcranial Magnetic Stimulation (TMS) is an FDA-cleared, non-invasive treatment that uses magnetic pulses to stimulate neural activity in regions of the brain involved in mood regulation. TMS offers new hope for patients who have not responded to traditional antidepressant therapies.",
    whoFor: "Adults with treatment-resistant depression, those who cannot tolerate medication side effects, or those seeking non-pharmacological options.",
    whatToExpect: "Outpatient treatment sessions (typically 20–40 minutes), no anesthesia required, no systemic side effects.",
    states: ["TX"],
    telehealth: false,
    note: "Available at our Richmond, TX location only.",
  },
  {
    id: "telepsychiatry",
    name: "Telepsychiatry",
    icon: "Video",
    shortDescription: "Premium psychiatric care from the comfort and privacy of your home.",
    description: "Secure, HIPAA-compliant video psychiatry that brings the full scope of Cura Mind & Wellness services to wherever you are. Telepsychiatry removes barriers to access without sacrificing the quality, privacy, or therapeutic depth of in-person care.",
    whoFor: "Patients in all licensed states, those with mobility limitations, busy professionals, or anyone who values privacy and convenience.",
    whatToExpect: "Seamless video consultation platform, same comprehensive care as in-person, flexible scheduling.",
    states: ["MA", "TX", "CA", "OR", "NY"],
    telehealth: true,
  },
  {
    id: "iv-ketamine",
    name: "IV Ketamine Therapy",
    icon: "Sparkles",
    shortDescription: "Rapid-acting infusion therapy for severe depression, PTSD, and treatment-resistant conditions.",
    description: "IV Ketamine infusion therapy offers rapid, dramatic relief for patients with severe depression, PTSD, suicidal ideation, or treatment-resistant conditions. Administered in a calm, monitored clinical environment, ketamine therapy represents one of psychiatry's most significant advances in decades.",
    whoFor: "Adults with treatment-resistant depression, severe PTSD, bipolar depression, or those in psychiatric crisis requiring rapid intervention.",
    whatToExpect: "Medical screening, IV infusion in a serene clinical setting (approximately 40 minutes), post-infusion monitoring, and integration support.",
    states: ["TX"],
    telehealth: false,
  },
  {
    id: "weight-loss",
    name: "Medical Weight Loss",
    icon: "Activity",
    shortDescription: "Compassionate, medically-supervised weight management that addresses root causes.",
    description: "Medical weight loss at Cura Mind & Wellness integrates psychiatric and metabolic perspectives, recognizing the deep connections between mental health, hormonal factors, and weight. Programs are individualized, evidence-based, and free from judgment.",
    whoFor: "Adults seeking medically supervised weight management, particularly those whose weight challenges intersect with mental health conditions.",
    whatToExpect: "Comprehensive metabolic and psychiatric assessment, personalized treatment plan, ongoing monitoring and support.",
    states: ["MA", "TX", "CA", "OR"],
    telehealth: true,
  },
  {
    id: "adhd",
    name: "ADHD Assessment",
    icon: "Brain",
    shortDescription: "Comprehensive adult ADHD evaluation and evidence-based treatment planning.",
    description: "Thorough ADHD evaluation using validated assessment tools, clinical interview, and longitudinal history review. Dr. Emuobe understands ADHD's complex presentations in adults — particularly in women who are frequently under-diagnosed — and creates treatment plans that address the full picture.",
    whoFor: "Adults who suspect they may have ADHD, those with previous diagnoses seeking re-evaluation, or those who have struggled with focus, organization, and executive function.",
    whatToExpect: "Multi-session comprehensive evaluation, feedback session with clear findings, and individualized treatment recommendations.",
    states: ["MA", "TX", "CA", "OR", "NY"],
    telehealth: true,
  },
  {
    id: "pharmacogenomics",
    name: "Pharmacogenomic Gene Testing",
    icon: "Dna",
    shortDescription: "Precision psychiatry — match medications to your unique genetic profile.",
    description: "Pharmacogenomic testing analyzes your genetic makeup to predict how you will metabolize and respond to specific psychiatric medications. This precision medicine approach eliminates the traditional trial-and-error process, helping identify the right medication at the right dose from the start.",
    whoFor: "Patients beginning psychiatric medication treatment, those who have had poor responses or side effects, or those seeking the most personalized medication approach.",
    whatToExpect: "Simple cheek swab, genetic analysis, and a detailed report that guides medication selection and dosing.",
    states: ["MA", "TX", "CA", "OR", "NY"],
    telehealth: true,
  },
];

export const LOCATIONS = [
  {
    id: "ma",
    state: "Massachusetts",
    abbr: "MA",
    address: "859 Willard St, Suite 400",
    city: "Quincy, MA",
    phone: "(617) 777-7982",
    services: ["Medication Management", "Diagnosis", "Psychotherapy", "Telepsychiatry", "ADHD Assessment", "Pharmacogenomics", "Medical Weight Loss"],
  },
  {
    id: "tx",
    state: "Texas",
    abbr: "TX",
    address: "20711 Bellaire Blvd, Suite B",
    city: "Richmond, TX",
    phone: "(281) 939-9566",
    services: ["Medication Management", "Diagnosis", "Psychotherapy", "TMS Therapy", "Telepsychiatry", "IV Ketamine", "ADHD Assessment", "Pharmacogenomics", "Medical Weight Loss"],
    note: "TMS & IV Ketamine available here",
  },
  {
    id: "ca",
    state: "California",
    abbr: "CA",
    address: "3742 Tibbetts St, Suite 10",
    city: "Riverside, CA",
    phone: "(951) 519-2175",
    services: ["Medication Management", "Diagnosis", "Psychotherapy", "Telepsychiatry", "ADHD Assessment", "Pharmacogenomics", "Medical Weight Loss"],
  },
  {
    id: "or",
    state: "Oregon",
    abbr: "OR",
    address: "555 SE MLK Jr. Blvd, Suite 105",
    city: "Portland, OR",
    phone: "(503) 793-2229",
    services: ["Medication Management", "Diagnosis", "Psychotherapy", "Telepsychiatry", "ADHD Assessment", "Pharmacogenomics", "Medical Weight Loss"],
  },
];

export const HOURS = {
  monday: "9:00 AM – 8:00 PM",
  saturday: "8:00 AM – 6:00 PM",
  other: "By appointment",
};

export const PHILOSOPHY = [
  {
    title: "Trauma-Informed",
    description: "Every interaction acknowledges the profound impact trauma has on the mind, body, and nervous system. Safety and trust are foundational to our care.",
  },
  {
    title: "Culturally Responsive",
    description: "Mental health care cannot be separated from cultural identity. We honor the full spectrum of human experience in our clinical approach.",
  },
  {
    title: "Whole-Person Care",
    description: "Psychiatric health exists within the context of physical health, relationships, environment, and life history. We treat the whole person.",
  },
  {
    title: "Evidence-Based",
    description: "Our clinical decisions are grounded in the best available evidence, updated continuously as psychiatry evolves.",
  },
];
