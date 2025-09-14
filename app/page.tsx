import { Download, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-green-400 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-white p-3 md:p-4 mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              PRATHAM PATEL
            </h1>
            <p className="text-base md:text-xl text-green-400">
              SOFTWARE ENGINEER / BACKEND SPECIALIST
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-3 md:gap-6">
            <a
              href="#about"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [ABOUT]
            </a>
            <a
              href="#projects"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [PROJECTS]
            </a>
            <a
              href="#resume"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [RESUME]
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [CONTACT]
            </a>
            <Link
              href="/blog"
              className="border-2 border-white px-3 py-2 md:px-4 md:py-2 hover:bg-white hover:text-black transition-none text-center text-sm md:text-base"
            >
              [BLOG]
            </Link>
          </nav>
        </div>
      </header>

      <section className="border-b-4 border-green-400 p-6 hidden">
        <div>
          <div className="w-52 h-52 border object-cover border-solid">
            <Image
              src="/logo.png"
              width={250}
              height={250}
              alt="Pratham Patel"
            />{" "}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="border-b-4 border-green-400 p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            ABOUT_ME.TXT
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                DESCRIPTION:
              </h3>
              <p className="mb-4 leading-relaxed">
                I’m a student who enjoys building clean, functional digital
                tools and interfaces that work well and look good.
              </p>
              <p className="mb-4 leading-relaxed">
                I am a computer science student who enjoys turning caffeine into
                working code. I focus on building clean, functional systems with
                an eye for simplicity and performance. My main interests lie in
                AI, data, and figuring out how things break so I can fix them
                better.
              </p>
              <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">
                PHILOSOPHY:
              </h3>
              <p className="leading-relaxed">
                &quot;The best code is code that does not need to exist. The
                second best is code that&apos;s so simple it obviously has no
                bugs.&quot;
              </p>
            </div>
            <div className="border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                SKILLS.JSON:
              </h3>
              <pre className="text-sm leading-relaxed">
                {`{
  "languages": [
    "Python", "Go", "JavaScript", "SQL"
  ],
  "frameworks": [
    "FastAPI", "Django", "Node.js"
  ],
  "databases": [
    "PostgreSQL", "MongoDB"
  ],
  "infrastructure": [
    "Docker"
  ],
  "tools": [
    "Git", "Linux", "Vim", "tmux"
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-4 border-green-400 p-6 hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            PROJECTS.DIR
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">DISTRIBUTED_CACHE_SYSTEM</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Distributed Cache System Architecture"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  High-performance distributed caching system handling 100K+
                  requests/second. Built for horizontal scaling with consistent
                  hashing.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">Go, Redis, Docker, Kubernetes</code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    DEMO
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">API_GATEWAY_SERVICE</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="API Gateway Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Custom API gateway with rate limiting, authentication, and
                  request routing. Reduced latency by 40% compared to existing
                  solutions.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Python, FastAPI, PostgreSQL, Redis
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    DOCS
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">REAL_TIME_ANALYTICS</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Real-time data processing pipeline for analytics. Processes
                  millions of events per day with sub-second latency.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Rust, Apache Kafka, ClickHouse, Docker
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border-2 border-white">
              <div className="border-b-2 border-white p-4 bg-green-400 text-black">
                <h3 className="text-xl font-bold">CLI_DEPLOYMENT_TOOL</h3>
              </div>
              <div className="p-6">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="CLI Tool Terminal"
                  className="w-full h-48 object-cover border-2 border-white mb-4"
                />
                <p className="mb-4">
                  Command-line deployment tool for containerized applications.
                  Zero-downtime deployments with automatic rollback
                  capabilities.
                </p>
                <div className="mb-4">
                  <span className="text-green-400 font-bold">STACK:</span>
                  <code className="ml-2">
                    Go, Docker, Kubernetes API, Cobra CLI
                  </code>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a
                    href="#"
                    className="border-2 border-white px-3 py-1 hover:bg-white hover:text-black flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    INSTALL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="border-b-4 border-green-400 p-6 hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            RESUME.PDF
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 border-2 border-white p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                EXPERIENCE:
              </h3>

              <div className="mb-6">
                <h4 className="font-bold">SENIOR SOFTWARE ENGINEER</h4>
                <p className="text-green-400">TechCorp Inc. | 2021 - Present</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Built microservices architecture serving 1M+ daily users
                  </li>
                  <li>
                    • Reduced API response time by 60% through optimization
                  </li>
                  <li>
                    • Led team of 4 engineers on critical infrastructure
                    projects
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold">SOFTWARE ENGINEER</h4>
                <p className="text-green-400">StartupXYZ | 2019 - 2021</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Designed and implemented REST APIs for mobile applications
                  </li>
                  <li>
                    • Migrated legacy monolith to containerized microservices
                  </li>
                  <li>
                    • Implemented CI/CD pipeline reducing deployment time by 80%
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold">JUNIOR DEVELOPER</h4>
                <p className="text-green-400">WebDev Solutions | 2018 - 2019</p>
                <ul className="mt-2 space-y-1">
                  <li>
                    • Developed web applications using Python and JavaScript
                  </li>
                  <li>• Maintained and optimized database queries</li>
                  <li>• Collaborated with frontend team on API integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-4 border-green-400 p-6">
        <div className="border-2 border-white p-6">
          <h3 className="text-xl font-bold mb-4 text-green-400">EDUCATION:</h3>
          <div className="mb-4">
            <h4 className="font-bold">B.TECH COMPUTER SCIENCE ENGG.</h4>
            <p className="text-green-400">NIE MYSORE | 2025 - PRESENT</p>
          </div>
          <div className="hidden">
            <h3 className="text-xl font-bold mb-4 text-green-400 mt-6">
              CERTIFICATIONS:
            </h3>
            <ul className="space-y-2">
              <li>• AWS Solutions Architect</li>
              <li>• Kubernetes Administrator</li>
              <li>• Docker Certified Associate</li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <a
            href="#"
            className="border-2 border-green-400 bg-green-400 text-black px-4 py-2 hover:bg-black hover:text-green-400 flex items-center gap-2 justify-center"
          >
            <Download size={16} />
            DOWNLOAD_RESUME.PDF
          </a>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="p-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
            CONTACT.SH
          </h2>
          <div className="border-2 border-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Mail size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2"></h3>
                <a
                  href="mailto:caffeinecompiler@duck.com"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                >
                  EMAIL
                </a>
              </div>

              <div className="text-center">
                <Github size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2"></h3>
                <a
                  href="https://github.com/sadisticbrew"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </div>

              <div className="text-center">
                <Linkedin size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="font-bold mb-2"></h3>
                <a
                  href="https://linkedin.com/in/realpratham"
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-green-400 font-bold">
                $ echo &quot;Let&apos;s build something that works.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-green-400 p-6 text-center">
        <p className="text-green-400">© 2025 PRATHAM </p>
      </footer>
    </div>
  );
}
