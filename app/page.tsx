import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import ProjectCard from "@/components/project-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-background">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-bold text-xl">Portfolio</div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Me
            </Link>
            <Link href="/resume" className="text-sm font-medium hover:text-primary transition-colors">
              Resume
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Showcase Your Computer Science & Management Projects
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A portfolio highlighting my skills, projects, and achievements in computer science and business
              management.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">
                A selection of my best work in computer science and management
              </p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/projects">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-Commerce Analytics Dashboard"
              description="A data visualization tool built with React and D3.js to track sales performance and customer behavior."
              tags={["React", "D3.js", "Data Analysis"]}
              image="/placeholder.svg?height=400&width=600"
              slug="ecommerce-analytics"
            />
            <ProjectCard
              title="Inventory Management System"
              description="A full-stack application to manage inventory, track orders, and generate reports for small businesses."
              tags={["Next.js", "PostgreSQL", "TypeScript"]}
              image="/placeholder.svg?height=400&width=600"
              slug="inventory-system"
            />
            <ProjectCard
              title="Machine Learning for Market Prediction"
              description="Using ML algorithms to predict market trends and optimize business strategies."
              tags={["Python", "TensorFlow", "Data Science"]}
              image="/placeholder.svg?height=400&width=600"
              slug="ml-market-prediction"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Skills & Expertise</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>JavaScript/TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Java</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>C++</span>
                </li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>React & Next.js</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Node.js & Express</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Database Design</span>
                </li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Management Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Project Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Business Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Agile Methodologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Strategic Planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background mt-auto">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-lg mb-4">Portfolio</h3>
              <p className="text-sm text-muted-foreground">
                Showcasing my journey and projects in computer science and management.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-muted-foreground hover:text-foreground transition-colors">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Social</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://github.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://linkedin.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <address className="not-italic text-sm text-muted-foreground">
                <p>email@example.com</p>
                <p className="mt-2">City, Country</p>
              </address>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}

