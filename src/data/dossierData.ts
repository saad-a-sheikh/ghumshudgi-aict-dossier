export interface EvidenceDocument {
  id: string;
  exhibitCode: string;
  stampText: string;
  title: string;
  subtitle: string;
  dateLogged: string;
  location: string;
  classification: string;
  summary: string;
  forensicNotes: string[];
  metadata: Record<string, string>;
}

export interface CharacterProfile {
  id: string;
  code: string;
  name: string;
  urduName: string;
  role: string;
  origin: string;
  status: string;
  statusTone: 'danger' | 'warning' | 'victim' | 'neutral';
  summary: string;
  psychologicalProfile: string;
  keyEvidence: string;
  attributes: {
    label: string;
    value: string;
  }[];
}

export interface StoryboardScene {
  sceneNumber: string;
  title: string;
  act: 'ACT I' | 'ACT II' | 'ACT III' | 'ACT IV';
  location: string;
  timecode: string;
  tensionLevel: number;
  logline: string;
  visualDirection: string;
  soundCue: string;
  forensicFlag: string;
}

export interface PipelineModule {
  id: string;
  stepCode: string;
  title: string;
  tools: string[];
  category: string;
  description: string;
  engineeringSpecs: string[];
  metricLabel: string;
  metricValue: string;
}

export interface TeamMember {
  name: string;
  rollNo: string;
  role: string;
  isLead?: boolean;
  specialization: string;
  clearance: string;
}

export const EVIDENCE_DOCUMENTS: EvidenceDocument[] = [
  {
    id: 'cnic-lease',
    exhibitCode: 'EXHIBIT A-01 // NADRA & TENANCY RECORD',
    stampText: 'FORGED LEASE PROXY',
    title: "Saman's Confiscated CNIC & Fraudulent Tenancy Deed",
    subtitle: 'National Identity Card Confiscated Under "Employment Verification"',
    dateLogged: 'DAY 02 // 14:20 PKT',
    location: 'Clifton / Defence Sector Residence, Karachi',
    classification: 'CRITICAL ENTRAPMENT ARTIFACT',
    summary:
      "Upon Saman's arrival from Nawabshah, Farah Begum confiscated her original CNIC claiming standard household staff vetting. Behind closed doors, Farah used the identity card to register the property's residential lease directly in Saman's name—pre-manufacturing legal liability for the kidnapping safehouse.",
    forensicNotes: [
      'Original CNIC Bearing District Code: Shaheed Benazirabad (Nawabshah)',
      'Biometric verification bypassed via forged thumbprint affidavit & broker bribe',
      'Property lease lists Saman as Primary Tenant of the locked nursery premises',
    ],
    metadata: {
      'HOLDER NAME': 'SAMAN D/O ALLAH BUX',
      'ORIGIN DISTRICT': 'NAWABSHAH (SINDH)',
      'MISUSE VECTOR': 'SAFEHOUSE TENANCY REGISTRATION',
      'CUSTODY STATUS': 'SEIZED BY FARAH BEGUM',
    },
  },
  {
    id: 'newspaper-clipping',
    exhibitCode: 'EXHIBIT B-04 // PRESS ARCHIVE CLIPPING',
    stampText: 'IDENTITY MATCH: 99.4%',
    title: 'Marked Newspaper Clipping: Missing Toddler "Ali Khan"',
    subtitle: 'Discovered Hidden Inside First-Aid Drawer During Nursery Fall',
    dateLogged: 'SCENE 17 // 22:15 PKT',
    location: 'Master Bedroom Medical Cabinet, Karachi',
    classification: 'SUPPRESSED KIDNAPPING PROOF',
    summary:
      'While searching for antiseptic to treat a minor fall suffered by toddler "Yusuf", Saman uncovers a folded, yellowing Urdu/English crime desk clipping encircled in red ink. The photograph and birthmark description prove beyond doubt that "Yusuf" is actually Ali Khan—abducted months prior.',
    forensicNotes: [
      'Hand-drawn crimson ink ring around child photograph matching "Yusuf"',
      'Original FIR filed for abducted toddler Ali Khan — unsolved for 14 months',
      'Explains double biometric deadbolts and strict ban on courtyard/window access',
    ],
    metadata: {
      'ALIAS IN HOUSE': 'YUSUF',
      'TRUE IDENTITY': 'ALI KHAN (MISSING CHILD)',
      'DISCOVERY TRIGGER': 'FIRST-AID CABINET SEARCH',
      'EVIDENCE FATE': 'DESTROYED BY CORRUPT OFFICERS',
    },
  },
  {
    id: 'precinct-log',
    exhibitCode: 'EXHIBIT C-09 // PRECINCT DISPATCH LOG',
    stampText: 'TAMPERED // PAYOFF',
    title: 'Corrupt Precinct Dispatch & Fabricated Charge Sheet',
    subtitle: 'Cash Bribe Transaction & False Implication with Accomplice "Tariq"',
    dateLogged: 'SCENE 20–21 // 03:40 PKT',
    location: 'Karachi District South Police Lockup',
    classification: 'INSTITUTIONAL COVER-UP',
    summary:
      'When Saman turns back from the unlocked front door to rescue the child, Farah corners her and summons pre-briefed police officers. In exchange for a thick envelope of cash, officers confiscate the newspaper clipping, erase Farah from the record, and book Saman alongside a fabricated external accomplice named "Tariq".',
    forensicNotes: [
      'Unrecorded cash handover executed in main drawing room prior to cuffing',
      'Saman charged as prime abductor via the house lease registered on her CNIC',
      'Televised press conference staged at dawn; Farah seated applauding in back row',
    ],
    metadata: {
      'ACCUSED #1': 'SAMAN (CARETAKER / FRAMED)',
      'ACCUSED #2': 'TARIQ (ALLEGED ACCOMPLICE)',
      'TRUE PERPETRATOR': 'FARAH BEGUM (CLEARED / IMMUNE)',
      'PRESS STATUS': 'CASE CLOSED — MEDIA BRIEFING AIRED',
    },
  },
];

