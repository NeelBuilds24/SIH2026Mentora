import { useMemo, useState } from 'react'

const stats = [
  { label: 'Skill coverage', value: '84.2%', delta: '+12.8%', tone: 'emerald' },
  { label: 'Employability index', value: '71.6', delta: '+4.1%', tone: 'sky' },
  { label: 'Training completion', value: '67.9%', delta: '+9.4%', tone: 'teal' },
  { label: 'Priority gaps', value: '23', delta: '-8%', tone: 'amber' },
]

const demand = [
  { skill: 'Digital skills', score: 86, color: 'bg-sky-500' },
  { skill: 'Climate tech', score: 74, color: 'bg-emerald-500' },
  { skill: 'Healthcare', score: 68, color: 'bg-cyan-500' },
  { skill: 'Logistics', score: 63, color: 'bg-teal-500' },
  { skill: 'Green jobs', score: 58, color: 'bg-blue-500' },
]

const sectors = [
  { name: 'Public services', readiness: 86, change: '+11%' },
  { name: 'Agri-tech', readiness: 72, change: '+7%' },
  { name: 'Manufacturing', readiness: 69, change: '+5%' },
  { name: 'Energy', readiness: 81, change: '+13%' },
]

const programs = [
  { name: 'AI Readiness Sprint', region: 'National', status: 'Active', completion: '72%', impact: 'High' },
  { name: 'Women in STEM Bridge', region: 'West', status: 'Scaling', completion: '68%', impact: 'High' },
  { name: 'Green Skills Accelerator', region: 'South', status: 'Pilot', completion: '49%', impact: 'Medium' },
  { name: 'Digital Apprenticeship', region: 'North', status: 'Active', completion: '81%', impact: 'High' },
]

const pipeline = [
  { label: 'Ready now', value: 62, color: 'bg-sky-500' },
  { label: 'Upskilling', value: 20, color: 'bg-emerald-500' },
  { label: 'Needs support', value: 18, color: 'bg-slate-300' },
]

const interventions = [
  { name: 'MSME training grants', value: 78, tone: 'bg-sky-500' },
  { name: 'School-to-work links', value: 64, tone: 'bg-emerald-500' },
  { name: 'Regional placement hubs', value: 58, tone: 'bg-cyan-500' },
]

const navItems = [
  'Dashboard',
  'Skill Gap Analysis',
  'Curriculum Alignment',
  'Learner Pathway',
  'Industry Demand',
]

const labourOverview = [
  { label: 'Active workforce', value: '5.8M', delta: '+1.4%', tone: 'emerald' },
  { label: 'Job openings', value: '2.1L', delta: '+9.6%', tone: 'sky' },
  { label: 'Median wage', value: '₹28.4k', delta: '+6.1%', tone: 'teal' },
  { label: 'Skill mismatch', value: '18.3%', delta: '-2.4%', tone: 'amber' },
]

const monthlyTrend = [
  { month: 'Jan', demand: 78, supply: 64 },
  { month: 'Feb', demand: 82, supply: 68 },
  { month: 'Mar', demand: 88, supply: 71 },
  { month: 'Apr', demand: 92, supply: 74 },
  { month: 'May', demand: 96, supply: 77 },
  { month: 'Jun', demand: 102, supply: 81 },
  { month: 'Jul', demand: 108, supply: 86 },
]

const sectorDemand = [
  { name: 'IT & Digital', score: 94, gain: '+18%' },
  { name: 'Manufacturing', score: 82, gain: '+11%' },
  { name: 'Healthcare', score: 79, gain: '+13%' },
  { name: 'Logistics', score: 74, gain: '+9%' },
  { name: 'Renewable Energy', score: 71, gain: '+16%' },
]

const districtData = [
  { district: 'Mumbai', openings: 42, growth: '+13.2%' },
  { district: 'Pune', openings: 34, growth: '+11.8%' },
  { district: 'Nagpur', openings: 22, growth: '+8.4%' },
  { district: 'Nashik', openings: 18, growth: '+7.6%' },
  { district: 'Aurangabad', openings: 16, growth: '+6.9%' },
]

const skillMix = [
  { label: 'AI & Analytics', value: 28 },
  { label: 'Green Jobs', value: 21 },
  { label: 'Industry 4.0', value: 19 },
  { label: 'Healthcare Ops', value: 17 },
  { label: 'Logistics Tech', value: 15 },
]

const skillGapData = [
  { skill: 'AI & Analytics', required: 92, course: 58 },
  { skill: 'Digital Fluency', required: 88, course: 72 },
  { skill: 'Project Management', required: 76, course: 61 },
  { skill: 'Green Energy Systems', required: 81, course: 47 },
  { skill: 'Healthcare Operations', required: 73, course: 55 },
  { skill: 'Logistics Coordination', required: 68, course: 62 },
]

