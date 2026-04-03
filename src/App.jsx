const skills = [
  "Python",
  "Java",
  "JavaScript",
  "HTML5",
  "CSS3",
  "MySQL",
  "C#",
  "Node.js",
  "Express.js",
  "React",
  "TypeScript",
  "Next.js",
  "Figma",
  "Tailwind CSS",
  "Jest",
  "JUnit",
  "Unity",
  "Databricks",
  "Supabase",
  "OpenWeather API",
  "GitLab",
  "Git",
  "Linux VM"
]

const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description:
      "Build responsive web apps with Next.js, React, TypeScript, Node.js, and MySQL/Supabase."
  },
  {
    id: "02",
    title: "AI Feature Integration",
    description:
      "Add AI-powered workflows (chatbots, document parsing, semantic search) using OpenAI and LLM APIs."
  },
  {
    id: "03",
    title: "Backend API Development",
    description:
      "Design and build APIs with Node.js and Express, including authentication, validation, and role-based access."
  },
  {
    id: "04",
    title: "UI Prototyping and Frontend Polish",
    description:
      "Create fast, interactive prototypes and polished interfaces that are accessible, mobile-friendly, and production-ready."
  }
]

const projects = [
  {
    title: "Obserra",
    subtitle: "Audit Management Platform",
    description:
      "AI-powered audit workflow platform with four roles: Coordinator, Contributor, Auditor, and Admin. Coordinators ingest audits, upload audit files, assign controls and tasks, complete tasks when needed, and review contributor work. Contributors complete assigned tasks and improve submissions from feedback. Auditors track completion status and team ownership across audits. Admins manage accounts and approve tags during audit intake.",
    stack:
      "Next.js, TypeScript, Supabase, Tailwind CSS, OpenAI API, Role-Based Access, Workflow UI"
  },
  {
    title: "Buckle Chatbot",
    subtitle: "Conversational Interface",
    description:
      "Built a user-friendly chatbot flow focused on clarity, conversational quality, and practical support interactions.",
    stack: "React, TypeScript, API Integration"
  },
  {
    title: "Ripple Effects",
    subtitle: "Educational Simulation Game",
    description:
      "Designed and implemented simulation mechanics that help users explore scenario-driven learning outcomes.",
    stack: "Unity, C#, Game Design"
  },
  {
    title: "Personal Diary",
    subtitle: "Full-Stack Journaling Application",
    description:
      "Developed a secure journaling platform with full-stack architecture, clean UX, and practical day-to-day usability.",
    stack: "Next.js, Node.js, Database"
  },
  {
    title: "AuditAI",
    subtitle: "AI-Powered Vulnerability Scanner",
    description:
      "Built scanner workflows and reporting features to identify risks and support faster vulnerability review.",
    stack: "Node.js, AI APIs, Security Tooling"
  },
  {
    title: "Zulip Open-Source Contribution",
    subtitle: "Moderation and Engagement Features",
    description:
      "Contributed enhancements to moderation and community engagement tooling in a production open-source platform.",
    stack: "Python, Open Source, Collaboration"
  }
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-paper via-[#dbeee8] to-[#c9e3db] text-ink">
      <header className="relative overflow-hidden border-b border-ink/15 px-6 pb-16 pt-12 sm:px-8">
        <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-clay/25 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-44 w-44 rounded-full bg-pine/25 blur-3xl" />
        <nav className="mx-auto mb-12 flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <p className="text-lg font-black tracking-tight">Katia Henrriquez</p>
          <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <span className="rounded-full bg-wheat px-3 py-1">EN</span>
            <span className="rounded-full border border-ink/25 px-3 py-1">ES</span>
          </div>
        </nav>

        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/70">
            #NiceToMeetYou
          </p>
          <p className="mb-3 inline-block rounded-full bg-wheat px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/80">
            Software engineer
          </p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Hello There! I Am Katia Henrriquez.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink/80 sm:text-lg">
            I&apos;m a curiosity-driven developer who enjoys learning new
            technologies and solving real problems. I like building reliable
            full-stack applications and taking on challenges that help me grow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:henrriquezkatia7@gmail.com"
              className="rounded-full bg-ink px-4 py-2 font-semibold text-paper transition hover:-translate-y-0.5"
            >
              Email me
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/30 px-4 py-2 font-semibold transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:px-8">
        <section id="about">
          <h2 className="text-2xl font-bold sm:text-3xl">About Me</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
            I am an independent software developer. I enjoy collaborating on
            projects that solve real problems and create meaningful experiences.
            My full-stack work includes reliable backend systems and polished,
            user-friendly interfaces. I am always looking for ways to grow and
            learn new technologies.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/80">
            Outside of coding, I enjoy time with family and friends, drawing, and
            learning languages. Spanish is my first language, I learned English at
            13, and I am currently teaching myself Japanese. I also love game
            design because it combines art and software development.
          </p>
        </section>

        <section id="skills">
          <h2 className="text-2xl font-bold sm:text-3xl">My Skill Stack</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-xl border border-ink/10 bg-[#f7fffc]/90 px-4 py-3 text-sm font-medium transition hover:-translate-y-1 hover:border-pine/40"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="services">
          <h2 className="text-2xl font-bold sm:text-3xl">My Services</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-ink/15 bg-[#f7fffc]/90 p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <p className="text-sm font-black text-clay">{service.id}</p>
                <h3 className="mt-1 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Projects I&apos;ve Worked On
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-ink/15 bg-[#f7fffc]/90 p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lift"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm font-semibold text-pine">{project.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-clay">
                  {project.stack}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-2xl bg-gradient-to-br from-pine to-ink px-6 py-8 text-paper"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s Work Together!</h2>
          <p className="mt-3 max-w-2xl text-paper/85">
            Get in touch for full-stack development, AI feature integration, and
            frontend/product collaboration.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href="mailto:henrriquezkatia7@gmail.com"
              className="rounded-full bg-paper px-4 py-2 font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/katia-henrriquez-0783302a9"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/50 px-4 py-2 font-semibold transition hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/K41L3r14"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/50 px-4 py-2 font-semibold transition hover:-translate-y-0.5 hover:bg-paper hover:text-ink"
            >
              GitHub
            </a>
          </div>
          <div className="mt-6 space-y-2 text-sm text-paper/90">
            <p>Email: henrriquezkatia7@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/katia-henrriquez-0783302a9</p>
            <p>GitHub: github.com/K41L3r14</p>
          </div>
        </section>
      </main>
    </div>
  )
}