export const CHARACTER_PROFILES: CharacterProfile[] = [
  {
    id: 'saman',
    code: 'SUBJ-01 // TARGET & CARETAKER',
    name: 'Saman',
    urduName: 'سمن',
    role: 'Protagonist • Live-In Caretaker',
    origin: 'Nawabshah (Interior Sindh) → Karachi',
    status: 'WRONGFULLY IMPRISONED // FRAMED',
    statusTone: 'danger',
    summary:
      'An innocent, devoted village daughter from Nawabshah who journeys alone to Karachi to earn money for her ailing father’s life-saving medication. Despite discovering the deadly truth and reaching an unlocked exit, her conscience forces her to turn back for the child—sealing her tragic fate.',
    psychologicalProfile:
      'Driven by filial sacrifice and maternal empathy. Possesses moral courage that ultimately collides with an unforgiving urban hierarchy of wealth and bought law enforcement.',
    keyEvidence: 'Confiscated CNIC used to bind her legally to the crime scene.',
    attributes: [
      { label: 'MOTIVATION', value: "Baba's Cardiac & Renal Medication" },
      { label: 'PERSONAL ARTIFACT', value: 'Basic Nokia Keypad Phone' },
      { label: 'FATAL CHOICE', value: 'Turned back at Scene 18 to save Yusuf' },
      { label: 'FINAL LOCATION', value: 'Karachi Police Lockup (Solitary Cell)' },
    ],
  },
  {
    id: 'farah-begum',
    code: 'SUBJ-02 // PRIMARY ANTAGONIST',
    name: 'Farah Begum',
    urduName: 'فرح بیگم',
    role: 'Primary Antagonist • The Architect',
    origin: 'Elite Enclave, Karachi',
    status: 'AT LARGE // INSTITUTIONALLY SHIELDED',
    statusTone: 'warning',
    summary:
      'A wealthy, calculating woman who weaponizes class privilege, biometric security systems, and corrupt police patronage. Before Saman even steps into the nursery, Farah engineers a foolproof paper trail so the village girl will take the fall if the kidnapping is ever exposed.',
    psychologicalProfile:
      'Cold, composed, and deeply manipulative. Masks obsessive possession beneath aristocratic poise, applauding from the back row of the police press conference before driving down the open highway.',
    keyEvidence: 'Double biometric deadbolts & cash payoff envelope handed to precinct officers.',
    attributes: [
      { label: 'SECURITY APPARATUS', value: 'Biometric Deadbolts & Exterior Latches' },
      { label: 'LEGAL SHIELD', value: 'Proxy Lease under Saman’s CNIC' },
      { label: 'POLITICAL LEVERAGE', value: 'Direct Precinct Bribery & Media Staging' },
      { label: 'FINAL LOCATION', value: 'Karachi Coastal Highway — Unrestrained Freedom' },
    ],
  },
  {
    id: 'yusuf-ali-khan',
    code: 'SUBJ-03 // THE MISSING CHILD',
    name: 'Yusuf / Ali Khan',
    urduName: 'یوسف / علی خان',
    role: 'The Victim • Abducted Toddler',
    origin: 'Abducted in Karachi • Held in Biometric Nursery',
    status: 'IDENTITY ERASED // CAPTIVE',
    statusTone: 'victim',
    summary:
      'A gentle toddler raised inside a gilded cage under the fabricated identity "Yusuf". He forms a genuine emotional bond with Saman, unaware that the woman he calls mother abducted him and that the newspaper clipping in the medicine cabinet bears his real name: Ali Khan.',
    psychologicalProfile:
      'Conditioned to indoor isolation behind keypad-locked nursery doors. His minor fall becomes the narrative catalyst that exposes the hidden crime.',
    keyEvidence: 'Red-circled newspaper clipping matching his birthmark and age progression.',
    attributes: [
      { label: 'ASSIGNED ALIAS', value: 'Yusuf' },
      { label: 'BIRTH IDENTITY', value: 'Ali Khan (Reported Missing)' },
      { label: 'CONTAINMENT ZONE', value: 'Biometric-Locked Upper Nursery' },
      { label: 'NARRATIVE CATALYST', value: 'Minor fall requiring first-aid cabinet access' },
    ],
  },
  {
    id: 'baba-and-system',
    code: 'SUBJ-04 // CATALYSTS & COMPLICIT STATE',
    name: 'Baba, Tariq & Corrupt Precinct',
    urduName: 'بابا اور کرپٹ نظام',
    role: 'Supporting Catalysts • Tragedy & Institutional Betrayal',
    origin: 'Nawabshah Homestead & Karachi Precinct',
    status: 'SYSTEMIC COLLUSION // UNRESOLVED',
    statusTone: 'neutral',
    summary:
      'In Nawabshah, Saman’s frail father (Baba) waits for the medicine money that forced her migration. In Karachi, corrupt officers pocket Farah’s cash bribe, destroy the clipping, and manufacture a syndicate narrative linking Saman to an alleged accomplice named "Tariq" for television cameras.',
    psychologicalProfile:
      'Represents the dual vise crushing the powerless: rural medical poverty at one end, and predatory institutional corruption at the other.',
    keyEvidence: 'Televised press conference praising the "syndicate bust" while Baba awaits medicine.',
    attributes: [
      { label: 'CATALYST (NAWABSHAH)', value: 'Baba’s Critical Prescription Dependency' },
      { label: 'FABRICATED ACCOMPLICE', value: 'Tariq (Co-Accused in Police Press Briefing)' },
      { label: 'LAW ENFORCEMENT ROLE', value: 'Evidence Suppression & Cash Payoff' },
      { label: 'THEMATIC CORE', value: 'Impunity of Wealth vs. Vulnerability of the Poor' },
    ],
  },
];