const curriculumCourseData = [
  {
    course: 'Data Analytics',
    modules: [
      { module: 'Database Fundamentals', relevance: 'Medium', recommendation: 'Expand SQL query optimization and real-world database projects.' },
      { module: 'Data Visualization', relevance: 'Low', recommendation: 'Add Power BI dashboard development and stakeholder reporting practices.' },
      { module: 'Statistics for Decision Making', relevance: 'Medium', recommendation: 'Strengthen hypothesis testing and business analytics case studies.' },
      { module: 'Python for Analytics', relevance: 'High', recommendation: 'Extend automation workflows and hands-on ETL exercises.' },
    ],
    skills: [
      { skill: 'Python', industryDemand: 92, courseCoverage: 90, recommendation: 'Maintain current depth while adding automation and data cleaning labs.' },
      { skill: 'SQL', industryDemand: 88, courseCoverage: 40, recommendation: 'Add advanced SQL joins, performance tuning, and real dataset analysis.' },
      { skill: 'Power BI', industryDemand: 76, courseCoverage: 10, recommendation: 'Add Power BI fundamentals, dashboard creation and business reporting to the curriculum.' },
      { skill: 'Data Visualization', industryDemand: 72, courseCoverage: 35, recommendation: 'Introduce executive dashboard storytelling and KPI visual design tasks.' },
      { skill: 'Excel Analytics', industryDemand: 68, courseCoverage: 58, recommendation: 'Embed forecasting and scenario planning projects for decision support.' },
    ],
    trainerRecommendation: 'Upskill trainers in Power BI and SQL applied analytics.',
    assessmentRecommendation: 'Introduce project-based Power BI and SQL assessments with business case evaluation.',
    priorityAction: 'Prioritise dashboarding and SQL capability upgrades before next cohort intake.',
  },
  {
    course: 'Cloud Computing',
    modules: [
      { module: 'Cloud Fundamentals', relevance: 'High', recommendation: 'Reinforce basic architecture patterns and cost optimization case studies.' },
      { module: 'Virtualization', relevance: 'Medium', recommendation: 'Add lab-based deployment exercises using managed services.' },
      { module: 'Container Orchestration', relevance: 'Low', recommendation: 'Increase Kubernetes and service deployment practice.' },
      { module: 'Security in Cloud', relevance: 'High', recommendation: 'Add IAAS and IAM governance scenarios suited to enterprise workloads.' },
    ],
    skills: [
      { skill: 'Cloud Architecture', industryDemand: 90, courseCoverage: 78, recommendation: 'Expand design reviews for multi-tier cloud systems.' },
      { skill: 'AWS/Azure Services', industryDemand: 88, courseCoverage: 62, recommendation: 'Add more service-level deployment and troubleshooting labs.' },
      { skill: 'DevOps Automation', industryDemand: 82, courseCoverage: 44, recommendation: 'Add CI/CD pipelines and infrastructure-as-code assignments.' },
      { skill: 'Cloud Security', industryDemand: 79, courseCoverage: 52, recommendation: 'Introduce identity, compliance and access control scenarios.' },
      { skill: 'Cost Optimization', industryDemand: 74, courseCoverage: 38, recommendation: 'Add budgeting and resource optimization simulation tasks.' },
    ],
    trainerRecommendation: 'Train faculty on industry cloud operations, IAM and deployment practices.',
    assessmentRecommendation: 'Use real-world deployment and cost-optimization case assessments.',
    priorityAction: 'Update infrastructure automation and cloud security modules for industry readiness.',
  },
  {
    course: 'Cybersecurity',
    modules: [
      { module: 'Network Security', relevance: 'High', recommendation: 'Add threat modeling and secure architecture workshops.' },
      { module: 'Ethical Hacking Basics', relevance: 'Medium', recommendation: 'Expand reconnaissance, exploitation and safe practice simulation.' },
      { module: 'Incident Response', relevance: 'Low', recommendation: 'Add forensics, triage and reporting workflow labs.' },
      { module: 'Governance and Risk', relevance: 'High', recommendation: 'Introduce security policy design and risk assessment exercises.' },
    ],
    skills: [
      { skill: 'Threat Analysis', industryDemand: 94, courseCoverage: 80, recommendation: 'Add threat intelligence and attack-path analysis sessions.' },
      { skill: 'Network Defense', industryDemand: 89, courseCoverage: 56, recommendation: 'Expand firewall configuration and IDS/IPS lab work.' },
      { skill: 'Endpoint Security', industryDemand: 84, courseCoverage: 46, recommendation: 'Include endpoint hardening and malware response exercises.' },
      { skill: 'Digital Forensics', industryDemand: 78, courseCoverage: 22, recommendation: 'Add evidence collection and incident investigation case studies.' },
      { skill: 'Risk Compliance', industryDemand: 72, courseCoverage: 60, recommendation: 'Embed compliance frameworks and governance review practice.' },
    ],
    trainerRecommendation: 'Upskill faculty in security monitoring, forensics and incident response workflows.',
    assessmentRecommendation: 'Replace static quizzes with red-team and blue-team scenario-based assessments.',
    priorityAction: 'Strengthen incident response and endpoint security coverage in the course plan.',
  },
  {
    course: 'EV Technician',
    modules: [
      { module: 'EV Fundamentals', relevance: 'High', recommendation: 'Add battery management and charging system diagnostics.' },
      { module: 'Battery Systems', relevance: 'High', recommendation: 'Expand thermal management and safety inspection modules.' },
      { module: 'Motor & Drive Systems', relevance: 'Medium', recommendation: 'Add inverter diagnostics and torque control troubleshooting labs.' },
      { module: 'Charging Infrastructure', relevance: 'Low', recommendation: 'Introduce DC fast charger installation and maintenance workflow.' },
    ],
    skills: [
      { skill: 'EV Safety', industryDemand: 92, courseCoverage: 82, recommendation: 'Maintain safety protocol practice with updated EV fire response modules.' },
      { skill: 'Battery Diagnostics', industryDemand: 88, courseCoverage: 52, recommendation: 'Add battery pack testing, balancing and fault diagnosis labs.' },
      { skill: 'Charging Systems', industryDemand: 81, courseCoverage: 38, recommendation: 'Include charger installation and maintenance troubleshooting exercises.' },
      { skill: 'Power Electronics', industryDemand: 75, courseCoverage: 30, recommendation: 'Add inverter and converter diagnostics relevant to service technicians.' },
      { skill: 'Vehicle Telematics', industryDemand: 70, courseCoverage: 58, recommendation: 'Embed diagnostic scan tools and remote fault analysis training.' },
    ],
    trainerRecommendation: 'Train instructors on battery safety, diagnostics and fast-charging infrastructure.',
    assessmentRecommendation: 'Use workshop-based skill checks for battery, charger and inverter fault diagnosis.',
    priorityAction: 'Prioritise battery diagnostics and fast-charging maintenance in the next curriculum revision.',
  },
]

