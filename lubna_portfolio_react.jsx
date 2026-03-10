export default function LubnaPortfolio() {
  const skills = {
    frontend: ["React.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Vuetify", "JSX"],
    backend: ["Java", "Spring Boot", "REST APIs", "Axios", "SQL", "MySQL", "PostgreSQL"],
    tools: ["Git", "Bitbucket", "GitHub", "Jira", "Wrike", "Figma", "Azure Web Services"],
  };

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Products & Modules", value: "10+" },
    { label: "Companies", value: "4" },
    { label: "Current Focus", value: "Full-Stack Delivery" },
  ];

  const experience = [
    {
      company: "DigiTech RP",
      role: "Software Engineer",
      period: "Apr 2025 – Present",
      points: [
        "Led the Project Management module development team for a portfolio-level platform using Vue.js, Vuetify, Composition API, Vuex, Tailwind CSS, Axios, Java Spring Boot, and SQL.",
        "Built role-based dashboards with advanced filtering and reporting for RFI, Punchlist, Change Orders, Purchase Orders, Master Change Orders, and Submittals.",
        "Developed multi-step approval flows, revision tracking, document attachments, print views, and configurable enterprise workflow interfaces.",
        "Engineered reusable tables, modal forms, configurable inputs, and Admin Console support ticket workflows with API-driven state handling.",
      ],
    },
    {
      company: "Worldish India Pvt Ltd",
      role: "Software Engineer",
      period: "Apr 2024 – Dec 2024",
      points: [
        "Designed backend services for a healthcare application using Java, Spring Boot, and PostgreSQL.",
        "Built responsive React.js interfaces with HTML, Tailwind CSS, and JavaScript integrated with REST APIs.",
        "Implemented Jitsi Meet based audio/video calling and Firebase notifications for real-time communication workflows.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      role: "System Engineer",
      period: "Mar 2022 – Sep 2023",
      points: [
        "Developed React-based UI features and integrated RESTful APIs for an e-commerce project.",
        "Built scalable backend services using Java, Spring Boot, and MySQL with Agile collaboration and code reviews.",
      ],
    },
    {
      company: "Innoovatum.com",
      role: "Frontend Web Developer",
      period: "Jun 2020 – Feb 2022",
      points: [
        "Built responsive and user-friendly interfaces with React.js, HTML5, CSS3, Bootstrap, and JavaScript.",
        "Developed reusable components and worked on real-time client projects with strong UI and wireframe implementation focus.",
      ],
    },
  ];

  const projects = [
    {
      title: "Project Management Platform",
      subtitle: "Enterprise workflow product",
      description:
        "Built large-scale modules for RFI, Punchlist, Change Orders, Purchase Orders, Master Change Orders, and Submittals with dashboards, approvals, revision history, attachments, and reporting.",
      tech: ["Vue.js", "Vuetify", "Vuex", "Tailwind", "Axios", "Java", "Spring Boot", "SQL"],
    },
    {
      title: "Submittal Workflow Module",
      subtitle: "Multi-stage review and approval system",
      description:
        "Developed a complex workflow supporting draft, review, revise, and approval stages with role-based actions, API-driven transitions, comments, attachments, and revision tracking.",
      tech: ["Vue.js", "REST APIs", "Role-based UI", "Workflow Design"],
    },
    {
      title: "Health Application",
      subtitle: "Real-time communication product",
      description:
        "Designed frontend and backend features for a healthcare platform, integrating Jitsi Meet for video/audio calling and Firebase notifications for real-time user updates.",
      tech: ["React.js", "Tailwind", "Java", "Spring Boot", "PostgreSQL", "Jitsi API", "Firebase"],
    },
    {
      title: "E-commerce Application",
      subtitle: "API-integrated commerce experience",
      description:
        "Worked on React-based user interfaces, REST API integrations, and scalable backend services to support smooth user interactions and reliable data flow.",
      tech: ["React.js", "JavaScript", "Material UI", "Java", "Spring Boot", "MySQL"],
    },
  ];

  const achievements = [
    "IEEE conference publication and research contributions in assistive device systems",
    "Led module delivery and cross-functional collaboration in current enterprise project",
    "Built real-world workflow systems used in daily project operations",
    "Strong full-stack delivery mindset with frontend polish and backend coordination",
  ];

  const fadeInUp = "transition-all duration-700 ease-out hover:-translate-y-1";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060816] text-white selection:bg-cyan-300 selection:text-slate-950">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-18px) translateX(8px); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(14px) translateX(-10px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        .float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .float-medium { animation: floatMedium 10s ease-in-out infinite; }
        .pulse-glow { animation: pulseGlow 5s ease-in-out infinite; }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        .shine-wrap { position: relative; overflow: hidden; }
        .shine-wrap::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-120%);
          animation: shimmer 4.8s linear infinite;
        }
      `}</style>

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.16),transparent_25%),linear-gradient(180deg,#060816_0%,#0a1022_45%,#060816_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none fixed -left-10 top-20 -z-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl float-slow" />
      <div className="pointer-events-none fixed right-0 top-40 -z-10 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl float-medium" />
      <div className="pointer-events-none fixed bottom-10 left-1/3 -z-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl pulse-glow" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060816]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-500 font-black text-slate-950 shadow-lg shadow-cyan-500/30 transition-transform duration-300 hover:scale-105">
              LT
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wide">Lubna Tahreem</h1>
              <p className="text-sm text-slate-300">Full-Stack Software Engineer</p>
            </div>
          </div>
          <nav className="hidden gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">About</a>
            <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
            <a href="#experience" className="transition hover:text-cyan-300">Experience</a>
            <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-28 lg:pt-28">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/10 backdrop-blur hover:border-cyan-300/40 transition">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.8)] pulse-glow" />
              Available for full-stack and frontend opportunities
            </div>

            <div className="space-y-6">
              <h2 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                Crafting <span className="gradient-animate bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">beautiful, scalable</span> enterprise products with real-world impact.
              </h2>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Full-stack engineer with 5+ years of experience building project management platforms, healthcare systems, dashboards, API-driven workflows, and reusable frontend architectures using Vue.js, React.js, Java, Spring Boot, and SQL.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="shine-wrap rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 px-7 py-3.5 font-semibold text-slate-950 shadow-2xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/40">
                Explore My Work
              </a>
              <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-0.5">
                Let’s Connect
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className={`rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 backdrop-blur-xl ${fadeInUp} hover:border-cyan-400/30 hover:bg-white/[0.09]`}>
                  <p className="text-2xl font-bold text-cyan-300 transition group-hover:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl float-slow" />
            <div className="absolute -right-4 bottom-10 h-44 w-44 rounded-full bg-fuchsia-500/20 blur-3xl float-medium" />
            <div className={`relative rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${fadeInUp}`}>
              <div className="rounded-[1.8rem] border border-white/10 bg-[#0b1124]/90 p-7">
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-18 w-18 items-center justify-center rounded-[1.4rem] bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-500 text-2xl font-black text-slate-950 shadow-lg shadow-cyan-400/30 transition-transform duration-300 hover:scale-105">
                    LT
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Lubna Tahreem</h3>
                    <p className="text-slate-300">M.Tech (CS) • B.E (CS) • Immediate Joiner</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-7 text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-400/25 hover:bg-white/[0.07]">
                    <p className="font-semibold text-white">Current Role</p>
                    <p>Leading project management feature delivery, dashboards, workflow systems, and Admin Console support tools.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-400/25 hover:bg-white/[0.07]">
                    <p className="font-semibold text-white">What I Build</p>
                    <p>Role-based interfaces, enterprise tables, modal CRUD systems, approval flows, and full-stack web products.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-400/25 hover:bg-white/[0.07]">
                    <p className="font-semibold text-white">Core Edge</p>
                    <p>Frontend polish with backend understanding, product ownership mindset, and strong workflow implementation experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className={`rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl ${fadeInUp}`}>
              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-cyan-300">About Me</p>
              <h3 className="text-3xl font-bold leading-tight">I build products that balance technical depth, usability, and execution speed.</h3>
            </div>
            <div className={`rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-slate-300 leading-8 backdrop-blur-xl ${fadeInUp}`}>
              <p>
                I’m a full-stack software engineer with 5+ years of experience delivering enterprise web applications across construction-tech, healthcare, e-commerce, and business platforms. My expertise spans Vue.js and React frontends, Java Spring Boot APIs, SQL-backed systems, and polished workflow-driven interfaces.
              </p>
              <p className="mt-4">
                From leading Project Management module delivery at DigiTech RP to implementing video-calling experiences in healthcare and API-heavy dashboards in previous roles, I focus on building clean, maintainable, and user-centered products that work at scale.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="mb-8">
            <p className="mb-2 text-sm uppercase tracking-[0.28em] text-cyan-300">Technical Skills</p>
            <h3 className="text-3xl font-bold">Technology stack I use to ship production-ready apps</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(skills).map(([title, items]) => (
              <div key={title} className={`rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 ${fadeInUp}`}>
                <h4 className="mb-5 text-xl font-semibold capitalize text-white">{title}</h4>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-[#0b1124]/80 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/10 transition hover:border-fuchsia-400/25 hover:text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="mb-8">
            <p className="mb-2 text-sm uppercase tracking-[0.28em] text-cyan-300">Experience</p>
            <h3 className="text-3xl font-bold">Career timeline</h3>
          </div>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company} className={`rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl transition duration-300 hover:border-fuchsia-400/25 hover:-translate-y-1 ${fadeInUp}`}>
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="text-2xl font-bold">{job.role}</h4>
                    <p className="text-cyan-300">{job.company}</p>
                  </div>
                  <span className="inline-flex rounded-full border border-white/10 bg-[#0b1124]/70 px-4 py-2 text-sm text-slate-300">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 pulse-glow" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.28em] text-cyan-300">Featured Projects</p>
              <h3 className="text-3xl font-bold">Work that represents my engineering style</h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">A mix of enterprise workflows, dashboards, communication systems, and production-ready business applications.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className={`group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 ${fadeInUp}`}>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-fuchsia-300">{project.subtitle}</p>
                <h4 className="mb-4 text-2xl font-bold">{project.title}</h4>
                <p className="mb-6 leading-8 text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-[#0b1124]/80 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400/25 hover:text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className={`rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl ${fadeInUp}`}>
            <p className="mb-2 text-sm uppercase tracking-[0.28em] text-cyan-300">Achievements</p>
            <h3 className="mb-6 text-3xl font-bold">Milestones and highlights</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {achievements.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[#0b1124]/75 p-5 text-slate-300 transition hover:border-fuchsia-400/25 hover:bg-[#0e1630] hover:-translate-y-0.5">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className={`rounded-[2.25rem] border border-white/10 bg-gradient-to-r from-cyan-400/10 via-white/[0.05] to-fuchsia-500/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:p-10 ${fadeInUp}`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</p>
                <h3 className="text-3xl font-bold">Let’s build meaningful digital products together.</h3>
                <p className="mt-4 max-w-2xl text-slate-300 leading-8">
                  I’m open to frontend and full-stack roles where I can contribute through product thinking, workflow implementation, clean architecture, reusable UI systems, and dependable backend integrations.
                </p>
              </div>
              <div className="space-y-3 rounded-[1.6rem] border border-white/10 bg-[#0b1124]/75 p-6 text-sm text-slate-200 shadow-xl shadow-black/20 transition hover:border-cyan-400/25">
                <p><span className="font-semibold text-white">Email:</span> lubnatahreem789@gmail.com</p>
                <p><span className="font-semibold text-white">Phone:</span> +91 7337796020</p>
                <p><span className="font-semibold text-white">Location:</span> Gulbarga, Karnataka, India</p>
                <p><span className="font-semibold text-white">Education:</span> B.E (CS), M.Tech (CS)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