export const STORYBOARD_SCENES: StoryboardScene[] = [
  {
    sceneNumber: 'SCENE 03',
    title: 'A Daughter’s Farewell',
    act: 'ACT I',
    location: 'Nawabshah Village Courtyard, Interior Sindh',
    timecode: '00:42 — 01:18',
    tensionLevel: 45,
    logline:
      'Saman packs a worn cloth bag in golden-hour dust, hiding the gravity of their financial ruin from her bedridden father Baba while promising to send money for his life-saving medication.',
    visualDirection:
      'Warm desaturated amber tones contrasting with medicine blisters on a charpoy; tight close-up on Saman’s trembling reassurance.',
    soundCue: 'Distant village wind, wheezing breath, muted strings.',
    forensicFlag: 'CATALYST: ECONOMIC COERCION',
  },
  {
    sceneNumber: 'SCENE 04',
    title: 'Arrival at Sohrab Goth',
    act: 'ACT I',
    location: 'Sohrab Goth Bus Terminal, Karachi',
    timecode: '01:19 — 01:54',
    tensionLevel: 62,
    logline:
      'Stepping off the intercity coach into sensory overload, Saman clutches her basic Nokia keypad phone amidst sodium-vapor smog, honking buses, and towering urban hostility.',
    visualDirection:
      'Handheld anamorphic framing, harsh neon and sodium streetlights reflecting off exhaust haze; Saman isolated in center frame.',
    soundCue: 'Chaotic Karachi traffic horns, diesel rumble, Nokia keypad beep.',
    forensicFlag: 'TRANSIT LOG: ENTRY INTO KARACHI',
  },
  {
    sceneNumber: 'SCENE 07',
    title: 'The Biometric Nursery',
    act: 'ACT II',
    location: 'Farah Begum’s Residence — Upper Corridor',
    timecode: '02:35 — 03:20',
    tensionLevel: 76,
    logline:
      'After surrendering her CNIC to Farah for "verification", Saman bonds with toddler Yusuf—only to notice double biometric deadbolts, exterior steel latches, and strict orders never to open the curtains.',
    visualDirection:
      'Cold fluorescent corridor geometry, macro shot of glowing red biometric scanner and metallic deadbolt sliding shut from the outside.',
    soundCue: 'Electronic lock chime, hollow footsteps, low sub-bass pulse.',
    forensicFlag: 'RED FLAG: EXTERIOR BIOMETRIC CONTAINMENT',
  },
  {
    sceneNumber: 'SCENE 17',
    title: 'The Marked Clipping',
    act: 'ACT III',
    location: 'Master Medical Drawer / Nursery Bathroom',
    timecode: '05:10 — 05:58',
    tensionLevel: 94,
    logline:
      'Rushing to treat Yusuf’s minor scrape, Saman pulls open a locked bottom drawer for bandages and uncovers old newspaper clippings with a crimson circle around missing toddler "Ali Khan".',
    visualDirection:
      'Extreme close-up alternating between the yellowing newsprint photograph of Ali Khan and Yusuf’s matching features under flickering tungsten light.',
    soundCue: 'Sharp violin stinger, heartbeat percussion, rustling paper.',
    forensicFlag: 'EVIDENCE UNCOVERED: ALI KHAN = YUSUF',
  },
  {
    sceneNumber: 'SCENE 18',
    title: 'The Moral Choice',
    act: 'ACT III',
    location: 'Main Foyer Threshold & Stairwell',
    timecode: '05:59 — 06:45',
    tensionLevel: 98,
    logline:
      'Clutching the clipping, Saman reaches the unlatched front gate with a clear chance to escape into the street—but hears Yusuf’s cry upstairs and turns back into the lion’s den to save him.',
    visualDirection:
      'Split lighting at the threshold: cold street freedom outside vs. blood-red shadow stretching down the interior staircase.',
    soundCue: 'Door latch click, silence drop, rising suspense drone.',
    forensicFlag: 'POINT OF NO RETURN: SACRIFICIAL RE-ENTRY',
  },
  {
    sceneNumber: 'SCENE 21',
    title: 'The Press Conference',
    act: 'ACT IV',
    location: 'Karachi Police Headquarters Media Hall',
    timecode: '07:30 — 08:12',
    tensionLevel: 88,
    logline:
      'Having pocketed Farah’s cash bribe and destroyed the clipping, police parade a handcuffed Saman alongside alleged accomplice "Tariq" before flashing cameras—while Farah sits clapping in the back row.',
    visualDirection:
      'Strobe camera flashes, broadcast lower-thirds banner in Urdu, slow rack-focus from Saman’s bowed head to Farah’s composed applause.',
    soundCue: 'Camera shutters, microphone feedback, stern official Urdu briefing.',
    forensicFlag: 'COVER-UP COMPLETE: STATE-SANCTIONED FRAME',
  },
  {
    sceneNumber: 'SCENE 22–23',
    title: 'Solitary Cell vs. Highway Escape',
    act: 'ACT IV',
    location: 'Karachi Lockup // Coastal Highway',
    timecode: '08:13 — 09:05',
    tensionLevel: 100,
    logline:
      'Cross-cut finale: Farah drives effortlessly down a wide Karachi highway into total freedom, while Saman sobs on the concrete floor of a freezing lockup cell, whispering prayers for her father’s missed medication.',
    visualDirection:
      'Parallel montage contrasting smooth gimbal highway motion inside a luxury sedan with static iron bars casting prison shadows across Saman’s face.',
    soundCue: 'Muffled luxury cabin silence vs. echoing cell sobs & distant azan/sirens.',
    forensicFlag: 'CASE CLOSED // JUSTICE COMPROMISED',
  },
];

