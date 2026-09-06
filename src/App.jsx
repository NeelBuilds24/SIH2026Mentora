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

  const selectedDistrictData = useMemo(
    () => districtData.find((item) => item.district === selectedDistrict) ?? districtData[0],
    [selectedDistrict],
  )

  const overallGap = useMemo(
    () => {
      const totalRequired = skillGapData.reduce((sum, item) => sum + item.required, 0)
      const totalCourse = skillGapData.reduce((sum, item) => sum + item.course, 0)
      return Math.round(((totalRequired - totalCourse) / totalRequired) * 100)
    },
    [],
  )

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

            {activeNav === 'Skill Gap Analysis' ? renderSkillGap : renderDashboard}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