const roleProfiles = {
  'Data Analyst': {
    required: {
      Python: 80,
      SQL: 80,
      'Power BI': 75,
      Statistics: 70,
      'Data Visualization': 70,
    },
    industryDemand: {
      Python: 92,
      SQL: 88,
      'Power BI': 76,
      Statistics: 70,
      'Data Visualization': 72,
    },
    courseTitle: 'Advanced Data Analytics',
    courseMatch: 87,
    focusSkills: ['SQL', 'Power BI', 'Data Visualization'],
  },
  'Business Analyst': {
    required: {
      Python: 60,
      SQL: 70,
      'Power BI': 60,
      Statistics: 65,
      'Data Visualization': 65,
    },
    industryDemand: {
      Python: 72,
      SQL: 78,
      'Power BI': 70,
      Statistics: 68,
      'Data Visualization': 74,
    },
    courseTitle: 'Business Intelligence Essentials',
    courseMatch: 72,
    focusSkills: ['Power BI', 'SQL', 'Statistics'],
  },
  'BI Analyst': {
    required: {
      Python: 50,
      SQL: 75,
      'Power BI': 85,
      Statistics: 65,
      'Data Visualization': 75,
    },
    industryDemand: {
      Python: 68,
      SQL: 82,
      'Power BI': 90,
      Statistics: 66,
      'Data Visualization': 78,
    },
    courseTitle: 'BI Reporting and Dashboarding',
    courseMatch: 68,
    focusSkills: ['Power BI', 'Data Visualization', 'SQL'],
  },
}

const learnerProfiles = {
  'Data Analytics': {
    learnerName: 'Rahul',
    education: 'B.Tech / Diploma',
    currentSkills: {
      Python: 80,
      SQL: 40,
      'Data Visualization': 55,
      'Power BI': 20,
      Statistics: 65,
    },
  },
  'Cloud Computing': {
    learnerName: 'Rahul',
    education: 'B.Tech / Diploma',
    currentSkills: {
      Python: 68,
      SQL: 42,
      'Cloud Architecture': 48,
      'AWS/Azure Services': 35,
      'DevOps Automation': 30,
    },
  },
  'Cybersecurity': {
    learnerName: 'Rahul',
    education: 'B.Tech / Diploma',
    currentSkills: {
      Python: 62,
      'Network Defense': 48,
      'Threat Analysis': 55,
      'Endpoint Security': 32,
      'Digital Forensics': 28,
    },
  },
  'EV Technician': {
    learnerName: 'Rahul',
    education: 'B.Tech / Diploma',
    currentSkills: {
      'EV Safety': 72,
      'Battery Diagnostics': 45,
      'Charging Systems': 30,
      'Power Electronics': 36,
      'Vehicle Telematics': 52,
    },
  },
}

const districtDemandSignals = {
  Pune: {
    industryBias: 'High demand in analytics and digital operations',
    jobBoost: 4,
  },
  Mumbai: {
    industryBias: 'Strong demand in data-driven business roles',
    jobBoost: 5,
  },
  Nagpur: {
    industryBias: 'Balanced demand across digital and industrial roles',
    jobBoost: 3,
  },
}

const learningPathTemplates = {
  SQL: { label: 'Advanced SQL', priority: 'High', level: 'Intermediate', reason: 'Your SQL proficiency is the most significant blocker to role readiness.' },
  'Power BI': { label: 'Power BI Fundamentals', priority: 'Critical', level: 'Beginner', reason: 'High industry demand and a major current skill gap.' },
  'Data Visualization': { label: 'Data Visualization Studio', priority: 'Medium', level: 'Intermediate', reason: 'Visualization is a required communication skill for analytics roles.' },
  Statistics: { label: 'Applied Statistics', priority: 'Low', level: 'Intermediate', reason: 'Strong foundation already exists; this step strengthens evidence-based reporting.' },
  Python: { label: 'Python for Analytics', priority: 'Ready', level: 'Advanced', reason: 'This is already a strength and supports next-stage analytics work.' },
  'Cloud Architecture': { label: 'Cloud Architecture Lab', priority: 'High', level: 'Intermediate', reason: 'Architecture and deployment readiness are essential for cloud roles.' },
  'AWS/Azure Services': { label: 'Cloud Service Deployment', priority: 'High', level: 'Intermediate', reason: 'Service-level fluency is critical in cloud hiring.' },
  'Threat Analysis': { label: 'Threat Modeling', priority: 'Medium', level: 'Intermediate', reason: 'Threat analysis drives security assessment and detection work.' },
  'Network Defense': { label: 'Network Defense Lab', priority: 'High', level: 'Intermediate', reason: 'This gap directly affects cybersecurity operations readiness.' },
  'Battery Diagnostics': { label: 'Battery Diagnostics Workshop', priority: 'Critical', level: 'Intermediate', reason: 'Critical EV servicing capability with high hiring demand.' },
  'Charging Systems': { label: 'EV Charging Systems', priority: 'High', level: 'Beginner', reason: 'Infrastructure expertise is growing quickly in EV technician hiring.' },
}

function buildLinePath(values, width, height, padding) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1

  return values
    .map((value, index) => {
      const x = padding + (index * (width - padding * 2)) / (values.length - 1)
      const y = height - padding - ((value - min) / range) * (height - padding * 2)
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    })
    .join(' ')
}