export const TECH_PIPELINE: PipelineModule[] = [
  {
    id: 'video-diffusion',
    stepCode: 'STAGE 01 // VISUAL MOTION SYNTHESIS',
    title: 'Video Generation & Diffusion',
    tools: ['Google Flow', 'CapCut AI'],
    category: 'Cinematic Latent Diffusion & Temporal Editing',
    description:
      'Engineered 23 atmospheric noir scenes using Google Flow for high-dynamic-range cinematic motion generation and CapCut AI for frame interpolation, color grading, and pace-locked thriller cuts.',
    engineeringSpecs: [
      '23 sequential narrative shots rendered in 16:9 widescreen aspect ratio',
      'Karachi Noir LUT grading: deep charcoal shadows (#0A0A0C) with crimson halation',
      'Temporal motion control for handheld bus terminal chaos vs. static cell isolation',
    ],
    metricLabel: 'TOTAL RENDERED SCENES',
    metricValue: '23 SCENES // 1080P HD',
  },
  {
    id: 'prompt-architecture',
    stepCode: 'STAGE 02 // NARRATIVE & SHOT COMPILER',
    title: 'Prompting & Script Architecture',
    tools: ['Google Gemini'],
    category: 'Multi-Scene Continuity & Cinematography Scripting',
    description:
      'Leveraged Gemini to architect the screenplay, Urdu dramatic dialogue, focal-length specifications, lighting schemas, and structured JSON/text prompt chains maintaining psychological tension across all four acts.',
    engineeringSpecs: [
      'Structured prompt grammar defining lens focal length (35mm anamorphic / 85mm portrait)',
      'Character token anchoring for Saman, Farah Begum, and Yusuf across lighting shifts',
      'Dramatic pacing matrix mapping scene tension from Nawabshah departure to Karachi lockup',
    ],
    metricLabel: 'PROMPT ITERATIONS',
    metricValue: '140+ STRUCTURED PROMPTS',
  },
  {
    id: 'spatial-alignment',
    stepCode: 'STAGE 03 // GEOMETRIC & IDENTITY LOCK',
    title: 'Spatial Alignment & Continuity',
    tools: ['Reference-Based Camera Reconstruction', 'Keyframe Conditioning'],
    category: 'Indoor Architectural & Character Consistency',
    description:
      'Implemented reference-based camera perspective reconstruction to preserve spatial geometry across Farah’s mansion corridors, the biometric nursery door, and consistent wardrobe/facial identity across reverse angles.',
    engineeringSpecs: [
      'Anchor keyframe conditioning for recurring architectural sets (nursery & foyer)',
      'Consistent prop tracking: Nokia keypad phone, confiscated CNIC, and red-circled clipping',
      '180-degree shutter & eyeline match validation during the Scene 18–20 confrontation',
    ],
    metricLabel: 'SPATIAL COHERENCE',
    metricValue: 'MULTI-ANGLE LOCKED',
  },
  {
    id: 'audio-engineering',
    stepCode: 'STAGE 04 // ACOUSTIC & VOCAL DESIGN',
    title: 'Audio & Vocal Engineering',
    tools: ['Google AI Studio', 'Adobe Audio Suite', 'CapCut AI'],
    category: 'Multilingual Voice Synthesis & Noir Soundscape',
    description:
      'Synthesized emotionally nuanced Urdu voice-over performances via Google AI Studio, mastered dialogue clarity in Adobe, and layered suspense sub-bass drones, biometric lock chimes, and Karachi street ambiences in CapCut AI.',
    engineeringSpecs: [
      'Expressive Urdu dialogue & inner monologue generation with regional emotional inflection',
      'Spectral noise cleanup, room-tone convolution (lockup echo vs. sedan cabin)',
      'Dynamic low-frequency thriller drone synchronized to heartbeat tempo in Act III',
    ],
    metricLabel: 'AUDIO CHANNELS',
    metricValue: 'VO + FOLEY + NOIR SCORE',
  },
];

