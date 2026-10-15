// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Divya K S',
  title: 'Senior Lecturer in Psychiatric Nursing',
  tagline:
    'Inspiring and mentoring nursing students through a blend of traditional and advanced teaching methods, hands-on clinical training and academic guidance.',
  region: 'Kerala, India',
  location: 'Arun Nivas, Mooryad Post, Kuthuparambu, Kerala',
  phone: '+91 90745 24294',
  phoneHref: 'tel:+919074524294',
  email: 'divsokavu1988@gmail.com',
  // Drop a photo at public/profile.jpg and set this to '/profile.jpg'
  photo: '/profile.jpg',
}

export const about = {
  summary: [
    'Senior Lecturer in Psychiatric Nursing with an MSc in Nursing, specializing in mental health nursing education and clinical practice.',
    'Proficient in teaching psychiatric nursing, supervising clinical practice, mentoring students, and facilitating evidence-based learning. Skilled in psychiatric assessment, mental health interventions, therapeutic communication, and nursing research. Committed to academic excellence, student development, and the promotion of quality mental health care.',
  ],
  stats: [
    { value: '10+', label: 'Years of experience' },
    { value: '8+', label: 'Years in nursing education' },
    { value: '3', label: 'Countries worked in' },
    { value: '5', label: 'Languages spoken' },
  ],
}

// Use end: 'Present' for a current role.
export const experience = [
  {
    role: 'Sr. Lecturer',
    org: 'Department of Psychiatric Nursing, College of Nursing, Thalassery',
    start: 'Aug 2025',
    end: 'Present',
    type: 'Teaching',
  },
  {
    role: 'Clinical Instructor',
    org: 'College of Nursing, Thalassery',
    start: 'Jul 2022',
    end: 'Nov 2022',
    type: 'Teaching',
  },
  {
    role: 'Staff Nurse – ICU',
    org: 'Al Kuwait Hospital, MOH',
    place: 'UAE',
    start: 'Jan 2021',
    end: 'Apr 2021',
    type: 'Clinical',
  },
  {
    role: 'Assistant Lecturer',
    org: 'P R College of Nursing',
    start: 'Jan 2017',
    end: 'Aug 2021',
    type: 'Teaching',
  },
  {
    role: 'Administrative Intern',
    org: 'Moulana Multispeciality Hospital',
    start: 'Jun 2015',
    end: 'Aug 2015',
    type: 'Administration',
  },
  {
    role: 'Intensive Care Nurse',
    org: 'Prince Muhammed Bin Nasser Hospital, MOH',
    place: 'Saudi Arabia',
    start: 'Feb 2013',
    end: 'Dec 2014',
    type: 'Clinical',
  },
  {
    role: 'Assistant Lecturer',
    org: 'P R College of Nursing',
    start: 'Mar 2011',
    end: 'Nov 2012',
    type: 'Teaching',
  },
  {
    role: 'Intensive Care Nurse',
    org: 'Aster MIMS',
    start: 'Mar 2010',
    end: 'Mar 2011',
    type: 'Clinical',
  },
]

export const education = [
  {
    degree: 'M.Sc. Nursing – Mental Health Nursing',
    school: 'Govt. College of Nursing, Kozhikode',
    board: 'KUHS',
    year: '2024',
    highlight: true,
  },
  {
    degree: 'PG Diploma in Hospital Administration & Management',
    school: 'Kerala University',
    year: '2016',
  },
  {
    degree: 'Advanced Nursing Practice',
    school: 'Aster MIMS',
    year: '2009 – 2010',
  },
  {
    degree: 'B.Sc. Nursing',
    school: 'P R College of Nursing',
    board: 'RGUHS',
    year: '2005 – 2009',
  },
  {
    degree: 'Higher Secondary (HSE)',
    school: "St. Mary's HSS, Pariyapuram",
    year: '2005',
  },
  {
    degree: 'SSLC',
    school: "St. Mary's HSS, Pariyapuram",
    year: '2003',
  },
  {
    degree: 'Certificate in MS Office',
    school: 'IGNOU',
    year: '2003',
  },
]

export const research = [
  {
    title:
      'Validation of the Nurses’ Observation Scale for Inpatient Evaluation (NOSIE-30) at tertiary care psychiatric units in Kerala',
    kind: 'Methodological study',
    setting: 'Psychiatric care',
    points: [
      'Examined the psychometric properties of the NOSIE-30 tool.',
      'Assessed its concurrent validity and reliability in tertiary care psychiatric units.',
    ],
  },
  {
    title: 'Effectiveness of basic life support care in a multispeciality hospital setting',
    kind: 'Descriptive study',
    setting: 'Hospital',
    points: [
      'Continuous assessment of BLS practice, with do’s and don’ts categorised and compared.',
      'Developed a checklist and gathered structured feedback.',
      'Findings were used to inform and retrain hospital staff.',
    ],
  },
  {
    title: 'Causes and risk factors of cancer in a community setting',
    kind: 'Descriptive study',
    setting: 'Community',
    points: [
      'Detailed history collected from 100 selected families.',
      'Causes and risk factors categorised from the majority data.',
    ],
  },
]

// Scrolling ribbon under the hero
export const specialties = [
  'Mental Health Nursing',
  'Clinical Instruction',
  'Critical Care',
  'Nursing Education',
  'Basic Life Support',
  'Nursing Research',
  'Patient-centred Care',
  'Academic Mentoring',
]

// `icon` must be a name from src/components/Icon.jsx
// `area` is 'teaching' (blue) or 'clinical' (teal)
export const coreSkills = [
  { name: 'Classroom teaching', note: 'Lectures & academic guidance for nursing students', icon: 'book', area: 'teaching' },
  { name: 'Clinical instruction', note: 'Hands-on bedside training on the wards', icon: 'stethoscope', area: 'clinical' },
  { name: 'Critical / intensive care', note: 'ICU nursing across India, KSA & UAE', icon: 'activity', area: 'clinical' },
  { name: 'Mental health nursing', note: 'M.Sc. specialisation & psychiatric research', icon: 'heart', area: 'clinical' },
  { name: 'Patient-centred care', note: 'Compassionate, holistic nursing practice', icon: 'users', area: 'clinical' },
  { name: 'Programme coordination', note: 'Organising academic & clinical programmes', icon: 'clipboard', area: 'teaching' },
]

export const personalSkills = [
  'Communication',
  'Leadership',
  'Decision making',
  'Problem solving',
  'Motivational speaking',
  'Basic computer skills',
]

// Levels are a best guess — adjust `level` and `value` (0–100) to match reality.
export const languages = [
  { name: 'Malayalam', level: 'Native', value: 100 },
  { name: 'English', level: 'Fluent', value: 90 },
  { name: 'Kannada', level: 'Conversational', value: 65 },
  { name: 'Hindi', level: 'Conversational', value: 60 },
  { name: 'Arabic', level: 'Basic', value: 35 },
]

export const interests = ['Music', 'Reading', 'The art of solitude']