function App() {
  const [activeRange, setActiveRange] = useState('YTD')
  const [hoveredSector, setHoveredSector] = useState('IT & Digital')
  const [selectedDistrict, setSelectedDistrict] = useState('Mumbai')
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [selectedCourse, setSelectedCourse] = useState('Data Analytics')
  const [showReport, setShowReport] = useState(false)
  const [selectedInterest, setSelectedInterest] = useState('Data Analytics')
  const [selectedTargetRole, setSelectedTargetRole] = useState('Data Analyst')
  const [selectedLearnerDistrict, setSelectedLearnerDistrict] = useState('Pune')

  const selectedDistrictData = useMemo(
    () => districtData.find((item) => item.district === selectedDistrict) ?? districtData[0],
    [selectedDistrict],
  )

  const selectedCourseData = useMemo(
    () => curriculumCourseData.find((item) => item.course === selectedCourse) ?? curriculumCourseData[0],
    [selectedCourse],
  )

  const learnerProfile = useMemo(
    () => learnerProfiles[selectedInterest] ?? learnerProfiles['Data Analytics'],
    [selectedInterest],
  )

  const currentLearnerSkills = learnerProfile.currentSkills
  const requiredLearnerSkills = roleProfiles[selectedTargetRole]?.required ?? roleProfiles['Data Analyst'].required
  const chosenRoleProfile = roleProfiles[selectedTargetRole] ?? roleProfiles['Data Analyst']

  const learnerSkillRows = useMemo(() => {
    const allSkills = Array.from(new Set([...Object.keys(currentLearnerSkills), ...Object.keys(requiredLearnerSkills)]))
    return allSkills.map((skill) => {
      const currentLevel = currentLearnerSkills[skill] ?? 0
      const requiredLevel = requiredLearnerSkills[skill] ?? 0
      const gap = requiredLevel - currentLevel
      let priority = 'Ready'
      if (gap > 40) priority = 'Critical'
      else if (gap >= 26) priority = 'High'
      else if (gap >= 11) priority = 'Low'

      return {
        skill,
        currentLevel,
        requiredLevel,
        gap,
        priority,
      }
    }).sort((a, b) => b.gap - a.gap)
  }, [currentLearnerSkills, requiredLearnerSkills])

  const jobReadiness = useMemo(() => {
    const readinessScores = learnerSkillRows.map((item) => {
      const normalized = item.requiredLevel === 0 ? 100 : Math.min(100, (item.currentLevel / item.requiredLevel) * 100)
      return normalized
    })

    const avg = readinessScores.reduce((sum, value) => sum + value, 0) / readinessScores.length
    return Math.round(avg)
  }, [learnerSkillRows])

  const biggestSkillGap = learnerSkillRows[0]
  const nextBestSkill = biggestSkillGap ?? { skill: 'Power BI', gap: 55, currentLevel: 20, requiredLevel: 75 }

  const recommendedPathSteps = useMemo(() => {
    const prioritySkills = [...learnerSkillRows].sort((a, b) => b.gap - a.gap).slice(0, 3)
    return [
      {
        step: 'CURRENT',
        title: 'Your Skills',
        detail: Object.entries(currentLearnerSkills).slice(0, 3).map(([skill, value]) => `${skill} ${value}%`).join(' · '),
        priority: 'Current',
        level: 'Current',
      },
      ...prioritySkills.map((item, index) => {
        const template = learningPathTemplates[item.skill] ?? {
          label: item.skill,
          priority: item.priority,
          level: item.gap > 50 ? 'Intermediate' : 'Beginner',
          reason: 'Targeted upskilling to close the largest skill gap in the selected role.',
        }
        return {
          step: `STEP ${index + 1}`,
          title: template.label,
          detail: template.reason,
          priority: template.priority,
          level: template.level,
        }
      }),
      {
        step: 'TARGET',
        title: selectedTargetRole,
        detail: 'Role-ready outcome based on industry demand and current skill alignment.',
        priority: 'Target',
        level: 'Goal',
      },
    ]
  }, [currentLearnerSkills, learnerSkillRows, selectedTargetRole])

  const roleCompatibility = useMemo(() => {
    return Object.entries(roleProfiles).map(([role, profile]) => {
      const commonSkills = Object.keys(profile.required).filter((skill) => currentLearnerSkills[skill] !== undefined)
      const score = commonSkills.length === 0
        ? 0
        : Math.round(
          commonSkills.reduce((sum, skill) => sum + Math.min(currentLearnerSkills[skill] ?? 0, profile.required[skill]), 0)
          / commonSkills.reduce((sum, skill) => sum + profile.required[skill], 0)
          * 100,
        )

      return {
        role,
        match: Math.max(40, Math.min(99, score + (districtDemandSignals[selectedLearnerDistrict]?.jobBoost ?? 0) + (role === selectedTargetRole ? 8 : 0))),
      }
    }).sort((a, b) => b.match - a.match)
  }, [currentLearnerSkills, selectedLearnerDistrict, selectedTargetRole])

  const recommendedCourse = {
    title: chosenRoleProfile.courseTitle,
    match: chosenRoleProfile.courseMatch,
    why: chosenRoleProfile.focusSkills.join(', '),
  }

  const industryDemandSummary = useMemo(
    () => Object.entries(chosenRoleProfile.industryDemand).map(([skill, demand]) => ({ skill, demand })),
    [chosenRoleProfile],
  )

  const overallGap = useMemo(
    () => {
      const totalRequired = skillGapData.reduce((sum, item) => sum + item.required, 0)
      const totalCourse = skillGapData.reduce((sum, item) => sum + item.course, 0)
      return Math.round(((totalRequired - totalCourse) / totalRequired) * 100)
    },
    [],
  )

  const courseAlignmentData = useMemo(() => {
    return selectedCourseData.skills.map((item) => {
      const gap = item.industryDemand - item.courseCoverage
      let status = 'Aligned'
      if (gap >= 60) status = 'Critical'
      else if (gap >= 40) status = 'High Priority'
      else if (gap >= 20) status = 'Needs Improvement'
      return { ...item, gap, status }
    })
  }, [selectedCourseData])

  const courseAlignmentScore = useMemo(() => {
    const averageCoverage = selectedCourseData.skills.reduce((sum, item) => sum + item.courseCoverage, 0) / selectedCourseData.skills.length
    return Math.round(averageCoverage)
  }, [selectedCourseData])

  const criticalSkillGaps = useMemo(
    () => courseAlignmentData.filter((item) => item.gap >= 40).length,
    [courseAlignmentData],
  )

  const modulesRecommendedForUpdate = useMemo(
    () => selectedCourseData.modules.filter((item) => item.relevance === 'Low' || item.relevance === 'Medium').length,
    [selectedCourseData],
  )

  const curriculumStatus = courseAlignmentScore < 60 || criticalSkillGaps >= 2 ? 'Needs Update' : 'On Track'

  const highestPrioritySkill = useMemo(
    () => [...courseAlignmentData].sort((a, b) => b.gap - a.gap)[0],
    [courseAlignmentData],
  )

  const reportDetails = useMemo(() => ({
    course: selectedCourseData.course,
    alignmentScore: courseAlignmentScore,
    criticalSkillGaps,
    recommendedCurriculumUpdates: selectedCourseData.modules
      .filter((module) => module.relevance === 'Low' || module.relevance === 'Medium')
      .map((module) => module.recommendation),
    trainerRequirements: selectedCourseData.trainerRecommendation,
    assessmentImprovements: selectedCourseData.assessmentRecommendation,
    priorityActions: [selectedCourseData.priorityAction, ...courseAlignmentData.filter((item) => item.gap >= 40).slice(0, 2).map((item) => `${item.skill}: ${item.gap}% gap`)],
  }), [courseAlignmentData, courseAlignmentScore, criticalSkillGaps, selectedCourseData])

  const lineChartWidth = 520
  const lineChartHeight = 210
  const linePadding = 22
  const demandPath = buildLinePath(monthlyTrend.map((item) => item.demand), lineChartWidth, lineChartHeight, linePadding)
  const supplyPath = buildLinePath(monthlyTrend.map((item) => item.supply), lineChartWidth, lineChartHeight, linePadding)

  const renderDashboard = (
    <>
      <main className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
        <div className="space-y-6">
          <section className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 via-sky-950 to-sky-900 p-5 text-white shadow-[0_24px_70px_-30px_rgba(14,116,144,0.8)] sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">Maharashtra labour market</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Hiring momentum remains strong across metro and industrial corridors</h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm text-sky-100">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Updated today
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {labourOverview.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-sky-100/80">{item.label}</p>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-white">{item.value}</p>
                    </div>
                    <span className={`rounded-full px-2 py-1 text-xs font-semibold ${item.tone === 'emerald' ? 'bg-emerald-500/20 text-emerald-200' : item.tone === 'sky' ? 'bg-sky-500/20 text-sky-200' : item.tone === 'teal' ? 'bg-teal-500/20 text-teal-200' : 'bg-amber-500/20 text-amber-200'}`}>
                      {item.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Demand vs supply</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Labour market balance</h3>
                </div>
                <div className="flex gap-2 rounded-full bg-slate-100 p-1">
                  {['YTD', 'Q1', 'Q2'].map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setActiveRange(period)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${activeRange === period ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <svg viewBox={`0 0 ${lineChartWidth} ${lineChartHeight}`} className="h-56 w-full">
                  {[0, 25, 50, 75, 100].map((tick) => {
                    const y = lineChartHeight - linePadding - (tick / 100) * (lineChartHeight - linePadding * 2)
                    return (
                      <g key={tick}>
                        <line x1={linePadding} x2={lineChartWidth - linePadding} y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="4 6" />
                        <text x={4} y={y + 4} fontSize="10" fill="#64748b">{tick}</text>
                      </g>
                    )
                  })}

                  <path d={demandPath} fill="none" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
                  <path d={supplyPath} fill="none" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" />

                  {monthlyTrend.map((item, index) => {
                    const x = linePadding + (index * (lineChartWidth - linePadding * 2)) / (monthlyTrend.length - 1)
                    const yDemand = lineChartHeight - linePadding - ((item.demand - 60) / 50) * (lineChartHeight - linePadding * 2)
                    const ySupply = lineChartHeight - linePadding - ((item.supply - 60) / 50) * (lineChartHeight - linePadding * 2)

                    return (
                      <g key={item.month}>
                        <circle cx={x} cy={yDemand} r="4" fill="#0ea5e9" />
                        <circle cx={x} cy={ySupply} r="4" fill="#14b8a6" />
                        <text x={x - 8} y={lineChartHeight - 6} fontSize="10" fill="#64748b">{item.month}</text>
                      </g>
                    )
                  })}
                </svg>
              </div>

              <div className="mt-4 flex items-center gap-5 text-sm">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-sky-500" /> Demand</div>
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Supply</div>
              </div>
            </div>

            <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Sector momentum</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">Contract demand by sector</h3>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {sectorDemand.map((sector) => (
                  <button
                    key={sector.name}
                    type="button"
                    onMouseEnter={() => setHoveredSector(sector.name)}
                    onFocus={() => setHoveredSector(sector.name)}
                    className="block w-full text-left"
                  >
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700">{sector.name}</span>
                      <span className={`font-semibold ${hoveredSector === sector.name ? 'text-slate-900' : 'text-slate-600'}`}>{sector.score}</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${hoveredSector === sector.name ? 'bg-gradient-to-r from-sky-500 to-emerald-500' : 'bg-gradient-to-r from-sky-400 to-cyan-500'}`}
                        style={{ width: `${sector.score}%` }}
                      />
                    </div>
                    <div className="mt-1 text-right text-[11px] font-medium text-emerald-600">{sector.gain}</div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Regional labour signal</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">District openings</h3>
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-3">
                {districtData.map((district) => (
                  <button
                    key={district.district}
                    type="button"
                    onClick={() => setSelectedDistrict(district.district)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-3 text-left transition ${selectedDistrict === district.district ? 'border-sky-200 bg-sky-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`}
                  >
                    <div>
                      <p className="font-medium text-slate-800">{district.district}</p>
                      <p className="text-xs text-slate-500">{district.growth} growth</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-900">{district.openings}k</p>
                      <p className="text-[11px] uppercase tracking-[0.12em] text-slate-500">roles</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Selected district</p>
                <h4 className="mt-2 text-2xl font-bold text-slate-900">{selectedDistrictData.district}</h4>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-sm text-slate-500">Open roles</p>
                    <p className="text-3xl font-bold text-slate-900">{selectedDistrictData.openings}k</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Quarterly growth</p>
                    <p className="text-xl font-semibold text-emerald-600">{selectedDistrictData.growth}</p>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" style={{ width: `${selectedDistrictData.openings * 2}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Talent pipeline</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Workforce readiness</h3>
              </div>
              <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">+12.6%</span>
            </div>

            <div className="mt-6 flex items-center justify-center">
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#0ea5e9_0_62%,#14b8a6_62%_78%,#e2e8f0_78%_100%)] shadow-inner">
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center shadow-lg">
                  <span className="text-3xl font-bold text-slate-900">62%</span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">ready</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {pipeline.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    <span className="font-medium text-slate-700">{item.label}</span>
                  </div>
                  <span className="font-semibold text-slate-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Top skills</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Skill mix</h3>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {skillMix.map((skill, index) => (
                <div key={skill.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{skill.label}</span>
                    <span className="font-semibold text-slate-900">{skill.value}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${index % 2 === 0 ? 'bg-gradient-to-r from-sky-500 to-cyan-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'}`}
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Intervention tracker</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Deployment status</h3>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {interventions.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.name}</span>
                    <span className="font-semibold text-slate-900">{item.value}%</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${item.tone}`} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-sky-50 to-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">AI insight</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Action priority</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Maharashtra’s strongest short-term gap is in AI-enabled operations and green-skilling capacity. Multi-skill bootcamps in Pune and Mumbai could absorb more than 60% of next-quarter demand.
            </p>
            <button className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">View recommendation</button>
          </div>
        </aside>
      </main>
    </>
  )

  const renderSkillGap = (
    <main className="mt-6 space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Skill Gap Analysis</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Industry-required skills vs current curriculum coverage</h2>
          </div>
          <div className="rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">Overall gap: {overallGap}%</div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Avg. required</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{Math.round(skillGapData.reduce((sum, item) => sum + item.required, 0) / skillGapData.length)}%</p>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Avg. current</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{Math.round(skillGapData.reduce((sum, item) => sum + item.course, 0) / skillGapData.length)}%</p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Critical gap</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{Math.max(...skillGapData.map((item) => Math.round(((item.required - item.course) / item.required) * 100)))}%</p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="pb-3 pr-4 font-semibold">Skill</th>
                <th className="pb-3 pr-4 font-semibold">Industry required</th>
                <th className="pb-3 pr-4 font-semibold">Current course</th>
                <th className="pb-3 pr-4 font-semibold">Gap %</th>
                <th className="pb-3 font-semibold">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {skillGapData.map((item) => {
                const gapPercent = Math.round(((item.required - item.course) / item.required) * 100)
                const courseCoverage = item.course
                return (
                  <tr key={item.skill} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 pr-4 font-semibold text-slate-900">{item.skill}</td>
                    <td className="py-4 pr-4">{item.required}%</td>
                    <td className="py-4 pr-4">{item.course}%</td>
                    <td className="py-4 pr-4">
                      <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">{gapPercent}%</span>
                    </td>
                    <td className="py-4 pr-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2.5 w-28 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500"
                            style={{ width: `${courseCoverage}%` }}
                          />
                        </div>
                        <span className="font-medium text-slate-700">{courseCoverage}%</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )

  const renderLearnerPathway = (
    <main className="mt-6 space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Learner Pathway</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Personalized, industry-aligned pathways based on your current skills, interests and market demand.</h2>
          </div>
          <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-700">AI-Powered Career & Skill Intelligence</span>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Learner Profile</h3>
          <div className="mt-5 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <input value={learnerProfile.learnerName} readOnly className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-700" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Education</label>
              <input value={learnerProfile.education} readOnly className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-700" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Interest</label>
              <select value={selectedInterest} onChange={(event) => setSelectedInterest(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-800 outline-none focus:border-sky-400 focus:bg-white">
                {Object.keys(learnerProfiles).map((interest) => (
                  <option key={interest} value={interest}>{interest}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Target Role</label>
              <select value={selectedTargetRole} onChange={(event) => setSelectedTargetRole(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-800 outline-none focus:border-sky-400 focus:bg-white">
                {Object.keys(roleProfiles).map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">District</label>
              <select value={selectedLearnerDistrict} onChange={(event) => setSelectedLearnerDistrict(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-800 outline-none focus:border-sky-400 focus:bg-white">
                {Object.keys(districtDemandSignals).map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Job Readiness</p>
          <div className="mt-5 rounded-[24px] border border-sky-100 bg-sky-50 p-5">
            <p className="text-5xl font-bold tracking-tight text-slate-900">{jobReadiness}%</p>
            <p className="mt-2 text-sm font-medium text-slate-600">Target Role: {selectedTargetRole}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">Your strongest area is {Object.entries(currentLearnerSkills).sort((a, b) => b[1] - a[1])[0][0]}. The largest gaps are {nextBestSkill.skill} and {learnerSkillRows.filter((item) => item.gap > 0).sort((a, b) => b.gap - a.gap)[1]?.skill ?? 'SQL'}.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Current Skill Level</h3>
          <div className="mt-5 space-y-5">
            {Object.entries(currentLearnerSkills).map(([skill, value]) => (
              <div key={skill}>
                <div className="mb-2 flex items-center justify-between text-sm text-slate-700">
                  <span className="font-medium">{skill}</span>
                  <span className="font-semibold text-slate-900">{value}%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Why These Skills?</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Target Role</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{selectedTargetRole}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Industry Demand</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {industryDemandSummary.slice(0, 4).map((item) => (
                  <span key={item.skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{item.skill} — {item.demand}%</span>
                ))}
              </div>
            </div>
            <p className="mt-3 leading-6">
              Mentora prioritizes {nextBestSkill.skill} because it is highly demanded for this role and your current proficiency is low. This pathway combines interest, current skills and industry demand rather than recommending a generic course.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Your Skill Gaps</h3>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="pb-3 pr-4 font-semibold">Skill</th>
                <th className="pb-3 pr-4 font-semibold">Your Level</th>
                <th className="pb-3 pr-4 font-semibold">Required Level</th>
                <th className="pb-3 pr-4 font-semibold">Gap</th>
                <th className="pb-3 font-semibold">Priority</th>
              </tr>
            </thead>
            <tbody>
              {learnerSkillRows.map((item) => (
                <tr key={item.skill} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{item.skill}</td>
                  <td className="py-4 pr-4">{item.currentLevel}%</td>
                  <td className="py-4 pr-4">{item.requiredLevel}%</td>
                  <td className="py-4 pr-4">{item.gap}%</td>
                  <td className="py-4 pr-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${item.priority === 'Ready' ? 'bg-emerald-100 text-emerald-700' : item.priority === 'Low' ? 'bg-amber-100 text-amber-700' : item.priority === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-rose-100 text-rose-700'}`}>
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Recommended Pathway</h3>
          <div className="mt-6 space-y-5">
            {recommendedPathSteps.map((step, index) => (
              <div key={`${step.step}-${step.title}`} className="relative pl-8">
                {index !== recommendedPathSteps.length - 1 && <div className="absolute left-3 top-2 h-[calc(100%+10px)] w-px bg-slate-200" />}
                <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-[10px] font-bold text-sky-700">{step.step === 'CURRENT' ? 'C' : step.step === 'TARGET' ? 'T' : `S${index}`}</div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">{step.step}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{step.title}</p>
                    </div>
                    <span className="rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-700">{step.priority}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{step.detail}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Estimated level: {step.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Recommended Course</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{recommendedCourse.title}</h3>
            <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Match</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{recommendedCourse.match}%</p>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">Why this course?</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Covers {recommendedCourse.why}</li>
              <li>Includes practical analytics projects</li>
              <li>Aligns with the {selectedTargetRole} role requirements</li>
            </ul>
            <button type="button" className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">View Learning Path</button>
          </div>

          <div className="rounded-[28px] border border-amber-100 bg-amber-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Recommended Next Skill</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{nextBestSkill.skill}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">High industry demand + significant learner skill gap.</p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p>Industry Demand: {chosenRoleProfile.industryDemand[nextBestSkill.skill] ?? nextBestSkill.requiredLevel}%</p>
              <p>Current Level: {nextBestSkill.currentLevel}%</p>
              <p>Required Level: {nextBestSkill.requiredLevel}%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Role Compatibility</h3>
          <div className="mt-5 space-y-4">
            {roleCompatibility.map((role) => (
              <div key={role.role} className={`rounded-2xl border p-4 ${role.role === selectedTargetRole ? 'border-sky-200 bg-sky-50' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium text-slate-800">{role.role}</span>
                  <span className="text-lg font-bold text-slate-900">{role.match}%</span>
                </div>
                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" style={{ width: `${role.match}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Your Next Actions</h3>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-6 text-slate-700">
            {[
              `Complete ${recommendedPathSteps[1]?.title || 'Advanced SQL'} module`,
              `Learn ${recommendedPathSteps[2]?.title || 'Power BI'} fundamentals`,
              'Complete an analytics project',
              'Take AI skill assessment',
              'Apply for Data Analyst opportunities',
            ].map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">How Mentora Generated This Pathway</h3>
        <div className="mt-5 flex flex-col gap-3 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
          <span className="rounded-full bg-slate-100 px-3 py-2">Learner Interests</span>
          <span className="text-slate-400">+</span>
          <span className="rounded-full bg-slate-100 px-3 py-2">Current Skills</span>
          <span className="text-slate-400">+</span>
          <span className="rounded-full bg-slate-100 px-3 py-2">Target Role Requirements</span>
          <span className="text-slate-400">+</span>
          <span className="rounded-full bg-slate-100 px-3 py-2">Industry Demand</span>
        </div>
        <div className="mt-5 flex items-center justify-center text-center text-sm font-medium text-slate-600">
          <span className="rounded-full bg-sky-50 px-4 py-2 text-sky-700">Mentora Skill Intelligence Engine</span>
        </div>
        <div className="mt-5 text-center text-sm font-medium text-slate-700">Personalized Pathway</div>
      </section>
    </main>
  )

  const renderCurriculumAlignment = (
    <main className="mt-6 space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Curriculum Alignment</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Compare industry skill demand with existing course coverage and identify curriculum updates.</h2>
          </div>
          <div className="w-full max-w-xs">
            <label className="mb-2 block text-sm font-medium text-slate-700">Select Course</label>
            <select
              value={selectedCourse}
              onChange={(event) => {
                setSelectedCourse(event.target.value)
                setShowReport(false)
              }}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-400 focus:bg-white"
            >
              {curriculumCourseData.map((course) => (
                <option key={course.course} value={course.course}>{course.course}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-full border border-dashed border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
          <span>Prototype dataset — representative industry-demand signals</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[22px] border border-sky-100 bg-sky-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Industry Skill Match</p>
          <p className="mt-3 text-4xl font-bold text-slate-900">{courseAlignmentScore}%</p>
        </div>
        <div className="rounded-[22px] border border-rose-100 bg-rose-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">Critical Skill Gaps</p>
          <p className="mt-3 text-4xl font-bold text-slate-900">{criticalSkillGaps}</p>
        </div>
        <div className="rounded-[22px] border border-amber-100 bg-amber-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Modules Recommended for Update</p>
          <p className="mt-3 text-4xl font-bold text-slate-900">{modulesRecommendedForUpdate}</p>
        </div>
        <div className="rounded-[22px] border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Curriculum Status</p>
          <p className="mt-3 text-xl font-bold text-slate-900">{curriculumStatus}</p>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-900">Industry vs Curriculum Comparison</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="pb-3 pr-4 font-semibold">Skill</th>
                <th className="pb-3 pr-4 font-semibold">Industry Demand</th>
                <th className="pb-3 pr-4 font-semibold">Course Coverage</th>
                <th className="pb-3 pr-4 font-semibold">Gap</th>
                <th className="pb-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {courseAlignmentData.map((item) => (
                <tr key={item.skill} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{item.skill}</td>
                  <td className="py-4 pr-4">{item.industryDemand}%</td>
                  <td className="py-4 pr-4">{item.courseCoverage}%</td>
                  <td className="py-4 pr-4">{item.gap}%</td>
                  <td className="py-4 pr-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        item.status === 'Aligned'
                          ? 'bg-emerald-100 text-emerald-700'
                          : item.status === 'Needs Improvement'
                            ? 'bg-amber-100 text-amber-700'
                            : item.status === 'High Priority'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Curriculum Module Analysis</h3>
          <div className="mt-5 space-y-4">
            {selectedCourseData.modules.map((module) => (
              <div key={module.module} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Current Module</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{module.module}</p>
                  </div>
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">Industry Relevance: {module.relevance}</span>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Recommendation:</span> {module.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Mentora Curriculum Recommendations</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{highestPrioritySkill.skill}</h3>
          <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-700">Critical Gap</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{highestPrioritySkill.skill}</p>
            <p className="mt-2 text-sm text-slate-700">Industry Demand: {highestPrioritySkill.industryDemand}%</p>
            <p className="text-sm text-slate-700">Course Coverage: {highestPrioritySkill.courseCoverage}%</p>
            <p className="text-sm text-slate-700">Gap: {highestPrioritySkill.gap}%</p>
          </div>

          <div className="mt-5 space-y-4 text-sm text-slate-700">
            <div>
              <p className="font-semibold uppercase tracking-[0.14em] text-slate-500">Recommended Action</p>
              <p className="mt-2 leading-6">“{highestPrioritySkill.recommendation}”</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.14em] text-slate-500">Trainer Recommendation</p>
              <p className="mt-2 leading-6">{selectedCourseData.trainerRecommendation}</p>
            </div>
            <div>
              <p className="font-semibold uppercase tracking-[0.14em] text-slate-500">Assessment Recommendation</p>
              <p className="mt-2 leading-6">{selectedCourseData.assessmentRecommendation}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">Curriculum Update Plan</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="pb-3 pr-4 font-semibold">Priority</th>
                <th className="pb-3 pr-4 font-semibold">Skill/Module</th>
                <th className="pb-3 pr-4 font-semibold">Current Status</th>
                <th className="pb-3 font-semibold">Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              {courseAlignmentData.slice(0, 3).map((item, index) => {
                const priority = item.gap >= 60 ? 'Critical' : item.gap >= 40 ? 'High' : 'Medium'
                const currentStatus = item.courseCoverage < 50 ? 'Missing / Basic' : 'Partial'
                const action = item.recommendation || 'Add new applied practice module.'
                return (
                  <tr key={item.skill} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 pr-4 font-semibold text-slate-900">{priority}</td>
                    <td className="py-4 pr-4">{item.skill}</td>
                    <td className="py-4 pr-4">{currentStatus}</td>
                    <td className="py-4 pr-4">{action}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">Alignment Score Visualization</h3>
        <div className="mt-6 space-y-5">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>Industry Requirements</span>
              <span>100%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-500" />
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>Current Curriculum</span>
              <span>{courseAlignmentScore}%</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                style={{ width: `${courseAlignmentScore}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <button
          type="button"
          onClick={() => setShowReport((value) => !value)}
          className="rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:brightness-105"
        >
          Generate Alignment Report
        </button>

        {showReport && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xl font-semibold text-slate-900">Alignment Report</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Selected course</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{reportDetails.course}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Overall alignment score</p>
                <p className="mt-2 text-xl font-bold text-slate-900">{reportDetails.alignmentScore}%</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Critical skill gaps</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {courseAlignmentData.filter((item) => item.gap >= 40).map((item) => (
                    <li key={item.skill}>{item.skill} — {item.gap}% gap</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Recommended curriculum updates</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {reportDetails.recommendedCurriculumUpdates.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Trainer requirements</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{reportDetails.trainerRequirements}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Assessment improvements</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{reportDetails.assessmentImprovements}</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Priority actions</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {reportDetails.priorityActions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 xl:flex-row">
          <aside className="w-full rounded-[28px] border border-slate-200 bg-slate-950 p-4 text-slate-200 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.8)] xl:w-[280px]">
            <div className="flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 text-lg font-bold text-white shadow-lg shadow-sky-900/40">
                M
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">Skill intelligence</p>
                <h1 className="text-xl font-bold text-white">Mentora</h1>
              </div>
            </div>

            <nav className="mt-6 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveNav(item)}
                  className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm font-medium transition ${activeNav === item ? 'bg-gradient-to-r from-sky-600 to-emerald-500 text-white shadow-lg shadow-sky-900/40' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
                >
                  <span>{item}</span>
                  {index === 0 && <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]">Live</span>}
                </button>
              ))}
            </nav>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">Performance</p>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-white">94%</p>
                  <p className="mt-1 text-xs text-slate-300">Policy alignment</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-semibold text-emerald-300">+7.8%</span>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <header className="rounded-[28px] border border-slate-200 bg-white/90 px-4 py-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm sm:px-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 via-cyan-500 to-emerald-500 text-lg font-bold text-white shadow-lg shadow-sky-200">
                    M
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Skill intelligence</p>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">{activeNav}</h2>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <label className="hidden min-w-[210px] items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 md:flex">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="11" cy="11" r="6" />
                      <path d="M16 16L21 21" strokeLinecap="round" />
                    </svg>
                    Search skills
                  </label>
                  <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300">Export</button>
                  <button className="rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 hover:brightness-105">Add program</button>
                </div>
              </div>
            </header>

            {activeNav === 'Skill Gap Analysis'
              ? renderSkillGap
              : activeNav === 'Curriculum Alignment'
                ? renderCurriculumAlignment
                : activeNav === 'Learner Pathway'
                  ? renderLearnerPathway
                  : renderDashboard}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