export const TEAM_ROSTER: TeamMember[] = [
  {
    name: 'Aiman Alkasiri',
    rollNo: '26F-CS-158',
    role: 'Team Lead • Narrative & AI Direction',
    isLead: true,
    specialization: 'Executive Direction, Gemini Prompt Architecture & Final Assembly',
    clearance: 'LEVEL-05 // LEAD INVESTIGATOR',
  },
  {
    name: 'Maryam Sheikh',
    rollNo: '26F-CS-119',
    role: 'Visual Continuity & Diffusion Specialist',
    specialization: 'Scene Generation (Google Flow), Character Consistency & Storyboarding',
    clearance: 'LEVEL-04 // VISUAL FORENSICS',
  },
  {
    name: 'Soha Majid',
    rollNo: '26F-CS-126',
    role: 'Screenplay & Art Direction',
    specialization: 'Script Development, Dossier Curation & Spatial Scene Alignment',
    clearance: 'LEVEL-04 // NARRATIVE ANALYST',
  },
  {
    name: 'Umer Kamran',
    rollNo: '26F-CS-150',
    role: 'AI Video Pipeline & Post-Production',
    specialization: 'Motion Synthesis, CapCut AI Pacing & Cinematic Color Grading',
    clearance: 'LEVEL-04 // MOTION ENGINEER',
  },
  {
    name: 'Muhammad Abu Bakar',
    rollNo: '26F-CS-151',
    role: 'Audio, Vocal Engineering & Sound Design',
    specialization: 'Google AI Studio Voice Synthesis, Adobe Mastering & Noir Scoring',
    clearance: 'LEVEL-04 // ACOUSTIC ENGINEER',
  },
  {
    name: 'Saad Ahmed',
    rollNo: '26F-CS-147',
    role: 'Systems Architecture & Technical Showcase',
    specialization: 'Interactive Dossier Portal, Prompt Pipeline & Technical Documentation',
    clearance: 'LEVEL-04 // SYSTEMS ARCHITECT',
  },
];
